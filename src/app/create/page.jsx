"use client";

import React, { useEffect, useState } from "react";

import "react-quill/dist/quill.bubble.css";
import { FiPlusCircle } from "react-icons/fi";
import { FiImage } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import { app } from "../utils/firebase";
import data from "@/app/shared/data";
import dynamic from "next/dynamic";

const storage = getStorage(app);
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const Select = dynamic(() => import("react-select"), { ssr: false });
const makeAnimated = dynamic(() => import("react-select/animated"), {
  ssr: false
});

const CreatePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState({});
  const [tag, setTag] = useState({});

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    try {
      if (!title || !value || !media || !catSlug || !tag) {
        throw new Error("Required fields are missing.");
      }

      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          slug: slugify(title),
          catSlug: catSlug.label || "style",
          subCategory: tag.label || "Art"
        })
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Post created successfully:", data);
        router.push(`/posts/${data.slug}`);
      } else {
        throw new Error("Failed to create post.");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle error condition
    }
  };

  //color theme for multiselect items
  function multiSelectTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#0356fc",
        primary: "#0339a3"
      }
    };
  }

  //animation for deleting  multiselect items
  const deleteAnimation = makeAnimated();

  return (
    <div className="h-screen mt-10 mb-10 py-2 px-4 sm:py-6">
      <div className="flex flex-col justify-center gap-4">
        <input
          placeholder="Title"
          className="w-full p-4 mb-2 max-w-prose text-xl md:text-3xl font-semibold bg-transparent text-gray-900 dark:text-gray-200"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Select
          name="categories"
          theme={multiSelectTheme}
          options={data.category}
          className="p-2 bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block min-w-fit max-w-[28rem]"
          placeholder="Select Category..."
          isSearchable
          autoFocus
          required
          components={deleteAnimation}
          onChange={setCatSlug}
        />
        <Select
          name="tags"
          theme={multiSelectTheme}
          options={data.tags}
          className="p-2 bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block min-w-fit max-w-[28rem]"
          placeholder="Select Tag..."
          isSearchable
          autoFocus
          required
          components={deleteAnimation}
          onChange={setTag}
        />
      </div>
      <div className="flex items-start h-96 relative">
        <button className="p-3" onClick={() => setOpen(!open)}>
          <FiPlusCircle size={30} stroke="#6b7280" />
        </button>
        {open && (
          <div className="flex flex-col gap-3 mt-3 absolute z-10 left-2 top-10">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className="text-gray-900 dark:text-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer border-2 border-gray-400 hover:scale-105 transition-all">
              <label htmlFor="image">
                <FiImage size={20} />
              </label>
            </button>

            <button className="text-gray-900 dark:text-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer border-2 border-gray-400 hover:scale-105 transition-all">
              <FiUpload size={20} />
            </button>
            <button className="text-gray-900 dark:text-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer border-2 border-gray-400 hover:scale-105 transition-all">
              <FiVideo size={20} />
            </button>
          </div>
        )}
        <ReactQuill
          className="w-[85%] text-gray-900 dark:text-gray-200"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell Your Story..."
        />
      </div>
      <button
        className="fixed right-5 bottom-5 text-xs bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 font-semibold  px-4 py-2 border-none rounded-full"
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default CreatePage;
