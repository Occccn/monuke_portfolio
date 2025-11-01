import Header from "./components/common/Header";
import VideoGallery from "./components/vocaloid/VideoGallery";

function Vocaloid() {
  return (
    <div className="w-full min-h-screen">
      <Header title="Vocaloid" />
      <VideoGallery />
    </div>
  );
}

export default Vocaloid;
