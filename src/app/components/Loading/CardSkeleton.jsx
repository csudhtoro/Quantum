import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ card }) => {
  return Array(card)
    .fill(0)
    .map((_, indx) => (
      <div key={indx}>
        <div className="flex items-center gap-6 mb-8 pb-5 border-b border-gray-200 dark:border-gray-800">
          <div className="flex-1/2  relative">
            <Skeleton width={350} height={250} />
          </div>
          <div className="lg:flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="">
                <Skeleton circle width={30} height={30} />
              </div>
              <div className="text-[0.7rem] text-gray-600 dark:text-gray-400 font-semibold">
                <Skeleton width={160} height={15} />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm text-red-600 font-semibold">
                <Skeleton width={90} height={20} />
              </span>
            </div>

            <div className="max-w-fit">
              <div className="text-gray-900 dark:text-gray-200 font-semibold">
                <Skeleton width={200} height={20} />
                <Skeleton width={250} height={20} />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex justify-between items-center gap-1">
                <div
                  href="/"
                  className="text-[0.7rem] font-medium w-fit flex justify-center items-center px-4 py-2 bg-gray-400/20  dark:bg-white rounded-full text-gray-900 gap-2"
                >
                  <Skeleton circle width={60} height={5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
};

export default CardSkeleton;
