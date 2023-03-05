import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import MoonLoader from "react-spinners/MoonLoader";

let About = () => {
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
          <div className="min-h-screen bg-yellow-50">
            <section>
              <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                  <div class="relative z-10 lg:py-16">
                    <div class="relative h-64 sm:h-80 lg:h-full">
                      <img
                        alt="Sulkhans Staff"
                        src="https://www.mashed.com/img/gallery/weird-rules-subway-employees-have-to-follow/l-intro-1637246145.jpg"
                        class="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div class="relative flex items-center bg-yellow-50">
                    <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-yellow-50"></span>

                    <div class="p-8 sm:p-16 lg:p-24">
                      <h2 class="text-4xl font-bold text-yellow-900 sm:text-3xl">
                        We Are More Than Close, We Are You
                      </h2>

                      <p class="mt-4 text-xl  font-medium text-yellow-900">
                        We Commit to Give Best Service To You Cause You Are
                        Special Sulkhan's provides best sandwhiches in the
                        world, no worries, no waitlist, enjoy meal as if today
                        is the best day in your life !!
                      </p>

                      <Link
                        to="/"
                        class="mt-8 inline-block rounded rounded-lg  bg-green-500 px-12 py-3 text-lg font-bold text-yellow-300 hover:text-yellow-900 hover:bg-green-400  focus:outline-none focus:ring "
                      >
                        See Our Menu
                      </Link>
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
export default About;
