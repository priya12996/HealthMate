// import React, { useState } from "react";

// function SymptomChecker() {
//   const [symptoms, setSymptoms] = useState({
//     fever: 0,
//     cough: 0,
//     headache: 0,
//     fatigue: 0,
//     nausea: 0,
//     vomiting: 0,
//     diarrhea: 0,
//     body_pain: 0
//   });

//   const [result, setResult] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // HANDLE CHECKBOX
//   const handleChange = (e) => {
//     setSymptoms({
//       ...symptoms,
//       [e.target.name]: e.target.checked ? 1 : 0
//     });
//   };

//   // COUNT SELECTED SYMPTOMS
//   const countSymptoms = () => {
//     return Object.values(symptoms).filter(val => val === 1).length;
//   };

//   // 🔥 CALL BACKEND API
//   const handleCheck = async () => {
//     setLoading(true);
//     setResult([]);

//     try {
//       const response = await fetch("http://127.0.0.1:5000/predict", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(symptoms)
//       });

//       const data = await response.json();

//       if (data.error) {
//         setResult([{ disease: "Error", confidence: data.error }]);
//         setLoading(false);
//         return;
//       }

//       if (data.predictions) {
//         setResult(data.predictions);
//       }

//     } catch (error) {
//       setResult([{ disease: "Server Error", confidence: "Check backend" }]);
//     }

//     setLoading(false);
//   };

//   // RESET
//   const handleReset = () => {
//     setSymptoms({
//       fever: 0,
//       cough: 0,
//       headache: 0,
//       fatigue: 0,
//       nausea: 0,
//       vomiting: 0,
//       diarrhea: 0,
//       body_pain: 0
//     });
//     setResult([]);
//   };

//   return (
//     <div style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       flexDirection: "column",
//       margin: "30px auto",
//       padding: "20px",
//       maxWidth: "500px",
//       borderRadius: "15px",
//       boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
//       background: "#fff"
//     }}>

//       <h2 style={{ color: "#d81b60" }}>🩺 Smart Symptom Checker</h2>

//       {/* SYMPTOM COUNT */}
//       <p style={{ fontSize: "14px", color: "#555" }}>
//         Selected Symptoms: {countSymptoms()}
//       </p>

//       {/* CHECKBOXES */}
//       <div style={{ textAlign: "left", width: "100%" }}>
//         {Object.keys(symptoms).map((symptom) => (
//           <label key={symptom} style={{ display: "block", margin: "6px 0" }}>
//             <input
//               type="checkbox"
//               name={symptom}
//               checked={symptoms[symptom] === 1}
//               onChange={handleChange}
//             />
//             {" "}
//             {symptom.replace("_", " ").toUpperCase()}
//           </label>
//         ))}
//       </div>

//       {/* BUTTONS */}
//       <div style={{ marginTop: "15px" }}>
//         <button
//           onClick={handleCheck}
//           disabled={loading}
//           style={{
//             background: loading ? "gray" : "#d81b60",
//             color: "white",
//             border: "none",
//             padding: "10px 20px",
//             borderRadius: "6px",
//             cursor: "pointer",
//             marginRight: "10px"
//           }}
//         >
//           {loading ? "Predicting..." : "Predict Disease"}
//         </button>

//         <button
//           onClick={handleReset}
//           style={{
//             background: "#555",
//             color: "white",
//             border: "none",
//             padding: "10px 20px",
//             borderRadius: "6px",
//             cursor: "pointer"
//           }}
//         >
//           Reset
//         </button>
//       </div>

//       {/* RESULT */}
//       {result.length > 0 && (
//         <div style={{ marginTop: "20px", width: "100%" }}>
//           <h3>🧠 Predictions:</h3>

//           {result.map((item, index) => (
//             <div key={index} style={{
//               background: "#fce4ec",
//               padding: "10px",
//               borderRadius: "10px",
//               marginBottom: "10px"
//             }}>
//               <strong>{index + 1}. {item.disease}</strong>
//               <br />
//               Confidence: {item.confidence}%
//             </div>
//           ))}

//           {/* BASIC PRECAUTION */}
//           <div style={{
//             marginTop: "15px",
//             padding: "10px",
//             background: "#e3f2fd",
//             borderRadius: "10px"
//           }}>
//             💡 Stay hydrated, take rest, and consult a doctor if symptoms persist.
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SymptomChecker;
import React, { useState } from "react";

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState({
    fever: 0,
    cough: 0,
    headache: 0,
    fatigue: 0,
    nausea: 0,
    vomiting: 0,
    diarrhea: 0,
    body_pain: 0
  });

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  // 💊 MEDICINE DATA (NEW ADD)
  const medicineData = {
    "Flu": {
      medicines: ["Paracetamol", "Ibuprofen"],
      advice: "Rest lo, fluids piyo"
    },
    "Common Cold": {
      medicines: ["Cetirizine", "Paracetamol"],
      advice: "Warm fluids lo"
    },
    "Migraine": {
      medicines: ["Ibuprofen"],
      advice: "Dark room me rest karo"
    },
    "Dengue": {
      medicines: ["Paracetamol ONLY"],
      advice: "Hydration maintain karo"
    },
    "Food Poisoning": {
      medicines: ["ORS"],
      advice: "Light diet lo"
    },
    "Typhoid": {
      medicines: ["Doctor prescribed antibiotics"],
      advice: "Doctor consult karo"
    },
    "Pneumonia": {
      medicines: ["Antibiotics"],
      advice: "Immediate doctor consult"
    },
    "COVID-19": {
      medicines: ["Paracetamol", "Vitamin C"],
      advice: "Isolation + rest"
    },
    "Gastroenteritis": {
      medicines: ["ORS"],
      advice: "Hydration maintain karo"
    },
    "Allergy": {
      medicines: ["Antihistamines"],
      advice: "Allergen avoid karo"
    }
  };

  // HANDLE CHECKBOX
  const handleChange = (e) => {
    setSymptoms({
      ...symptoms,
      [e.target.name]: e.target.checked ? 1 : 0
    });
  };

  // COUNT SELECTED SYMPTOMS
  const countSymptoms = () => {
    return Object.values(symptoms).filter(val => val === 1).length;
  };

  // 🔥 CALL BACKEND API
  const handleCheck = async () => {
    setLoading(true);
    setResult([]);

    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
      const response = await fetch(`${BACKEND_URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(symptoms)
      });

      const data = await response.json();

      if (data.error) {
        setResult([{ disease: "Error", confidence: data.error }]);
        setLoading(false);
        return;
      }

      if (data.predictions) {
        setResult(data.predictions);
      }

    } catch (error) {
      setResult([{ disease: "Server Error", confidence: "Check backend" }]);
    }

    setLoading(false);
  };

  // RESET
  const handleReset = () => {
    setSymptoms({
      fever: 0,
      cough: 0,
      headache: 0,
      fatigue: 0,
      nausea: 0,
      vomiting: 0,
      diarrhea: 0,
      body_pain: 0
    });
    setResult([]);
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
      borderRadius: "15px",
      boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
      background: "#fff"
    }}>

      <h2 style={{ color: "#d81b60" }}>🩺 Smart Symptom Checker</h2>

      <p style={{ fontSize: "14px", color: "#555" }}>
        Selected Symptoms: {countSymptoms()}
      </p>

      {/* CHECKBOXES */}
      <div style={{ textAlign: "left", width: "100%" }}>
        {Object.keys(symptoms).map((symptom) => (
          <label key={symptom} style={{ display: "block", margin: "6px 0" }}>
            <input
              type="checkbox"
              name={symptom}
              checked={symptoms[symptom] === 1}
              onChange={handleChange}
            />
            {" "}
            {symptom.replace("_", " ").toUpperCase()}
          </label>
        ))}
      </div>

      {/* BUTTONS */}
      <div style={{ marginTop: "15px" }}>
        <button
          onClick={handleCheck}
          disabled={loading}
          style={{
            background: loading ? "gray" : "#d81b60",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            marginRight: "10px"
          }}
        >
          {loading ? "Predicting..." : "Predict Disease"}
        </button>

        <button
          onClick={handleReset}
          style={{
            background: "#555",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Reset
        </button>
      </div>

      {/* RESULT */}
      {result.length > 0 && (
        <div style={{ marginTop: "20px", width: "100%" }}>
          <h3>🧠 Predictions:</h3>

          {result.map((item, index) => {

            const medInfo = medicineData[item.disease];

            // 🔥 SEVERITY LOGIC (NEW)
            const confidenceValue = parseFloat(item.confidence);
            let severity = "";
            if (confidenceValue > 80) severity = "🔴 High";
            else if (confidenceValue > 60) severity = "🟡 Medium";
            else severity = "🟢 Low";

            return (
              <div key={index} style={{
                background: "#fce4ec",
                padding: "10px",
                borderRadius: "10px",
                marginBottom: "10px"
              }}>
                <strong>{index + 1}. {item.disease}</strong>
                <br />

                Confidence: {item.confidence}%
                <br />

                🔥 Severity: {severity}

                {/* 💊 MEDICINE */}
                {medInfo && (
                  <>
                    <br />
                    💊 Medicines: {medInfo.medicines.join(", ")}
                    <br />
                    📝 Advice: {medInfo.advice}
                  </>
                )}

                {/* 📊 PROGRESS BAR */}
                <div style={{
                  marginTop: "6px",
                  background: "#ddd",
                  borderRadius: "5px",
                  overflow: "hidden"
                }}>
                  <div style={{
                    width: `${confidenceValue}%`,
                    background: "green",
                    color: "white",
                    fontSize: "12px",
                    padding: "2px"
                  }}>
                    {confidenceValue}%
                  </div>
                </div>

                {/* ⚠️ LOW CONFIDENCE ALERT */}
                {confidenceValue < 60 && (
                  <p style={{ color: "red" }}>
                    ⚠️ Doctor consultation recommended
                  </p>
                )}

              </div>
            );
          })}

          {/* BASIC PRECAUTION */}
          <div style={{
            marginTop: "15px",
            padding: "10px",
            background: "#e3f2fd",
            borderRadius: "10px"
          }}>
            💡 Stay hydrated, take rest, and consult a doctor if symptoms persist.
          </div>

          {/* ⚠️ SAFETY MESSAGE */}
          <div style={{
            marginTop: "10px",
            padding: "10px",
            background: "#fff3cd",
            borderRadius: "10px"
          }}>
            ⚠️ This is not a medical diagnosis. Always consult a doctor.
          </div>

        </div>
      )}
    </div>
  );
}

export default SymptomChecker;