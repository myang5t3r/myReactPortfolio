import React from "react";
import Col from "react-bootstrap/Col";
import PortfolioImg from "./PortfolioImg";
import Row from "react-bootstrap/Row";

// Try styling
const styles = {
  container: {
    display: "flex",
    justifyContent: "spaceBetween",
  },
};
export default function Aboutme() {
  return (
    <Row>
      <div style={styles.container}>
        <Col sm={12} md={4}>
          <PortfolioImg />
        </Col>
        <Col sm={12} md={8} className="text-right">
          <h2>About me</h2>
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
      </div>
    </Row>
  );
}
