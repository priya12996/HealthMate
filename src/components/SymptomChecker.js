// SymptomChecker.js
import React, { useState } from "react";
import { symptomsData } from "../data/symptomsData";

function SymptomChecker() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);

  const handleCheck = () => {
    const symptom = input.toLowerCase().trim();
    const match = symptomsData.find(item => item.symptom.toLowerCase() === symptom);
    if (match) {
      setResults(match);
    } else {
      setResults({ diseases: ["No match found"], specialist: "Consult any doctor" });
    }
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      flexDirection: "column",
      margin: "30px auto",
      padding: "20px",
      maxWidth: "500px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ color: "#d81b60" }}>🩺 Symptom Checker</h2>

      {/* Text Input */}
      <input
        type="text"
        placeholder="Enter symptom (e.g., fever)"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      {/* Dropdown List */}
      <select
        onChange={(e) => setInput(e.target.value)}
        value={input}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      >
        <option value="">-- Select a Symptom --</option>
        {symptomsData.map((item, index) => (
          <option key={index} value={item.symptom}>
            {item.symptom}
          </option>
        ))}
      </select>

      {/* Button */}
      <button 
        onClick={handleCheck}
        style={{
          background: "#d81b60",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "5px"
        }}
      >
        Check
      </button>

      {/* Results */}
      {results && (
        <div style={{ marginTop: "20px", textAlign: "left", width: "100%" }}>
          <h3>Possible Diseases:</h3>
          <ul>
            {results.diseases.map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
          <p><b>Recommended Specialist:</b> {results.specialist}</p>
        <p><b>Suggested Medicines:</b> {results.medicine}</p>
        </div>
      )}
    </div>
  );
}

export default SymptomChecker;
