import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogSkeleton = () => {
  return (
    // <div className="p-12">
    //   <div className="w-full flex flex-col items-center gap-10">
    //     <div className="md:gap-4">
    //       <h2 className="text-[2rem] text-center font-bold max-w-prose text-gray-900 dark:text-gray-200">
    //         <Skeleton width={900} height={50} />
    //         <Skeleton width={400} height={50} />
    //       </h2>
    //     </div>
    //     <div className="w-full max-w-[60rem] p-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
    //       <span className="flex items-center justify-between gap-2 text-[.6rem]">
    //         <div className="flex items-center gap-2">
    //           <div className="">
    //             <Skeleton circle width={30} height={30} />
    //           </div>
    //           <div className="text-[0.7rem] text-gray-600 dark:text-gray-400 font-semibold">
    //             <Skeleton width={160} height={20} />
    //           </div>
    //         </div>
    //       </span>{" "}
    //       <div className="w-[4.5rem] flex items-center gap-4">
    //         {/* <Favorites userEmail={data?.user.email} postSlug={slug} /> */}
    //         <div className="flex items-center justify-center gap-1">
    //           <p className="text-sm text-gray-900 dark:text-gray-200 font-semibold">
    //             <Skeleton width={90} height={20} />
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="">
    //       <Skeleton height={600} width={850} />
    //     </div>
    //   </div>
    //   <div className="flex flex-col items-start justify-center max-w-[60rem] mx-auto mt-8 mb-8 md:mt-8 md:mb-16">
    //     <div className="w-full flex justify-center">
    //       <div className="text-sm md:text-base text-start leading-[2] md:leading-[2.5] text-gray-900 dark:text-gray-200 max-w-[60rem]">
    //         <Skeleton count={10} width={850} height={20} />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="max-w-[60rem] mx-auto text-gray-900 dark:text-gray-200">
    //     <Skeleton width={950} height={100} />
    //   </div>
    // </div>
    <div className="">
      <Skeleton height={600} width={950} />
    </div>
  );
};

export default BlogSkeleton;
