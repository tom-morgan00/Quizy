import React from 'react';
import QuizContextProvider from './context/context';
import Start from './components/Start';
import Categories from './components/Categories';
import Questions from './components/Questions';
import Score from './components/Score';

export default function App() {
  return (
    <QuizContextProvider>
      <div className="App">
        <main>
          <Start />
          <Categories />
          <Questions />
          <Score />
        </main>
      </div>
    </QuizContextProvider>
  );
}
