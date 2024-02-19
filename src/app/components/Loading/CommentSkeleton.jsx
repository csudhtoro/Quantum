import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CommentSkeleton = () => {
  return (
    <div className="">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">
        <Skeleton width={120} height={30} />
      </h2>
      <div>
        <Skeleton height={100} className="w-3 mb-2" />
        <Skeleton width={60} height={30} />
      </div>
    </div>
  );
};

export default CommentSkeleton;
