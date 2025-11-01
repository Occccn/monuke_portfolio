import React from "react";
import { VideoSortProps } from "../../types/video";

const VideoSort: React.FC<VideoSortProps> = ({ sortOrder, onSortChange }) => {
  return (
    <div className="flex items-center gap-2.5 mr-2.5 mt-17.5">
      <input
        type="radio"
        id="asc"
        name="sortOrder"
        value="asc"
        hidden
        checked={sortOrder === "asc"}
        onChange={onSortChange}
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
        onChange={onSortChange}
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
  );
};

export default VideoSort;
