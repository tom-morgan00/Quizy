import React, { useContext, useRef, useState } from 'react';
import { checkAnswer, setGameOver, nextQuestion } from '../actions';
import { QuizContext } from '../context/context';
import Answer from './Answers';

export default function Questions() {
  const answersRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState('');
  const {
    userAnswers,
    chosenCategory,
    questions,
    currQuestion,
    isAnswered,
    score,
    showScore,
    dispatch,
  } = useContext(QuizContext);

  if (chosenCategory === null || showScore) return null;
  if (questions.length === currQuestion) {
    setGameOver(dispatch);
    return null;
  }

  const { answers, correctAnswer, question, difficulty } = questions[
    currQuestion
  ];

  const addAnswerClasses = (arr) => {
    return arr.forEach((el) => el.classList.add('answered'));
  };

  const removeAnswerClasses = () => {
    let ansArr = Array.from(answersRef.current.children);
    return ansArr.forEach((el) => el.classList.remove('answered'));
  };

  const answerHandler = (answer) => {
    if (isAnswered) return;

    checkAnswer(answer, correctAnswer, score, dispatch);
    let ansArr = Array.from(answersRef.current.children);
    //add answered css class to all answers
    addAnswerClasses(ansArr);
    //add correct or incorrect class to selected
    let select = ansArr.find((ans) => ans.textContent === answer);
    setSelected(select);

    let isCorrect =
      select.textContent === correctAnswer ? 'correct' : 'incorrect';
    select.classList.add(isCorrect);
    setIsCorrect(isCorrect);
  };

  const renderedAnswers = answers.map((ans, index) => {
    return (
      <Answer
        answer={ans}
        key={index}
        answerHandler={answerHandler}
        isAnswered={isAnswered}
      />
    );
  });

  return (
    <div className="question-section">
      <h1>{chosenCategory}</h1>
      <section className="question">
        <h3>
          {`Q${currQuestion + 1}: ${question}`} {`(${difficulty})`}
        </h3>
        <ul ref={answersRef} className="answers">
          {renderedAnswers}
        </ul>
        {isAnswered ? (
          <div className="next-button">
            <button
              className="button"
              onClick={() => {
                nextQuestion(currQuestion, dispatch);
                removeAnswerClasses();
                selected.classList.remove(isCorrect);
                setSelected(null);
                setIsCorrect('');
              }}
            >
              {userAnswers.length === questions.length
                ? 'View Score'
                : 'Next Question'}
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}
