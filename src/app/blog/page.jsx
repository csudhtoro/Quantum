import React from "react";
import CardList from "../components/CardList";
import SubCategoriesMenu from "../components/categories/SubCategoriesMenu";

const getData = async (cat) => {
  const res = await fetch(
    `https://quantum-topaz.vercel.app/api/subcategories?cat=${cat}`,
    {
      cache: "no-store"
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryPage = async ({ searchParams }) => {
  const page = parseInt(searchParams) || 1;
  const { cat, slug } = searchParams;

  const { subCategories } = await getData(cat);

  return (
    <div className="bg-white dark:bg-[#111b2b]">
      <h1 className="w-full px-4 pb-2 sm:pb-10 pt-8 sm:pt-10 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center">
        {cat[0].toUpperCase() + cat.slice(1)}
      </h1>
      <div className="flex-col gap-12">
        <SubCategoriesMenu subCategories={subCategories} />
        <CardList page={page} cat={cat} slug={slug} />
      </div>
    </div>
  );
};

export default CategoryPage;
