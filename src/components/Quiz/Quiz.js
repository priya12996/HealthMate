// src/components/Quiz/Quiz.js
import React, { useState } from "react";
import { healthQuiz } from "./Quizdata";

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === healthQuiz[currentQ].answer) {
      setScore(score + 1);
      alert("✅ Correct Answer!");
    } else {
      alert("❌ Wrong Answer!");
    }

    const nextQ = currentQ + 1;
    if (nextQ < healthQuiz.length) {
      setCurrentQ(nextQ);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div
      style={{
        
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h2>🎮 Health Quiz</h2>
      {showResult ? (
        <div>
          <h3>Quiz Completed!</h3>
          <p>
            Your Score: {score} / {healthQuiz.length}
          </p>
        </div>
      ) : (
        <div>
          <h4>
            Q{currentQ + 1}. {healthQuiz[currentQ].question}
          </h4>
          {healthQuiz[currentQ].options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              style={{
                display: "block",
                margin: "10px 0",
                padding: "10px",
                width: "100%",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
