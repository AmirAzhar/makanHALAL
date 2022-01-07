// Styles
import mapStyles from "./mapStyles";

const mapConstants = {
  libraries: ["places"],
  mapContainerStyle: {
    width: "100vw",
    height: "100vh",
  },
  center: {
    lat: 1.3584108786341489,
    lng: 103.82516899727196,
  },
  options: {
    styles: mapStyles,
    disableDefaultUI: true,
    gestureHandling: "greedy",
  },
  zoom: 12,
};

export default mapConstants;
