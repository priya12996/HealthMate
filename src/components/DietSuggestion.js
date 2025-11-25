// src/components/DietSuggestion.js
import React, { useState } from "react";
import { dietData } from "../data/dietData";

function DietSuggestion() {
  const [selectedDisease, setSelectedDisease] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const disease = selectedDisease.toLowerCase();
    const match = dietData.find(item => item.disease === disease);
    if (match) {
      setResult(match);
    } else {
      setResult({
        recommended: ["No data available"],
        avoid: ["Consult a nutritionist"]
      });
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "40px auto", padding: "30px", maxWidth: "700px", borderRadius: "15px", boxShadow: "0px 4px 15px rgba(0,0,0,0.1)", background: "#f9f9f9" }}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>🍏 Diet & Nutrition Suggestions</h2>
      
      <select
        value={selectedDisease}
        onChange={(e) => setSelectedDisease(e.target.value)}
        style={{ padding: "12px", margin: "10px", width: "80%", borderRadius: "8px", border: "1px solid #ccc" }}
      >
        <option value="">-- Select Disease/Symptom --</option>
        {dietData.map((item, index) => (
          <option key={index} value={item.disease}>
            {item.disease.charAt(0).toUpperCase() + item.disease.slice(1)}
          </option>
        ))}
      </select>

      <br />
      <button 
        onClick={handleCheck} 
        style={{ 
          padding: "12px 25px", 
          marginTop: "15px", 
          cursor: "pointer", 
          background: "#dc3545", 
          color: "#fff", 
          border: "none", 
          borderRadius: "8px",
          fontWeight: "bold"
        }}
      >
        Get Suggestions
      </button>

      {result && (
        <div style={{ marginTop: "25px" }}>
          
          {/* ✅ Recommended Section */}
          <div style={{ background: "#e9f9ef", padding: "20px", borderRadius: "10px", marginBottom: "20px", border: "1px solid #28a745", boxShadow: "0px 2px 10px rgba(0, 128, 0, 0.1)" }}>
            <h3 style={{ color: "#28a745" }}>✅ Recommended Foods:</h3>
            <ul style={{ textAlign: "left", marginTop: "10px" }}>
              {result.recommended.map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>

          {/* ❌ Avoid Section */}
          <div style={{ background: "#fbeaea", padding: "20px", borderRadius: "10px", border: "1px solid #dc3545", boxShadow: "0px 2px 10px rgba(220, 53, 69, 0.1)" }}>
            <h3 style={{ color: "#dc3545" }}>❌ Avoid These Foods:</h3>
            <ul style={{ textAlign: "left", marginTop: "10px" }}>
              {result.avoid.map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default DietSuggestion;
