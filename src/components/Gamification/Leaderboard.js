// src/components/Gamification/Leaderboard.js
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from "@mui/material";

const Leaderboard = ({ scores }) => {
  const sortedScores = [...scores].sort((a, b) => b.points - a.points);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        🏆 Leaderboard
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Points</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedScores.map((score, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor:
                    index === 0
                      ? "#FFD700" // Gold for 1st
                      : index === 1
                      ? "#C0C0C0" // Silver for 2nd
                      : index === 2
                      ? "#CD7F32" // Bronze for 3rd
                      : "inherit",
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{score.username}</TableCell>
                <TableCell>{score.points}</TableCell>
                <TableCell>{score.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Leaderboard;
