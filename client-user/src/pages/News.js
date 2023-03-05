import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MoonLoader from "react-spinners/MoonLoader";

let News = () => {
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
            <section>
              <div class="max-w-screen-xl px-4 pt-8 pb-4 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header>
                  <h2 class="text-3xl font-bold text-yellow-900 sm:text-3xl">
                    PROMO , PROMO, PROMO !!! PROMO ALERT !!!
                  </h2>

                  <p class=" text-xl font-medium mt-4 text-yellow-900">
                    Every day there are bunch of promos that are ready to be
                    grabbe, go fast cause our promos will last shortly because
                    of our beloved costumer are extremely enjoy it
                  </p>
                  <p class=" text-xl font-medium  mt-4 text-yellow-900">
                    So many promos are ready to be grabbed, espesialize for
                    bundling couple and for family, we accept all payment method
                    like e-money, credit card, e-wallet and cash See You At Our
                    Nearest Otlet !!!
                  </p>
                </header>

                <div class=" lg:grid lg:grid-cols-3 lg:items-start lg:gap-8">
                  <div class="hidden space-y-4 lg:block"></div>

                  <div class="lg:col-span-3">
                    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <li>
                        <Link
                          to="/"
                          class="mt-8 inline-block rounded rounded-lg  bg-green-500  text-lg font-bold text-yellow-300 hover:text-yellow-900 hover:bg-green-400  focus:outline-none focus:ring block overflow-hidden group"
                        >
                          <img
                            src="https://pbs.twimg.com/media/EtD53pzUwAAOHY_?format=jpg&name=large"
                            alt=""
                            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                          />

                          <div class="relative p-3 bg-yellow-200 hover:bg-yellow-400">
                            <h3 class="text-md text-green-900 ">
                              See Our Menus
                            </h3>

                            <p class="mt-2">
                              <span class="sr-only"> Limited </span>

                              <span class="tracking-wider text-lg text-green-900">
                                {" "}
                                Bundling Couple{" "}
                              </span>
                            </p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          class="mt-8 inline-block rounded rounded-lg  bg-green-500  text-lg font-bold text-yellow-300 hover:text-yellow-900 hover:bg-green-400  focus:outline-none focus:ring block overflow-hidden group"
                        >
                          <img
                            src="https://pbs.twimg.com/media/EtD53p2VcAE3Qmc?format=jpg&name=large"
                            alt=""
                            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                          />

                          <div class="relative p-3 bg-yellow-200 hover:bg-yellow-400">
                            <h3 class="text-md text-green-900 ">
                              See Our Menus
                            </h3>

                            <p class="mt-2">
                              <span class="sr-only"> Limited </span>

                              <span class="tracking-wider text-lg text-green-900">
                                {" "}
                                Bundling Couple{" "}
                              </span>
                            </p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          class="mt-8 inline-block rounded rounded-lg  bg-green-500  text-lg font-bold text-yellow-300 hover:text-yellow-900 hover:bg-green-400  focus:outline-none focus:ring block overflow-hidden group"
                        >
                          <img
                            src="https://www.subway.co.id/wp-content/uploads/2022/10/Website-Promo-Banner-1.jpg"
                            alt=""
                            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                          />

                          <div class="relative p-3 bg-yellow-200 hover:bg-yellow-400">
                            <h3 class="text-md text-green-900 ">
                              See Our Menus
                            </h3>

                            <p class="mt-2">
                              <span class="sr-only"> Limited </span>

                              <span class="tracking-wider text-lg text-green-900">
                                {" "}
                                Bundling Couple{" "}
                              </span>
                            </p>
                          </div>
                        </Link>
                      </li>
                    </ul>
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
export default News;
