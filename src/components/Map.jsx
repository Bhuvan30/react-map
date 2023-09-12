import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { useBins } from "../contexts/BinsContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import L from "leaflet"; // Make sure to import the 'leaflet' library
import trashIcon from "../../public/trash.png";
import officeIcon from "../../public/office.png";

function GetIcon(Mapicon) {
  return L.icon({
    iconUrl: Mapicon, // Use the imported variable for the iconUrl
    iconSize: [40, 40], // Use an array for iconSize
  });
}

function Map() {
  const { bins } = useBins();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const [searchParams, setSearchParams] = useSearchParams();
  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation();

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geoLocationPosition)
        setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
    },
    [geoLocationPosition]
  );

  return (
    <div className={styles.mapContainer}>
      <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "Loading..." : "Use your position"}
      </Button>
      <MapContainer
        center={mapPosition}
        zoom={15}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          maxZoom={18}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        {/* {bins.map((bin) => (
          <Marker position={mapPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))} */}
        {bins.map((bin) => (
          <Marker
            key={bin.id}
            position={[bin.position.lat, bin.position.lng]}
            icon={
              bin.icon === "trashIcon"
                ? GetIcon(trashIcon)
                : GetIcon(officeIcon)
            }
          >
            <Popup>
              <span>{bin.emoji}</span>
              <span>{bin.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;

{
  /* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */
}
{
  /* <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        /> */
}

// 13.115585, 77.633392
// 13.116264, 77.633037
// 13.118677, 77.632973
// 13.114174, 77.633542
// 13.113094, 77.631167
