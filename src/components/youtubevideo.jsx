import React from 'react';
import '../assets/youtube.css'; // CSSファイルをインポート

function YouTubeVideo() {
  return (
    <div className="youtube-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/nGn0XnAxUeA?si=v4hOA7hjB7yw6HoE" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>

        </iframe>
    </div>
  );
}

export default YouTubeVideo;