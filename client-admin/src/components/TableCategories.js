import "../index.css";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../store/actions/categoriesActionCreator";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
let TableCategories = (props) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let deleteCategoryHandler = (id) => {
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
        dispatch(deleteCategory(id)).then(navigate("/categories"));
      }
    });
  };
  return (
    <div>
      <div className="flex items-center bg-green-700">
        <div className="w-full">
          <table className="table w-full border-separate space-y-6 uppercase text-md">
            <thead className="bg-yellow-500 ">
              <tr className=""></tr>
            </thead>
            <tbody>
              {props.categories.map((data) => {
                return (
                  <tr
                    key={data.id}
                    className="bg-yellow-500 rounded-lg text-center"
                  >
                    <td className="p-3 font-bold">{data.name}</td>
                    <td className="p-3 rounded-r-lg ">
                      <div className="flex items-center justify-end mr-6">
                        <Link to={`/editcategory/${data.id}`}>
                          <button
                            type="button"
                            className="mx-2 flex justify-center items-center gap-2 px-3 inline-block px-1 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Edit
                            <svg
                              className="h-5"
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
                            deleteCategoryHandler(data.id);
                          }}
                          href="#"
                          className=" "
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
        </div>
      </div>
    </div>
  );
};

export default TableCategories;
