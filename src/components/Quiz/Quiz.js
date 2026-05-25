import React, { useState } from "react";
import { quizzes } from "./Quizdata";

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizzes[selectedQuiz][currentQ].answer) {
      setScore(score + 1);
      alert("✅ Correct Answer!");
    } else {
      alert("❌ Wrong Answer!");
    }

    const nextQ = currentQ + 1;
    if (nextQ < quizzes[selectedQuiz].length) {
      setCurrentQ(nextQ);
    } else {
      setShowResult(true);
    }
  };

  // 🔥 Quiz selection screen
  if (!selectedQuiz) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Select Quiz 😎</h2>

        {["quiz1", "quiz2", "quiz3", "quiz4", "quiz5"].map((q, i) => (
          <button
            key={i}
            onClick={() => setSelectedQuiz(q)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Quiz {i + 1}
          </button>
        ))}
      </div>
    );
  }

  // 🔥 Quiz questions screen
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>🎮 Health Quiz</h2>

      {showResult ? (
        <div>
          <h3>Quiz Completed!</h3>
          <p>
            Your Score: {score} / {quizzes[selectedQuiz].length}
          </p>

          <button onClick={() => window.location.reload()}>
            Restart 🔄
          </button>
        </div>
      ) : (
        <div>
          <h4>
            Q{currentQ + 1}. {quizzes[selectedQuiz][currentQ].question}
          </h4>

          {quizzes[selectedQuiz][currentQ].options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              style={{
                display: "block",
                margin: "10px 0",
                padding: "10px",
                width: "100%",
                borderRadius: "5px",
                cursor: "pointer"
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