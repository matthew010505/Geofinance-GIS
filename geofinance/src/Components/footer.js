import React from "react";
import {
  faSquareFacebook,
  faSquareXTwitter,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

export default function Footer() {
  return (
    <div class="footer">
      <div className="sb-footer section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4>Business</h4>
            <a href="https://google.com/">
              <p>Users</p>
            </a>
            <a href="https://google.com/">
              <p>Bc-Agents</p>
            </a>
            <a href="https://google.com/">
              <p>Admin</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Authentication</h4>
            <a href="https://google.com/">
              <p>Login</p>
            </a>
            <a href="https://google.com/">
              <p>Sign-up</p>
            </a>
            <a href="https://google.com/">
              <p>Details</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Resources</h4>
            <a href="https://google.com/">
              <p>PowerBi</p>
            </a>
            <a href="https://google.com/">
              <p>GIS</p>
            </a>
            <a href="https://google.com/">
              <p>Dashboard</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Partners</h4>
            <a href="https://google.com/">
              <p>Grameen Foundation</p>
            </a>
            <a href="https://google.com/">
              <p>BC-Registry</p>
            </a>
            <a href="https://google.com/">
              <p>Terratech</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Links</h4>
            <a href="https://google.com/">
              <p>Home</p>
            </a>
            <a href="https://google.com/">
              <p>About</p>
            </a>
            <a href="https://google.com/">
              <p>Feautres</p>
            </a>
            <a href="https://google.com/">
              <p>Services</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Social-Links</h4>
            <div class="social-media">
              <a href="https://www.facebook.com/" class="social-icon1">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
              <a href="https://twitter.com/" class="social-icon1">
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </a>
              <a href="https://www.google.com/" class="social-icon1">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="https://www.linkedin.com/feed/" class="social-icon1">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb-footer-below">
          <div className="sb-footer-copyright">
            <p>@{new Date().getFullYear()} Apply. All right reserved.</p>
          </div>
          <div className="sb-footer-below-links">
            <a href="https://google.com/">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="https://google.com/">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="https://google.com/">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="https://google.com/">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
