// React
import { useState } from "react";

// Google Maps API
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from "@react-google-maps/api";

// Google Maps Constants
import mapConstants from "./mapConstants";
import markers from "./fakeMapData";

// Components
import FullMenu from "../sidebar/FullMenu";

function Map() {
  const [selected, setSelected] = useState(null);
  // Init the google map API
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_JAVASCRIPT_API,
    libraries: mapConstants.libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) {
    return "Loading maps...";
  }

  return (
    <div>
      <FullMenu />
      <GoogleMap
        mapContainerStyle={mapConstants.mapContainerStyle}
        zoom={mapConstants.zoom}
        center={mapConstants.center}
        options={mapConstants.options}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.address}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "/halalMarker.svg",
              scaledSize: new window.google.maps.Size(50, 50),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h4>{selected.name}</h4>
              <h4>{selected.address}</h4>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default Map;
