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
                className="me-3 h-8"
                alt="E-com Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                E-com
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-8 text-sm font-semibold text-gray-500 uppercase">
                Links
              </h2>
              <ul className="font-medium text-gray-900">
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
              <h2 className="mb-8 text-sm font-semibold text-gray-500 uppercase">
                Help
              </h2>
              <ul className="font-medium text-gray-900">
                <li className="mb-6">
                  <a href="#" className="hover:underline">
                    Payment Options
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className="hover:underline">
                    Returns
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className="hover:underline">
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase">
                Newsletter
              </h2>
              <ul className="font-medium text-gray-900">
                <form className="mx-auto max-w-md">
                  <div className="group relative z-0 mb-5 w-full">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-amber-300 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                    >
                      Email address
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="hover:bg-[#FBEBB5]-800 w-full rounded-lg bg-[#FBEBB5] px-5 py-2.5 text-center text-sm font-medium text-gray-900 focus:ring-4 focus:ring-amber-300 focus:outline-none sm:w-auto"
                  >
                    Submit
                  </button>
                </form>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2 border-gray-200 sm:mx-auto lg:my-4 dark:border-gray-700" />
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
