import React, { useState } from "react";
import VideoCard from "./videocard";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "../assets/videogallery.css";
import { videos } from "../data/video-content.js";

function VideoGallery() {
  const [sortOrder, setSortOrder] = useState("desc");
  const [featFilter, setFeatFilter] = useState("all");

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleFeatChange = (event) => {
    setFeatFilter(event.target.value);
  };

  // ソート後のビデオ配列をフィルタリング
  const filteredSortedVideos = videos
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    })

    .filter((video) => {
      return featFilter === "all" || video.feat.includes(featFilter);
    });

  return (
    <div className="container">
      <div className="radio-group">
        <div className="sort-group">
          <input
            type="radio"
            id="asc"
            name="sortOrder"
            value="asc"
            hidden
            checked={sortOrder === "asc"}
            onChange={handleSortChange}
          />
          <label className="radio-label-sort" htmlFor="asc">
            古い順
          </label>

          <input
            type="radio"
            id="desc"
            name="sortOrder"
            value="desc"
            hidden
            checked={sortOrder === "desc"}
            onChange={handleSortChange}
          />
          <label className="radio-label-sort" htmlFor="desc">
            新しい順
          </label>
        </div>
        <div className="feat-group">
          <input
            type="radio"
            id="all"
            name="feat"
            value="all"
            hidden
            checked={featFilter === "all"}
            onChange={handleFeatChange}
          />
          <label className="radio-label-feat" htmlFor="all">
            All
          </label>

          <input
            type="radio"
            id="hatune"
            name="feat"
            value="hatune"
            hidden
            checked={featFilter === "hatune"}
            onChange={handleFeatChange}
          />
          <label className="radio-label-feat" htmlFor="hatune">
            初音ミク
          </label>

          <input
            type="radio"
            id="chisei"
            name="feat"
            value="chisei"
            hidden
            checked={featFilter === "chisei"}
            onChange={handleFeatChange}
          />
          <label className="radio-label-feat" htmlFor="chisei">
            知声
          </label>
        </div>
      </div>

      {filteredSortedVideos.map((video) => (
        <VideoCard
          key={video.url}
          url={video.url}
          title={video.title}
          description={video.description}
          date={video.date}
          credit={video.credit}
          feat={video.feat}
          description_detail={video.description_detail}
        />
      ))}
    </div>
  );
}

export default VideoGallery;
