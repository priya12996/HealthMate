import React, { useEffect, useState } from "react";

function Hospitals() {
  const [hospitals, setHospitals] = useState([]);
useEffect(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    fetch(`http://localhost:5000/api/hospitals?lat=${lat}&lng=${lng}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setHospitals(data.elements);
      });
  });
}, []);


  return (
    <div>
      <h2>Nearby Hospitals 🏥</h2>

      {hospitals.length === 0 && <p>Loading hospitals...</p>}

      {hospitals.map((h, index) => (
        <div key={index}>
          <h4>{h.tags?.name || "Hospital"}</h4>
          <p>Lat: {h.lat} | Lng: {h.lon}</p>
        </div>
      ))}
    </div>
  );
}

export default Hospitals;
