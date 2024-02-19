import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";

const Navbar = () => {
  return (
    <nav className="px-4 bg-white dark:bg-[#111b2b] border-b border-gray-200 dark:border-gray-800 md:pb-6 lg:pb-8">
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 lg:gap-52 mx-auto p-6 md:p-0">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex justify-center items-center">
            <span className=" text-xl md:text-2xl font-bold whitespace-nowrap text-gray-900 dark:text-white">
              Quantum
            </span>
          </Link>
          <div className="">
            <button className="">
              <ThemeToggle />
            </button>
          </div>
        </div>

        <div className="flex md:flex-1 flex-wrap items-center justify-center md:justify-end md:w-auto w-full">
          <ul className="flex flex-wrap justify-center items-center space-x-4 md:space-x-5 p-3 sm:text-lg font-semibold">
            <li>
              <Link
                href="/"
                className="text-sm md:text-base text-gray-900 dark:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm md:text-base text-gray-900 dark:text-white"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm md:text-base text-gray-900 dark:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <AuthLinks />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
