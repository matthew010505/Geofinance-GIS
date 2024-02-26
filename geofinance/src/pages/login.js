import React, { useState} from "react";
import axios from "axios";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareXTwitter,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Components/login.css";
import logImage from "../images/log.svg";
import registerImage from "../images/register.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const smoothnavigation = () => {
    const signInBtn = document.querySelector("#sign-in-btn");
    const signUpBtn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".login-container");

    signUpBtn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    signInBtn.addEventListener("click", () => {
      container.classList.remove("Sign-up-mode");
    });
  };

  const showpassword = () => {
    document.getElementById("password").type = document.getElementById(
      "showpassword"
    ).checked
      ? "email"
      : "password";
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5173/submit", { email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div class="login-container">
      <div class="forms-container">
        <div class="signin-signup">
          <form
            onSubmit={() => navigate("/dashboard")}
            class="sign-in-form"
            id="forms"
          >
            <h2 class="title">Login</h2>
            <br />
            <div class="input-feild">
              <FontAwesomeIcon icon={faEnvelope} className="input-icons" />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <br />
              <br />
            </div>
            <div class="input-feild">
              <FontAwesomeIcon icon={faLock} className="input-icons" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <br />
              <br />
            </div>
            <div class="checkbox">
              <input
                type="checkbox"
                id="showpassword"
                onClick={showpassword}
              ></input>
              <label>Show Password</label>
            </div>
            <br />
            <div class="button-container">
              <button type="reset" id="reset" class="buttons">
                Reset
              </button>
              <button type="submit" class="buttons" onClick={handleSubmit}>
                Login
              </button>
            </div>
            <br />
            <p class="social-text">Or Sign in with Social Platforms</p>
            <div class="social-media">
              <a href="https://www.facebook.com/" class="social-icon">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
              <a href="https://twitter.com/" class="social-icon">
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </a>
              <a href="https://www.google.com/" class="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="https://www.linkedin.com/feed/" class="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </form>
          <form action="" class="sign-up-form">
            <h2 class="title">Sign-up</h2>
            <br />
            <div class="input-feild">
              <FontAwesomeIcon icon={faEnvelope} className="input-icons" />
              <input type="email" placeholder="Email"></input>
              <br />
              <br />
            </div>
            <div class="input-feild">
              <FontAwesomeIcon icon={faLock} className="input-icons" />
              <input type="password" placeholder="Password"></input>
              <br />
              <br />
            </div>
            <div class="checkbox">
              <input type="checkbox"></input>
              <label>Show Password</label>
            </div>
            <br />
            <div class="button-container">
              <button type="reset" class="buttons">
                Reset
              </button>
              <button type="submit" class="buttons">
                SignUp
              </button>
            </div>
            <br />
            <p class="social-text">Or Sign Up with Social Platforms</p>
            <div class="social-media">
              <a href="https://www.facebook.com/" class="social-icon">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
              <a href="https://twitter.com/" class="social-icon">
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </a>
              <a href="https://www.google.com/" class="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="https://www.linkedin.com/feed/" class="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </form>
        </div>
        <div class="pannel-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New Here!</h3>
              <p>Sign Up!</p>
              <button
                class="buttons btn-transparent"
                id="sign-up-btn"
                onClick={smoothnavigation}
              >
                Sign Up
              </button>
            </div>
            <img src={logImage} class="images" alt="logo"></img>
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>One of us?</h3>
              <p>Sign In!</p>
              <button class="buttons btn-transparent" id="sign-in-btn">
                Sign In
              </button>
            </div>
            <img src={registerImage} class="images" alt="register"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
Tasks:

1.login and signup 
4. Do authentication
5. users page customization
6. Dashboard integrating powerbi
7. Add interactivity in home page (typing...)
*/

/*
  document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });
  */


