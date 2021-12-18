// Google Maps API
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

// Google Maps Constants
import mapConstants from "./mapConstants";

// Components
import FullMenu from "../sidebar/FullMenu";

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_JAVASCRIPT_API,
    libraries: mapConstants.libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps...";

  return (
    <div>
      <FullMenu />
      <GoogleMap
        mapContainerStyle={mapConstants.mapContainerStyle}
        zoom={mapConstants.zoom}
        center={mapConstants.center}
        options={mapConstants.options}
      ></GoogleMap>
    </div>
  );
}

export default Map;
