const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Chatbot endpoint
app.post("/chat", (req, res) => {
  const message = req.body.message?.toLowerCase();
  let reply = "Sorry, I can only answer limited healthcare questions 😅";

  if (!message) {
    return res.status(400).json({ reply: "Please send a message." });
  }

  if (message.includes("fever")) {
    reply = "It seems you have fever. Take rest and stay hydrated.";
  } else if (message.includes("doctor")) {
    reply = "You can consult a nearby doctor or use a telemedicine service.";
  } else if (message.includes("headache")) {
    reply = "Headache may be due to stress or dehydration. Rest and drink water.";
  } else if (message.includes("medicine")) {
    reply = "Please consult a doctor before taking any medicine.";
  } else if (message.includes("covid") || message.includes("corona")) {
    reply = "If you have COVID symptoms, please get tested and follow medical guidelines.";
  }

  res.json({ reply });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Chatbot running on http://localhost:${PORT}`));

// ===================== FIREBASE DEPLOY =====================
/*
const functions = require("firebase-functions");

exports.chatWithAI = functions.https.onRequest(async (req, res) => {
  const message = req.body.message?.toLowerCase();
  const lang = req.body.lang || "en";

  if (!message) return res.status(400).json({ reply: "Please send a message." });

  let reply = "Sorry, I can only answer limited healthcare questions 😅";

  if (message.includes("fever")) {
    reply = "It seems you have fever. Take rest and stay hydrated.";
  } else if (message.includes("doctor")) {
    reply = "You can consult a nearby doctor or use a telemedicine service.";
  } else if (message.includes("headache")) {
    reply = "Headache may be due to stress or dehydration. Rest and drink water.";
  } else if (message.includes("medicine")) {
    reply = "Please consult a doctor before taking any medicine.";
  } else if (message.includes("covid") || message.includes("corona")) {
    reply = "If you have COVID symptoms, please get tested and follow medical guidelines.";
  }

  // Translate reply
  if (lang !== "en") {
    try {
      const axios = require("axios");
      const GOOGLE_API_KEY = "YOUR_GOOGLE_API_KEY_HERE";
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        null,
        { params: { q: reply, target: lang, key: GOOGLE_API_KEY } }
      );
      reply = response.data.data.translations[0].translatedText;
    } catch (err) {
      console.error("Translation error:", err.message);
    }
  }

  res.json({ reply });
});
*/
