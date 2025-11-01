import { FaYoutube, FaTwitter, FaVideo } from "react-icons/fa";

function SocialLinks() {
  return (
    <div
      className="flex justify-center gap-5 mt-5 px-4"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <a
        href="https://www.youtube.com/@monuke_y_y"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube color="#00001C" size={24} />
      </a>
      <a
        href="https://www.nicovideo.jp/user/32361547"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaVideo color="#00001C" size={24} />
      </a>

      <a
        href="https://x.com/monukenoyamada"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter color="#00001C" size={24} />
      </a>
    </div>
  );
}

export default SocialLinks;
