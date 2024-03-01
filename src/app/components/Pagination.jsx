"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className="px-4 py-2 flex justify-between w-full">
      <button
        className="group text-xs px-6 py-4 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 font-semibold disabled:bg-gray-400 dark:disabled:bg-gray-700 disabled:cursor-not-allowed cursor-pointer rounded-lg active:scale-105"
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`, { scroll: false })}
      >
        <div className="flex gap-2 items-center">
          <GrFormPreviousLink
            size={20}
            className="text-white dark:text-gray-900 group-hover:-translate-x-1 transition"
          />
          <p>Prev</p>
        </div>
      </button>
      <button
        className="group text-xs px-6 py-4 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 font-semibold cursor-pointer rounded-lg disabled:bg-gray-400 dark:disabled:bg-gray-700 disabled:cursor-not-allowed active:scale-105"
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`, { scroll: false })}
      >
        <div className="flex gap-2 items-center">
          <p className="text-white dark:text-gray-900">Next</p>
          <GrFormNextLink
            size={20}
            className="text-white dark:text-gray-900 group-hover:translate-x-1 transition"
          />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
