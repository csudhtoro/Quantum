import Link from "next/link";
import React from "react";

const Recommended = ({ recommendations }) => {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {recommendations?.map((item) => (
        <Link
          key={item.id}
          href="/"
          className="text-[0.7rem] font-medium w-fit flex justify-center items-center px-4 py-2 bg-gray-400/20 dark:bg-white rounded-full text-gray-900 gap-2"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
