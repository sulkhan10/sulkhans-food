const { Item, User, Category, Ingredient } = require("../models");
const { sequelize } = require("../models/");
const { Op } = require("sequelize");

class ItemController {
  static async allItems(req, res, next) {
    let { search } = req.query;
    console.log(req.query);
    let keyword = "%" + search + "%";
    try {
      let option = {
        order: [["id", "ASC"]],
        include: [
          {
            model: User,
            attributes: {
              exclude: ["password"],
            },
          },
          {
            model: Category,
          },
          {
            model: Ingredient,
          },
        ],
      };
      if (search !== "undefined") {
        option.where = {
          name: {
            [Op.iLike]: keyword,
          },
        };
      }
      let items = await Item.findAll(option);
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }

  static async deleteItem(req, res, next) {
    try {
      let { itemId } = req.params;
      let item = await Item.findByPk(itemId);
      if (!item) {
        throw { name: "NotFound" };
      }
      item.destroy();
      res.status(200).json({
        message: `Item ${item.name} (id ${item.id}) is successfully deleted`,
      });
    } catch (error) {
      next(error);
    }
  }
  static async createItem(req, res, next) {
    const t = await sequelize.transaction();
    try {
      console.log(req.body);
      console.log(req.user);

      let { categoryId, imgUrl, price, description, name, ingredient } =
        req.body;
      let data = await Item.create(
        { categoryId, imgUrl, price, description, name, authorId: req.user.id },
        { transaction: t }
      );
      ingredient.map((x) => {
        x.itemId = data.id;
        return x;
      });
      console.log(ingredient);
      await Ingredient.bulkCreate([...ingredient], { transaction: t });

      res.status(201).json({
        message: `Item ${data.name} (id ${data.id}) is successfully created`,
        data,
      });

      await t.commit();
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
  static async getItemById(req, res, next) {
    try {
      let { itemId } = req.params;
      let item = await Item.findByPk(itemId, {
        include: [
          {
            model: Category,
          },
          {
            model: Ingredient,
          },
        ],
      });
      if (!item) {
        throw { name: "NotFound" };
      }
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }

  static async editItem(req, res, next) {
    const t = await sequelize.transaction();
    try {
      let { itemId } = req.params;
      let { categoryId, imgUrl, price, description, name, ingredient } =
        req.body;
      let item = await Item.findByPk(itemId);
      if (!item) {
        throw { name: "NotFound" };
      }
      await item.update(
        { categoryId, imgUrl, price, description, name },
        { transaction: t }
      );
      ingredient.map((x) => {
        x.itemId = item.id;
        return x;
      });
      await Ingredient.destroy({
        where: {
          itemId: item.id,
        },
      });
      await Ingredient.bulkCreate(
        [...ingredient],
        {
          updateOnDuplicate: ["name"],
        },
        { transaction: t }
      );

      res
        .status(200)
        .json(`Item ${item.name} (id ${item.id}) is successfully updated`);
      await t.commit();
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
}

module.exports = ItemController;
