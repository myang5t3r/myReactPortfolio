import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg p-4">
        <div class="container-fluid">
          <ul class="navbar-nav pe-5 fs-5">
            <li class="nav-iztem">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Setup/TroubleShoot
              </a>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item">Reset Shades</button>
                </li>
                <li>
                  <button class="dropdown-item">Set Ramp Rate</button>
                </li>
                <li>
                  <button class="dropdown-item">Test</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
