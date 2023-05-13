import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://atlantic-cliffs-server-production.up.railway.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // return necessary items
  return [services];
};

export default useServices;
