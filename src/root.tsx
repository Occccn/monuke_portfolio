import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Vocaloid from "./vocaloid.jsx";
import Otherwork from "./otherwork.jsx";

function Root() {
  return (
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path="/Vocaloid" element={<Vocaloid />} />
        <Route path="/Otherwork" element={<Otherwork />} />
      </Routes>
    </Router>
  );
}

export default Root;
