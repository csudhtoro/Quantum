import React from "react";
import Tags from "../tag/Tags";

const BlogMenu = ({ recommendations }) => {
  return (
    <div className="hidden sm:block p-4 flex-[2]">
      <div className="flex flex-col">
        <h2 className="sm:text-md md:text-lg font-semibold my-4 text-gray-900 dark:text-gray-200">
          Sub Categories
        </h2>
        <Tags tags={recommendations} />
      </div>
    </div>
  );
};

export default BlogMenu;
