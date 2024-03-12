"use client";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();

  // for opening menu when the hamburger button is clicked
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const [token, setToken] = useState(Cookies.get("token") || "");

  // This is for opening the menu when the hamburger button is clicked ( when screen is smaller than sm )
  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <nav
        className="bg-white fixed w-screen opacity-100"
        id="navbar__custom"
        style={{ zIndex: 6 }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <Link
              href="/"
              className="text-xl text-black font-bold font__poppins"
            >
              MV App and Web Dev
            </Link>
          </div>
          <button
            onClick={handleMenuClick}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  text-gray-400 focus:ring-gray-600 bg-black"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Mobile menu, show/hide based on menu state.  */}
          <div
            className={
              !isMenuOpen
                ? "fixed top-0 left-0 text-xl w-[80%] h-screen border-r-2 border-gray-100 duration-300 bg-white"
                : "fixed top-0 left-[-80%] duration-300"
            }
          >
            <div className="flex-row font-semibold">
              <div className="w-[50%] hover:bg-gray-100 p-5 cursor-pointer rounded-xl m-2 duration-200 hover:font-bold font-normal border-2 border-gray-50 shadow-sm shadow-black">
                <h1>Home</h1>
              </div>
              <div className="w-[50%] hover:bg-gray-100 p-5 cursor-pointer rounded-xl m-2 duration-200 hover:font-bold font-normal">
                <h1>About Us</h1>
              </div>
              <div className="w-[50%] hover:bg-gray-100 p-5 cursor-pointer rounded-xl m-2 duration-200 hover:font-bold font-normal">
                <h1>Team</h1>
              </div>
              <div className="w-[50%] hover:bg-gray-100 p-5 cursor-pointer rounded-xl m-2 duration-200 hover:font-bold font-normal">
                <h1>Contact</h1>
              </div>
            </div>
          </div>

          <div
            className="w-full md:block md:w-auto items-center hidden"
            id="navbar-default"
          >
            <ul className="font-light flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white justify-center">
              <li>
                <Link
                  href="#Home"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:p-0 md:hover:text-black md:hover:bg-transparent navbar__elements"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#About_Us"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:p-0 md:hover:text-black md:hover:bg-transparent navbar__elements"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#Team"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:p-0 md:hover:text-black md:hover:bg-transparent navbar__elements"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#Contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:p-0 md:hover:text-black  md:hover:bg-transparent navbar__elements"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:block md:w-auto items-center hidden">
            <ul className="font-light flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-sm bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white justify-center pr-9 pl-9">
              <li>
                <button
                  className="block py-3 px-12 text-white md:border-0 md:hover:text-white-700 md:p-0 md:hover:text-white-500 bg-green-500 rounded-full"
                  id="navbar__contact"
                >
                  Join Us!
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
