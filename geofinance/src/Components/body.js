import React, { useEffect, useRef } from "react";
import "./style.css";

function Body() {
  const typingTextRef = useRef(null);
  useEffect(() => {
    // Function to simulate typing animation
    const typeText = (target, text, speed) => {
      let i = 0;
      function type() {
        if (i < text.length) {
          target.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    };

    // Get all elements with the typing-text class
    const typingTextElements = document.querySelectorAll(".typing-text");

    // Loop through each element and apply typing animation
    typingTextElements.forEach((element) => {
      const textToType = element.textContent;
      element.textContent = ""; // Clear the text content
      typeText(element, textToType, 50); // Adjust speed as needed
    });
  }, []);
  return (
    <div class="body-container">
      {/* <div class="content">
        <h2 className="typing-text" ref={typingTextRef}>
          Welcome To{" "}
        </h2>
        <h1 className="typing-text" ref={typingTextRef}>
          GeoFinance
        </h1>
        <br></br>
        <p>
          A digital Financial Platform for rural Indians, particularly Farmers
          to enhance their digital financial engagement by virtual
          representation of financial data using Geographic Informative System
          (GIS). By leveraging GIS technology, the tool aims to bridge the
          digital divide, making financial information more accessible
          ultimately fostering financial inclusion and empowerment.
        </p>
      </div> */}
      <div class="image-container">
        <img
          src="/Sirsi, Karnataka.jpeg "
          alt="financialImage"
          class="finance"
        ></img>
      </div>
    </div>
  );
}

export default Body;
