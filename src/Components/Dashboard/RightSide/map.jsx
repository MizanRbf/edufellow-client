import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  const position = [23.8103, 90.4125]; // Dhaka

  return (
    <div className="h-[300px] w-full rounded-md overflow-hidden shadow-md">
      <MapContainer center={position} zoom={10} className="w-full h-full">
        {/* Dark Mode Tile Layer */}
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position}>
          <Popup>
            Dhaka City <br /> Capital of Bangladesh
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
