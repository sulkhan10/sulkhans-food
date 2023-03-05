import { useState } from "react";
import "../index.css";
import { useDispatch } from "react-redux";
import { createUser } from "../store/actions/usersActionCreator.js";
import Swal from "sweetalert2";
export default function Register() {
  let [formRegister, setFormRegister] = useState({});
  let dispatch = useDispatch();
  console.log(formRegister);
  let createUserHandler = async () => {
    try {
      let data = await dispatch(createUser(formRegister));
      console.log(data);
      if (data.role) {
        console.log(data);
        setFormRegister({
          username: "",
          email: "",
          password: "",
          address: "",
          phoneNumber: "",
        });
        Swal.fire(
          "Success Register New Admin",
          "New Data Admin Has Been Registered",
          "success"
        );
      } else {
        Swal.fire("Error Register New Admin", data.message, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <header className="fixed right-0 top-0 left-60 bg-yellow-200 py-3 px-4 h-16">
        <div className="max-w-4xl mx-auto flex text-4xl  font-bold items-center justify-center">
          <h1>Register New Admin</h1>
        </div>
      </header>
      <main className="ml-60 pt-16 h-screen bg-green-700 overflow-auto">
        <div className=" bg-green-700">
          <div className="container mx-auto">
            <div className="flex justify-center px-6 my-10">
              <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center">
                <div className="w-full lg:w-6/12 bg-yellow-400 p-5 rounded-2xl ">
                  <h3 className="pt-4 text-3xl font-bold text-center mb-6">
                    Create an Admin Account
                  </h3>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      createUserHandler();
                    }}
                    className="px-8 pt-6 pb-8 mb-4 bg-yellow-500 rounded-xl"
                  >
                    <div className="mb-4 ">
                      <label className="block mb-2 text-md font-bold ">
                        Userame
                      </label>
                      <input
                        onChange={(event) => {
                          setFormRegister({
                            ...formRegister,
                            username: event.target.value,
                          });
                        }}
                        value={formRegister.username}
                        className="w-full px-3 py-2 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="Name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-md font-bold ">
                        Email
                      </label>
                      <input
                        onChange={(event) => {
                          setFormRegister({
                            ...formRegister,
                            email: event.target.value,
                          });
                        }}
                        value={formRegister.email}
                        className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-4 ">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label className="block mb-2 text-md font-bold ">
                          Password
                        </label>
                        <input
                          onChange={(event) => {
                            setFormRegister({
                              ...formRegister,
                              password: event.target.value,
                            });
                          }}
                          value={formRegister.password}
                          className="w-full px-3 py-2 mb-3 text-md leading-tight  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          placeholder="******************"
                        />
                      </div>
                    </div>
                    <div className="mb-4 ">
                      <label className="block mb-2 text-md font-bold ">
                        Phone Nmber
                      </label>
                      <input
                        onChange={(event) => {
                          setFormRegister({
                            ...formRegister,
                            phoneNumber: event.target.value,
                          });
                        }}
                        value={formRegister.phoneNumber}
                        className="w-full px-3 py-2 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="mb-4 ">
                      <label className="block mb-2 text-md font-bold ">
                        Address
                      </label>
                      <input
                        onChange={(event) => {
                          setFormRegister({
                            ...formRegister,
                            address: event.target.value,
                          });
                        }}
                        value={formRegister.address}
                        className="w-full px-3 py-1 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Address"
                      />
                    </div>
                    <div className=" text-center">
                      <button
                        className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Register Account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
