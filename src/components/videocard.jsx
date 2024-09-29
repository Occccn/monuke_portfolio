import React, { useState } from "react";
import "../assets/card.css"; // CSSファイルをインポート
import FullScreenText from "./textdetail.jsx";
function VideoCard({
  url,
  title,
  description,
  date,
  credit,
  description_detail,
}) {
  return (
    <div className="card">
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
        <h2 className="card-title">{title}</h2>
        <p className="card-date">{date}</p>
        <p className="card-description">{description}</p>
        <FullScreenText description_detail={description_detail} />
        <p className="card-credit">{credit}</p>
      </div>
    </div>
  );
}

export default VideoCard;
