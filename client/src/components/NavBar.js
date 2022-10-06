import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg p-4">
        <div className="container-fluid">
          <h1 style={{ color: "white" }}>Matthew Yang</h1>
          <ul className="navbar-nav pe-5 fs-5">
            <li className="nav-iztem">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "white" }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Projects
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
