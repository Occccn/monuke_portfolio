import FullScreenText from "./textdetail.jsx";

interface VideoCardProps {
  url: string;
  title: string;
  description: string;
  date: string;
  credit: string;
  description_detail: string[];
}

function VideoCard({
  url,
  title,
  description,
  date,
  credit,
  description_detail,
}: VideoCardProps) {
  return (
    <div className="w-full">
      <div className="bg-white overflow-hidden transition-all duration-300 w-full flex flex-col border-b border-[#d0caca] shadow-sm">
        <div className="relative pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src={url}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 flex flex-col flex-1 justify-between">
          <h2 className="text-lg mb-2">{title}</h2>
          <p className="text-sm text-gray-500 mb-4">{date}</p>
          <p className="text-sm text-gray-500 mb-4">{description}</p>
          <FullScreenText description_detail={description_detail} />
          <p className="text-[10px] text-gray-500 mt-auto self-end mb-0">
            {credit}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
