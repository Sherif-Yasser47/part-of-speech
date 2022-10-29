import React, { useState } from "react";
import Button from "../Button/Button";

import "./Question.css";

const Question = ({ word, correctAnswer, onSelect }) => {
  const [isAnswered, setIsAnswered] = useState(false);

  const choices = [
    { id: 1, text: "verb" },
    { id: 2, text: "adjective" },
    { id: 3, text: "noun" },
    { id: 4, text: "adverb" },
  ];

  const onClick = (e) => {
    setIsAnswered(true);
    onSelect(e.target.value);
  };

  return (
    <div className="questionContainer">
      <div className="question">{word}</div>
      <div className="choices">
        {choices.map((choice) => (
          <Button
            key={choice.id}
            text={choice.text}
            correctAnswer={correctAnswer}
            onClick={onClick}
            isAnswered={isAnswered}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
