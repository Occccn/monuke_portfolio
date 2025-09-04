import Header from "./components/header.jsx";
import CenterImage from "./components/centerimage.jsx";
import SocialLinks from "./components/sociallinks.jsx";
function App() {
  return (
    <>
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
