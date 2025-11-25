import React, { useState } from "react";

const WaterTracker = () => {
  const [glasses, setGlasses] = useState(0);

  // Add 1 glass
  const addGlass = () => {
    setGlasses(glasses + 1);
  };

  // Reset counter
  const reset = () => {
    setGlasses(0);
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "#e0f7fa",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        maxWidth: "300px",
        margin: "auto",
      }}
    >
      <h2>💧 Water Intake Tracker</h2>
      <p style={{ fontSize: "20px", marginBottom: "10px" }}>
        Glasses today: <strong>{glasses}</strong>
      </p>
      <button
        onClick={addGlass}
        style={{
          padding: "10px 20px",
          margin: "5px",
          border: "none",
          borderRadius: "8px",
          background: "#0288d1",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        +1 Glass
      </button>
      <button
        onClick={reset}
        style={{
          padding: "10px 20px",
          margin: "5px",
          border: "none",
          borderRadius: "8px",
          background: "#d32f2f",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default WaterTracker;
