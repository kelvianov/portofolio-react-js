import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import NavMenuFullscreen from "./pages/NavMenuFullscreen";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<Project />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/navmenufullscreen" element={<NavMenuFullscreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
