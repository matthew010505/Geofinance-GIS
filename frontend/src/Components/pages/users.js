import React from "react";
import "./user.css";


export default function Users() {
  return (
    <div>
      <div class="user-container">
        <div class="users">
          <h1>Users Login</h1>
          <a href="login">
          <img src="/user-icon.jpg" alt="users" class="usericon"></img>
          </a>
        </div>
        <div class="bcagent">
          <h1>BC Agents Login</h1>
          <img src="/bc-agent1.jpg" alt="bcagents" class="bc-agenticon"></img>
        </div>
    </div>
    </div>
  );
}
