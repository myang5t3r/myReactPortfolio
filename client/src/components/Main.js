import React from "react";

import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Carousel from "./Carousel";
import PortfolioImg from "./PortfolioImg";

const Main = () => {
  // Very important to return JSX
  return (
    <>
      <NavBar />
      <div className="Container">
        <div className="row">
          <div className="col-sm-12 col-md-6 text-center">
            <PortfolioImg />
          </div>
          <div className="col-sm-12 col-md-6 border text-center">
            <h1 style={{ color: "white" }}>Container 2</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 border text-center">
            <Carousel />
          </div>
        </div>
      </div>
      <div className="col-sm-12 d-flex justify-content-center">
        <Footer />
      </div>
    </>
  );
};

export default Main;
