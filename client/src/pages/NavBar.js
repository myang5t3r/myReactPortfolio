import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";

import MyBtns from "../components/MyBtns";

const btn1 = "About";
const btn2 = "Projects";
const btn3 = "Contact";
const btn4 = "Technologies";

export default function NavBar() {
  return (
    <Container fluid>
      <Row>
        <nav className="navbar navbar-expand-lg m-5">
          <Col sm={12} lg={8}>
            <h1>Matthew Yang</h1>
          </Col>
          <Col sm={12} lg={4}>
            <ul className="navbar-nav ">
              <li className="nav-item ">
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
                <Link to={{ pathname: `/contact` }}>
                  <MyBtns name={btn3} />
                </Link>
              </li>
              <li className="nav-item ">
                <Link to={{ pathname: `/Tech` }}>
                  <MyBtns name={btn4} />
                </Link>
              </li>
            </ul>
          </Col>
        </nav>
      </Row>
    </Container>
  );
}
