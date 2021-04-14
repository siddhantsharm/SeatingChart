import React, { useState } from 'react';
import {classData, studentData, currentUser} from './data.js'; // import hardcoded data
import './FlashCards.css'

export default function FlashCards() {

	// Set the first question to the first student in your database.
	const [currentQuestion, setCurrentQuestion] = useState(0);
	//showScore --> Shows the overall score if value is true.
	const [finished, setFinished] = useState(false);
	// img --> Fetches the image of the currenQuestion student.
	const [img, setImg] = useState(studentData[0].img.default);

	const[known, setKnown] = useState(studentData);


	const handleNextOptionClick = () => {

		//Change to the next question.
		const nextQuestion = currentQuestion + 1;
		//If it's the last question, set schowScore to true as the quiz has ended, otherwise show the next student.
		if (nextQuestion < known.length) {
			setCurrentQuestion(nextQuestion);
			setImg(known[nextQuestion].img.default);
		} else {
			setFinished(true);
		}
	};

	const restart = () => {

		//Change to the next question.
		const nextQuestion = 0;
		//If it's the last question, set schowScore to true as the quiz has ended, otherwise show the next student.
			setCurrentQuestion(nextQuestion);
			setImg(known[nextQuestion].img.default);
			setFinished(false);

	};

	// random name variable.

	return (



		<React.Fragment>
		<div className='app'>
			{finished ? (
				<div className='restart-section' onClick={() => restart()} >
					<p className="text">Press to Restart </p>
				</div>
		// Else iterate through all the students in the database.
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Student {currentQuestion + 1}</span>/{studentData.length}
						</div>
						<div >
						<img src={img}  />
						</div>
					</div>
					<div className='answer-section'>
						<p className='name'> {known[currentQuestion].name} </p>
					</div>
				</>
			)}
		</div>
		{!finished ? (
		<button className="next" onClick ={() => handleNextOptionClick()}> <p className="text">Next </p> </button>
	): (
		<p></p>
	)
	}
		</React.Fragment>
	);
}
