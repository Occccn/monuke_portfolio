import React, { useState } from "react";

function OtherCard({ url, title, description }) {
  return (
    <div className="card bg-white m-5 border-b border-[#d0caca] w-full">
      <h2 className="self-start text-2xl mb-2.5 mt-0">{title}</h2>
      <div className="relative pb-[56.25%] h-0">
        <iframe
          src={url}
          loading="lazy"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-none"
        ></iframe>
      </div>
      <div className="p-4 flex flex-col h-full justify-between">
        <p className="text-sm text-gray-500 mb-4">{description}</p>
      </div>
    </div>
  );
}

export default OtherCard;
