import "./App.css";
import Header from './components/header.jsx';
import CenterImage from './components/centerimage.jsx';
import SocialLinks from './components/sociallinks.jsx';
function App() {
  return (
    <>
      <Header title = 'Home'/>
      <CenterImage/>
      <div >
        <h2>monuke</h2>
        <p>Vocaloid pord / compose / drums</p>
        <p>いろんな音楽を作ります</p>
      </div>

      <SocialLinks/>
    </>
  );
}
export default App;