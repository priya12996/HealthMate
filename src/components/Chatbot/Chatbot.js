import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!message) return;

    setChat([...chat, { from: "user", text: message }]);
    setMessage("");

    try {
      const functionURL = "http://localhost:5000/chat";
      const res = await axios.post(functionURL, { message });
      setChat((prev) => [...prev, { from: "bot", text: res.data.reply }]);
    } catch (err) {
      console.error(err);
      setChat((prev) => [...prev, { from: "bot", text: "Server error!" }]);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "50px auto",
        fontFamily: "Arial, sans-serif",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        overflow: "hidden",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          backgroundColor: "pink",
          color: "white",
          padding: "15px",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        Chatbot
      </div>

      <div
        style={{
          padding: "10px",
          height: "350px",
          overflowY: "auto",
          backgroundColor: "#fff",
        }}
      >
        {chat.map((c, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: c.from === "user" ? "flex-end" : "flex-start",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                padding: "10px 15px",
                borderRadius: "20px",
                backgroundColor: c.from === "user" ? "pink" : "#eee",
                color: c.from === "user" ? "white" : "#333",
              }}
            >
              {c.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div
        style={{
          display: "flex",
          padding: "10px",
          borderTop: "1px solid #ccc",
          backgroundColor: "#f1f1f1",
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type something..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "pink",
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
