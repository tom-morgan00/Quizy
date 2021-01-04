import React, { useContext } from 'react';
import { getCategories, reset } from '../actions';
import { QuizContext } from '../context/context';
import Loading from './Loading';

export default function Score() {
  const { dispatch, score, questions, showScore, loading } = useContext(
    QuizContext
  );

  if (!showScore) return null;

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div className="score">
      <h1 style={{ marginBottom: '20px' }}>Score</h1>
      <h3>{`You scored ${score} out of ${questions.length}`}</h3>

      <div className="score-button">
        <button
          onClick={() => {
            reset(dispatch);
            getCategories(dispatch);
          }}
          className="button"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
