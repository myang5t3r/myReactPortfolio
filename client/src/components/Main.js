import React from "react";

import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Main = () => {
  // Very important to return JSX
  return (
    <>
      <NavBar />
      <div>
        <div class="row">
          <div class="col-sm-12 col-md-6 border">Container 1</div>
          <div class="col-sm-12 col-md-6 border">Container 2</div>
        </div>
        <div class="row">
          <div class="col-sm-12 border">Carousel</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
