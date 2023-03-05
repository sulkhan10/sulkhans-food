const { Item, User, Category } = require("../models");
const { Sequelize } = require("sequelize");
const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    try {
      let { username, email, password, phoneNumber, address } = req.body;
      console.log(req.body);
      if (!email || !password) {
        throw { name: "EmailOrPasswordRequired" };
      }
      let role = "admin";
      let user = await User.create({
        username,
        email,
        password,
        role,
        phoneNumber,
        address,
      });
      res
        .status(201)
        .json({ username: user.username, email: user.email, role: user.role });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      let user = await User.findOne({ where: { email } });

      if (!email || !password) {
        throw { name: "EmailOrPasswordRequired" };
      }

      if (!user) {
        throw { name: "InvalidCredentials" };
      }

      let isValid = await comparePassword(password, user.password);
      if (!isValid) {
        throw { name: "InvalidCredentials" };
      }
      let payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      };
      let token = generateToken(payload);
      res.status(200).json({
        access_token: token,
        username: user.username,
        role: user.role,
        userId: user.id,
      });
    } catch (error) {
      next(error);
    }
  }

  static async allUsers(req, res, next) {
    try {
      let users = await User.findAll({
        order: [["id", "ASC"]],
        attributes: {
          exclude: ["password"],
        },
        include: Item,
      });
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
