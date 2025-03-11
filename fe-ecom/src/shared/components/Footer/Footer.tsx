import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF]">
      <div className="mx-auto w-full max-w-screen-xl p-6 py-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 me-3"
                alt="E-com Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                E-com
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-8 text-sm font-semibold text-gray-500 uppercase ">
                Links
              </h2>
              <ul className=" text-gray-900 font-medium">
                <li className="mb-6">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className="hover:underline">
                    Shop
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-8 text-sm font-semibold text-gray-500 uppercase ">
                Help
              </h2>
              <ul className="text-gray-900 font-medium">
                <li className="mb-6">
                  <a href="#" className="hover:underline ">
                    Payment Options
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className="hover:underline ">
                    Returns
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className="hover:underline ">
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase ">
                Newsletter
              </h2>
              <ul className="text-gray-900 font-medium">
                <form className="max-w-md mx-auto">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-amber-300 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="text-gray-900 bg-[#FBEBB5] hover:bg-[#FBEBB5]-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                  >
                    Submit
                  </button>
                </form>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
      <div className="flex items-center justify-center py-5">
        <span className="text-xl text-gray-900 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="hover:underline">
            E-com
          </a>
          . Code By CodeWithSon.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
