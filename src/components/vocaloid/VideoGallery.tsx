import React, { useState } from "react";
import VideoCard from "./VideoCard";
import VideoSort from "./VideoSort";
import VideoFilter from "./VideoFilter";
import { videos, Video } from "../../data/video-content";
import { SortOrder, FeatFilter } from "../../types/video";

function VideoGallery() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [featFilter, setFeatFilter] = useState<FeatFilter>("all");

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortOrder(event.target.value as SortOrder);
  };

  const handleFeatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeatFilter(event.target.value as FeatFilter);
  };

  // ソート後のビデオ配列をフィルタリング
  const filteredSortedVideos: Video[] = videos
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "desc"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    })
    .filter((video) => {
      return featFilter === "all" || video.feat.includes(featFilter);
    });

  return (
    <>
      <div className="flex justify-center items-center gap-2.5 w-full flex-col mb-7.5 md:flex-row mt-32 px-4 max-w-6xl mx-auto">
        <VideoSort sortOrder={sortOrder} onSortChange={handleSortChange} />
        <VideoFilter featFilter={featFilter} onFeatChange={handleFeatChange} />
      </div>
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl mx-auto">
          {filteredSortedVideos.map((video) => (
            <VideoCard
              key={video.url}
              url={video.url}
              title={video.title}
              description={video.description}
              date={video.date}
              credit={video.credit}
              description_detail={video.description_detail}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default VideoGallery;
