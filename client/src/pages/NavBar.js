import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import MyBtns from "../components/MyBtns";

const btn1 = "About";
const btn2 = "Projects";
const btn3 = "Contact";

export default function NavBar() {
  return (
    <div className="m-5">
      <nav className="navbar navbar-expand-lg p-4">
        <div className="container-fluid">
          <h1 style={{ color: "white" }}>Matthew Yang</h1>
          <ul className="navbar-nav pe-5 fs-5">
            <li className="nav-iztem">
              <Link to={{ pathname: `/` }}>
                <MyBtns name={btn1} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to={{ pathname: `/project` }}>
                <MyBtns name={btn2} />
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={{ pathname: `/Contacts` }}>
                <MyBtns name={btn3} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
