import React from "react";
import CardSkeleton from "./CardSkeleton";
import CategorySkeleton from "./CategorySkeleton";

const DashboardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-[#111b2b]">
      <div className="bg-red-50 mx-auto w-[50rem] flex items-center justify-center gap-1">
        <CategorySkeleton card={6} />
      </div>
      <div className="flex-col gap-12">
        <CardSkeleton card={5} />
        {/* <Menu /> */}
      </div>
    </div>
  );
};

export default DashboardSkeleton;
