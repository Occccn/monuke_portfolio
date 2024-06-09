import React, {useState} from 'react';
import '../assets/card.css'; // CSSファイルをインポート

function VideoCard({ url, title, description, date, credit }) {


  return (
    <div className='card' >
      <div className="video-responsive">
        <iframe
          src={url}
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-date">{date}</p>
        <p className="card-description">{description}</p>
        <p className="card-credit">{credit}</p>
  
      </div>
    </div>
  );
}

export default VideoCard;