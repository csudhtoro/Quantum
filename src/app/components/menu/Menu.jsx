import React from "react";
import MenuItem from "./menuItem";
import data from "@/app/shared/data";
import Tags from "../tag/Tags";

const getData = async () => {
  const res = await fetch("https://quantum-topaz.vercel.app/api/categories", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Menu = () => {
  return (
    <div className="my-2 md:my-4 hidden lg:block flex-[2] max-w-fit">
      <div className="flex flex-col border-l border-gray-200 dark:border-gray-800 px-8">
        <h1 className="text-center sm:text-lg md:text-xl font-semibold my-4 text-gray-900 dark:text-gray-200">
          Recommended
        </h1>
        <Tags tags={data.mainRecommended} />
        <h2 className="text-center sm:text-lg md:text-xl font-semibold mt-16 mb-2 text-gray-900 dark:text-gray-200">
          Editor&apos;s pick
        </h2>
        <MenuItem />
      </div>
    </div>
  );
};

export default Menu;
