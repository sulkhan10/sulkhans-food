import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "../index.css";
import { createItem } from "../store/actions/itemsActionCreator";
import { fetchCategories } from "../store/actions/categoriesActionCreator";
import { fetchItems } from "../store/actions/itemsActionCreator";

export default function FormMenu() {
  let [formMenu, setFormMenu] = useState({});
  const [showModal, setShowModal] = useState(false);
  let [formIngredient, setFormIngredient] = useState([]);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  let { categories } = useSelector((state) => state.categories);
  let createItemHandler = async () => {
    try {
      let data = await dispatch(createItem(formMenu));
      console.log(data);
      if (!data.data) {
        await Swal.fire("Add Item Failed!", data.message, "error");
      } else {
        await Swal.fire(
          "Add Item Success!",
          data.name + "has been succesfully added to list",
          "success"
        );
        dispatch(fetchItems());
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let ingredient = "";
  let insertIngredient = (event) => {
    event.preventDefault();
    let dataIngredient = formIngredient;
    dataIngredient.push({ name: ingredient });
    setFormIngredient(dataIngredient);
    event.target.reset();
    navigate("/newmenu");
  };
  return (
    <div>
      <header className="fixed right-0 top-0 left-60 bg-yellow-200 py-3 px-4 h-16">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-4xl mx-auto flex text-4xl  font-bold items-center justify-center">
            <h1>Add Menu</h1>
          </div>
        </div>
      </header>
      <main className="ml-60 pt-16 h-screen bg-green-700 overflow-auto">
        <div className=" bg-green-700">
          <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">
              <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center">
                <div className="w-full lg:w-7/12 bg-yellow-400 p-5 rounded-2xl ">
                  <h3 className="pt-4 text-2xl text-center mb-6">
                    Create New Menu
                  </h3>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      createItemHandler();
                    }}
                    className="px-8 pt-6 pb-8 mb-4 bg-yellow-500 rounded-xl"
                  >
                    <div className="mb-4 ">
                      <label className="block mb-2 text-md font-bold ">
                        Name
                      </label>
                      <input
                        onChange={(event) => {
                          setFormMenu({
                            ...formMenu,
                            name: event.target.value,
                          });
                        }}
                        value={formMenu.name}
                        className="w-full px-3 py-2 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-md font-bold ">
                        Description
                      </label>
                      <input
                        onChange={(event) => {
                          setFormMenu({
                            ...formMenu,
                            description: event.target.value,
                          });
                        }}
                        value={formMenu.description}
                        className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Description"
                      />
                    </div>
                    <div className="mb-4 ">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label className="block mb-2 text-md font-bold ">
                          Price
                        </label>
                        <input
                          onChange={(event) => {
                            setFormMenu({
                              ...formMenu,
                              price: event.target.value,
                            });
                          }}
                          value={formMenu.price}
                          className="w-full px-3 py-2 mb-3 text-md leading-tight  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          type="number"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div className="mb-4 ">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label className="block mb-2 text-md font-bold ">
                          Image URL
                        </label>
                        <input
                          onChange={(event) => {
                            setFormMenu({
                              ...formMenu,
                              imgUrl: event.target.value,
                            });
                          }}
                          value={formMenu.imgUrl}
                          className="w-full px-3 py-2 mb-3 text-md leading-tight  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="Menu Image URL"
                        />
                      </div>
                    </div>
                    <div className="mb-4 ">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label className="block mb-2 text-md font-bold ">
                          Category
                        </label>
                        <select
                          onChange={(event) => {
                            setFormMenu({
                              ...formMenu,
                              categoryId: Number(event.target.value),
                            });
                          }}
                          value={formMenu.categoryId}
                          className="w-full px-3 py-2 mb-3 text-md leading-tight  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          placeholder="Menu Image URL"
                          defaultValue={0}
                        >
                          <option value={0} disabled>
                            --Select Category--
                          </option>
                          {categories.map((data) => {
                            return (
                              <option key={data.id} value={data.id}>
                                {" "}
                                {data.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="mb-4 ">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label className="block mb-2 text-md font-bold ">
                          Ingredients
                        </label>
                        <div className="flex gap-1 flex-col">
                          {formIngredient.map((el) => (
                            <span
                              key={Math.random()}
                              className="bg-green-400 text-sm py-1 font-bold text-center rounded-md px-1"
                            >
                              {el.name}{" "}
                            </span>
                          ))}
                        </div>
                        <button
                          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(true)}
                        >
                          Add Ingredient
                        </button>
                      </div>
                    </div>
                    <div className="mb-6 text-center">
                      <button
                        className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Save Menu
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Add Ingredient</h3>
                    <button
                      className="p-1 ml-auto  border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      x
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="flex gap-1 flex-col">
                      {formIngredient.map((el) => (
                        <span
                          key={Math.random()}
                          className="bg-green-400 text-sm py-1 font-bold text-center rounded-md px-1"
                        >
                          {el.name}{" "}
                        </span>
                      ))}
                    </div>
                    <form
                      onSubmit={insertIngredient}
                      className="px-8 pt-6 pb-8 mb-4 bg-yellow-500 rounded-xl"
                    >
                      <div className="mb-4 ">
                        <label className="block mb-2 text-md font-bold ">
                          Name
                        </label>
                        <input
                          onChange={(event) => {
                            ingredient = event.target.value;
                          }}
                          // value={ingredient}
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
                          Save Menu
                        </button>
                      </div>
                    </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        setFormMenu({
                          ...formMenu,
                          ingredient: formIngredient,
                        });
                      }}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div>
  );
}
