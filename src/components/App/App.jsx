import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getPic();
  }, []);

  const getPic = () => {
    axios
      .get("/gallery")
      .then((response) => {
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
      <GalleryList list={galleryList} />
      {/* <p>Gallery goes here</p> */}
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
