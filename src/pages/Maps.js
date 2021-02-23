import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



export default function Maps(props) {
  const position = [-7.2232, -35.8907]

  return (
    <div>
      <MapContainer center={position} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} >
          <Popup>
            Novo escritório <br /> Dilis GS
          </Popup>
        </Marker>
      </MapContainer>

    </div>
  )
}
