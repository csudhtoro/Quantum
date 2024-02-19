import React from "react";
import Tags from "../tag/Tags";

const SubCategoriesMenu = ({ subCategories }) => {
  return (
    <div className="p-6">
      <div className="items-center justify-center gap-1">
        <Tags tags={subCategories} />
      </div>
    </div>
  );
};

export default SubCategoriesMenu;
