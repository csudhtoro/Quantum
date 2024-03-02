"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UserIcon from "./userIcon/UserIcon";

const AuthLinks = () => {
  const { data, status } = useSession();
  const [userImg, setUserImg] = useState("");

  useEffect(() => {
    setUserImg(data?.user?.image);
  }, [data?.user]);

  return (
    <>
      {status === "unauthenticated" ? (
        <Link
          href="/login"
          className="text-xs px-5 py-2 my-3 rounded-lg bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 font-semibold"
        >
          Login
        </Link>
      ) : (
        <>
          <div className="w-full flex justify-between items-center gap-2 sm:gap-5">
            <Link href="/create">
              <div className="text-xs px-5 py-2 my-3 rounded-lg bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 font-semibold hover:opacity-90">
                Create
              </div>
            </Link>
            {userImg && <UserIcon userImg={userImg} />}
          </div>
        </>
      )}
    </>
  );
};

export default AuthLinks;
