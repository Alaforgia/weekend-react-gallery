// import axios from "axios";
import GalleryItem from "../GalleryItem/GalleryItem";
import { useState, useEffect } from "react";
function GalleryList({ list, items }) {
  return (
    <>
      {list.map((item) => (
        <div key={item.id}>
          <h3>Gallery!</h3>
        </div>
        
      ))}
    <div>
        <GalleryItem />
    </div>
    </>
  );
}

// function pictures() {
//   const [galleryList, setGalleryList] = useState([]);
//   console.log("what is this");
//   return (
//     <>
//       <GalleryItem />
//     </>
//   );
// }
export default GalleryList;
