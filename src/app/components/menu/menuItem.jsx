import Image from "next/image";
import React from "react";
import data from "@/app/shared/data";

const MenuItem = () => {
  const { editorPicks } = data;
  return (
    <>
      {editorPicks?.map((item) => (
        <>
          <div className="py-2 flex items-center gap-4" key={item.id}>
            <Image
              src={item.img}
              alt=""
              height={200}
              width={200}
              className="hidden lg:block h-9 w-9 object-cover rounded-full"
            />
            <div className="flex flex-col items-start gap-2">
              <div
                className="text-[0.6rem] font-semibold h-fit w-fit px-4 py-1 rounded-full text-center text-gray-900"
                style={{ backgroundColor: item.color }}
              >
                {item.tag}
              </div>
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-200 line-clamp-2 text-ellipsis max-w-prose">
                {" "}
                {item.title}
              </p>
              <div className="flex items-end gap-2">
                <div className="text-[0.7rem] font-semibold text-gray-900 dark:text-gray-200">
                  {item.author}
                </div>
                <div className="text-[0.6rem] font-medium text-gray-900 dark:text-gray-200">
                  {item.date}
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default MenuItem;
