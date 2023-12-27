import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lng = searchParams.get("lng");
  const lat = searchParams.get("lat");
  const navigation = useNavigate();

  return (
    <div className={styles.mapContainer} onClick={() => navigation("form")}>
      <h1>Map</h1>
      <h1>
        Position:{lat}, {lng}
      </h1>
      <button onClick={() => setSearchParams({ lng: "20", lat: "50" })}>
        Change City
      </button>
    </div>
  );
};

export default Map;
