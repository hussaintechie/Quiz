import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import questions from '../quiz/Question.json'; 

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setShowScore(true);
    }
  }, [timer]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimer(60); 
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className="Quiz">
        {showScore ? (
          <div className="score">
            <h2>Your score is: {score}/{questions.length}</h2>
            <Button variant="danger" onClick={() => window.location.reload()}>Restart</Button>
          </div>
        ) : (
          <>
            <div className="question">
              <h2 className="text-primary">Question {currentQuestion + 1}</h2>
              <p>{questions[currentQuestion].question}</p>
            </div>
            <div className="option">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="primary"
                  onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].correctanswer)}
                >
                  {option}
                </Button>
              ))}
            </div>
            <div className="time">
              <p>Time Left: <span>{timer}s</span></p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
