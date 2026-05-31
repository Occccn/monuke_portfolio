import Header from "./components/common/Header";
import Seo from "./components/common/Seo";
import OtherCard from "./components/otherwork/OtherCard";
import { otherworkCards } from "./data/otherwork-content";
import { otherworkMeta, siteMeta } from "./data/site-content";

const Otherwork = () => {
  return (
    <>
      <Seo
        title={otherworkMeta.title}
        description={otherworkMeta.description}
        canonicalPath="/Otherwork"
        keywords={otherworkMeta.keywords}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: otherworkMeta.title,
          description: otherworkMeta.description,
          url: `${siteMeta.siteUrl}/Otherwork`,
        }}
      />
      <Header title="Others" />
      <div className="flex flex-col items-center mt-25 mx-auto w-full max-w-4xl px-4">
        {otherworkCards.map((card) => (
          <OtherCard
            key={card.url}
            url={card.url}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
};

export default Otherwork;
