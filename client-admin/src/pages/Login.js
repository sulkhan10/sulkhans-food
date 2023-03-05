import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import logo from "../logo2.png";
import { login } from "../store/actions/usersActionCreator.js";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
export default function Login() {
  let [loginForm, setLoginForm] = useState({});
  console.log(loginForm);
  let navigate = useNavigate();
  let dispatch = useDispatch();
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

  let postLogin = async () => {
    try {
      let data = await dispatch(login(loginForm));
      console.log("aaa");
      console.log(data);
      if (data.access_token) {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);
        localStorage.setItem("userId", data.userId);
        setLoginForm({
          email: "",
          password: "",
        });
        Toast.fire({
          icon: "success",
          title: `Welcome ${data.username} , You Signed in successfully`,
        });
        navigate("/");
      } else {
        Swal.fire("Error Register New Admin", data.message, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <main className=" pt-6 h-screen bg-green-600 overflow-auto">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center px-6 my-12">
            <h3 className="text-4xl font-bold text-white text-center mb-1">
              Login Admin Panel
            </h3>
            <img
              src={logo}
              style={{ height: "100px", width: "600px" }}
              className="mb-8"
            />
            <div className="w-full xl:w-2/4 lg:w-11/12 flex justify-center">
              <div className="w-full lg:w-7/12 bg-yellow-400 p-5 rounded-2xl ">
                <h3 className="pt-4 text-2xl font-bold  text-center mb-6">
                  Login Admin Panel
                </h3>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    postLogin();
                  }}
                  className="px-8 pt-6 pb-8 mb-4 bg-yellow-500 rounded-xl"
                >
                  <div className="mb-4">
                    <label className="block mb-2 text-lg font-bold ">
                      Email
                    </label>
                    <input
                      onChange={(event) => {
                        setLoginForm({
                          ...loginForm,
                          email: event.target.value,
                        });
                      }}
                      value={loginForm.email}
                      className="w-full px-3 py-2 mb-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4 ">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block mb-2 text-lg font-bold ">
                        Password
                      </label>
                      <input
                        onChange={(event) => {
                          setLoginForm({
                            ...loginForm,
                            password: event.target.value,
                          });
                        }}
                        value={loginForm.password}
                        className="w-full px-3 py-2 mb-3 text-lg leading-tight  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-xl text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
