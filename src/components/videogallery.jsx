import React, { useState } from 'react';
import VideoCard from './videocard';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import '../assets/videogallery.css';    

function VideoGallery() {
  const videos = [
    {
        url: "https://www.youtube.com/embed/nGn0XnAxUeA?si=v4hOA7hjB7yw6HoE",
        title: "小休止、通り雨。 feat.初音ミク",
        description: "This is the first video.",
        date: "2024/05/31",
        credit: "by monuke",
        feat: "hatune"
    },
    {
        url: "https://www.youtube.com/embed/KOkWKtYLAgM?si=GT7lM-hfzSAeRyTq",
        title: "紅霞 feat.知声",
        description: "This is the second video.",
        date: "2023/12/16",
        credit: "by monuke",
        feat: "chisei"
    },
    {
        url: "https://www.youtube.com/embed/cYiZ_ROgVD4?si=BfblayJxZQtp48pw",
        title: "city lights feat.初音ミク・知声",
        description: "This is the first video.",
        date: "2023/08/10",
        credit: "by monuke",
        feat: "chisei and hatune"
      },
      {
        url: "https://www.youtube.com/embed/bLMXcUZvY4I?si=V-C4pt2m0YDUHEDI",
        title: "降降 feat.知声",
        description: "This is the second video.",
        date: "2023/06/10",
        credit: "by monuke",
        feat: "chisei"
      },
      {
        url: "https://www.youtube.com/embed/Wd7MxRQUkms?si=hB8SnUTrPlUO0E64",
        title: "Mirror feat.初音ミク",
        description: "This is the first video.",
        date: "2023/03/22",
        credit: "by monuke",
        feat: "hatune"
      },
      {
        url: "https://www.youtube.com/embed/TatelX69TMo?si=bcPBu-ZmRafByfE9",
        title: "毒 feat.初音ミク",
        description: "This is the second video.",
        date: "2022/12/29",
        credit: "by monuke",
        feat: "hatune"
      },
      {
        url: "https://www.youtube.com/embed/Pr8n5NTrHZU?si=qxpE-jFx27JJ027S",
        title: "FIGURE feat.初音ミク",
        description: "This is the second video.",
        date: "2022/10/10",
        credit: "by monuke",
        feat: "hatune"
      },
      {
        url: "https://www.youtube.com/embed/CghSlTNep6o?si=p6xVqfT933AHxsVw",
        title: "Beryl feat.初音ミク",
        description: "This is the first video.",
        date: "2022/08/06",
        credit: "by monuke",
        feat: "hatune"
      },
      {
        url: "https://www.youtube.com/embed/L4fXz2Nupm4?si=T5ZygHgM4Ja4Hj04",
        title: "harumachi feat.知声",
        description: "This is the second video.",
        date: "2022/04/24",
        credit: "by monuke",
        feat: "chisei"
      },
  ];

  const [sortOrder, setSortOrder] = useState('desc');
  const [featFilter, setFeatFilter] = useState('all');

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
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    })
    .filter(video => {
      return featFilter === 'all' || video.feat.includes(featFilter);
    });

  return (
    <div className="container">
<div className="radio-group">
    <div className='sort-group'>
    <input type="radio" id="asc" name="sortOrder" value="asc" hidden checked={sortOrder === 'asc'} onChange={handleSortChange} />
    <label className="radio-label-sort" htmlFor="asc">古い順</label>

    <input type="radio" id="desc" name="sortOrder" value="desc" hidden checked={sortOrder === 'desc'} onChange={handleSortChange} />
    <label className="radio-label-sort" htmlFor="desc">新しい順</label>
  </div>
  <div className='feat-group'>
    <input type="radio" id="all" name="feat" value="all" hidden checked={featFilter === 'all'} onChange={handleFeatChange} />
    <label className="radio-label-feat" htmlFor="all">All</label>

    <input type="radio" id="hatune" name="feat" value="hatune" hidden checked={featFilter === 'hatune'} onChange={handleFeatChange} />
    <label className="radio-label-feat" htmlFor="hatune">初音ミク</label>

    <input type="radio" id="chisei" name="feat" value="chisei" hidden checked={featFilter === 'chisei'} onChange={handleFeatChange} />
    <label className="radio-label-feat" htmlFor="chisei">知声</label>
  </div>
</div>

      {filteredSortedVideos.map(video => (
        <VideoCard key={video.url} url={video.url} title={video.title} description={video.description} date={video.date} credit={video.credit} feat={video.feat} />
      ))}
    </div>
  );
}

export default VideoGallery;









