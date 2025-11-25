import React, { useState } from "react";
import { Box, Card, Typography, LinearProgress, Button, TextField, Grid, Paper, List, ListItem, ListItemText } from "@mui/material";

const HealthChallenge = () => {
  // User activity states
  const [steps, setSteps] = useState(0);
  const [water, setWater] = useState(0);
  const [sleep, setSleep] = useState(0);

  // Points calculation
  const calculatePoints = () => {
    const stepPoints = steps * 0.1;
    const waterPoints = water * 5;
    const sleepPoints = sleep >= 7 ? 10 : sleep * 1; // partial points if <7h
    return stepPoints + waterPoints + sleepPoints;
  };

  const totalPoints = calculatePoints();

  // Dummy leaderboard
  const leaderboard = [
    { name: "Priya", points: totalPoints },
    { name: "Rani", points: 80 },
    { name: "Anita", points: 60 },
    { name: "Ankita", points: 70 },
    { name: "Afia", points: 90 },
    
  ].sort((a, b) => b.points - a.points); // Sort descending

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Gamified Health Challenges 🏆</Typography>

      <Grid container spacing={3}>
        {/* Steps */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6">Steps </Typography>
            <TextField
              type="number"
              label="Enter steps"
              value={steps}
              onChange={(e) => setSteps(Number(e.target.value))}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
            />
            <LinearProgress variant="determinate" value={Math.min((steps/10000)*100, 100)} sx={{ mb: 1 }} />
            <Typography>{steps}/10000 steps</Typography>
          </Card>
        </Grid>

        {/* Water */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6">Water </Typography>
            <TextField
              type="number"
              label="Glasses of water"
              value={water}
              onChange={(e) => setWater(Number(e.target.value))}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
            />
            <LinearProgress variant="determinate" value={Math.min((water/10)*100, 100)} sx={{ mb: 1 }} />
            <Typography>{water}/10 glasses</Typography>
          </Card>
        </Grid>

        {/* Sleep */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6">Sleep 😴</Typography>
            <TextField
              type="number"
              label="Hours slept"
              value={sleep}
              onChange={(e) => setSleep(Number(e.target.value))}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
            />
            <LinearProgress variant="determinate" value={Math.min((sleep/12)*100, 100)} sx={{ mb: 1 }} />
            <Typography>{sleep}/12 hours</Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Total Points */}
      <Paper sx={{ mt: 4, p: 2 }}>
        <Typography variant="h5">Total Points: {totalPoints.toFixed(1)} ⭐</Typography>
      </Paper>

      {/* Leaderboard */}
      <Paper sx={{ mt: 4, p: 2 }}>
        <Typography variant="h5" gutterBottom>Leaderboard 🏅</Typography>
        <List>
          {leaderboard.map((user, index) => (
            <ListItem key={index} divider>
              <ListItemText primary={`${index + 1}. ${user.name}`} secondary={`Points: ${user.points.toFixed(1)}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default HealthChallenge;
