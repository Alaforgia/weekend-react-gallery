// import axios from "axios";
// import { render } from "react-dom";
import GalleryItem from "../GalleryItem/GalleryItem";
// import setState from "react";
// import TextSwap from "../TextSwap/TextSwap";
// import { useState, useEffect } from "react";

function GalleryList({ list }) {
  console.log("list =", list);
  return (
    <>
      <h3>Gallery!</h3>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <h1>Test</h1>
            <GalleryItem item={item} />
          </div>
        );
      })}
    </>
  );
}

// ReactDOM.render(
//     <GalleryItem />
// )

export default GalleryList;
