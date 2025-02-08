import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Vocaloid from "./vocaloid.jsx";
import Otherwork from "./otherwork.jsx";
import Soundmake from "./soundmake.jsx";
import Discography from "./discography.jsx";

function Root() {
  return (
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path="/Vocaloid" element={<Vocaloid />} />
        <Route path="/Otherwork" element={<Otherwork />} />
        <Route path="/Soundmake" element={<Soundmake />} />
        <Route path="/Discography" element={<Discography />} />
      </Routes>
    </Router>
  );
}

export default Root;
