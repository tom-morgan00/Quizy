import React, { useContext } from 'react';
import { QuizContext } from '../context/context';

export default function Loading() {
  const { loading } = useContext(QuizContext);

  if (!loading) return null;
  return (
    <div className="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
