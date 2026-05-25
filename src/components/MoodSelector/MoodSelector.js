import { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import { moodTips } from "../../data/moodTips";

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (mood) => {
    setSelectedMood(mood);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        How are you feeling today? 😏
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap"
        }}
      >
        {Object.keys(moodTips).map((mood) => (
          <Button
            key={mood}
            variant="outlined"
            onClick={() => handleOpen(mood)} // 😎 popup open
          >
            {mood}
          </Button>
        ))}
      </Box>

      {/* 😍 POPUP DIALOG */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedMood} Tips 💡</DialogTitle>

        <DialogContent>
          <ul>
            {selectedMood &&
              moodTips[selectedMood].map((tip, index) => (
                <li key={index}>
                  <Typography>{tip}</Typography>
                </li>
              ))}
          </ul>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close 😌
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MoodSelector;