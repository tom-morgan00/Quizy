import React, { useContext } from 'react';
import { QuizContext } from '../context/context';
import Category from './Category';
import { getChosenQuestions } from '../actions';
import Loading from './Loading';

export default function Categories() {
  const { categories, loading, dispatch } = useContext(QuizContext);
  const pressHandler = (id, name) => {
    getChosenQuestions(id, name, dispatch);
  };

  if (loading) {
    return <Loading loading={loading} />;
  }

  return categories.length ? (
    <section className="category-section">
      <h2>Categories</h2>

      <ul className="categories">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            pressHandler={pressHandler}
          />
        ))}
      </ul>
    </section>
  ) : null;
}
