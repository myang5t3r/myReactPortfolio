import React from "react";

import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Carousel from "./Carousel";
import PortfolioImg from "./PortfolioImg";
import Aboutme from "./Aboutme";

const Main = () => {
  // Very important to return JSX
  return (
    <>
      <NavBar />
      <div className="Container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-2  text-center">
            <PortfolioImg />
          </div>
          <div className="col-sm-12 col-md-6 text-center m-1">
            <Aboutme />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 border text-center">
            <Carousel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
