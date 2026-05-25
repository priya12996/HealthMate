

import Tesseract from "tesseract.js";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";


function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // 🔊 TEXT TO SPEECH
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = message;
    setChat((prev) => [...prev, { from: "user", text: userMsg }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(`${BACKEND_URL}/chat`, {
        message: userMsg,
      });

      const botReply = res.data.reply;

      setChat((prev) => [...prev, { from: "bot", text: botReply }]);
      speak(botReply);

    } catch (err) {
      console.error(err);

      let reply = "Server issue hai 😅";
      setChat((prev) => [...prev, { from: "bot", text: reply }]);
      speak(reply);
    }

    setLoading(false);
  };

  // 💊 MEDICINE SCAN
  const scanMedicine = async (file) => {
    setLoading(true);

    try {
      console.log("📸 Image selected:", file);

      const result = await Tesseract.recognize(file, "eng", {
        logger: (m) => console.log("OCR:", m),
      });

      let text = result.data.text;

      console.log("🔥 RAW OCR TEXT:", text);

      if (!text || text.trim() === "") {
        alert("⚠️ Text detect nahi ho paya 😅 (clear image try karo)");
        setLoading(false);
        return;
      }

      // 🔥 CLEAN TEXT
      text = text
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, " ")
        .trim();

      console.log("🧠 CLEAN TEXT:", text);

      alert("Detected Text: " + text); // ✅ FIXED

      // 👉 Backend call
      const res = await axios.post(`${BACKEND_URL}/medicine-info`, {
        text: text,
      });

      const reply = res.data.reply;

      setChat((prev) => [...prev, { from: "bot", text: reply }]);
      speak(reply);

    } catch (err) {
      console.error("❌ OCR ERROR:", err);

      const reply = "❌ Medicine detect nahi ho paayi 😢";
      setChat((prev) => [...prev, { from: "bot", text: reply }]);
      speak(reply);
    }

    setLoading(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div style={{
      maxWidth: "450px",
      margin: "40px auto",
      fontFamily: "Arial",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      overflow: "hidden",
      backgroundColor: "#f9f9f9",
    }}>

      <div style={{
        backgroundColor: "#ff4d88",
        color: "white",
        padding: "15px",
        fontSize: "18px",
        textAlign: "center",
      }}>
        🤖 Health Assistant
      </div>

      <div style={{
        padding: "10px",
        height: "350px",
        overflowY: "auto",
        backgroundColor: "#fff",
      }}>
        {chat.map((c, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: c.from === "user" ? "flex-end" : "flex-start",
            margin: "10px 0",
          }}>
            <div style={{
              maxWidth: "70%",
              padding: "10px 15px",
              borderRadius: "20px",
              backgroundColor: c.from === "user" ? "#ff4d88" : "#eee",
              color: c.from === "user" ? "white" : "#333",
            }}>
              {c.text}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ textAlign: "left", color: "gray" }}>
            🤖 Processing...
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      <div style={{
        display: "flex",
        padding: "10px",
        borderTop: "1px solid #ccc",
        backgroundColor: "#f1f1f1",
      }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about health..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files[0]) {
              scanMedicine(e.target.files[0]);
            }
          }}
          style={{ marginLeft: "10px" }}
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#ff4d88",
            color: "white",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;