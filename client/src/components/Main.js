import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import Aboutme from "./Aboutme";
import Carousel from "./Carousel";

const Main = () => {
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
};

export default Main;
