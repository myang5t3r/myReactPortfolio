import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import slide1 from "../images/jsChallengSite.PNG";
import slide2 from "../images/myWeatherDashboard_img.PNG";
import slide3 from "../images/Nutrition_img.JPG";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Row>
      <Col sm={12} className="text-center">
        <h1>Projects</h1>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className=" w-75 " src={slide1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="w-75" src={slide2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="w-75" src={slide3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default ControlledCarousel;
