import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const PeriodTracker = () => {
  const [lastDate, setLastDate] = useState("");
  const [cycle, setCycle] = useState(28);
  const [nextDate, setNextDate] = useState("");
  const [message, setMessage] = useState("");

  const calculateNextPeriod = () => {
    if (!lastDate) return;

    const last = new Date(lastDate);
    const next = new Date(last);
    next.setDate(last.getDate() + Number(cycle));

    setNextDate(next.toDateString());

    // 😏 Range Check Logic
    if (cycle >= 21 && cycle <= 35) {
      setMessage("Your cycle is normal 👍 Keep maintaining a healthy lifestyle 😎");
    } else {
      setMessage(
        "Your cycle seems irregular 😬. Consider consulting a doctor 🏥 and try relaxation or light exercise 🧘‍♀️"
      );
    }
  };

  return (
    <Box
      sx={(theme) => ({
        textAlign: "center",
        p: 3,
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderRadius: 3,
        maxWidth: 400,
        mx: "auto",
        mt: 4,
      })}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Period Tracker 🌸
      </Typography>

      {/* Last Date Input */}
      <TextField
        label="Last Period Date"
        type="date"
        fullWidth
        sx={{ mb: 2 }}
        InputLabelProps={{ shrink: true }}
        value={lastDate}
        onChange={(e) => setLastDate(e.target.value)}
      />

      {/* Cycle Length */}
      <TextField
        label="Cycle Length (days)"
        type="number"
        fullWidth
        sx={{ mb: 2 }}
        value={cycle}
        onChange={(e) => setCycle(e.target.value)}
      />

      {/* Button */}
      <Button variant="contained" onClick={calculateNextPeriod}>
        Predict Next Period 😏
      </Button>

      {/* Result */}
      {nextDate && (
        <Typography sx={{ mt: 3 }}>
          Next Expected Date: <b>{nextDate}</b>
        </Typography>
      )}

      {/* 😎 Advice Message */}
      {message && (
        <Typography sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default PeriodTracker;