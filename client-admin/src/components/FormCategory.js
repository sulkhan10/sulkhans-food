import { useState, useEffect } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCategory } from "../store/actions/categoriesActionCreator.js";
export default function FormCategory() {
  let [name, setName] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let createCategoryHandler = () => {
    dispatch(createCategory(name));
    navigate("/categories");
  };
  return (
    <div>
      <header className="fixed right-0 top-0 left-60 bg-yellow-200 py-3 px-4 h-16">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-4xl mx-auto flex text-4xl  font-bold items-center justify-center">
            <h1>Add New Category</h1>
          </div>
        </div>
      </header>
      <main className="ml-60 pt-16 h-screen bg-green-700 overflow-auto">
        <div className=" bg-green-700">
          <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">
              <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center">
                <div className="w-full lg:w-7/12 bg-yellow-400 p-5 rounded-2xl ">
                  <h3 className="pt-4 text-3xl font-bold text-center mb-6">
                    Create Category
                  </h3>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      createCategoryHandler();
                    }}
                    className="px-8 pt-6 pb-8 mb-4 bg-yellow-500 rounded-xl"
                  >
                    <div className="mb-4 ">
                      <label className="block mb-2 text-md font-bold ">
                        Name
                      </label>
                      <input
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                        value={name}
                        className="w-full px-3 py-2 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-6 text-center">
                      <button
                        className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Save Category
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
