import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";
import Tag from "../tag/Tag";

const getAuthorData = async (slug) => {
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

const Post = async ({ key, item }) => {
  const { user } = await getAuthorData(item.slug);

  const regex = /(<([^>]+)>)/gi;

  return (
    <>
      <div
        className="flex items-center gap-6 mb-8 pb-5 border-b border-gray-200 dark:border-gray-800"
        key={key}
      >
        <Link className="flex-1/2  relative" href={`/posts/${item.slug}`}>
          {item.img && (
            <Image
              src={item.img}
              alt="blog image"
              width={350}
              height={350}
              className="hidden lg:block object-cover rounded-md relative"
              priority
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </Link>
        <div className="lg:flex-1 flex flex-col gap-2">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <Image
                src={user.image}
                width={50}
                height={50}
                alt="user image"
                className="w-6 h-6 rounded-full object-cover"
              />
              <p className="text-gray-900 dark:text-gray-200 text-xs font-semibold">
                {user.name}
              </p>
            </div>
            <div>
              <BsDot size={12} className="text-gray-900 dark:text-gray-200" />
            </div>
            <div className="text-[0.7rem] text-gray-600 dark:text-gray-400 font-semibold">
              {moment(item.createdAt.substring(0, 10)).format("MM.DD.YYYY")}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-sm text-red-600 font-semibold">
              {item.catSlug[0].toUpperCase() + item.catSlug.slice(1)}
            </span>
          </div>
          <div href="/" className="max-w-fit">
            <Link
              className="text-gray-900 dark:text-gray-200 font-semibold"
              href={`/posts/${item.slug}`}
            >
              {item.title}
            </Link>
          </div>
          <Link
            className="text-gray-900 dark:text-gray-200"
            href={`/posts/${item.slug}`}
          >
            <p className="text-sm text-gray-900 dark:text-gray-200 line-clamp-2 text-ellipsis lg:max-w-prose">
              {item.desc.replace(regex, "")}
            </p>
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex justify-between items-center gap-1">
              <Tag item={item.subCategory} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
