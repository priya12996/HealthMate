const axios = require("axios");

exports.getNearbyHospitals = onRequest(async (req, res) => {
  try {
    const { lat, lng } = req.query;

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=hospital&key=YOUR_API_KEY`;

    const response = await axios.get(url);

    res.json(response.data.results);
  } catch (error) {
    res.status(500).send("Error fetching hospitals");
  }
});
