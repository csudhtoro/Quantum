import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("/api/categories", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className="relative px-4 mt-[5rem]">
      <div className="my-10 flex flex-wrap justify-center gap-3 md:justify-between items-center ">
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className="text-sm text-gray-900 w-full sm:w-[45%] md:w-[30%] lg:w-[15%] flex justify-center items-center gap-2 px-12 py-4 rounded-lg font-semibold"
            style={{ backgroundColor: item.backgroundColor }}
            key={item._id}
          >
            <div>{item.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
