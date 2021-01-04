import React, { createContext, useReducer } from 'react';
import quizReducer from '../reducers/quizReducer';

export const QuizContext = createContext();

export default function QuizContextProvider({ children }) {
  // const state = {
  //   categories: null,
  //   questions: null,
  //   currentQuestion: null,
  //   answers: null
  // }

  // const [categories, setCategories] = useState([]);
  // const [category, setCategory] = useState('');
  // const [questions, setQuestions] = useState([]);
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [playerAnswers, setPlayerAnswers] = useState([]);

  const INITIAL_STATE = {
    categories: [],
    chosenCategory: null,
    questions: [],
    currQuestion: 0,
    userAnswers: [],
    isAnswered: false,
    score: 0,
    showScore: false,
    isGameOver: true,
    loading: false,
  };

  const [state, dispatch] = useReducer(quizReducer, INITIAL_STATE);

  return (
    <QuizContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
