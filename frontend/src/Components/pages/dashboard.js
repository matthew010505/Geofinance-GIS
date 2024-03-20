import React, { useState, useEffect } from "react";
import "../Dashboard/dashboard.css";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import data1 from "../data/dataa.json";
import Dashboardheader from "../Dashboard/dashboardheader";

export default function Dashboard() {
  const [pincode, setpincode] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedcrop, setSelectedcrop] = useState("");
  const [selectedseason, setSelectedseason] = useState("");
  const [selectedgender, setSelectedGender] = useState("");
  const [latitude, setLatitude] = useState(20.593683);
  const [longitude, setLongitude] = useState(78.962883);
  const [zoom, setZoom] = useState(5);
  const [markerColor, setmarkerColor] = useState("green");
  let [filteredstations, setfilteredstations] = useState([]);

  useEffect(() => {
    const filteredData = data1.filter((data) => data["SEASON"] === "Rabi");
    console.log(filteredData);
    setfilteredstations(filteredData);
  }, []);

  useEffect(() => {
    setmarkerColor("green");
  }, []);

  useEffect(() => {
    setLatitude(20.593683);
    setLongitude(78.962883);
  }, []);

  useEffect(() => {
    setZoom(5);
  }, []);

  function countPincodesByState(data) {
    const statePinCodeCount = {};
    data.forEach((entry) => {
      const state = entry["SEASON"];
      if (state) {
        if (!statePinCodeCount[state]) {
          statePinCodeCount[state] = 1;
        } else {
          statePinCodeCount[state]++;
        }
      }
    });

    return statePinCodeCount;
  }
  console.log(countPincodesByState(data1));

  const handlePincodeApply = () => {
    const pincodeData = data1.filter(
      (data) => data["Pincode"] === Number(pincode)
    );
    if (pincodeData.length > 0) {
      setfilteredstations([...pincodeData]);
      setLatitude(pincodeData[0]["Latitude"]);
      setLongitude(pincodeData[0]["Longitude"]);
      setmarkerColor("blue");
      setZoom(15);
      console.log(pincodeData[0]["Latitude"]);
      console.log(pincodeData[0]["Longitude"]);
    } else {
      alert("Pincode not present in the data");
    }
  };
  console.log(filteredstations);

  const handleStateApply = () => {
    const stateData = data1.filter((data) => data["State"] === selectedState);
    console.log(stateData.length);
    if (stateData.length > 0) {
      setfilteredstations([...stateData]);
      setmarkerColor("blue");
    } else {
      alert("Enter Correct State");
    }
  };

  const handleCropApply = () => {
    const cropData = data1.filter((data) => data["CROP NAME"] === selectedcrop);
    console.log(cropData);
    if (cropData.length > 0) {
      setfilteredstations([...cropData]);
      setmarkerColor("blue");
    } else {
      alert("Enter correct Crop Name");
    }
  };

  const handleSeasonApply = () => {
    const seasonData = data1.filter(
      (data) => data["SEASON"] === selectedseason
    );
    if (seasonData.length > 0) {
      setfilteredstations([...seasonData]);
      setmarkerColor("blue");
    } else {
      alert("Enter correct Season Name");
    }
  };

  const handleGenderApply = () => {
    const genderData = data1.filter(
      (data) => data["Gender"] === selectedgender
    );
    if (genderData.length > 0) {
      console.log(genderData);
      setfilteredstations([...genderData]);
      setmarkerColor("blue");
    } else {
      alert("Enter correct Gender");
    }
  };

  return (
    <div>
      <Dashboardheader />
      <div class="dashboard-container">
        <div class="filter-container">
          <div class="pincode-container">
            <label>Select Pincode</label>
            <br />
            <input
              type="text"
              placeholder="Enter your Pincode"
              id="pincode"
              class="pincode"
              name="pincode"
              value={pincode}
              autocomplete="off"
              onChange={(e) => setpincode(e.target.value)}
            ></input>
            <button class="buttons1" onClick={handlePincodeApply}>
              Apply
            </button>
            <br />
          </div>
          <div class="state-container">
            <label>Select State</label>
            <br />
            <select
              name="state"
              className="state"
              autoComplete="off"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="" disabled selected>
                Select State
              </option>
              <option>Andhra Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chandigarh</option>
              <option>Chattisgarh</option>
              <option>Delhi</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jammu and Kashmir</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Lakshadweep</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Megalaya</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
            </select>
            <button class="buttons1" onClick={handleStateApply}>
              Apply
            </button>
            <br />
          </div>
          <div class="crop-container">
            <label>Select Crop</label>
            <br />
            <select
              name="crop"
              className="crop"
              value={selectedcrop}
              onChange={(e) => setSelectedcrop(e.target.value)}
              autocomplete="off"
            >
              <option value="" disabled selected>
                Select Crop
              </option>
              <option>Bajra</option>
              <option>Banana</option>
              <option>Barley</option>
              <option>Black pepper</option>
              <option>Garlic</option>
              <option>Gram</option>
              <option>Groundnut</option>
              <option>Jowar</option>
              <option>Khesari</option>
              <option>Maize</option>
              <option>Masoor</option>
              <option>Moong(Green Gram)</option>
              <option>Niger seed</option>
              <option>Onion</option>
              <option>Other Cereals & Millets</option>
              <option>Other Rabi pulses</option>
              <option>Papaya</option>
              <option>Peas & beans (Pulses)</option>
              <option>Potato</option>
              <option>Ragi</option>
              <option>Rapeseed &Mustard</option>
              <option>Rice</option>
              <option>Safflower</option>
              <option>Sesamum</option>
              <option>Sugercane</option>
              <option>Sunflower</option>
              <option>Sweet potato</option>
              <option>Tobacco</option>
              <option>Wheat</option>
            </select>
            <button class="buttons1" onClick={handleCropApply}>
              Apply
            </button>
          </div>
          <div class="season-container">
            <label>Select Season</label>
            <br />
            <select
              name="season"
              className="season"
              autocomplete="off"
              value={selectedseason}
              onChange={(e) => setSelectedseason(e.target.value)}
            >
              <option value="" class="option1" disabled selected>
                Select Season
              </option>
              <option>Autumn</option>
              <option>Kharif</option>
              <option>Rabi</option>
              <option>Summer</option>
              <option>Whole Year</option>
              <option>Winter</option>
            </select>
            <button class="buttons1" onClick={handleSeasonApply}>
              Apply
            </button>
            <br />
          </div>
          <div class="gender-container">
            <label>Select Gender</label>
            <br />
            <select
              name="gender"
              className="gender"
              autocomplete="off"
              value={selectedgender}
              onChange={(e) => setSelectedGender(e.target.value)}
            >
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <button className="buttons1" onClick={handleGenderApply}>
              Apply
            </button>
            <br />
          </div>
        </div>
        <div class="map-container">
          <MapContainer
            center={[latitude, longitude]}
            zoom={zoom}
            zoomDelta={0.5}
            zoomControl={false}
            zoomSnap={0.5}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredstations.map((data) => (
              <CircleMarker
                key={data.Pincode}
                center={[data.Latitude, data.Longitude]}
                radius={10}
                pathOptions={{
                  color: markerColor,
                  fillcolor: "#f03",
                  fillOpacity: 0.6,
                }}
              >
                <Popup position={[data.Latitude, data.Longitude]}>
                  <div>
                    <p>Name of BC: {data["Name of BC"]}</p>
                    <p>Contact: {data["Contact Number"]}</p>
                    <p>Bank Name: {data["Bank Name"]}</p>
                    <p>State: {data["State"]}</p>
                    <p>District: {data["District"]}</p>
                    <p>Pincode: {data["Pincode"]}</p>
                    <p>CropName: {data["CROP NAME"]}</p>
                    <p>CropSeason: {data["SEASON"]}</p>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
