import React from "react";
import { VideoFilterProps } from "../../types/video";

const VideoFilter: React.FC<VideoFilterProps> = ({
  featFilter,
  onFeatChange,
}) => {
  return (
    <div className="flex items-center gap-2.5 mt-0 md:mt-17.5">
      <input
        type="radio"
        id="all"
        name="feat"
        value="all"
        hidden
        checked={featFilter === "all"}
        onChange={onFeatChange}
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
        onChange={onFeatChange}
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
        onChange={onFeatChange}
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
  );
};

export default VideoFilter;
