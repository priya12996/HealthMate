// // import React, { useEffect, useState } from "react";

// // function Hospitals() {
// //   const [hospitals, setHospitals] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   function getDistance(lat1, lon1, lat2, lon2) {
// //     const R = 6371;
// //     const dLat = (lat2 - lat1) * (Math.PI / 180);
// //     const dLon = (lon2 - lon1) * (Math.PI / 180);

// //     const a =
// //       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
// //       Math.cos(lat1 * (Math.PI / 180)) *
// //         Math.cos(lat2 * (Math.PI / 180)) *
// //         Math.sin(dLon / 2) *
// //         Math.sin(dLon / 2);

// //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// //     return R * c;
// //   }

// //   // 🔥 Smart Booking Link Generator
// //   const getBookingLink = (name) => {
// //     return `https://www.google.com/search?q=${name}+hospital+appointment`;
// //   };

// //   useEffect(() => {
// //     if (!navigator.geolocation) {
// //       setError("Geolocation not supported");
// //       setLoading(false);
// //       return;
// //     }

// //     navigator.geolocation.getCurrentPosition(
// //       (position) => {
// //         const lat = position.coords.latitude;
// //         const lng = position.coords.longitude;

// //         fetch(`http://localhost:5000/api/hospitals?lat=${lat}&lng=${lng}`)
// //           .then((res) => res.json())
// //           .then((data) => {
// //             const hospitalsData = data.elements || [];

// //             const withDistance = hospitalsData.map((h) => {
// //               const distance = getDistance(lat, lng, h.lat, h.lon);
// //               return { ...h, distance };
// //             });

// //             withDistance.sort((a, b) => a.distance - b.distance);

// //             setHospitals(withDistance);
// //             setLoading(false);
// //           })
// //           .catch(() => {
// //             setError("Failed to fetch hospitals");
// //             setLoading(false);
// //           });
// //       },
// //       () => {
// //         setError("Location permission denied");
// //         setLoading(false);
// //       }
// //     );
// //   }, []);

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h2>🏥 Nearby Hospitals</h2>

// //       {loading && <p>Loading hospitals...</p>}
// //       {error && <p style={{ color: "red" }}>{error}</p>}

// //       {/* 🌟 Nearest Hospital */}
// //       {hospitals.length > 0 && (
// //         <div
// //           style={{
// //             background: "#d4edda",
// //             padding: "15px",
// //             borderRadius: "10px",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           <h3>🌟 Nearest Hospital</h3>
// //           <h4>{hospitals[0].tags?.name || "Hospital"}</h4>
// //           <p>📍 Distance: {hospitals[0].distance.toFixed(2)} km</p>

// //           <div style={{ marginTop: "10px" }}>
// //             <a
// //               href={`https://www.google.com/maps?q=${hospitals[0].lat},${hospitals[0].lon}`}
// //               target="_blank"
// //               rel="noreferrer"
// //               style={{ marginRight: "10px" }}
// //             >
// //               📍 Open in Maps
// //             </a>

// //             <a
// //               href={getBookingLink(hospitals[0].tags?.name)}
// //               target="_blank"
// //               rel="noreferrer"
// //             >
// //               🏥 Book Appointment
// //             </a>
// //           </div>
// //         </div>
// //       )}

// //       {/* 🏥 All Hospitals */}
// //       {hospitals.map((h, index) => (
// //         <div
// //           key={index}
// //           style={{
// //             border: "1px solid #ccc",
// //             borderRadius: "10px",
// //             padding: "15px",
// //             margin: "10px 0",
// //           }}
// //         >
// //           <h4>{h.tags?.name || "Hospital"}</h4>
// //           <p>📍 Distance: {h.distance.toFixed(2)} km</p>

// //           <div style={{ marginTop: "10px" }}>
// //             <a
// //               href={`https://www.google.com/maps?q=${h.lat},${h.lon}`}
// //               target="_blank"
// //               rel="noreferrer"
// //               style={{ marginRight: "10px" }}
// //             >
// //               📍 View Location
// //             </a>

// //             <a
// //               href={getBookingLink(h.tags?.name)}
// //               target="_blank"
// //               rel="noreferrer"
// //             >
// //               🏥 Book Appointment
// //             </a>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Hospitals;


// import React, { useEffect, useState } from "react";

// function Hospitals() {
//   const [hospitals, setHospitals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   function getDistance(lat1, lon1, lat2, lon2) {
//     const R = 6371;
//     const dLat = (lat2 - lat1) * (Math.PI / 180);
//     const dLon = (lon2 - lon1) * (Math.PI / 180);

//     const a =
//       Math.sin(dLat / 2) ** 2 +
//       Math.cos(lat1 * (Math.PI / 180)) *
//         Math.cos(lat2 * (Math.PI / 180)) *
//         Math.sin(dLon / 2) ** 2;

//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     return R * c;
//   }

//   const getBookingLink = (name) => {
//     return `https://www.google.com/search?q=${name}+hospital+appointment`;
//   };

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       setError("Geolocation not supported");
//       setLoading(false);
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         try {
//           const lat = position.coords.latitude;
//           const lng = position.coords.longitude;

//           const res = await fetch(
//             `http://localhost:5000/api/hospitals?lat=${lat}&lng=${lng}`
//           );

//           if (!res.ok) throw new Error("Server error");

//           const data = await res.json();

//           const hospitalsData = data.elements || [];

//           const withDistance = hospitalsData.map((h) => ({
//             ...h,
//             distance: getDistance(lat, lng, h.lat, h.lon),
//           }));

//           withDistance.sort((a, b) => a.distance - b.distance);

//           setHospitals(withDistance);
//         } catch (err) {
//           console.error(err);
//           setError("Failed to fetch hospitals");
//         } finally {
//           setLoading(false);
//         }
//       },
//       () => {
//         setError("Location permission denied");
//         setLoading(false);
//       }
//     );
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>🏥 Nearby Hospitals</h2>

//       {loading && <p>Loading hospitals...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {hospitals.length > 0 && (
//         <div style={{ background: "#d4edda", padding: "15px", borderRadius: "10px" }}>
//           <h3>🌟 Nearest Hospital</h3>
//           <h4>{hospitals[0].name}</h4>
//           <p>📍 {hospitals[0].distance.toFixed(2)} km</p>
//         </div>
//       )}

//       {hospitals.map((h, i) => (
//         <div key={i} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
//           <h4>{h.name}</h4>
//           <p>📍 {h.distance.toFixed(2)} km</p>

//           <a
//             href={`https://www.google.com/maps?q=${h.lat},${h.lon}`}
//             target="_blank"
//             rel="noreferrer"
//           >
//             📍 View
//           </a>

//           <br />

//           <a href={getBookingLink(h.name)} target="_blank" rel="noreferrer">
//             🏥 Book
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Hospitals;

import React, { useEffect, useState } from "react";

function Hospitals() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  // 🏥 Safe hospital name getter (BEST FIX 😎)
  const getHospitalName = (h) => {
    return h.tags?.name || h.tags?.amenity || "Unknown Hospital";
  };

  const getBookingLink = (name) => {
    return `https://www.google.com/search?q=${name}+hospital+appointment`;
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
          const res = await fetch(
            `${BACKEND_URL}/api/hospitals?lat=${lat}&lng=${lng}`
          );

          if (!res.ok) throw new Error("Server error");

          const data = await res.json();

          const hospitalsData = data.elements || [];

          const withDistance = hospitalsData.map((h) => ({
            ...h,
            distance: getDistance(lat, lng, h.lat, h.lon),
          }));

          withDistance.sort((a, b) => a.distance - b.distance);

          setHospitals(withDistance);
        } catch (err) {
          console.error(err);
          setError("Failed to fetch hospitals");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied");
        setLoading(false);
      }
    );
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🏥 Nearby Hospitals</h2>

      {loading && <p>Loading hospitals...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 🌟 Nearest Hospital */}
      {hospitals.length > 0 && (
        <div
          style={{
            background: "#d4edda",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>🌟 Nearest Hospital</h3>
          <h4>{getHospitalName(hospitals[0])}</h4>
          <p>📍 {hospitals[0].distance.toFixed(2)} km</p>

          <a
            href={`https://www.google.com/maps?q=${hospitals[0].lat},${hospitals[0].lon}`}
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: "10px" }}
          >
            📍 Open in Maps
          </a>

          <a
            href={getBookingLink(getHospitalName(hospitals[0]))}
            target="_blank"
            rel="noreferrer"
          >
            🏥 Book Appointment
          </a>
        </div>
      )}

      {/* 🏥 All Hospitals */}
      {hospitals.map((h, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px 0",
          }}
        >
          <h4>{getHospitalName(h)}</h4>
          <p>📍 {h.distance.toFixed(2)} km</p>

          <a
            href={`https://www.google.com/maps?q=${h.lat},${h.lon}`}
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: "10px" }}
          >
            📍 View Location
          </a>

          <a
            href={getBookingLink(getHospitalName(h))}
            target="_blank"
            rel="noreferrer"
          >
            🏥 Book Appointment
          </a>
        </div>
      ))}
    </div>
  );
}

export default Hospitals;