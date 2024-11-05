import React from "react";
import Header from "./components/header.jsx";
import "./assets/otherwork.css";
import "./assets/soundmake.css";
import "./assets/card.css"; // CSSファイルをインポート
import FullScreenMenu from "./components/hamburger.jsx";

const Card = ({ title, description, url }) => (
  <div className="other-work">
    <h3 className="card-other-work-title">{title}</h3>
    <div className="card-video-responsive"></div>
    <p>{description}</p>
  </div>
);

const Soundmake = () => {
  return (
    <>
      <Header title="Sound Make" />
      <div className="soundmake-card-container">
        <div className="soundmake-card-other-work">
          <h3 className="card-other-work-title">soundmake</h3>
          <p>test</p>
        </div>

        <div className="soundmake-card-other-work">
          <h3 className="card-other-work-title">soundmake</h3>
          <p>test</p>
          <FullScreenMenu />
        </div>
      </div>
    </>
  );
};

export default Soundmake;
