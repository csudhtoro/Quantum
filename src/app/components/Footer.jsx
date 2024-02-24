import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow p-4 mt-28 dark:bg-[#101a2b]">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-900 dark:text-white sm:text-center">
          © 2024-2025{" "}
          <a href="/" className="hover:underline">
            Quantum™
          </a>
          . All Rights Reserved.
          <p className="text-[0.65rem] text-gray-600">
            Icons by{" "}
            <Link href="https://www.freepik.com" target="_blank">
              <span className="text-blue-900 font-bold">Freepik</span>{" "}
            </Link>
          </p>
          <p className="text-[0.65rem] text-gray-600">
            Image provided by{" "}
            <Link href="https://www.unsplash.com" target="_blank">
              <span className="text-blue-900 font-bold">Unsplash</span>{" "}
            </Link>
          </p>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-900 dark:text-white sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
