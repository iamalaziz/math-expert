import React, {Fragment} from 'react';
import { useGetQuestionsQuery } from '../../slices/questionsApiSlice';
import Card from '../../components/Card/Card';

import "./_questions.scss"

const QuestionsScreen = () => {
  const { data: questions, isLoading, error } = useGetQuestionsQuery();

  return (
    <section className="questions">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error.data.message || error.error}</div>
      ) : (
        <Fragment>
          <h1>Questions</h1>
          <div className="cards-container">
            {questions.map((question) => (
              <Card key={question._id} question={question} />
            ))}
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default QuestionsScreen;
