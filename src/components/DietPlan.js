// import React, { useState } from "react";
// import {
//   Button,
//   TextField,
//   Typography,
//   Box,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl
// } from "@mui/material";

// const DietPlan = () => {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [goal, setGoal] = useState("");
//   const [dietType, setDietType] = useState("");
//   const [dietPlan, setDietPlan] = useState(null);

//   // 🔥 RANDOM FUNCTION
//   const getRandomItems = (arr, count = 3) => {
//     return arr.sort(() => 0.5 - Math.random()).slice(0, count);
//   };

//   const generateDiet = () => {
//     if (!goal || !dietType) {
//       alert("Please select goal and diet type!");
//       return;
//     }

//     // 🔥 VEG OPTIONS
//     const vegOptions = {
//       Lose: {
//         Breakfast: [
//           "Oats + Milk",
//           "Poha + Green Tea",
//           "Upma + Coconut Chutney",
//           "Fruits + Yogurt",
//           "Smoothie + Nuts"
//         ],
//         Lunch: [
//           "Dal + Roti + Salad",
//           "Vegetable Pulao",
//           "Rajma + Rice",
//           "Paneer + Roti",
//           "Khichdi + Curd"
//         ],
//         Dinner: [
//           "Vegetable Soup",
//           "Light Roti + Sabzi",
//           "Salad + Paneer",
//           "Boiled Vegetables",
//           "Dal + 1 Roti"
//         ]
//       },
//       Gain: {
//         Breakfast: [
//           "Milk + Banana + Peanut Butter",
//           "Paneer Sandwich",
//           "Oats + Dry Fruits",
//           "Smoothie + Nuts"
//         ],
//         Lunch: [
//           "Rice + Dal + Paneer",
//           "Paneer + Roti + Salad",
//           "Vegetable Pulao + Curd"
//         ],
//         Dinner: [
//           "Paneer + Roti",
//           "Dal + Rice",
//           "Vegetables + Roti"
//         ]
//       },
//       Maintain: {
//         Breakfast: [
//           "Oats + Milk + Fruits",
//           "Poha + Juice",
//           "Upma + Tea"
//         ],
//         Lunch: [
//           "Dal + Roti + Salad",
//           "Rice + Vegetables",
//           "Paneer + Roti"
//         ],
//         Dinner: [
//           "Light Veg + Roti",
//           "Soup + Salad",
//           "Dal + 1 Roti"
//         ]
//       }
//     };

//     // 🔥 NON-VEG OPTIONS
//     const nonVegOptions = {
//       Lose: {
//         Breakfast: [
//           "Boiled Eggs + Green Tea",
//           "Omelette + Juice",
//           "Egg Sandwich"
//         ],
//         Lunch: [
//           "Grilled Chicken + Salad",
//           "Fish Curry + Rice",
//           "Chicken + Roti"
//         ],
//         Dinner: [
//           "Chicken Soup",
//           "Boiled Eggs",
//           "Light Chicken + Veggies"
//         ]
//       },
//       Gain: {
//         Breakfast: [
//           "Eggs + Toast + Milk",
//           "Omelette + Bread",
//           "Chicken Sandwich"
//         ],
//         Lunch: [
//           "Rice + Chicken + Dal",
//           "Chicken + Roti",
//           "Egg Curry + Rice"
//         ],
//         Dinner: [
//           "Chicken + Roti",
//           "Egg Bhurji + Roti",
//           "Fish + Rice"
//         ]
//       },
//       Maintain: {
//         Breakfast: [
//           "Eggs + Milk + Fruits",
//           "Omelette + Juice"
//         ],
//         Lunch: [
//           "Chicken + Roti + Salad",
//           "Fish + Rice"
//         ],
//         Dinner: [
//           "Light Chicken + Veggies",
//           "Eggs + Salad"
//         ]
//       }
//     };

//     const options =
//       dietType === "Veg" ? vegOptions[goal] : nonVegOptions[goal];

//     const plan = {
//       Breakfast: getRandomItems(options.Breakfast),
//       Lunch: getRandomItems(options.Lunch),
//       Dinner: getRandomItems(options.Dinner)
//     };

//     setDietPlan(plan);
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: 450,
//         margin: "20px auto",
//         textAlign: "center",
//         padding: "20px",
//         borderRadius: "12px",
//         boxShadow: "0px 6px 15px rgba(0,0,0,0.2)"
//       }}
//     >
//       <Typography variant="h5" gutterBottom>
//         🍽️ Smart Diet Plan Generator
//       </Typography>

//       <TextField
//         label="Weight (kg)"
//         type="number"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//         fullWidth
//         sx={{ mb: 2 }}
//       />

//       <TextField
//         label="Height (cm)"
//         type="number"
//         value={height}
//         onChange={(e) => setHeight(e.target.value)}
//         fullWidth
//         sx={{ mb: 2 }}
//       />

//       {/* GOAL */}
//       <FormControl fullWidth sx={{ mb: 2 }}>
//         <InputLabel>Goal</InputLabel>
//         <Select value={goal} label="Goal" onChange={(e) => setGoal(e.target.value)}>
//           <MenuItem value="Lose">Lose Weight</MenuItem>
//           <MenuItem value="Maintain">Maintain</MenuItem>
//           <MenuItem value="Gain">Gain Weight</MenuItem>
//         </Select>
//       </FormControl>

//       {/* DIET TYPE */}
//       <FormControl fullWidth sx={{ mb: 2 }}>
//         <InputLabel>Diet Type</InputLabel>
//         <Select value={dietType} label="Diet Type" onChange={(e) => setDietType(e.target.value)}>
//           <MenuItem value="Veg">Vegetarian</MenuItem>
//           <MenuItem value="NonVeg">Non-Vegetarian</MenuItem>
//         </Select>
//       </FormControl>

//       <Button variant="contained" onClick={generateDiet}>
//         Generate Diet
//       </Button>

//       {/* RESULT */}
//       {dietPlan && (
//         <Box sx={{ mt: 3, textAlign: "left" }}>
//           <Typography variant="h6">🥣 Breakfast Options:</Typography>
//           {dietPlan.Breakfast.map((item, i) => (
//             <Typography key={i}>• {item}</Typography>
//           ))}

//           <Typography variant="h6" sx={{ mt: 2 }}>
//             🍛 Lunch Options:
//           </Typography>
//           {dietPlan.Lunch.map((item, i) => (
//             <Typography key={i}>• {item}</Typography>
//           ))}

//           <Typography variant="h6" sx={{ mt: 2 }}>
//             🍲 Dinner Options:
//           </Typography>
//           {dietPlan.Dinner.map((item, i) => (
//             <Typography key={i}>• {item}</Typography>
//           ))}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default DietPlan;

import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from "@mui/material";

const DietPlan = () => {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [goal, setGoal] = useState("");
  const [dietType, setDietType] = useState("");
  const [dietPlan, setDietPlan] = useState(null);

  // 🔥 RANDOM FUNCTION
  const getRandomItems = (arr, count = 3) => {
    return arr.sort(() => 0.5 - Math.random()).slice(0, count);
  };

  const generateDiet = () => {
    if (!goal || !dietType) {
      alert("Please select goal and diet type!");
      return;
    }

    // 🔥 Convert height to cm (optional future use)
    const heightInCm = (feet * 30.48) + (inches * 2.54);
    console.log("Height in cm:", heightInCm);

    // 🔥 VEG OPTIONS
    const vegOptions = {
      Lose: {
        Breakfast: [
          "Oats + Milk",
          "Poha + Green Tea",
          "Upma + Coconut Chutney",
          "Fruits + Yogurt",
          "Smoothie + Nuts"
        ],
        Lunch: [
          "Dal + Roti + Salad",
          "Vegetable Pulao",
          "Rajma + Rice",
          "Paneer + Roti",
          "Khichdi + Curd"
        ],
        Dinner: [
          "Vegetable Soup",
          "Light Roti + Sabzi",
          "Salad + Paneer",
          "Boiled Vegetables",
          "Dal + 1 Roti"
        ]
      },
      Gain: {
        Breakfast: [
          "Milk + Banana + Peanut Butter",
          "Paneer Sandwich",
          "Oats + Dry Fruits",
          "Smoothie + Nuts"
        ],
        Lunch: [
          "Rice + Dal + Paneer",
          "Paneer + Roti + Salad",
          "Vegetable Pulao + Curd"
        ],
        Dinner: [
          "Paneer + Roti",
          "Dal + Rice",
          "Vegetables + Roti"
        ]
      },
      Maintain: {
        Breakfast: [
          "Oats + Milk + Fruits",
          "Poha + Juice",
          "Upma + Tea"
        ],
        Lunch: [
          "Dal + Roti + Salad",
          "Rice + Vegetables",
          "Paneer + Roti"
        ],
        Dinner: [
          "Light Veg + Roti",
          "Soup + Salad",
          "Dal + 1 Roti"
        ]
      }
    };

    // 🔥 NON-VEG OPTIONS
    const nonVegOptions = {
      Lose: {
        Breakfast: [
          "Boiled Eggs + Green Tea",
          "Omelette + Juice",
          "Egg Sandwich"
        ],
        Lunch: [
          "Grilled Chicken + Salad",
          "Fish Curry + Rice",
          "Chicken + Roti"
        ],
        Dinner: [
          "Chicken Soup",
          "Boiled Eggs",
          "Light Chicken + Veggies"
        ]
      },
      Gain: {
        Breakfast: [
          "Eggs + Toast + Milk",
          "Omelette + Bread",
          "Chicken Sandwich"
        ],
        Lunch: [
          "Rice + Chicken + Dal",
          "Chicken + Roti",
          "Egg Curry + Rice"
        ],
        Dinner: [
          "Chicken + Roti",
          "Egg Bhurji + Roti",
          "Fish + Rice"
        ]
      },
      Maintain: {
        Breakfast: [
          "Eggs + Milk + Fruits",
          "Omelette + Juice"
        ],
        Lunch: [
          "Chicken + Roti + Salad",
          "Fish + Rice"
        ],
        Dinner: [
          "Light Chicken + Veggies",
          "Eggs + Salad"
        ]
      }
    };

    const options =
      dietType === "Veg" ? vegOptions[goal] : nonVegOptions[goal];

    const plan = {
      Breakfast: getRandomItems(options.Breakfast),
      Lunch: getRandomItems(options.Lunch),
      Dinner: getRandomItems(options.Dinner)
    };

    setDietPlan(plan);
  };

  return (
    <Box
      sx={{
        maxWidth: 450,
        margin: "20px auto",
        textAlign: "center",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0px 6px 15px rgba(0,0,0,0.2)"
      }}
    >
      <Typography variant="h5" gutterBottom>
        🍽️ Smart Diet Plan Generator
      </Typography>

      <TextField
        label="Weight (kg)"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />

      {/* HEIGHT IN FEET + INCH */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          label="Height (feet)"
          type="number"
          value={feet}
          onChange={(e) => setFeet(e.target.value)}
          fullWidth
        />

        <TextField
          label="Height (inches)"
          type="number"
          value={inches}
          onChange={(e) => setInches(e.target.value)}
          fullWidth
        />
      </Box>

      {/* GOAL */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Goal</InputLabel>
        <Select value={goal} label="Goal" onChange={(e) => setGoal(e.target.value)}>
          <MenuItem value="Lose">Lose Weight</MenuItem>
          <MenuItem value="Maintain">Maintain</MenuItem>
          <MenuItem value="Gain">Gain Weight</MenuItem>
        </Select>
      </FormControl>

      {/* DIET TYPE */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Diet Type</InputLabel>
        <Select value={dietType} label="Diet Type" onChange={(e) => setDietType(e.target.value)}>
          <MenuItem value="Veg">Vegetarian</MenuItem>
          <MenuItem value="NonVeg">Non-Vegetarian</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" onClick={generateDiet}>
        Generate Diet
      </Button>

      {/* RESULT */}
      {dietPlan && (
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="h6">🥣 Breakfast Options:</Typography>
          {dietPlan.Breakfast.map((item, i) => (
            <Typography key={i}>• {item}</Typography>
          ))}

          <Typography variant="h6" sx={{ mt: 2 }}>
            🍛 Lunch Options:
          </Typography>
          {dietPlan.Lunch.map((item, i) => (
            <Typography key={i}>• {item}</Typography>
          ))}

          <Typography variant="h6" sx={{ mt: 2 }}>
            🍲 Dinner Options:
          </Typography>
          {dietPlan.Dinner.map((item, i) => (
            <Typography key={i}>• {item}</Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default DietPlan;