import React, { useContext } from 'react';
import { getCategories } from '../actions';
import { QuizContext } from '../context/context';
import Loading from './Loading';

export default function Start() {
  const { isGameOver, loading, dispatch } = useContext(QuizContext);

  if (!isGameOver) {
    return null;
  }
  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div className="start">
      <h1 style={{ marginBottom: '20px' }}>Welcome to Quizy</h1>
      <h4>Quiz App built with Open Trivia API</h4>
      <p></p>
      <div className="start-button">
        <button className="button" onClick={() => getCategories(dispatch)}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}
