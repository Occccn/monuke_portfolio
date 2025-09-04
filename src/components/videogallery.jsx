import React, { useState } from "react";
import VideoCard from "./videocard";
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
    <>
      <div className="flex justify-center items-center gap-2.5 w-full flex-col mb-7.5 md:flex-row mt-32">
        <div className="flex items-center gap-2.5 mr-2.5 mt-17.5">
          <input
            type="radio"
            id="asc"
            name="sortOrder"
            value="asc"
            hidden
            checked={sortOrder === "asc"}
            onChange={handleSortChange}
          />
          <label
            className={`px-5 py-2.5 cursor-pointer opacity-100 text-black transition-colors duration-300 select-none hover:text-black/30 ${
              sortOrder === "asc" ? "border-b-2 border-[#e12885]" : ""
            }`}
            htmlFor="asc"
          >
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
          <label
            className={`px-5 py-2.5 cursor-pointer opacity-100 text-black transition-colors duration-300 select-none hover:text-black/30 ${
              sortOrder === "desc" ? "border-b-2 border-[#e12885]" : ""
            }`}
            htmlFor="desc"
          >
            新しい順
          </label>
        </div>
        <div className="flex items-center gap-2.5 mt-0 md:mt-17.5">
          <input
            type="radio"
            id="all"
            name="feat"
            value="all"
            hidden
            checked={featFilter === "all"}
            onChange={handleFeatChange}
          />
          <label
            className={`px-5 py-2.5 cursor-pointer opacity-100 text-black transition-colors duration-300 select-none hover:text-black/30 ${
              featFilter === "all" ? "border-b-2 border-[#e12885]" : ""
            }`}
            htmlFor="all"
          >
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
          <label
            className={`px-5 py-2.5 cursor-pointer opacity-100 text-black transition-colors duration-300 select-none hover:text-black/30 ${
              featFilter === "hatune" ? "border-b-2 border-[#e12885]" : ""
            }`}
            htmlFor="hatune"
          >
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
          <label
            className={`px-5 py-2.5 cursor-pointer opacity-100 text-black transition-colors duration-300 select-none hover:text-black/30 ${
              featFilter === "chisei" ? "border-b-2 border-[#e12885]" : ""
            }`}
            htmlFor="chisei"
          >
            知声
          </label>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
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
      </div>
    </>
  );
}

export default VideoGallery;
