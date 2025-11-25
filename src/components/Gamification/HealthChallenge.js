// src/components/Gamification/HealthChallenge.js
import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import UserInputForm from "./UserInputForm";
import Leaderboard from "./Leaderboard";

const HealthChallenge = () => {
  const [scores, setScores] = useState([]);

  // Load scores from localStorage
  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("healthScores")) || [];
    setScores(storedScores);
  }, []);

  // Add new score
  const addScore = (score) => {
    const updatedScores = [...scores, score];
    setScores(updatedScores);
    localStorage.setItem("healthScores", JSON.stringify(updatedScores));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", mb: 4 }}>
        🎮 Gamified Health Challenges
      </Typography>

      <Grid container spacing={4}>
        {/* Form Section */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3, backgroundColor: "#f0f8ff" }} elevation={3}>
            <Typography variant="h6" gutterBottom>
              Add Your Daily Stats
            </Typography>
            <UserInputForm onAddScore={addScore} />
          </Paper>
        </Grid>

        {/* Leaderboard Section */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3, backgroundColor: "#fff8dc" }} elevation={3}>
            <Leaderboard scores={scores} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HealthChallenge;
