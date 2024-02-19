"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status]);

  return (
    <div className="h-screen flex items-center justify-center mt-14">
      <div className="h-16 flex flex-col items-center justify-center py-10 px-20 gap-16">
        <div
          className="text-lg text-gray-200 p-5 rounded-md border-none bg-gray-900 dark:bg-gray-200 dark:text-gray-900 font-bold cursor-pointer"
          onClick={() => signIn("google")}
        >
          Sign In With Google
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
