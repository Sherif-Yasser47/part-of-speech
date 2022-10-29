import React, { useState } from "react";

import "./Button.css";

const Button = ({ text, correctAnswer, onClick, isAnswered = false }) => {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(undefined);

  const onSelect = (e) => {
    onClick(e);
    if (text === correctAnswer) setIsCorrectAnswer(true);
    else setIsCorrectAnswer(false);
  };

  return (
    <button
      disabled={isAnswered}
      className={`btn ${isAnswered ? "disabled" : ""} ${
        isCorrectAnswer !== undefined
          ? isCorrectAnswer
            ? "success"
            : "danger"
          : ""
      }`}
      onClick={onSelect}
      value={text}
    >
      {text}
    </button>
  );
};

export default Button;
