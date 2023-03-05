import logo from "../logo2.png";
import { Link } from "react-router-dom";
import "../index.css";

let Footer = () => {
  return (
    <div className="px-40 pt-16 w-full bg-green-600 ">
      <div className="grid gap-10 row-gap-6 mb-8 grid-cols-2 ">
        <div className="space-y-2 text-sm">
          <img src={logo} />
          <div className="flex justify-between">
            <div>
              <div className="flex gap-3 items-center">
                <svg
                  className="h-3"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                </svg>
                <Link
                  to="/about"
                  className="transition-colors duration-300 text-white hover:text-yellow-400"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  className="h-3"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                </svg>
                <Link
                  to="/about"
                  className="transition-colors duration-300 text-white hover:text-yellow-400"
                >
                  About Sulkhans
                </Link>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  className="h-3"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                </svg>
                <Link
                  to="/order"
                  className="transition-colors duration-300 text-white hover:text-yellow-400"
                >
                  FAQ
                </Link>
              </div>
            </div>
            <div>
              <div className="flex gap-3 items-center">
                <svg
                  className="h-3"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                </svg>
                <Link
                  to="/about"
                  className="transition-colors duration-300 text-white hover:text-yellow-400"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  className="h-3"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                </svg>
                <Link
                  to="/about"
                  className="transition-colors duration-300 text-white hover:text-yellow-400"
                >
                  Terms of Use{" "}
                </Link>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  className="h-3"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                </svg>
                <Link
                  to="/order"
                  className="transition-colors duration-300 text-white hover:text-yellow-400"
                >
                  Delivery{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:max-w-md lg:col-span-2">
            <span className="text-base font-medium tracking-wide text-white">
              Sign Up to Newsletter
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-yellow border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-yellow-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button className="text-gray-700 font-bold text-gray-600 bg-yellow-400 rounded-md px-4">
                <Link to="/about">Subscribe</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t-4 border-white lg:flex-row">
        <p className="text-sm text-white">
          © Copyright 2023 Sulkhans Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
