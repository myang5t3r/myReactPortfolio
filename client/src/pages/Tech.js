import React from "react";
import linkedIn from "../images/icons8-linkedin-48.png";
import github from "../images/icons8-github-64.png";
import resume from "../images/icons8-resume-64.png";
import Container from "react-bootstrap/Container";

import { TbBrandJavascript, TbBrandHtml5 } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import {
  SiHandlebarsdotjs,
  SiTypescript,
  SiPython,
  SiJest,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiFirebase,
} from "react-icons/si";
import { DiJqueryUiLogo, DiNodejs, DiSqllite } from "react-icons/di";

export default function Tech() {
  return (
    <>
      <div className="p-4">
        <h3>Backend</h3>
        <TbBrandJavascript
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
        <SiTypescript
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
        <DiNodejs
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
        <SiExpress
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
        <SiJest
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
        <SiPython
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
      </div>
      <div>
        <h3>Frontend</h3>
        <GrReactjs
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
        <DiJqueryUiLogo
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
        <TbBrandHtml5
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
        <SiHandlebarsdotjs
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
      </div>
      <div>
        <h3>Database</h3>
        <SiMysql
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
        <DiSqllite
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
        <SiMongodb
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
        <SiFirebase
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
        <SiGraphql
          className="m-4"
          style={{ color: "white", width: "8em", height: "8em" }}
        />
      </div>
    </>
  );
}
