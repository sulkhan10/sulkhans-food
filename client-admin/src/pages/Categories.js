import TableCategories from "../components/TableCategories.js";
import { useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/categoriesActionCreator.js";
export default function Categories() {
  let categories = useSelector((state) => state.categories.categories);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div>
      <header className="fixed right-0 top-0 left-60 bg-yellow-200 py-3 px-4 h-16">
        <div className="max-w-4xl mx-auto flex text-4xl  font-bold items-center justify-center">
          <h1>Categories</h1>
        </div>
      </header>
      <main className="pl-60 pt-16 min-h-screen bg-green-700 ">
        <div className="max-w-4xl mt-10 mx-auto">
          <Link to="/newcategory">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-yellow-400 font-medium text-lg leading-tight uppercase rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
            >
              Create New Category
            </button>
          </Link>
          <TableCategories
            categories={categories}
            fetchCategories={fetchCategories}
          />
        </div>
      </main>
    </div>
  );
}
