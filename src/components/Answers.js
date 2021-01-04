import React from 'react';

export default function Answers({ answer, answerHandler }) {
  return (
    <li onClick={() => answerHandler(answer)} className={`answer`}>
      {answer}
    </li>
  );
}
