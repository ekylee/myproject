import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/css/style.css";

import TransitionComponent from './components/Transition';

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MotionGraphic from "./pages/MotionGraphic";
import UXUI from "./pages/UXUI";
import Graphic from "./pages/Graphic";
import Case1 from "./pages/Case1";
import Case2 from "./pages/Case2";
import Case3 from "./pages/Case 3";
import Case4 from "./pages/Case 4";
import Case5 from "./pages/Case 5";




export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/myproject" element={<Layout />}>
          <Route 
           index element={<TransitionComponent><Home /></TransitionComponent>} />
            <Route path="About" element={<TransitionComponent><About /></TransitionComponent>} />
            <Route path="Project" element={<TransitionComponent><Project /></TransitionComponent>} />
            <Route path="Contact" element={<TransitionComponent><Contact /></TransitionComponent>} />
          <Route>
          <Route path="UXUI" element={<TransitionComponent><UXUI/></TransitionComponent>} />
            <Route path="Case5" element={<TransitionComponent><Case5 /></TransitionComponent>} />
          </Route>
          <Route path="MotionGraphic" element={<TransitionComponent><MotionGraphic /></TransitionComponent>} />
          <Route>
          <Route path="Graphic" element={<TransitionComponent><Graphic/></TransitionComponent>} />
            <Route path="Case1" element={<TransitionComponent><Case1 /></TransitionComponent>} />
            <Route path="case2" element={<TransitionComponent><Case2 /></TransitionComponent>} />
            <Route path="Case3" element={<TransitionComponent><Case3 /></TransitionComponent>} />
            <Route path="Case4" element={<TransitionComponent><Case4 /></TransitionComponent>} />
          </Route>


          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<TransitionComponent><NotFound /></TransitionComponent>} />
        </Route>
      </Routes>
    </div>
  );
}

