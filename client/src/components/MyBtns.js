import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

const myarray = [
  "https://myang5t3r.github.io/TimedCodeQuiz/",
  "https://myang5t3r.github.io/myWeatherDashboard/",
  "https://chuckfee23.github.io/project1-group5/",
  "https://myang5t3r.github.io/myDayScheduler/",
  "https://pure-crag-34548.herokuapp.com/",
];

const gitrepo = [
  "https://github.com/myang5t3r/TimedCodeQuiz",
  "https://github.com/myang5t3r/myWeatherDashboard",
  "https://github.com/chuckfee23/project1-group5",
  "https://github.com/myang5t3r/myDayScheduler",
  "https://github.com/myang5t3r/myTextEditor",
];
export default function MyBtns(props) {
  const handleClickRepo = () => {
    console.log(props.index);
    // window.open(myarray[props.index]);
  };
  const handleClickLaunch = () => {
    console.log(props.index);
    // window.open(gitrepo[props.index]);
  };

  switch (props.name) {
    case "About Me":
      return (
        <Button className="m-2" variant="outline-light">
          {props.name}
        </Button>
      );
    case "Projects":
      return (
        <Button className="m-2" variant="outline-light">
          {props.name}
        </Button>
      );
    case "Contacts":
      return (
        <Button className="m-2" variant="outline-light">
          {props.name}
        </Button>
      );
    case "Repository":
      return (
        <Button
          className="m-2"
          variant="outline-light"
          type="button"
          onClick={handleClickRepo}
        >
          {props.name}
        </Button>
      );
    case "Launch":
      return (
        <Button
          className="m-2"
          variant="outline-light"
          type="button"
          onClick={handleClickLaunch}
        >
          {props.name}
        </Button>
      );
  }
}
