const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Healthmate Backend Running 🚀");
});

// Hospital API Route
app.get("/api/hospitals", async (req, res) => {
  try {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({ error: "Latitude and Longitude required" });
    }

    const query = `
    [out:json];
    (
      node["amenity"="hospital"](${lat - 0.05},${lng - 0.05},${lat + 0.05},${lng + 0.05});
    );
    out;
    `;

    const response = await axios.post(
      "https://overpass-api.de/api/interpreter",
      query,
      {
        headers: {
          "Content-Type": "text/plain"
        }
      }
    );

    res.json(response.data.elements);

  } catch (error) {
    console.error("Error fetching hospitals:", error.message);
    res.status(500).json({ error: "Failed to fetch hospitals" });
  }
});

// Server Port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
