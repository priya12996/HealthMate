import React, { useState, useEffect } from "react";

const WaterTracker = () => {
  const [glasses, setGlasses] = useState(0);
  const [goal, setGoal] = useState(8);
  const [lastUpdated, setLastUpdated] = useState("");

  // Load data from localStorage
  useEffect(() => {
    const savedGlasses = localStorage.getItem("glasses");
    const savedGoal = localStorage.getItem("goal");

    if (savedGlasses) setGlasses(Number(savedGlasses));
    if (savedGoal) setGoal(Number(savedGoal));
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem("glasses", glasses);
    localStorage.setItem("goal", goal);
    setLastUpdated(new Date().toLocaleTimeString());
  }, [glasses, goal]);

  const addGlass = () => {
    setGlasses(glasses + 1);
  };

  const removeGlass = () => {
    if (glasses > 0) setGlasses(glasses - 1);
  };

  const reset = () => {
    setGlasses(0);
  };

  const progress = Math.min((glasses / goal) * 100, 100);

  return (
    <div
      style={{
        padding: "20px",
        background: "#e0f7fa",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        maxWidth: "350px",
        margin: "auto",
      }}
    >
      <h2>💧 Water Tracker 😎</h2>

      <p style={{ fontSize: "18px" }}>
        Glasses: <strong>{glasses}</strong> / {goal}
      </p>

      {/* Progress Bar */}
      <div
        style={{
          height: "10px",
          background: "#b2ebf2",
          borderRadius: "10px",
          margin: "10px 0",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#0288d1",
            borderRadius: "10px",
            transition: "0.3s",
          }}
        ></div>
      </div>

      {/* Goal Completed */}
      {glasses >= goal && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          🎉 Goal Completed! Stay hydrated!
        </p>
      )}

      {/* Buttons */}
      <div>
        <button onClick={addGlass} style={btnStyle("#0288d1")}>
          +1 Glass
        </button>
        <button onClick={removeGlass} style={btnStyle("#f57c00")}>
          -1 Glass
        </button>
        <button onClick={reset} style={btnStyle("#d32f2f")}>
          Reset
        </button>
      </div>

      {/* Goal Input */}
      <div style={{ marginTop: "10px" }}>
        <label>Set Goal: </label>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(Number(e.target.value))}
          style={{
            width: "60px",
            padding: "5px",
            borderRadius: "5px",
            marginLeft: "5px",
          }}
        />
      </div>

      {/* Last updated */}
      <p style={{ fontSize: "12px", marginTop: "10px", color: "#555" }}>
        Last updated: {lastUpdated}
      </p>
    </div>
  );
};

// Button style function
const btnStyle = (color) => ({
  padding: "8px 15px",
  margin: "5px",
  border: "none",
  borderRadius: "8px",
  background: color,
  color: "#fff",
  cursor: "pointer",
});

export default WaterTracker;