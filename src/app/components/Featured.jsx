import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <>
      <div className="mt-[30px] mx-auto p-4 text-center lg:text-start">
        <h1 className="text-3xl sm:text-4xl md:text-5xl max-w-prose text-gray-900 dark:text-gray-200">
          <b className="text-gray-900 dark:text-gray-200">
            Unleash Your Business Online Potential:{" "}
          </b>
          Mastering Social Media and Website Optimization
        </h1>
        <div className="mt-8 md:mt-16 flex flex-col lg:flex-row items-center gap-8">
          <div className="">
            <Image
              src="/images/featured_pic.jpg"
              alt="featured pic"
              width={520}
              height={520}
              className=" w-auto h-auto hidden lg:block lg:flex-1 md:object-cover relative rounded-md shadow-md shadow-gray-300 dark:shadow-black"
              priority
            />
          </div>
          <div className="text-lg sm:text-xl flex-1 flex flex-col gap-5 max-w-[50rem]">
            <h2 className="max-w-prose font-bold text-gray-900 dark:text-gray-200">
              Boost Your Online Presence: Social Media and Website Optimization
              Tips
            </h2>
            <p className="mx-auto lg:container text-sm sm:text-md text-gray-700 dark:text-slate-200 max-w-prose">
              Discover actionable strategies to skyrocket your business online
              presence in our latest blog post. Learn how to leverage social
              media and optimize your website for maximum visibility and
              engagement.
            </p>
            <button className="text-xs px-6 py-4 my-3 rounded-lg bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 font-semibold mx-auto w-[20rem] lg:mx-0 lg:mr-auto lg:max-w-fit">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
