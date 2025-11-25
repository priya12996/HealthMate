import React, { useState } from "react";
import { Button, TextField, Typography, Box, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const DietPlan = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("");
  const [dietPlan, setDietPlan] = useState(null);

  const generateDiet = () => {
    let plan = {};
    if (goal === "Lose") {
      plan = {
        Breakfast: "Oats + Milk",
        Lunch: "Salad + Grilled Chicken",
        Dinner: "Light Soup + Vegetables",
      };
    } else if (goal === "Gain") {
      plan = {
        Breakfast: "Eggs + Toast + Milk",
        Lunch: "Rice + Dal + Chicken",
        Dinner: "Paneer + Roti + Vegetables",
      };
    } else if (goal === "Maintain") {
      plan = {
        Breakfast: "Oats + Milk + Fruits",
        Lunch: "Dal + Roti + Salad",
        Dinner: "Light Soup + Roti + Vegetables",
      };
    } else {
      alert("Please select a goal!");
      return;
    }
    setDietPlan(plan);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "20px auto", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Diet Plan Generator
      </Typography>

      <TextField
        label="Weight (kg)"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Height (cm)"
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="goal-label">Goal</InputLabel>
        <Select
          labelId="goal-label"
          value={goal}
          label="Goal"
          onChange={(e) => setGoal(e.target.value)}
        >
          <MenuItem value="Lose">Lose</MenuItem>
          <MenuItem value="Maintain">Maintain</MenuItem>
          <MenuItem value="Gain">Gain</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={generateDiet}>
        Generate Diet
      </Button>

      {dietPlan && (
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Typography variant="subtitle1">Breakfast: {dietPlan.Breakfast}</Typography>
          <Typography variant="subtitle1">Lunch: {dietPlan.Lunch}</Typography>
          <Typography variant="subtitle1">Dinner: {dietPlan.Dinner}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default DietPlan;
