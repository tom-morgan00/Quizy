import decodeEntities from 'decode-entities';

export const trimCategory = (name) => {
  if (name.includes(':')) {
    return name.slice(name.indexOf(':') + 2);
  }
  return name;
};

const randomiseAnswers = (answers) => {
  return [...answers.sort(() => Math.random() - 0.5)];
};

const decodeAnswers = (answers) => {
  return answers.map((ans) => {
    if (ans.includes(';')) {
      return decodeEntities(ans);
    }
    return ans;
  });
};

export const setQuestion = (quest) => {
  const { question, correct_answer, incorrect_answers, difficulty } = quest;

  const answers = randomiseAnswers([...incorrect_answers, correct_answer]);

  return {
    question: decodeEntities(question),
    difficulty,
    answers: decodeAnswers(answers),
    correctAnswer: decodeEntities(correct_answer),
  };
};
