import React from 'react';
import { useGetQuestionsQuery } from '../../slices/questionsApiSlice';
import Card from '../../components/Card/Card';

const QuestionsScreen = () => {
  const { data: questions, isLoading, error } = useGetQuestionsQuery();

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <h1>Questions</h1>
          <div className="cards-container">
            {questions?.map((question) => (
              <Card key={question._id} question={question} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionsScreen;
