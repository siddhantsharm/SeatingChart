import React, { useState } from 'react';
import {classData, studentData, currentUser} from './data.js'; // import hardcoded data
import './BinaryChoice.css'

export default function BinaryChoice() {

	// Set the first question to the first student in your database.
	const [currentQuestion, setCurrentQuestion] = useState(0);
	//showScore --> Shows the overall score if value is true.
	const [showScore, setShowScore] = useState(false);
	// score --> Increments by 1 for every correct answer and tracks score.
	const [score, setScore] = useState(0);
	// img --> Fetches the image of the currenQuestion student.
	const [img, setImg] = useState(studentData[0].img.default);

	const[known, setKnown] = useState(studentData);

	const[current, setCurrent] = useState(1);

	const[totalStudents, setTotalStudents] = useState(known.length);



	const handleYesOptionClick = (isCorrect, name) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		setKnown(known.filter(item => item.name !== name))
		yesHandler();
	}

	const yesHandler = () => {
		setCurrent(current + 1);

		//Change to the next question.
		const nextQuestion = currentQuestion;
		//If it's the last question, set schowScore to true as the quiz has ended, otherwise show the next student.
		if (nextQuestion < known.length - 1) {
			setCurrentQuestion(nextQuestion);
			setImg(known[nextQuestion + 1].img.default);
		} else {
			setShowScore(true);
		}
	};

	const handleNoOptionClick = () => {
		setCurrent(current + 1);
		//Change to the next question.
		const nextQuestion = currentQuestion + 1;
		//If it's the last question, set schowScore to true as the quiz has ended, otherwise show the next student.
		if (nextQuestion < known.length) {
			setCurrentQuestion(nextQuestion);
			setImg(known[nextQuestion].img.default);
		} else {
			setShowScore(true);
		}
	};

	// random name variable.
	const restart = () => {
		if(known.length != 0) {
		setShowScore(false);
		setCurrent(1);
		setTotalStudents(known.length);
		setCurrentQuestion(0);
		setImg(known[0].img.default);
		setScore(0);
	}
	}

	return (




		<div className='app'>
			{showScore ? (
				<div className='score-section' onClick = {() => restart()}>

					<div>You scored {score} out of {totalStudents}.
					<p></p>
					{known.length != 0 ? (
						<div>Press to try again with the {totalStudents - score} students you got wrong. </div>
					) :(
						<p> </p>
					) }
					</div>
				</div>
		// Else iterate through all the students in the database.
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Student {current}</span>/{totalStudents}
						</div>
						<div >
						<img src={img}  />
						</div>
					</div>
					<div className='answer-section'>
					<div className='button-spacing'>
					Do you know this student?
					<p/>
						<button onClick={() => handleYesOptionClick(true, known[currentQuestion].name)}> Yes </button>
						<p></p>
						<button onClick={() => handleNoOptionClick()}> No </button>
					</div>
					</div>
				</>
			)}
		</div>
	);
}
