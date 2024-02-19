"use client";

import React, { useEffect, useState } from "react";
import { PiBookmarkSimpleFill, PiBookmarkSimpleBold } from "react-icons/pi";

const Favorites = ({ currFav, postSlug, item }) => {
  const [isFavorite, setIsFavorite] = useState(currFav);

  //console.log("fav postkey:", postKey);

  //add favorite to db
  const addFavorite = async () => {
    await fetch(`/api/favorites?postSlug=${postSlug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postSlug })
    });
    setIsFavorite(true);
  };

  //remove favorite from db
  const deleteFavorite = async () => {
    await fetch(`/api/favorites?postSlug=${postSlug}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    setIsFavorite(false);
  };

  //
  const handleFavoritesClick = async () => {
    //if already favorite, unfavorite (remove from db, trigger change icon)
    if (isFavorite) {
      console.log("deleting...");
      await deleteFavorite();
      setIsFavorite(false);
    }
    //If not already favorite, favorite (add to favorite, trigger icon change)
    else {
      console.log("adding...");
      await addFavorite();
      setIsFavorite(true);
    }
  };

  //run this each time current favorite is updated
  useEffect(() => {
    if (isFavorite) {
      console.log("FAVORITED!");
    } else {
      console.log("UN-FAVORITED");
    }
  }, [isFavorite]);

  return (
    <div key={item.id}>
      <button
        className="bg-none p-0 cursor-pointer outline-none"
        onClick={() => handleFavoritesClick()}
      >
        {isFavorite ? (
          <PiBookmarkSimpleFill
            size={24}
            fill="#fcd34d"
            stroke="000"
            className="cursor-pointer"
          />
        ) : (
          <PiBookmarkSimpleBold size={24} color="#6b7280" />
        )}
      </button>
    </div>
  );
};

export default Favorites;
