// import axios from "axios";
// import { render } from "react-dom";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ list, getPic }) {
  return (
    <>
      <h3>Gallery!</h3>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <h1>Test</h1>
            <GalleryItem item={item} getPic={getPic} />
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
