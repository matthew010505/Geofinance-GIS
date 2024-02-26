import React from "react";
import "./style.css";

function Body() {
  return (
    <div class="body-container">
      <div class="content">
        <h2>Welcome To </h2>
        <h1>GeoFinance</h1>
        <br></br>
        <p>
          A digital Financial Platform for rural Indians, particularly Farmers
          to enhance their digital financial engagement by virtual
          representation of financial data using Geographic Informative System (GIS).
          By leveraging GIS technology, the tool aims to bridge the digital divide, making financial information more accessible ultimately fostering financial inclusion and empowerment.
        </p>
      </div>
      <div class="image-container">
        <img
          src="https://msmeafricaonline.com/wp-content/uploads/2020/08/digital-finance.jpg"
          alt="financialImage"
          class="finance"
        ></img>
      </div>
    </div>
  );
}

export default Body;
