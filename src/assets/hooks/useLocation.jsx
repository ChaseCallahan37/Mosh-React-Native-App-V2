import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocationPermission = async () => {
    try {
      const result = await Location.requestForegroundPermissionsAsync();
      if (!result.granted) {
        alert("Error", "You will need to provide you device location");
      } else {
        const { coords, timestamp } = await Location.getCurrentPositionAsync();
        setLocation({ coords, timestamp });
      }
    } catch (error) {}
  };

  useEffect(() => {
    getLocationPermission();
  }, []);

  return location;
};
