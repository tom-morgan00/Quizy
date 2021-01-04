import api from '../api';
import {
  CHECK_ANSWER,
  GAME_OVER,
  GET_CATEGORIES,
  GET_NEXT_QUESTION,
  GET_QUESTIONS,
  LOADING,
  RESET,
} from '../constants/constants';
import { setQuestion, trimCategory } from '../utils/apiUtils';

export const setGameOver = (dispatch) => {
  dispatch({
    type: GAME_OVER,
    payload: {
      showScore: true,
    },
  });
};

export const reset = (dispatch) => {
  dispatch({
    type: RESET,
    payload: {
      categories: [],
      chosenCategory: null,
      questions: [],
      currQuestion: 0,
      userAnswers: [],
      isAnswered: false,
      score: 0,
      showScore: false,
      loading: false,
    },
  });
};

export const getCategories = async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: {
      loading: true,
    },
  });

  try {
    const { data } = await api.get('/api_category.php');
    const categories = data.trivia_categories.map(({ name, id }) => {
      return {
        name: trimCategory(name),
        id,
      };
    });

    dispatch({
      type: GET_CATEGORIES,
      payload: {
        categories,
        isGameOver: false,
        loading: false,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getChosenQuestions = async (id, name, dispatch) => {
  dispatch({
    type: LOADING,
    payload: {
      loading: true,
    },
  });
  try {
    const { data } = await api.get(
      `/api.php?amount=10&type=multiple&category=${id}`
    );
    const questions = data.results.map((q) => setQuestion(q));

    dispatch({
      type: GET_QUESTIONS,
      payload: {
        categories: [],
        chosenCategory: name,
        questions,
        loading: false,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const checkAnswer = (answer, correct, score, dispatch) => {
  let tempScore = answer === correct ? (score += 1) : score;

  dispatch({
    type: CHECK_ANSWER,
    payload: {
      answer,
      score: tempScore,
      isAnswered: true,
    },
  });
};

export const nextQuestion = (currQuestion, dispatch) => {
  dispatch({
    type: GET_NEXT_QUESTION,
    payload: {
      currQuestion: (currQuestion += 1),
      isAnswered: false,
    },
  });
};
