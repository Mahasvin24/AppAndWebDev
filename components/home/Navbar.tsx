"use client";

/**
 * Navbar
 */

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { use } from "react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();

  // for opening menu when the hamburger button is clicked
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const [token, setToken] = useState(Cookies.get("token") || "");

  // useEffect(() => {
  //   setToken(Cookies.get("token"));
  // }, [token]);

  function handleLogout() {
    Cookies.remove("token");
    Cookies.remove("data");
    sessionStorage.clear();
    setToken("");
    // router.refresh();
  }
  if (token === null) {
    return null;
  }

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
              Petbound
            </Link>
          </div>
          <button
            onClick={handleMenuClick}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  text-gray-400 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
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
              <div className="text-3xl text-center my-10 cursor-default">
                <span className="hover:text-green-500 duration-200">W</span>
                <span className="hover:text-green-500 duration-200">e</span>
                <span className="hover:text-green-500 duration-200">l</span>
                <span className="hover:text-green-500 duration-200">c</span>
                <span className="hover:text-green-500 duration-200">o</span>
                <span className="hover:text-green-500 duration-200">m</span>
                <span className="hover:text-green-500 duration-200">e</span>
                <span> </span>
                <span className="hover:text-green-500 duration-200">t</span>
                <span className="hover:text-green-500 duration-200">o</span>
                <span> </span>
                <span className="hover:text-green-500 duration-200">P</span>
                <span className="hover:text-green-500 duration-200">e</span>
                <span className="hover:text-green-500 duration-200">t</span>
                <span className="hover:text-green-500 duration-200">B</span>
                <span className="hover:text-green-500 duration-200">o</span>
                <span className="hover:text-green-500 duration-200">u</span>
                <span className="hover:text-green-500 duration-200">n</span>
                <span className="hover:text-green-500 duration-200">d</span>
              </div>
              <div className="w-[50%] hover:bg-gray-100 p-5 cursor-pointer rounded-xl m-2 duration-200 hover:font-bold font-normal border-2 border-gray-50 shadow-sm shadow-black">
                <h1>Home</h1>
              </div>
              <div className="w-[50%] hover:bg-gray-100 p-5 cursor-pointer rounded-xl m-2 duration-200 hover:font-bold font-normal">
                <h1>About Us</h1>
              </div>
              <div className="w-[50%] hover:bg-gray-100 p-5 cursor-pointer rounded-xl m-2 duration-200 hover:font-bold font-normal">
                <h1>Search</h1>
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
                  href="#Search"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:p-0 md:hover:text-black md:hover:bg-transparent navbar__elements"
                >
                  Search
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
                {/* {token ? (
                  <button
                    className="block py-2 pl-3 pr-4 text-white hover:bg-gray-100 md:border-0 md:hover:text-white-700 md:p-0 md:hover:text-white-500 md:hover:bg-green-400 bg-green-500 rounded-full"
                    id="navbar__contact"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="block py-2 pl-3 pr-4 text-white hover:bg-gray-100 md:border-0 md:hover:text-white-700 md:p-0 md:hover:text-white-500 md:hover:bg-green-400 bg-green-500 rounded-full" 
                    id="navbar__contact"
                  >
                    Login
                  </Link>
                )} */}
                {/* <button className="block py-2 pl-3 pr-4 text-white hover:bg-gray-100 md:border-0 md:hover:text-white-700 md:p-0 md:hover:text-white-500 md:hover:bg-green-400 bg-green-500 rounded-full" id="navbar__contact" onClick={token? handleLogout : () => router.push("/login")}>
                  {token ? "Logout" : "Login"} 
                </button> */}
                <button
                  className="block py-2 pl-3 pr-4 text-white hover:bg-gray-100 md:border-0 md:hover:text-white-700 md:p-0 md:hover:text-white-500 md:hover:bg-green-400 bg-green-500 rounded-full"
                  id="navbar__contact"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
