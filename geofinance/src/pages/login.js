import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  faEnvelope,
  faLock,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
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
  const [userName, setUserName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const containerRef = useRef(null);

  useEffect(() => {
    const signUpBtn = document.getElementById("sign-up-btn");
    const signInBtn = document.getElementById("sign-in-btn");

    const handleSignUpClick = () => {
      containerRef.current.classList.add("sign-up-mode");
    };

    const handleSignInClick = () => {
      containerRef.current.classList.remove("sign-up-mode");
    };

    signUpBtn.addEventListener("click", handleSignUpClick);
    signInBtn.addEventListener("click", handleSignInClick);

    return () => {
      signUpBtn.removeEventListener("click", handleSignUpClick);
      signInBtn.removeEventListener("click", handleSignInClick);
    };
  }, []);

  const showpassword = () => {
    document.getElementById("password").type = document.getElementById(
      "showpassword"
    ).checked
      ? "text"
      : "password";
  };

  const signupshowpassword = () => {
    document.getElementById("sign-up-password").type = document.getElementById(
      "signupcheckbox"
    ).checked
      ? "text"
      : "password";
  };

  const signupreset = (e) => {
    e.preventDefault();
    setSignUpEmail("");
    setSignUpPassword("");
    setUserName("");
  };

  const reset = (e) => {
    e.preventDefault();
    setSignUpEmail("");
    setSignUpPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5173/login", { 
        signUpEmail, 
        signUpPassword 
      })

      .then((result) => {
        console.log(result);
        if(result.data==="Success"){
          window.alert("Logged in Successfully")
          navigate("/dashboard");
        }else if(result.data==="the password is incorrect"){
          window.alert("the password is incorrect");
        }else{
          window.alert("Invalid Credentials");
        }
      })

      .catch((err) => {
        console.log(err);
        window.alert(err.response?.data.message || "Internal Server Error");
      });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5173/submit", {
        userName,
        signUpEmail,
        signUpPassword,
      })

      .then((result) => {
        console.log(result);
        navigate("/dashboard");
      })

      .catch((err) => {
        console.log(err);
        window.alert(err.response?.data.message || "Internal Server Error");
      });
  };

  return (
    <div class="login-container" ref={containerRef}>
      <div class="forms-container">
        <div class="signin-signup">
          <form
            /*</div>onSubmit={() => navigate("/dashboard")}*/
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
                value={signUpEmail}
                placeholder="Email"
                autoComplete="off"
                required
                onChange={(e) => setSignUpEmail(e.target.value)}
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
                value={signUpPassword}
                required
                onChange={(e) => setSignUpPassword(e.target.value)}
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
              <button type="reset" id="reset" class="buttons" onClick={reset}>
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
          <form class="sign-up-form">
            <h2 class="title">Sign-up</h2>
            <br />
            <div class="input-feild">
              <FontAwesomeIcon icon={faCircleUser} className="input-icons" />
              <input
                type="text"
                placeholder="UserName"
                id="userName"
                name="userName"
                autoComplete="off"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
              <br />
              <br />
            </div>
            <div class="input-feild">
              <FontAwesomeIcon icon={faEnvelope} className="input-icons" />
              <input
                type="email"
                placeholder="Email"
                id="sign-up-email"
                name="sign-up-email"
                autoComplete="off"
                required
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
              ></input>
              <br />
              <br />
            </div>
            <div class="input-feild">
              <FontAwesomeIcon icon={faLock} className="input-icons" />
              <input
                type="password"
                placeholder="Password"
                id="sign-up-password"
                name="sign-up-password"
                autocomplete="off"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                required
              ></input>
              <br />
              <br />
            </div>
            <div class="checkbox">
              <input
                type="checkbox"
                id="signupcheckbox"
                onClick={signupshowpassword}
              ></input>
              <label>Show Password</label>
            </div>
            <br />
            <div class="button-container">
              <button
                type="reset"
                class="buttons"
                id="signupreset"
                onClick={signupreset}
              >
                Reset
              </button>
              <button
                type="submit"
                class="buttons"
                onClick={handleSignUpSubmit}
              >
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
              <button class="btn-transparent" id="sign-up-btn">
                Sign Up
              </button>
            </div>
            <img src={logImage} class="images" alt="logo"></img>
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>One of us?</h3>
              <p>Sign In!</p>
              <button class="btn-transparent" id="sign-in-btn">
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
1.Adding readme file
3. users page customization
4. Dashboard integrating powerbi
5. Add interactivity in home page (typing...)
6.github fork,pull request,merge d ba ,e d', and cloning
7. feautres, service card-carousel
*/
