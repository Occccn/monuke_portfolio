import Header from "./components/common/Header";
import Seo from "./components/common/Seo";
import VideoGallery from "./components/vocaloid/VideoGallery";
import { siteMeta, vocaloidMeta } from "./data/site-content";

function Vocaloid() {
  return (
    <div className="w-full min-h-screen">
      <Seo
        title={vocaloidMeta.title}
        description={vocaloidMeta.description}
        canonicalPath="/Vocaloid"
        keywords={vocaloidMeta.keywords}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: vocaloidMeta.title,
          description: vocaloidMeta.description,
          url: `${siteMeta.siteUrl}/Vocaloid`,
        }}
      />
      <Header title="Vocaloid" />
      <VideoGallery />
    </div>
  );
}

export default Vocaloid;
