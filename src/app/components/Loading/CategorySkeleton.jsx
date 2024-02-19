import React from "react";
import Skeleton from "react-loading-skeleton";

const CategorySkeleton = ({ card }) => {
  return Array(card)
    .fill(0)
    .map((_, indx) => (
      <div className="relative px-4" key={indx}>
        <div className="my-10 flex flex-wrap justify-center gap-3 md:justify-between items-center">
          <div className="text-sm text-gray-900 w-full sm:w-[45%] md:w-[30%] lg:w-[15%] flex justify-center items-center gap-2 px-12 py-4 rounded-lg font-semibold">
            <Skeleton width={90} height={60} />
          </div>
        </div>
      </div>
    ));
};

export default CategorySkeleton;
