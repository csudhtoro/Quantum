"use client";

import moment from "moment";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";
import CommentSkeleton from "../Loading/CommentSkeleton";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug })
    });
    mutate();
  };

  return (
    <div className="">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">
        Comments
      </h2>
      {status === "authenticated" ? (
        <div>
          <textarea
            name=""
            id=""
            cols="10"
            rows="3"
            placeholder="Write A Comment..."
            className="w-full border border-gray-200 dark:border-gray-800 rounded-md p-3 dark:bg-gray-700"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className="my-3 font-semibold rounded-lg text-xs px-4 py-2 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      ) : (
        <>
          <Link href="/login">Login To Write A Comment </Link>
        </>
      )}
      {isLoading ? (
        <CommentSkeleton />
      ) : (
        data?.map((item, indx) => (
          <div className="comments my-4 md:my-8" key={indx}>
            <div className="flex items-center gap-2 text-[.6rem] sm:text-sm md:text-lg">
              {item?.user?.image && (
                <Image
                  src={item.user.image}
                  width={50}
                  height={50}
                  alt="user image"
                  className="w-9 h-9 rounded-full object-cover "
                />
              )}
              <div className="flex flex-col">
                <p className="text-gray-900 dark:text-gray-200 text-xs font-semibold">
                  {item.user.name}
                </p>
                <div className="text-[0.6rem] font-semibold">
                  {moment(item.createdAt.substring(0, 10)).format("MM.DD.YYYY")}
                </div>
              </div>
            </div>{" "}
            <p className="text-sm py-2 max-w-prose"> {item.desc}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
