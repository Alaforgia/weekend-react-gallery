import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
// import TextSwap from "../TextSwap/TextSwap";
// import GalleryItem from "../GalleryItem/GalleryItem";
function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    console.log("Inside useEffect");
    getPic();
  }, []);

  const getPic = () => {
    axios
      .get("/gallery")
      .then((response) => {
        console.log("response =", response.data);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log("getPic error", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList list={galleryList} getPic={getPic} />
      {/* <p>Gallery goes here</p> */}
      {/* <GalleryItem items={galleryList} /> */}
    </div>
  );
}

export default App;
