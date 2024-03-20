import React from "react";
import "./dashboardheader.css";

export default function Dashboardheader() {
  return (
    <div class="container">
      <div class="logo">
        <img
          src="https://seekvectorlogo.com/wp-content/uploads/2022/02/grameen-foundation-vector-logo-2022.png"
          alt="logo"
          class="image-logo"
        ></img>
      </div>
      <div class="navlinks">
        <nav>
          <ul>
            <li>
              <a href="dashboard" class="navigation">
                Map-view
              </a>
            </li>
            <li>
              <a href="datavisualization" class="navigation">
                Data Visualization
              </a>
            </li>
            <li>
              <a href="tableview" class="navigation">
                Table-view
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
