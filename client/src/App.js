import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { useState, useEffect } from "react";

import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import Aboutme from "./pages/Aboutme";
import Carousel from "./pages/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  // Very important to return JSX
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Aboutme />
        </Row>
        <Carousel />
      </Container>
      <Footer />
    </>
  );
}
