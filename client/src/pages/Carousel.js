import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Card from "react-bootstrap/Card";
import MyBtns from "../components/MyBtns";

import { useState } from "react";

import slide1 from "../images/jsChallengSite.PNG";
import slide2 from "../images/myWeatherDashboard_img.PNG";
import slide3 from "../images/Nutrition_img.JPG";
import slide4 from "../images/workDayScheduler.PNG";
import slide5 from "../images/Jate.PNG";

// Create array of links to github and repos

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    // console.log(selectedIndex);
    setIndex(selectedIndex);
  };
  return (
    <Row>
      <h2>Projects</h2>
      <Col sm={12}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={null}
          indicators={false}
        >
          <Carousel.Item>
            <img className=" w-75 rounded" src={slide1} alt="First slide" />
            <Card.Body style={{ color: "white", fontSize: "2em" }}>
              Description of project 1 In this project...
              <Card.Body>
                <MyBtns name="Repository" index={index} />
                <MyBtns name="Live Deploy" index={index} />
              </Card.Body>
            </Card.Body>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-75 rounded" src={slide2} alt="First slide" />
            <Card.Body style={{ color: "white", fontSize: "2em" }}>
              Description of project 1 In this project...
              <Card.Body>
                <MyBtns name="Repository" index={index} />
                <MyBtns name="Live Deploy" index={index} />
              </Card.Body>
            </Card.Body>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-75 rounded" src={slide3} alt="First slide" />
            <Card.Body style={{ color: "white", fontSize: "2em" }}>
              Description of project 1 In this project...
              <Card.Body>
                <MyBtns name="Repository" index={index} />
                <MyBtns name="Live Deploy" index={index} />
              </Card.Body>
            </Card.Body>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-75 rounded" src={slide4} alt="First slide" />
            <Card.Body style={{ color: "white", fontSize: "2em" }}>
              Description of project 1 In this project...
              <Card.Body>
                <MyBtns name="Repository" index={index} />
                <MyBtns name="Live Deploy" index={index} />
              </Card.Body>
            </Card.Body>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-75 rounded" src={slide5} alt="First slide" />
            <Card.Body style={{ color: "white", fontSize: "2em" }}>
              Description of project 1 In this project...
              <Card.Body>
                <MyBtns name="Repository" index={index} />
                <MyBtns name="Live Deploy" index={index} />
              </Card.Body>
            </Card.Body>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default ControlledCarousel;
