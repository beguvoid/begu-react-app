import React, { Component } from "react";
import Goback from "../Side/Goback";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 47.8864,
  lng: 106.9057,
};

export default class Google extends Component {
  render() {
    return (
      <div>
        <Goback />
        <LoadScript googleMapsApiKey="">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}
