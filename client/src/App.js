import React from "react";
import Container from "react-bootstrap/Container";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./pages/NavBar";
import Tech from "./pages/Tech";
import Footer from "./pages/Footer";
import Aboutme from "./pages/Aboutme";
import Projects from "./pages/Carousel";
import Contact from "./pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  // Very important to return JSX
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/myReactPortfolio" element={<Aboutme />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tech" element={<Tech />} />
        </Routes>
      </Container>
      {/* <Tech /> */}
      <Footer />
    </Router>
  );
}
