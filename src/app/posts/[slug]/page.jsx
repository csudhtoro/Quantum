import Image from "next/image";
import React from "react";
import Comments from "../../components/comments/Comments";
import moment from "moment";
import { GoEye } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import placeholder from "../../../../public/images/placeholder.png";
import user from "../../../../public/images/user.png";

const getData = async (slug) => {
  const res = await fetch(
    `https://quantum-topaz.vercel.app/api/posts/${slug}`,
    {
      cache: "no-store"
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <>
      <div className="p-12">
        <div className="w-full flex flex-col items-center gap-10">
          <div className="md:gap-4">
            <h2 className="text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] text-center font-bold max-w-prose text-gray-900 dark:text-gray-200">
              {data?.title}
            </h2>
          </div>
          <div className="w-full max-w-[52rem] py-5 md:p-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
            <span className="flex items-center justify-between gap-2 text-[.6rem]">
              {data.user.image
                ? data?.user.image && (
                    <Image
                      src={data?.user.image}
                      width={50}
                      height={50}
                      alt="user image"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )
                : user}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <p className="text-gray-900 dark:text-gray-200 text-[0.6rem] sm:text-xs font-semibold">
                  {data?.user.name}
                </p>
                <div>
                  <BsDot
                    size={12}
                    className="hidden md:block text-gray-900 dark:text-gray-200"
                  />
                </div>
                <div className="text-[0.6rem] sm:text-xs text-gray-600 dark:text-gray-400 font-semibold">
                  {moment(data?.createdAt.substring(0, 10)).format(
                    "MM.DD.YYYY"
                  )}
                </div>
              </div>
            </span>{" "}
            <div className="w-[4.5rem] flex items-center gap-4">
              {/* <Favorites userEmail={data?.user.email} postSlug={slug} /> */}
              <div className="flex items-center justify-center gap-1">
                <GoEye size={22} color="#6b7280" />
                <p className="text-[0.6rem] md:text-sm text-gray-900 dark:text-gray-200 font-semibold">
                  {data.views}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            {data?.img && (
              <Image
                className="rounded-lg object-cover w-fit max-h-[40rem]"
                src={data.img ? data.img : placeholder}
                alt="activity image"
                width={800}
                height={600}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col items-start justify-center max-w-[60rem] mx-auto mt-8 mb-8 md:mt-8 md:mb-16">
          <div className="w-full flex justify-center">
            <div
              className="text-sm md:text-base text-start leading-[2] md:leading-[2.5] text-gray-900 dark:text-gray-200 max-w-[52rem]"
              dangerouslySetInnerHTML={{ __html: data?.desc }}
            />
          </div>
        </div>
        <div className="max-w-[52rem] mx-auto text-gray-900 dark:text-gray-200">
          <Comments postSlug={slug} />
        </div>
      </div>
    </>
  );
};

export default SinglePage;
