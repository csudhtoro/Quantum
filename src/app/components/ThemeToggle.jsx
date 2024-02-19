"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className=""
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? (
        <div className="bg-[#1c2749] rounded-full shadow-md shadow-black">
          <FiSun size={36} stroke="#eab308" fill="#eab308" className="p-2" />
        </div>
      ) : (
        <div className="bg-gray-100 rounded-full shadow-md shadow-gray-500">
          <FiMoon size={36} stroke="#2563eb" fill="#2563eb" className="p-2" />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
