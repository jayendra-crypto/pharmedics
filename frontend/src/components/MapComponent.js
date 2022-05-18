import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import LocationMarker from "./LocationMarker";

const MapComponent = ({ hospitals, lat, lng, hospitalInfo }) => {
  const icon = L.icon({
    iconUrl: "/leaflet_images/marker-icon.png",
    iconSize: [15, 25],
  });

  return (
    <>
      <MapContainer
        style={{ height: "60vh", width: "100wh" }}
        center={[25.7041, 77.1025]}
        zoom={6}
        zoomControl={false}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hospitals.map((hospital, i) => {
          return (
            <Marker
              key={i}
              position={[hospital.Latitude,hospital.Longitude]}
              icon={icon}
            >
              <Tooltip direction="top">{hospital.hospitalName}</Tooltip>
            </Marker>
          );
        })}
        <ZoomControl position="bottomleft" />
        <LocationMarker lat={lat} lng={lng} hospitalInfo={hospitalInfo} />
      </MapContainer>
    </>
  );
};

export default MapComponent;
