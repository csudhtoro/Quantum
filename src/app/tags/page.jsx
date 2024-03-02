import Post from "../components/card/Post";
import { LuGhost } from "react-icons/lu";

const getFilterPostData = async (filter) => {
  const res = await fetch(
    `https://quantum-blogspace.vercel.app/api/tags?filter=${filter}`,
    {
      cache: "no-store"
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const TagPage = async ({ searchParams }) => {
  const { filter } = searchParams;

  const posts = await getFilterPostData(filter);

  return (
    <div className="px-4 bg-white dark:bg-[#111b2b]">
      <h1 className="w-full px-4 pb-2 sm:pb-10 pt-8 sm:pt-10 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center">
        {filter}
      </h1>
      <div className="flex-col gap-12">
        {posts.length > 0 ? (
          posts?.map((item) => <Post key={item._id} item={item} />)
        ) : (
          <div className="p-6 w-full h-[50%] flex flex-col items-center justify-center gap-6">
            <LuGhost stroke="#000" size={42} className="dark:stroke-white" />
            <p className="text-lg text-black dark:text-white">
              Nothing to see here...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagPage;
