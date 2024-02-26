import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
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
              <a href="home" class="navigation">
                Home
              </a>
            </li>
            <li>
              <a href="about" class="navigation">
                About
              </a>
            </li>
            <li>
              <a href="feautre" class="navigation">
                Feautres
              </a>
            </li>
            <li>
              <a href="service" class="navigation">
                Services
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="button-container">
        <button class="login" onClick={() => navigate("/users")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
