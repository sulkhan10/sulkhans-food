import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "../index.css";
import { editItem, fetchItemById } from "../store/actions/itemsActionCreator";
import { fetchCategories } from "../store/actions/categoriesActionCreator";

export default function EditMenu() {
  const [showModal, setShowModal] = useState(false);
  let [formEditMenu, setEditFormMenu] = useState({});
  let [formEditIngredient, setFormEditIngredient] = useState([]);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { menuId } = useParams();
  let { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    dispatch(fetchItemById(menuId)).then((data) => {
      setEditFormMenu({ ...data, ingredient: data.Ingredients });
      setFormEditIngredient(data.Ingredients);
    });
  }, [dispatch]);
  let editItemHandler = async () => {
    dispatch(editItem(formEditMenu, menuId)).then(navigate("/"));
  };
  let ingredient = "";
  let insertIngredient = (event) => {
    event.preventDefault();
    let dataIngredient = formEditIngredient;
    dataIngredient.push({ name: ingredient });
    setFormEditIngredient(dataIngredient);
    event.target.reset();
    setEditFormMenu({
      ...formEditMenu,
      ingredient: formEditIngredient,
    });
    navigate(window.location.pathname);
  };
  let deleteIngredient = (event, index) => {
    event.preventDefault();
    let afterDeleteIngredient = formEditIngredient;
    afterDeleteIngredient.splice(index, 1);
    console.log(index);
    setFormEditIngredient(afterDeleteIngredient);
    setEditFormMenu({
      ...formEditMenu,
      ingredient: formEditIngredient,
    });
    navigate(window.location.pathname);
  };
  return (
    <div>
      <header className="fixed right-0 top-0 left-60 bg-yellow-200 py-3 px-4 h-16">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-4xl mx-auto flex text-4xl  font-bold items-center justify-center">
            <h1>Edit Menu</h1>
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
                    Edit Menu
                  </h3>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      editItemHandler();
                    }}
                    className="px-8 pt-6 pb-8 mb-4 bg-yellow-500 rounded-xl"
                  >
                    <div className="mb-4 ">
                      <label className="block mb-2 text-md font-bold ">
                        Name
                      </label>
                      <input
                        onChange={(event) => {
                          setEditFormMenu({
                            ...formEditMenu,
                            name: event.target.value,
                          });
                        }}
                        value={formEditMenu.name}
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
                          setEditFormMenu({
                            ...formEditMenu,
                            description: event.target.value,
                          });
                        }}
                        value={formEditMenu.description}
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
                            setEditFormMenu({
                              ...formEditMenu,
                              price: event.target.value,
                            });
                          }}
                          value={formEditMenu.price}
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
                            setEditFormMenu({
                              ...formEditMenu,
                              imgUrl: event.target.value,
                            });
                          }}
                          value={formEditMenu.imgUrl}
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
                            setEditFormMenu({
                              ...formEditMenu,
                              categoryId: event.target.value,
                            });
                          }}
                          value={formEditMenu.categoryId}
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
                          {formEditMenu.name}'s Ingredients
                        </label>
                        <div className="flex gap-1 flex-col">
                          {formEditIngredient.map((el, index) => (
                            <div className="mx-2 flex">
                              <h2
                                key={index}
                                className="bg-green-500 text-sm py-1 px-4 font-bold text-center rounded-md w-full px-1"
                              >
                                {el.name}{" "}
                              </h2>
                              <button
                                className="bg-red-400 text-sm py-1 px-2 font-bold text-center rounded-md px-1"
                                onClick={(event, index) =>
                                  deleteIngredient(event, index)
                                }
                              >
                                x
                              </button>
                            </div>
                          ))}
                        </div>
                        <button
                          className="bg-pink-500 mt-4 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(true)}
                        >
                          Add Ingredients
                        </button>
                      </div>
                    </div>
                    <div className="mb-6 text-center">
                      <button
                        className="w-full px-4 text-xl py-2 font-bold text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
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
                <div className="border-0 bg-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex  items-start justify-between p-5  border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Add Ingredient</h3>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form
                      onSubmit={insertIngredient}
                      className="px-8 py-2 bg-yellow-400 rounded-xl"
                    >
                      <div className="mb-4 ">
                        <label className="block mb-2 text-md font-bold ">
                          Ingredient Name
                        </label>
                        <input
                          onChange={(event) => {
                            ingredient = event.target.value;
                          }}
                          className="w-full px-3 py-2 text-md font-bold leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="Name"
                        />
                      </div>

                      <div className="mb-2 text-center">
                        <button
                          className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Insert Ingredient
                        </button>
                      </div>
                    </form>
                    <div className="flex gap-1 flex-col">
                      <h2 className="text-md my-2 font-bold">
                        {formEditMenu.name}'s ingredients
                      </h2>
                      {formEditMenu.Ingredients.map((el, index) => (
                        <div className="mx-2 flex">
                          <h2
                            key={index}
                            className="bg-green-500 text-sm py-1 px-4 font-bold text-center rounded-md w-full px-1"
                          >
                            {el.name}{" "}
                          </h2>
                          <button
                            className="bg-red-400 text-sm py-1 px-2 font-bold text-center rounded-md px-1"
                            onClick={(event) => deleteIngredient(event, index)}
                          >
                            x
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        setEditFormMenu({
                          ...formEditMenu,
                          ingredient: formEditIngredient,
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
