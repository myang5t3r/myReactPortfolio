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
import slide6 from "../images/Screen Shot 2022-09-20 at 8.59.02 AM.png";

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
            <Card.Body className="m-5 cardtext">
              The core concepts used in this project are querySelectors,
              Object/Arrays, call back functions, conditional statements,
              timers, global variables, boolean variables, functions, event
              handlers, dom traversal, creating dom elements in javascript,
              appending elements in javascript, and styling elements directly
              from javascript!
              <Card.Body className="m-4">
                <MyBtns name="Repository" index={index} />
                <MyBtns name="Live Deploy" index={index} />
              </Card.Body>
            </Card.Body>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-75 rounded" src={slide2} alt="First slide" />
            <Card.Body className="m-5 cardtext">
              `This project was build with Bootstrap and jQuery Api libraries.
              The standard container, row, column method of Bootstrap was uses
              to organize the layout of the html elements. jQuery methods such
              as, text(), eq(), and append(), were used for dom manipulation and
              traversal. Wetherbit.io was used to generate the current and
              future forecast.`
              <Card.Body className="m-4">
                <MyBtns name="Repository" index={index} />
                <MyBtns name="Live Deploy" index={index} />
              </Card.Body>
            </Card.Body>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-75 rounded" src={slide3} alt="First slide" />
            <Card.Body className="m-5 cardtext">
              This was a group projects exploring Express.js and two public
              APIs. Our application allows a user to search for ingredients and
              the app will provide a photo and nutritional facts. For this
              project we used https://www.edamam.com/ for Nutrition analysis and
              https://www.pexels.com/discover/ API library to populate images on
              the searched food items.
              <Card.Body className="m-4">
                <MyBtns name="Repository" index={index} />
                <MyBtns name="Live Deploy" index={index} />
              </Card.Body>
            </Card.Body>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-75 rounded" src={slide4} alt="First slide" />
            <Card.Body className="m-5 cardtext">
              This project was build with Bootstrap and jQuery API libraries.
              The standard container, row, column method of Bootstrap was uses
              to organize the layout of the html elements. jQuery methods such
              as, text(), eq(), and addClass(), were used for dom manipulation
              and traversal. Javascript prototype inheritance was used
              specifically with the Date() method. The Data() method was used to
              get the current time and display it the screen. To display the
              time as a clock I used the seInterval() callback function which
              updated the time every 1000ms. To persist the event data within
              the day scheduler app, the input text was stored into localStorage
              and on refresh the items were put back to their correct locations.
              <Card.Body className="m-5">
                <MyBtns name="Repository" index={index} />
                <MyBtns name="Live Deploy" index={index} />
              </Card.Body>
            </Card.Body>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-75 rounded" src={slide5} alt="First slide" />
            <Card.Body className="m-5 cardtext">
              This applications built an online text editor as a progressive web
              app (PWA). The source code for the text editor was given to us and
              the main concept of this project was to setup the PWA. This
              application uses both frontend and backend technologies such as ,
              express.js, node.js, webpack, babel, idb, and indexdb to store
              data straight from the browser.
              <Card.Body className="m-5">
                <MyBtns name="Repository" index={index} />
                <MyBtns name="Live Deploy" index={index} />
              </Card.Body>
            </Card.Body>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-75 rounded" src={slide6} alt="First slide" />
            <Card.Body className="m-5 cardtext">
              In this group project we designed a website for all the readers of
              the world to spend less time searching for a book and more time
              reading. We asked ourselves, what is the hardest part about
              reading? To us, it seemed the biggest issue was a lack of good
              book recommendations. We also figured that making it easier to
              browse books based off a specific genre would further reduce time
              spent searching to maximize time reading.
              <Card.Body className="m-5">
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
