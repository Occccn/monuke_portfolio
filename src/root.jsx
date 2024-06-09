import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Tmp from './tmp';

function Root() {
  return (
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path="/tmp" element={<Tmp />} />
      </Routes>
    </Router>
  );
}

export default Root;