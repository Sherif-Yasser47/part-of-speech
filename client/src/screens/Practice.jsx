import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question/Question";
import ProgressBar from "../components/Progress/Progress";
import apiReq from '../api';

const Practice = () => {
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    //make GET request to get words from words endpoint.
    apiReq.get('/api/words').then((res) => {
      setQuestions(res.data);
    })
  }, []);
  const onSelect = (selectedWord, correctAnswer, index) => {
    const isCorrect = selectedWord === correctAnswer;
    const isLastQuestion = questions.length - 1 === index;
    const answerObj = { answer: selectedWord, isCorrect };
    const newAnswers = [...answers, answerObj];
    setAnswers(newAnswers);

    
    //Calculating the number of correct answers after last question being reached to calculate the score.
    if (isLastQuestion) {
      let numOfCorrectAnswers = 0;
      newAnswers.forEach((answer) => {
        if (answer.isCorrect) numOfCorrectAnswers++;
      });
      const scorePercentage = (numOfCorrectAnswers / questions.length) * 100;

      // make POST request to rank endpoint with score percentage payload to get the rank of student.
      apiReq.post('/api/rank', {score: scorePercentage}).then((res) => {
        navigate("/rank", { state: { rank: res.data.rank } });
      });
    }
  };


  const displayedQuestions = questions.filter((wordObj, index) => {
    if (index <= answers.length) return wordObj;
  });
  return (
    <div>
      <h1>Practice</h1>
      <div>
        {displayedQuestions.map((wordObj, index) => (
          <Question
            key={wordObj.id}
            word={wordObj.word}
            correctAnswer={wordObj.pos}
            onSelect={(selectedWord) =>
              onSelect(selectedWord, wordObj.pos, index)
            }
          />
        ))}
      </div>
      <ProgressBar completed={(answers.length / questions.length) * 100}/>
    </div>
  );
};

export default Practice;
