import {
  CHECK_ANSWER,
  GAME_OVER,
  GET_CATEGORIES,
  GET_NEXT_QUESTION,
  GET_QUESTIONS,
  LOADING,
  RESET,
} from '../constants/constants';

export default function quizReducer(state, action) {
  switch (action.type) {
    //LOADING
    case LOADING: {
      const { loading } = action.payload;
      return {
        ...state,
        loading,
      };
    }
    //GET ALL CATEGORIES TO CHOOSE FROM
    case GET_CATEGORIES: {
      const { categories, isGameOver, loading } = action.payload;
      return {
        ...state,
        categories,
        isGameOver,
        loading,
      };
    }

    //GET QUESTIONS FROM CHOSEN CATEGORY
    case GET_QUESTIONS: {
      const { questions, categories, chosenCategory, loading } = action.payload;
      return {
        ...state,
        questions,
        categories,
        chosenCategory,
        loading,
      };
    }

    //CHECK ANSWER
    case CHECK_ANSWER: {
      const { answer, score, isAnswered } = action.payload;
      return {
        ...state,
        userAnswers: [...state.userAnswers, answer],
        isAnswered,
        score,
      };
    }

    //NEXT QUESTION
    case GET_NEXT_QUESTION: {
      const { currQuestion, isAnswered } = action.payload;
      return {
        ...state,
        currQuestion,
        isAnswered,
      };
    }

    //RESET GAME WHEN USER PLAYS
    case RESET: {
      return {
        ...action.payload,
      };
    }

    //TURNS TO GAME OVER
    case GAME_OVER: {
      const { showScore } = action.payload;
      return {
        ...state,
        showScore,
      };
    }

    default: {
      return state;
    }
  }
}
