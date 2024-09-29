import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
import "./index.css";
import App from "./App";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import About from "./pages/About"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
