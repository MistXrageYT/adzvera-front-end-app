import Link from "next/link";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="sticky top-0 bg-my-color z-50">
      <nav className="w-full shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2xl text-black font-bold cursor-pointer flex items-center justify-center">
                  <img src="/logo.png" alt="logo" className="w-[30px]" />
                  AdzVera
                </h2>
              </Link>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div>
                <ul className="items-center justify-around space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-gray-500 hover:text-gray-900 cursor-pointer">
                    <Link href="/">
                      <p>Home</p>
                    </Link>
                  </li>
                  <li className="text-gray-500 hover:text-gray-900 cursor-pointer">
                    <Link href="service">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li className="text-gray-500 hover:text-gray-900 cursor-pointer">
                    <Link href="about">
                      <p>About Us</p>
                    </Link>
                  </li>
                  <li className="text-gray-500 hover:text-gray-900 cursor-pointer">
                    <Link href="contact">
                      <p>Contact Us</p>
                    </Link>
                  </li>

                  <Link href="soon">
                    <span className="inline-flex justify-center items-center hover:text-gray-800 text-gray-500 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded cursor-pointer">
                      Panel
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
