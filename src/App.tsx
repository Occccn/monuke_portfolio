import Header from "./components/common/Header";
import Seo from "./components/common/Seo";
import CenterImage from "./components/home/CenterImage";
import SocialLinks from "./components/home/SocialLinks";
import { homeMeta, siteMeta } from "./data/site-content";

function App() {
  return (
    <>
      <Seo
        title={homeMeta.title}
        description={homeMeta.description}
        canonicalPath="/"
        keywords={homeMeta.keywords}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteMeta.siteName,
          url: siteMeta.siteUrl,
          image: `${siteMeta.siteUrl}/monuke.png`,
          sameAs: [
            "https://www.youtube.com/@monuke_y_y",
            "https://www.nicovideo.jp/user/32361547",
            "https://x.com/monukenoyamada",
          ],
          jobTitle: "Vocaloid Producer / Composer / Drummer",
          description: homeMeta.description,
        }}
      />
      <Header title="Home" />
      <div className="mt-32">
        <CenterImage />
      </div>
      <div className="max-w-[720px] mx-auto text-center px-4 pb-12">
        <h1 className="text-2xl font-bold mb-4 mt-4">monuke</h1>
        <p>Vocaloid prod / compose / drums</p>
        <p>いろんな音楽を作ります</p>
        <p className="mt-6 text-sm leading-7 text-gray-600">
          ボカロPとしてオリジナル楽曲を制作しています。作曲・編曲・ドラム・Mix の作品を
          まとめたポートフォリオサイトです。
        </p>
      </div>
      <SocialLinks />
    </>
  );
}

export default App;
