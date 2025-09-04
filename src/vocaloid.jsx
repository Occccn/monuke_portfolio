import React from "react";
import Header from "./components/header.jsx";
import VideoGallery from "./components/videogallery.jsx";

function Vocaloid() {
  return (
    <div className="w-full min-h-screen">
      <Header title="Vocaloid" />
      <VideoGallery />
    </div>
  );
}

export default Vocaloid;
