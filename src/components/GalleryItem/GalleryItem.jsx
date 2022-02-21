import React, { useState } from "react";
import axios from "axios";

function GalleryItem({ item, getPic }) {
  // Used for toggling state
  const [isDescriptionActive, setDescriptionActive] = useState(false);
  // Used for updating state
  const [likeCount, setLikeCount] = useState(item.likes);
  const likeClickHandler = () => {
    setLikeCount(likeCount + 1);
    updateGalleryItem();
  };
  const updateGalleryItem = () => {
    axios
      .put("/gallery/like/" + item.id)
      .then((response) => {
        console.log(response);
        getPic();
      })
      .catch((error) => {
        console.log("getPic error", error);
      });
  };

  return (
    <>
      <div
        onClick={() => {
          setDescriptionActive(!isDescriptionActive);
        }}
      >
        {isDescriptionActive ? <p>{item.description}</p> : <img src={item.path} />}
      </div>
      <h3>Likes: {likeCount}</h3>

      <button
        onClick={() => {
          likeClickHandler();
        }}
      >
        Like!
      </button>
    </>
  );
}

export default GalleryItem;
