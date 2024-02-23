"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Tag = ({ item }) => {
  const router = useRouter();

  const sendDataToServer = (item) => {
    router.push(`https://quantum-topaz.vercel.app/tags?filter=${item}`);
  };

  return (
    <button
      className="text-[0.7rem] font-semibold w-fit flex justify-center items-center px-4 py-2 bg-gray-400/20 dark:bg-white rounded-full text-gray-900 gap-2"
      onClick={() => sendDataToServer(item)}
    >
      {item}
    </button>
  );
};

export default Tag;
