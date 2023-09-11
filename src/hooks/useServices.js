import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://atlantic-clifs-api.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // return necessary items
  return [services];
};

export default useServices;
