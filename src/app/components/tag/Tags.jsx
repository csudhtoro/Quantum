"use client";

import React from "react";
import Tag from "./Tag";

const Tags = ({ tags }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {tags?.map((item, indx) => (
        <Tag key={indx} item={item} />
      ))}
    </div>
  );
};

export default Tags;
