import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Home from "./pages/home/home.page";
import Contact from "./pages/contact/contact.page";
import Help from "./pages/help/help.page";
import Blog from "./pages/blog/blog.page";
import Simulate from "./pages/simulate/simulate.page";
import Services from "./pages/services/services.page";
import About from "./pages/about/about.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/simulacao" element={<Simulate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ajuda" element={<Help />} />
        <Route path="/contatos" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
