import React, { Suspense } from "react";
import Post from "./card/Post";
import Pagination from "./Pagination";
import CardSkeleton from "./Loading/CardSkeleton";

const getPostData = async (page, cat) => {
  const res = await fetch(`/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getPostData(page, cat);

  const POSTS_PER_PAGE = 5;

  const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
  const hasNext = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count;

  return (
    <div className="px-4 flex-[5]">
      <h1 className="sm:text-lg md:text-xl font-semibold py-4 my-2 md:my-4 text-gray-900 dark:text-gray-200">
        Recent Posts
      </h1>
      <div>
        <Suspense fallback={<CardSkeleton card={5} />}>
          {posts?.map((item) => (
            <Post key={item._id} item={item} />
          ))}
        </Suspense>
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
