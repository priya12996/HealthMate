// src/components/Gamification/UserInputForm.js
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const UserInputForm = ({ onAddScore }) => {
  const [username, setUsername] = useState("");
  const [steps, setSteps] = useState("");
  const [water, setWater] = useState("");
  const [sleep, setSleep] = useState("");
  const [pointsEarned, setPointsEarned] = useState(0);
  const [error, setError] = useState("");

  const calculatePoints = (steps, water, sleep) => {
    const stepPoints = Math.floor(steps / 1000);
    const waterPoints = Math.floor(water * 2);
    const sleepPoints = Math.floor(sleep * 1.5);
    return stepPoints + waterPoints + sleepPoints;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username || steps < 0 || water < 0 || sleep < 0 || sleep > 24) {
      setError("Please enter valid data! Steps ≥ 0, Water ≥ 0, Sleep 0–24h.");
      return;
    }

    const points = calculatePoints(Number(steps), Number(water), Number(sleep));
    setPointsEarned(points);
    
    // Animate points with delay
    setTimeout(() => {
      onAddScore({ username, points, date: new Date().toLocaleDateString() });
      setUsername("");
      setSteps("");
      setWater("");
      setSleep("");
      setPointsEarned(0);
    }, 800);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Track Your Daily Health & Earn Points!
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <TextField
          label="Your Name"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Steps"
          variant="outlined"
          type="number"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          required
        />
        <TextField
          label="Water Intake (L)"
          variant="outlined"
          type="number"
          value={water}
          onChange={(e) => setWater(e.target.value)}
          required
        />
        <TextField
          label="Sleep Hours"
          variant="outlined"
          type="number"
          value={sleep}
          onChange={(e) => setSleep(e.target.value)}
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

      {pointsEarned > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.5 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "15px" }}
        >
          <Typography variant="h6" color="secondary">
            🎉 You earned {pointsEarned} points! 🎉
          </Typography>
        </motion.div>
      )}
    </Box>
  );
};

export default UserInputForm;

