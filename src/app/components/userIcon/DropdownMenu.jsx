import React from "react";
import { signOut } from "next-auth/react";
import { CgLogOut } from "react-icons/cg";

const DropdownMenu = () => {
  return (
    <div className="bg-white flex flex-col absolute top-[1rem] right-[-0.7rem] md:w-[120px] p-4 rounded-md border border-gray-900 before:absolute before:top-[-0.7rem] before:right-[1rem] before:w-[20px] before:h-[20px] before:rotate-45 before:bg-white before:border before:border-l-gray-900 before:border-t-gray-900 before:border-r-0 before:border-b-0">
      <ul className="flex flex-col gap-2  items-center">
        <li
          className="w-16 sm:w-18 md:w-20 text-[0.7rem] md:text-sm text-gray-900 cursor-pointer hover:scale-105 flex justify-between items-center "
          onClick={signOut}
        >
          <CgLogOut size={20} />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
