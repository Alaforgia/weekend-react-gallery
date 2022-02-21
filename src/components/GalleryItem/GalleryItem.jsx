import React, { useState } from "react";

function GalleryItem({ item }) {
  console.log("item =", item);
  const [isDescriptionActive, setDescriptionActive] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setDescriptionActive(!isDescriptionActive);
        }}
      >
        {isDescriptionActive ? <p>{item.description}</p> : <img src={item.path} />}
      </div>
    </>
  );
}

export default GalleryItem;
