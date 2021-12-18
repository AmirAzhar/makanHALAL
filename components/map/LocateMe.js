// Next
import Image from "next/image";

// Styles
import mapStyles from "/styles/Map.module.css";

function LocateMe({ panTo }) {
  return (
    <button
      className={mapStyles.locate}
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <Image src="/locateMe.svg" alt="My Location" width={30} height={30} />
    </button>
  );
}

export default LocateMe;
