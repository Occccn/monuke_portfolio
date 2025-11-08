import Header from "./components/common/Header";
import CenterImage from "./components/home/CenterImage";
import SocialLinks from "./components/home/SocialLinks";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>monuke</title>
        <meta name="description" content="monuke's portfolio" />
        <meta
          name="keywords"
          content="monuke, Vocaloid, ボーカロイド, 音楽制作, 作曲, ドラム, 初音ミク"
        />
        <meta
          property="og:title"
          content="monuke - Vocaloid Producer / Composer / Drummer"
        />
        <meta
          property="og:description"
          content="monukeのポートフォリオサイト。Vocaloid Producer、Composer、Drummerとして活動しています。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://monuke-f472b.web.app" />
        <link rel="canonical" href="https://monuke-f472b.web.app" />
      </Helmet>
      <Header title="Home" />
      <div className="mt-32">
        <CenterImage />
      </div>
      <div className="max-w-[1280px] mx-auto text-center px-4">
        <h2 className="text-2xl font-bold mb-4 mt-4">monuke</h2>
        <p>Vocaloid pord / compose / drums</p>
        <p>いろんな音楽を作ります</p>
      </div>
      <SocialLinks />
    </>
  );
}

export default App;
