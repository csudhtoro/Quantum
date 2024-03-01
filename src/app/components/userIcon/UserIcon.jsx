import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";

const UserIcon = ({ userImg }) => {
  const [openProfile, setOpenProfile] = useState(false);
  let subMenuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!subMenuRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={subMenuRef}>
      <Image
        src={userImg}
        alt="user_pic"
        width={400}
        height={400}
        quality={100}
        className="w-7 sm:w-9 rounded-full cursor-pointer hover:scale-105"
        onClick={() => setOpenProfile((prev) => !prev)}
      />
      <div className="relative">{openProfile && <DropdownMenu />}</div>
    </div>
  );
};

export default UserIcon;
