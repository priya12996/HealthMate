
// const express = require("express");
// const axios = require("axios");
// const cors = require("cors");

// const app = express();

// // ✅ Middleware
// app.use(cors({ origin: "*" }));
// app.use(express.json());

// // ================== 💊 MEDICINE DATASET ==================

// const medicines = {
//   paracetamol: ["paracetamol", "para", "pcm", "calpol"],
//   dolo650: ["dolo", "dolo650", "dolo 650"],
//   crocin: ["crocin"],
//   ibuprofen: ["ibuprofen", "brufen", "ibu"],
//   cetirizine: ["cetirizine", "cetzine"],
//   azithromycin: ["azithromycin", "azee"],
//   pantoprazole: ["pantoprazole", "pantocid"],
//   metformin: ["metformin"],
//   insulin: ["insulin"],
//   ORS: ["ors", "oral rehydration"],
//   multivitamin: ["multivitamin", "revital"],
//   calcium: ["calcium", "shelcal"],
//   vitaminD: ["vitamin d", "d3"],
//   iron: ["iron", "ferrous"]
// };



// const medicineInfo = {
//   paracetamol: `
// 💊 Paracetamol
// 👉 Use: Fever & pain relief
// 👉 Dose: 500–650 mg, din me 3–4 baar (6–8 ghante gap)
// 👉 Max: 4000 mg/day se zyada nahi
// ⚠️ Warning: Liver problem wale doctor se pucho
// `,

//   dolo650: `
// 💊 Dolo 650
// 👉 Use: High fever
// 👉 Dose: 650 mg, din me 2–3 baar
// ⚠️ Doctor advice lena better hai
// `,

//   crocin: `
// 💊 Crocin
// 👉 Use: Mild fever
// 👉 Dose: 500 mg, din me 2–3 baar
// `,

//   ibuprofen: `
// 💊 Ibuprofen
// 👉 Use: Pain, swelling
// 👉 Dose: 200–400 mg, din me 2–3 baar
// ⚠️ Empty stomach mat lo
// `,

//   cetirizine: `
// 💊 Cetirizine
// 👉 Use: Allergy, cold
// 👉 Dose: 1 tablet daily (raat me lena best)
// ⚠️ Neend aa sakti hai
// `,

//   azithromycin: `
// 💊 Azithromycin
// 👉 Use: Infection (antibiotic)
// 👉 Dose: Usually 1 daily for 3–5 days
// ⚠️ Doctor ke bina mat lo
// `,

//   pantoprazole: `
// 💊 Pantoprazole
// 👉 Use: Acidity
// 👉 Dose: 1 tablet daily (empty stomach morning)
// `,

//   metformin: `
// 💊 Metformin
// 👉 Use: Diabetes control
// 👉 Dose: 1–2 baar daily (after meal)
// ⚠️ Doctor prescription zaruri
// `,

//   insulin: `
// 💊 Insulin
// 👉 Use: Blood sugar control
// 👉 Dose: Doctor decide karta hai
// ⚠️ Self use dangerous ho sakta hai
// `,

//   ORS: `
// 💊 ORS
// 👉 Use: Dehydration
// 👉 Dose: Pani me mix karke sip-sip karke piyo
// `,

//   multivitamin: `
// 💊 Multivitamin
// 👉 Use: Nutrition boost
// 👉 Dose: 1 tablet daily
// `,

//   calcium: `
// 💊 Calcium
// 👉 Use: Bones strong
// 👉 Dose: 1 tablet daily (after meal)
// `,

//   vitaminD: `
// 💊 Vitamin D
// 👉 Use: Deficiency
// 👉 Dose: Weekly ya monthly (doctor ke according)
// `,

//   iron: `
// 💊 Iron
// 👉 Use: Khoon badhane ke liye
// 👉 Dose: 1 tablet daily
// ⚠️ Empty stomach best (doctor advice preferred)
// `
// };
// // ================== 🔍 IMPROVED SIMILARITY ==================

// function similarity(a, b) {
//   a = a.toLowerCase();
//   b = b.toLowerCase();

//   if (a.includes(b) || b.includes(a)) return 0.9; // 🔥 strong match shortcut

//   let longer = a.length > b.length ? a : b;
//   let shorter = a.length > b.length ? b : a;

//   let same = 0;
//   for (let i = 0; i < shorter.length; i++) {
//     if (longer[i] === shorter[i]) same++;
//   }

//   return same / longer.length;
// }

// // ================== TEST ==================

// app.get("/", (req, res) => {
//   res.send("Healthmate Backend Running 🚀");
// });

// // ================== HOSPITAL API ==================

// app.get("/api/hospitals", async (req, res) => {
//   try {
//     const { lat, lng, radius } = req.query;

//     if (!lat || !lng) {
//       return res.status(400).json({
//         error: "Latitude and Longitude required",
//       });
//     }

//     const searchRadius = radius || 10000;

//     const query = `
//       [out:json][timeout:25];
//       (
//         node["amenity"="hospital"](around:${searchRadius},${lat},${lng});
//       );
//       out body;
//     `;

//     const response = await axios.post(
//       "https://overpass.kumi.systems/api/interpreter",
//       query,
//       {
//         headers: { "Content-Type": "text/plain" },
//         timeout: 15000,
//       }
//     );

//     const hospitals = response.data.elements
//       .filter((h) => h.tags && h.tags.name)
//       .map((h) => ({
//         name: h.tags.name,
//         lat: h.lat,
//         lon: h.lon,
//       }));

//     res.json({
//       count: hospitals.length,
//       elements: hospitals,
//     });

//   } catch (error) {
//     console.error("Hospital API Error:", error.message);
//     res.status(500).json({
//       error: "Server error",
//     });
//   }
// });

// // ================== CHATBOT ==================

// app.post("/chat", (req, res) => {
//   try {
//     const msg = (req.body.message || "").toLowerCase().trim();

//     if (!msg) {
//       return res.json({
//         reply: "⚠️ Kuch likho bhi 😅"
//       });
//     }

//     let reply = "";

//     if (msg.includes("hello") || msg.includes("hi")) {
//       reply = "👋 Hello! I am your Health Assistant 😎";
//     }
//     else if (msg.includes("health")) {
//       reply = "💪 Healthy rehne ke liye diet + exercise + sleep zaruri hai!";
//     }
//     else if (msg.includes("food") || msg.includes("diet")) {
//       reply = "🍽️ Diet Planner try karo!";
//     }
//     else if (msg.includes("hospital")) {
//       reply = "🏥 Nearby hospital ke liye location allow karo!";
//     }
//     else if (msg.includes("map")) {
//       reply = "🗺️ Map feature use karo!";
//     }
//     else if (msg.includes("fever")) {
//       reply = "🤒 Fever me rest + pani!";
//     }
//     else {
//       reply = "⚠️ Thoda clear pucho 😅";
//     }

//     res.json({ reply });

//   } catch (err) {
//     console.error("Chat Error:", err);
//     res.json({ reply: "Server error 😢" });
//   }
// });

// // ================== 💊 MEDICINE DETECTION ==================

// app.post("/medicine-info", (req, res) => {
//   try {
//     let text = (req.body.text || "").toLowerCase();

//     if (!text) {
//       console.log("❌ EMPTY TEXT RECEIVED");
//       return res.json({
//         reply: "⚠️ Image se text read nahi ho paya 😅 (clear image try karo)"
//       });
//     }

//     text = text
//       .replace(/[^a-z0-9 ]/g, "")
//       .replace(/\s+/g, " ")
//       .trim();

//     console.log("🧠 OCR TEXT:", text);

//     let detected = "unknown";
//     let bestMatch = "unknown";
//     let bestScore = 0;

//     for (let med in medicines) {
//       for (let keyword of medicines[med]) {
//         let score = similarity(text, keyword);

//         if (score > bestScore) {
//           bestScore = score;
//           bestMatch = med;
//         }
//       }
//     }

//     console.log("🔥 BEST MATCH:", bestMatch, "SCORE:", bestScore);

//     if (bestScore > 0.4) {
//       detected = bestMatch;
//     }

//     let reply =
//       medicineInfo[detected] ||
//       "⚠️ Medicine detect nahi ho paayi 😅 (clear image try karo)";

//     res.json({ reply });

//   } catch (error) {
//     console.error("Medicine Error:", error);
//     res.json({ reply: "Server error 😢" });
//   }
// });

// // 🚀 START SERVER
// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// ================== 🍃 MONGOOSE DATABASE CONNECTION ==================
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/healthmate";
mongoose.connect(MONGODB_URI)
  .then(() => console.log("🌱 Connected to MongoDB successfully!"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
  city: String,
  hospital: String,
  department: String,
  name: String,
  email: String,
  problem: String,
  date: Date,
  createdAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

// ================== 🏥 APPOINTMENT API ENDPOINT ==================
app.post("/api/appointments", async (req, res) => {
  try {
    const { city, hospital, department, name, email, problem, date } = req.body;

    if (!city || !hospital || !department || !name || !email || !date) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newAppointment = new Appointment({
      city,
      hospital,
      department,
      name,
      email,
      problem,
      date: new Date(date)
    });

    const savedDoc = await newAppointment.save();
    res.status(201).json({ message: "Appointment saved successfully!", data: savedDoc });
  } catch (error) {
    console.error("Database save error:", error);
    res.status(500).json({ error: "Failed to save appointment to MongoDB database" });
  }
});

// ================== 💊 MEDICINE DATASET ==================

const medicines = {
  paracetamol: ["paracetamol", "para", "pcm", "calpol"],
  dolo650: ["dolo", "dolo650", "dolo 650"],
  crocin: ["crocin"],
  ibuprofen: ["ibuprofen", "brufen", "ibu"],
  cetirizine: ["cetirizine", "cetzine"],
  azithromycin: ["azithromycin", "azee"],
  pantoprazole: ["pantoprazole", "pantocid"],
  metformin: ["metformin"],
  insulin: ["insulin"],
  ORS: ["ors", "oral rehydration"],
  multivitamin: ["multivitamin", "revital"],
  calcium: ["calcium", "shelcal"],
  vitaminD: ["vitamin d", "d3"],
  iron: ["iron", "ferrous"]
};

const medicineInfo = {
  paracetamol: `
💊 Paracetamol
👉 Use: Fever & pain relief
👉 Dose: 500–650 mg, din me 3–4 baar (6–8 ghante gap)
👉 Max: 4000 mg/day se zyada nahi
⚠️ Warning: Liver problem wale doctor se pucho
`,
  dolo650: `
💊 Dolo 650
👉 Use: High fever
👉 Dose: 650 mg, din me 2–3 baar
⚠️ Doctor advice lena better hai
`,
  crocin: `
💊 Crocin
👉 Use: Mild fever
👉 Dose: 500 mg, din me 2–3 baar
`,
  ibuprofen: `
💊 Ibuprofen
👉 Use: Pain, swelling
👉 Dose: 200–400 mg, din me 2–3 baar
⚠️ Empty stomach mat lo
`,
  cetirizine: `
💊 Cetirizine
👉 Use: Allergy, cold
👉 Dose: 1 tablet daily (raat me lena best)
⚠️ Neend aa sakti hai
`,
  azithromycin: `
💊 Azithromycin
👉 Use: Infection (antibiotic)
👉 Dose: Usually 1 daily for 3–5 days
⚠️ Doctor ke bina mat lo
`,
  pantoprazole: `
💊 Pantoprazole
👉 Use: Acidity
👉 Dose: 1 tablet daily (empty stomach morning)
`,
  metformin: `
💊 Metformin
👉 Use: Diabetes control
👉 Dose: 1–2 baar daily (after meal)
⚠️ Doctor prescription zaruri
`,
  insulin: `
💊 Insulin
👉 Use: Blood sugar control
👉 Dose: Doctor decide karta hai
⚠️ Self use dangerous ho sakta hai
`,
  ORS: `
💊 ORS
👉 Use: Dehydration
👉 Dose: Pani me mix karke sip-sip karke piyo
`,
  multivitamin: `
💊 Multivitamin
👉 Use: Nutrition boost
👉 Dose: 1 tablet daily
`,
  calcium: `
💊 Calcium
👉 Use: Bones strong
👉 Dose: 1 tablet daily (after meal)
`,
  vitaminD: `
💊 Vitamin D
👉 Use: Deficiency
👉 Dose: Weekly ya monthly (doctor ke according)
`,
  iron: `
💊 Iron
👉 Use: Khoon badhane ke liye
👉 Dose: 1 tablet daily
⚠️ Empty stomach best (doctor advice preferred)
`
};

// ================== 🔍 SIMILARITY ==================

function similarity(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a.includes(b) || b.includes(a)) return 0.9;

  let longer = a.length > b.length ? a : b;
  let shorter = a.length > b.length ? b : a;

  let same = 0;
  for (let i = 0; i < shorter.length; i++) {
    if (longer[i] === shorter[i]) same++;
  }

  return same / longer.length;
}

// ================== TEST ==================

app.get("/", (req, res) => {
  res.send("Healthmate Backend Running 🚀");
});

// ================== 🏥 FIXED HOSPITAL API ==================

app.get("/api/hospitals", async (req, res) => {
  try {
    const { lat, lng, radius } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({
        error: "Latitude and Longitude required",
      });
    }

    const searchRadius = radius || 10000;

    const query = `
      [out:json][timeout:25];
      (
        node["amenity"="hospital"](around:${searchRadius},${lat},${lng});
        way["amenity"="hospital"](around:${searchRadius},${lat},${lng});
        relation["amenity"="hospital"](around:${searchRadius},${lat},${lng});
      );
      out body;
    `;

    const response = await axios.post(
      "https://overpass.kumi.systems/api/interpreter",
      query,
      {
        headers: { "Content-Type": "text/plain" },
        timeout: 15000,
      }
    );

    // ✅ IMPORTANT: send RAW data (frontend compatible)
    res.json({
      elements: response.data.elements || [],
    });

  } catch (error) {
    console.error("Hospital API Error:", error.message);
    res.status(500).json({
      error: "Server error",
    });
  }
});

// ================== CHATBOT ==================

app.post("/chat", (req, res) => {
  try {
    const msg = (req.body.message || "").toLowerCase().trim();

    if (!msg) {
      return res.json({ reply: "⚠️ Kuch likho bhi 😅" });
    }

    let reply = "";

    if (msg.includes("hello") || msg.includes("hi")) {
      reply = " Hello! I am your Health Assistant ";
    } else if (msg.includes("health")) {
      reply = " Healthy rehne ke liye diet + exercise + sleep zaruri hai!";
    } else if (msg.includes("food") || msg.includes("diet")) {
      reply = " Diet Planner try karo!";
    } else if (msg.includes("hospital")) {
      reply = " Nearby hospital ke liye location allow karo!";
    } else if (msg.includes("map")) {
      reply = " Map feature use karo!";
    } else if (msg.includes("fever")) {
      reply = "🤒 Fever me rest + pani!";
    } else {
      reply = "⚠️ Thoda clear pucho 😅";
    }

    res.json({ reply });

  } catch (err) {
    console.error("Chat Error:", err);
    res.json({ reply: "Server error " });
  }
});


app.post("/medicine-info", (req, res) => {
  try {
    let text = (req.body.text || "").toLowerCase();

    if (!text) {
      return res.json({
        reply: "⚠️ Image se text read nahi ho paya "
      });
    }

    text = text.replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();

    let bestMatch = "unknown";
    let bestScore = 0;

    for (let med in medicines) {
      for (let keyword of medicines[med]) {
        let score = similarity(text, keyword);

        if (score > bestScore) {
          bestScore = score;
          bestMatch = med;
        }
      }
    }

    let reply =
      bestScore > 0.4
        ? medicineInfo[bestMatch]
        : "⚠️ Medicine detect nahi ho paayi ";

    res.json({ reply });

  } catch (error) {
    console.error("Medicine Error:", error);
    res.json({ reply: "Server error " });
  }
});

// 🚀 START SERVER
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});