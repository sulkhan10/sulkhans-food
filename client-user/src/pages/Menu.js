import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/actions/itemsActionCreator";
import "../index.css";
import logo from "../logo.png";
import PaginationMenu from "../components/PaginationMenu";
import BannerMenu from "../components/BannerMenu";

import MoonLoader from "react-spinners/MoonLoader";

let Menu = () => {
  let [loading, setLoading] = useState(true);
  let [currentPage, setCurrentPage] = useState(1);
  let [dataMenusPerPage] = useState(6);
  let [searchName, setSearchName] = useState("");

  let menu = useSelector((state) => state.items.items);

  let indexOfLastMenu = currentPage * dataMenusPerPage;
  let indexOfFirstMenu = indexOfLastMenu - dataMenusPerPage;
  let currentDataMenus = menu.slice(indexOfFirstMenu, indexOfLastMenu);
  let paginate = (pageNumber) => setCurrentPage(pageNumber);

  let dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(fetchItems());
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen bg-yellow-100 flex justify-center items-center">
          <MoonLoader color="green" size={150} data-testid="loader" />
        </div>
      ) : (
        <div>
          <div className="pt-28 bg-yellow-50 z-30">
            <BannerMenu />
            <div class=" bg-green-700 flex w-full">
              <div class=" px-4 pt-10 pb-14 mx-auto  bg-green-700 w-full md:px-24 text-white font-bold text-center">
                <form>
                  <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto mb-5">
                    Best Menu, Best Experience
                  </h2>
                  <p className=" md:text-lg mb-4">
                    Affordable yet delicious, enjoy every moments
                  </p>
                  <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                    <input
                      onChange={(event) => {
                        setSearchName(event.target.value);
                      }}
                      value={searchName == undefined ? "" : searchName}
                      class="text-base text-xl text-yellow-900 flex-grow outline-none px-2 "
                      type="text"
                      placeholder="Search Your Menu Today"
                    />
                    <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(e);
                          dispatch(fetchItems(searchName));
                          setCurrentPage(1);
                        }}
                        class="bg-yellow-400 text-green-900 font-bold rounded-lg px-4 py-2 "
                      >
                        Search
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(e);
                          setSearchName();
                          dispatch(fetchItems());
                          setCurrentPage(1);
                        }}
                        className="bg-red-200 px-6 text-green-900 text-lg font-semibold py-1 rounded-md"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex">
              <aside class=" inset-y-0 left-0 ml-10  w-96">
                <div class="flex flex-col justify-between h-full">
                  <div class="flex-grow">
                    <div class="px-4 py-6 mt-8  text-center border-b">
                      <h1 class="text-xl font-bold leading-none mb-2">
                        <span class="text-yellow-700">Menu</span> and Sides
                      </h1>
                      <img src={logo} />
                    </div>
                    <div class="py-4">
                      <ul class="">
                        <li>
                          <img src="https://media.tenor.com/C68zEUMEBMgAAAAC/burger-king-royal-crispy-chicken.gif" />
                        </li>
                        <li>
                          <img src="https://t4.ftcdn.net/jpg/05/51/26/11/360_F_551261143_Zff0DkF6mhJElT8raGjOvd6Rp8LcbD1n.jpg" />
                        </li>
                        {currentDataMenus.length > 2 && (
                          <li>
                            <img
                              src="https://img.buzzfeed.com/buzzfeed-static/static/2018-06/19/16/asset/buzzfeed-prod-web-01/anigif_sub-buzz-27290-1529440813-1.gif"
                              style={{ height: "200px" }}
                            />
                          </li>
                        )}
                        {currentDataMenus.length > 4 && (
                          <li>
                            <img src="https://png.pngtree.com/png-clipart/20210912/original/pngtree-burger-promotion-flyer-promotional-vertical-template-png-image_6771610.jpg" />
                          </li>
                        )}
                        {currentDataMenus.length > 4 && (
                          <li>
                            <img src="https://media.tenor.com/C68zEUMEBMgAAAAC/burger-king-royal-crispy-chicken.gif" />
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
              <div className="grid w-full grid-cols-2 px-24 pt-10  gap-4">
                {currentDataMenus.map((data) => {
                  return (
                    <Link
                      to={`/detailmenu/${data.id}`}
                      key={data.id}
                      className="block  zoom duration-200"
                    >
                      <img
                        alt="food picture"
                        src={data.imgUrl}
                        className="h-96 w-full object-cover"
                      />
                      <div className="flex flex-col justify-center items-center">
                        <h3 className="mt-4 text-2xl uppercase font-bold text-gray-900">
                          {data.name}
                        </h3>

                        <p className="mt-2 max-w-sm text-gray-700">
                          {data.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <PaginationMenu
              dataMenusPerPage={dataMenusPerPage}
              totalDataMenus={menu.length}
              paginate={paginate}
              currentPage={currentPage}
            />{" "}
          </div>{" "}
        </div>
      )}
    </div>
  );
};
export default Menu;
