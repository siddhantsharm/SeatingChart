import React, { useState } from "react";
import { studentData } from "../../data"; // import hardcoded data
import "./face-quiz.css";

export default function FaceQuiz() {
  // Set the first question to the first student in your database.
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //showScore --> Shows the overall score if value is true.
  const [showScore, setShowScore] = useState(false);
  // score --> Increments by 1 for every correct answer and tracks score.
  const [score, setScore] = useState(0);
  // img --> Fetches the image of the currenQuestion student.
  const [img, setImg] = useState(studentData[0].img.default);

  /* logic for a correct answer. If answer is correct increment score by 1 and present
	the next student or total score if all students have be presented already. */
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    //Change to the next question.
    const nextQuestion = currentQuestion + 1;
    //If it's the last question, set schowScore to true as the quiz has ended, otherwise show the next student.
    if (nextQuestion < studentData.length) {
      setCurrentQuestion(nextQuestion);
      setImg(studentData[nextQuestion].img.default);
    } else {
      setShowScore(true);
    }
  };

  // random name variable.
  let random = currentQuestion;
  if (studentData.length - currentQuestion < 4) {
    random = studentData.length - currentQuestion;
  }

  /* Gets random names from the database. Currently accesses the next four names in the database
	 or the previous four depending on index of the currentQuestion. Only the correct name has isCorrect value true. */
  const questions = [
    {
      answerOptions: [
        { answerText: studentData[currentQuestion].name, isCorrect: true },
        { answerText: studentData[random + 1].name, isCorrect: false },
        { answerText: studentData[random + 2].name, isCorrect: false },
        { answerText: studentData[random + 3].name, isCorrect: false },
      ],
    },
  ];

  // Sort all the answerOptions in alphabetical order so there is no apparent pattern to all the options.
  questions[0].answerOptions.sort((a, b) =>
    a.answerText > b.answerText ? 1 : -1
  );
  return (
    <div className="face-quiz-app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {studentData.length}
        </div>
      ) : (
        // Else iterate through all the students in the database.
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{studentData.length}
            </div>
            <div>
              <img src={img} alt="avatar"/>
            </div>
          </div>
          <div className="answer-section">
            {questions[0].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
