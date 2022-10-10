import React from "react";
import Button from "react-bootstrap/Button";

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
    window.open(myarray[props.index]);
  };
  const handleClickLaunch = () => {
    console.log(props.index);
    window.open(gitrepo[props.index]);
  };

  // eslint-disable-next-line default-case
  switch (props.name) {
    case "About":
      return (
        <Button className="m-2 mybtn" variant="outline-light" size="lg">
          {props.name}
        </Button>
      );
    case "Projects":
      return (
        <Button className="m-2 mybtn" variant="outline-light" size="lg">
          {props.name}
        </Button>
      );
    case "Contact":
      return (
        <Button className="m-2 mybtn" variant="outline-light" size="lg">
          {props.name}
        </Button>
      );
    case "Technologies":
      return (
        <Button className="m-2 mybtn" variant="outline-light" size="lg">
          {props.name}
        </Button>
      );
    case "Submit":
      return (
        <Button
          className="m-2 mybtn"
          variant="outline-light"
          size="lg"
          type="submit"
        >
          {props.name}
        </Button>
      );
    case "Repository":
      return (
        <Button
          className="m-2 mybtn"
          variant="outline-light"
          type="button"
          size="lg"
          onClick={handleClickRepo}
        >
          {props.name}
        </Button>
      );
    case "Live Deploy":
      return (
        <Button
          className="m-2 mybtn"
          variant="outline-light"
          type="button"
          size="lg"
          onClick={handleClickLaunch}
        >
          {props.name}
        </Button>
      );
  }
}
