import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { deleteItem } from "../store/actions/itemsActionCreator.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/actions/itemsActionCreator";
import PaginationMenu from "../components/PaginationMenu";
import Swal from "sweetalert2";
let TableMenu = (props) => {
  let [currentPage, setCurrentPage] = useState(1);
  let [dataMenusPerPage, setDataMenusPerPage] = useState(5);
  let [searchName, setSearchName] = useState("");
  let menu = useSelector((state) => state.items.items);
  let indexOfLastMenu = currentPage * dataMenusPerPage;
  let indexOfFirstMenu = indexOfLastMenu - dataMenusPerPage;
  let currentDataMenus = menu.slice(indexOfFirstMenu, indexOfLastMenu);
  let paginate = (pageNumber) => setCurrentPage(pageNumber);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  let deleteItemHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteItem(id)).then(navigate("/"));
      }
    });
  };
  return (
    <div>
      <div className="flex justify-between">
        <Link to="/newmenu">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-yellow-400 font-medium text-lg leading-tight uppercase rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Create New Item
          </button>
        </Link>
        <div className="bg-green-700 h-full">
          <form>
            <div className="max-w-xl ">
              <div className="flex space-x-4">
                <div className="flex font-bold rounded-md border overflow-hidden w-full">
                  <input
                    onChange={(event) => {
                      setSearchName(event.target.value);
                    }}
                    value={searchName == undefined ? "" : searchName}
                    type="text"
                    className="w-full px-6 rounded-md rounded-r-none"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(e);
                      dispatch(fetchItems(searchName));
                      setCurrentPage(1);
                    }}
                    className="bg-blue-600 text-white px-6 text-lg font-semibold  rounded-r-md"
                  >
                    Search
                  </button>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(e);
                    setSearchName();
                    dispatch(fetchItems());
                    setCurrentPage(1);
                  }}
                  className="bg-white px-6 text-lg font-semibold py-1 rounded-md"
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-4xl h-full  bg-green-700">
        <div className=" w-full">
          <table className="table w-full border-separate space-y-6 text-lg">
            <thead className="bg-yellow-500 ">
              <tr className="">
                <th className="p-3">Menu</th>
                <th className="p-3">Category</th>
                <th className="p-3 ">Price</th>
                <th className="p-3 ">{`Ingredient(s)`}</th>
                <th className="p-3 rounded-r-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentDataMenus.map((data) => {
                return (
                  <tr key={data.id} className="bg-yellow-500 ">
                    <td className="p-3">
                      <div className="flex items-center">
                        <img
                          className="rounded-full h-24 w-24  object-cover"
                          src={data.imgUrl}
                        />
                        <div className="ml-3">
                          <div className="text-xl font-bold">{data.name}</div>
                          <div className="text-md">{data.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">{data.Category.name}</td>
                    <td className="p-3 font-bold">Rp. {data.price}</td>
                    <td className="p-3">
                      <div className="flex gap-1 flex-col">
                        {data.Ingredients.map((el) => (
                          <span
                            key={el.id}
                            className="bg-green-500 text-sm py-1 font-bold text-center rounded-md"
                          >
                            {el.name}{" "}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-3 rounded-r-xl">
                      <div className="flex items-center">
                        <Link to={`/editmenu/${data.id}`}>
                          <button
                            type="button"
                            className="mx-2 flex justify-center items-center gap-2 px-3 inline-block px-1 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Edit
                            <svg
                              className="h-6"
                              fill="white"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"></path>
                              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"></path>
                            </svg>
                          </button>
                        </Link>
                        <a
                          onClick={(event) => {
                            deleteItemHandler(data.id);
                          }}
                          href="#"
                          className=" hover:text-orange mx-2"
                        >
                          <svg
                            className="h-6"
                            fill="crimson"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <PaginationMenu
            dataMenusPerPage={dataMenusPerPage}
            totalDataMenus={menu.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default TableMenu;
