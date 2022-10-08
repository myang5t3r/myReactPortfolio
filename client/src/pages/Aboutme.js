import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import PortfolioImg from "./PortfolioImg";

export default function Aboutme() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} lg={4}>
          <PortfolioImg />
          <h3>System Test Engineer</h3>
          <h3>Full Stack Developer</h3>
        </Col>
        <Col sm={12} lg={8} className="text-right">
          <h2>About</h2>
          <p class="sec1_p">
            Hello,
            <br />
            <br />
            I'm joyfully ecstatic on your inquiry and interest in learning more
            about me. I'm a proud Asian American, native Coloradoan, passionate
            lifelong learner, innovated problem solver, Systems Test Engineer,
            and aspiring Full Stack Developer. In my portfolio you can find
            several projects that I have developed, my resume, and how to
            contact me. May your journey bring you peace and happiness.
            <br />
            <br />
            Respectfully,
            <br />
            Matthew Yang
          </p>
        </Col>
      </Row>
    </Container>
  );
}
