import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Vocaloid from "./vocaloid";
import Otherwork from "./otherwork";

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
