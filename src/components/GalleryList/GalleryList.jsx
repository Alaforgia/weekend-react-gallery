// import axios from "axios";

function GalleryList({ list }) {
  return (
    <>
      {list.map((item) => (
        <div key={item.id}>
          <h3>Gallery!</h3>
        </div>
      ))}
    </>
  );
}

export default GalleryList;
