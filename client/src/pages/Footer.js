import React from "react";
import linkedIn from "../images/icons8-linkedin-48.png";
import github from "../images/icons8-github-64.png";
import resume from "../images/icons8-resume-64.png";
import resumelink from "../images/MatthewYang_Resume_7_30_22.pdf";

export default function Footer() {
  return (
    <div className="col-sm-12 d-flex justify-content-center">
      <a
        href="https://www.linkedin.com/in/matthew-yang-48384765/"
        target="_blank"
      >
        <img
          className="footer_icons m-4"
          src={linkedIn}
          alt="LinkedIn icon link"
        />
      </a>
      <a href="https://github.com/myang5t3r/" target="_blank">
        <img
          className="footer_icons_github m-4"
          src={github}
          alt="Github icon link"
        />
      </a>
      <a href={resumelink} target="_blank">
        <img
          className="footer_icons_resume m-4"
          src={resume}
          alt="Resume icon link"
        />
      </a>
    </div>
  );
}
