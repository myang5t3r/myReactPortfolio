import React from "react";
import linkedIn from "../images/icons8-linkedin-48.png";
import github from "../images/icons8-github-64.png";
import resume from "../images/icons8-resume-64.png";
import Container from "react-bootstrap/Container";

import { TbBrandJavascript, TbBrandHtml5 } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";

export default function Tech() {
  return (
    <div className="p-4">
      <TbBrandJavascript
        className="m-4"
        style={{ color: "white", width: "8em", height: "8em" }}
      />
      <GrReactjs
        className="m-4"
        style={{ color: "white", width: "8em", height: "8em" }}
      />
      <TbBrandHtml5
        className="m-4"
        style={{ color: "white", width: "8em", height: "8em" }}
      />
    </div>
  );
}
