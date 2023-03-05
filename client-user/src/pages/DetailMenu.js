import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import { useDispatch } from "react-redux";
import { fetchItemById } from "../store/actions/itemsActionCreator";

import bannerDetail from "../banner-detail-menu.png";
let DetailMenu = () => {
  let [detailMenuById, setDetailMenuById] = useState({});
  let [dataIngredients, setDataIngredients] = useState([]);
  let [dataCategory, setDataCategory] = useState("");
  let [loading, setLoading] = useState(true);

  let dispatch = useDispatch();
  let { menuId } = useParams();
  console.log(detailMenuById);
  console.log(dataIngredients);
  useEffect(() => {
    setLoading(true);

    dispatch(fetchItemById(menuId)).then((data) => {
      setDetailMenuById(data);
      setDataIngredients(data.Ingredients);
      setDataCategory(data.Category.name);
      setTimeout(() => setLoading(false), 2000);
    });
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen bg-yellow-100 flex justify-center items-center">
          <MoonLoader color="green" size={150} data-testid="loader" />
        </div>
      ) : (
        <div>
          <div className=" flex bg-yellow-50 justify-center  pt-16 w-full bg-green-600 ">
            <img src={bannerDetail} className="w-full" />{" "}
          </div>
          <div className="bg-yellow-50">
            <section>
              <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
                <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                    <img
                      alt="Les Paul"
                      src={detailMenuById.imgUrl}
                      className="object-cover w-full aspect-square rounded-xl"
                    />
                  </div>

                  <div className="sticky top-0">
                    <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-md font-medium tracking-wide text-blue-600">
                      Best Seller
                    </strong>

                    <div className="flex items-center justify-between mt-8">
                      <div className="max-w-[35ch]">
                        <h1 className="text-5xl font-bold">
                          {detailMenuById.name}
                        </h1>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p className="mt-0.5 text-md mt-1">
                          Highest Rated Product
                        </p>

                        <div className="mt-2 -ml-0.5 flex">
                          <svg
                            className="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pl-2 text-xl">
                      <p>{detailMenuById.description}</p>
                    </div>

                    <div className="mt-8 ">
                      <div className="flex gap-8 justify-start">
                        <fieldset>
                          <legend className="mb-1 pl-2 text-xl font-medium">
                            Ingredients
                          </legend>

                          {dataIngredients.map((data) => {
                            return (
                              <span className="inline-block px-3 pl-2 py-1 text-md font-medium bg-green-300 border rounded-full">
                                {data.name}
                              </span>
                            );
                          })}
                        </fieldset>

                        <fieldset className="">
                          <legend className="mb-1 pl-2 text-xl font-medium">
                            Category
                          </legend>

                          <span className="inline-block px-3 py-1 text-md font-medium bg-green-400 border rounded-full">
                            {dataCategory}
                          </span>
                        </fieldset>
                      </div>
                      <p className="text-3xl pl-2 mt-16 font-bold">
                        Rp. {detailMenuById.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
export default DetailMenu;
