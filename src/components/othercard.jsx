import React, { useState } from "react";
import "../assets/card.css"; // CSSファイルをインポート

function OtherCard({ url, title, description }) {
  return (
    <div className="card">
      <h2 className="card-title-other">{title}</h2>
      <div className="video-responsive">
        <iframe
          src={url}
          loading="lazy"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="card-content">
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default OtherCard;
