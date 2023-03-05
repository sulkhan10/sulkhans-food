import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/actions/itemsActionCreator";
import "../index.css";
import logo from "../logo.png";
import PaginationMenu from "../components/PaginationMenu";
import BannerMenu from "../components/BannerMenu";

import MoonLoader from "react-spinners/MoonLoader";

let HowToOrder = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
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
          <div className="min-h-screen p-10 pt-24 bg-yellow-100">
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
              <img
                alt="Sulkhans how to order"
                src="https://img.restaurantguru.com/rd1e-Subway-menu-2021-09-221.jpg"
                className="  h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default HowToOrder;
