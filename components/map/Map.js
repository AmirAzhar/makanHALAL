// React
import { useState, useRef, useCallback, useEffect } from "react";

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
import LocateMe from "./LocateMe";

function Map() {
  // Selected infoWindow
  const [selected, setSelected] = useState(null);

  // Current Location
  const [currentLocation, setCurrentLocation] = useState(mapConstants.center);

  // Reference the map
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // Pan to a given location
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  // Pan to location at the start
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newCurrentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        panTo(newCurrentLocation);
        setCurrentLocation(newCurrentLocation);
        console.log("set");
      },
      () => null
    );
  }, [panTo]);

  // Init the google map API
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_JAVASCRIPT_API,
    libraries: mapConstants.libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps...";

  return (
    <div>
      <FullMenu />
      <LocateMe panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapConstants.mapContainerStyle}
        zoom={mapConstants.zoom}
        center={mapConstants.center}
        options={mapConstants.options}
        onLoad={onMapLoad}
      >
        <Marker
          position={{ lat: currentLocation.lat, lng: currentLocation.lng }}
          icon={{
            url: "/myLocationDot.svg",
            scaledSize: new window.google.maps.Size(20, 20),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
        />
        {markers.map((marker) => (
          <Marker
            key={marker.address}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "/halalMarker.png",
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
