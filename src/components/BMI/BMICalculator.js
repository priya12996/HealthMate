
// import React, { useState } from "react";

// const BMICalculator = () => {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [bmi, setBmi] = useState(null);
//   const [category, setCategory] = useState("");

//   const calculateBMI = (e) => {
//     e.preventDefault();
//     if (!weight || !height || weight <= 0 || height <= 0) {
//       alert("Please enter valid height and weight!");
//       return;
//     }

//     const heightInMeters = height / 100;
//     const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
//     setBmi(bmiValue);

//     let bmiCategory = "";
//     if (bmiValue < 18.5) bmiCategory = "Underweight";
//     else if (bmiValue >= 18.5 && bmiValue < 24.9) bmiCategory = "Normal";
//     else if (bmiValue >= 25 && bmiValue < 29.9) bmiCategory = "Overweight";
//     else bmiCategory = "Obese";

//     setCategory(bmiCategory);
//   };

//   // Category colors
//   const getCategoryColor = () => {
//     switch (category) {
//       case "Underweight":
//         return "#2196F3"; // Blue
//       case "Normal":
//         return "#4CAF50"; // Green
//       case "Overweight":
//         return "#FF9800"; // Orange
//       case "Obese":
//         return "#F44336"; // Red
//       default:
//         return "#000";
//     }
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "400px",
//         margin: "50px auto",
//         padding: "25px",
//         borderRadius: "15px",
//         boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//         backgroundColor: "#fdfdfd",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "20px", color: "pink" }}>
//         BMI Calculator
//       </h2>
//       <form onSubmit={calculateBMI}>
//         <input
//           type="number"
//           placeholder="Weight (kg)"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//           required
//           style={{
//             margin: "10px 0",
//             padding: "12px",
//             width: "100%",
//             borderRadius: "10px",
//             border: "1px solid #ccc",
//             outline: "none",
//           }}
//         />
//         <input
//           type="number"
//           placeholder="Height (cm)"
//           value={height}
//           onChange={(e) => setHeight(e.target.value)}
//           required
//           style={{
//             margin: "10px 0",
//             padding: "12px",
//             width: "100%",
//             borderRadius: "10px",
//             border: "1px solid #ccc",
//             outline: "none",
//           }}
//         />
//         <button
//           type="submit"
//           style={{
//             margin: "15px 0",
//             padding: "12px",
//             width: "100%",
//             borderRadius: "25px",
//             border: "none",
//             backgroundColor: "pink",
//             color: "white",
//             fontSize: "16px",
//             cursor: "pointer",
//           }}
//         >
//           Calculate BMI
//         </button>
//       </form>

//       {bmi && (
//         <div
//           style={{
//             marginTop: "20px",
//             padding: "15px",
//             borderRadius: "12px",
//             backgroundColor: "#f1f1f1",
//             textAlign: "center",
//           }}
//         >
//           <h3 style={{ margin: "5px 0" }}>Your BMI: {bmi}</h3>
//           <p>
//             Category:{" "}
//             <b style={{ color: getCategoryColor(), fontSize: "18px" }}>{category}</b>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BMICalculator;

import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!weight || !feet || weight <= 0 || feet <= 0) {
      alert("Please enter valid height and weight!");
      return;
    }

    // 🔥 Convert feet + inches to meters
    const totalInches = (feet * 12) + Number(inches || 0);
    const heightInMeters = totalInches * 0.0254;

    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    let bmiCategory = "";
    if (bmiValue < 18.5) bmiCategory = "Underweight";
    else if (bmiValue >= 18.5 && bmiValue < 24.9) bmiCategory = "Normal";
    else if (bmiValue >= 25 && bmiValue < 29.9) bmiCategory = "Overweight";
    else bmiCategory = "Obese";

    setCategory(bmiCategory);
  };

  // 🎨 Category colors
  const getCategoryColor = () => {
    switch (category) {
      case "Underweight":
        return "#2196F3";
      case "Normal":
        return "#4CAF50";
      case "Overweight":
        return "#FF9800";
      case "Obese":
        return "#F44336";
      default:
        return "#000";
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        backgroundColor: "#fdfdfd",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "pink" }}>
        BMI Calculator
      </h2>

      <form onSubmit={calculateBMI}>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          style={{
            margin: "10px 0",
            padding: "12px",
            width: "100%",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        {/* HEIGHT (Feet + Inches) */}
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="number"
            placeholder="Height (ft)"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            required
            style={{
              margin: "10px 0",
              padding: "12px",
              width: "50%",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="number"
            placeholder="Height (in)"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            style={{
              margin: "10px 0",
              padding: "12px",
              width: "50%",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            margin: "15px 0",
            padding: "12px",
            width: "100%",
            borderRadius: "25px",
            border: "none",
            backgroundColor: "pink",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Calculate BMI
        </button>
      </form>

      {bmi && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            borderRadius: "12px",
            backgroundColor: "#f1f1f1",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: "5px 0" }}>Your BMI: {bmi}</h3>
          <p>
            Category:{" "}
            <b style={{ color: getCategoryColor(), fontSize: "18px" }}>
              {category}
            </b>
          </p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;