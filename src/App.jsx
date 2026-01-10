import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Paintings from "./pages/Paintings";
import Covers from "./pages/Covers";
import Press from "./pages/Press";
import Drawings from "./pages/Drawings";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/covers" element={<Covers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/drawings" element={<Drawings />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

