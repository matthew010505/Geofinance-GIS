import React from "react";
import "../Components/style.css";
import userIcon from "../images/user-icon.jpg";
import bcAgent from "../images/bc-agent1.jpg";
import Header from "../Components/Header";

export default function Users() {
  return (
    <div>
      <Header/>
      <div class="user-container">
        <div class="users">
          <h1>Users Login</h1>
          <a href="login">
          <img src={userIcon} alt="users" class="usericon"></img>
          </a>
        </div>
        <div class="bcagent">
          <h1>BC Agents Login</h1>
          <img src={bcAgent} alt="bcagents" class="bc-agenticon"></img>
        </div>
    </div>
    </div>
  );
}
