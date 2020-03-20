import React from "react";
import { Map, TileLayer } from "react-leaflet";

export default function WorldMap() {
    return (
      <Map center={[45.4, -75.7]} zoom={2}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    );
  }