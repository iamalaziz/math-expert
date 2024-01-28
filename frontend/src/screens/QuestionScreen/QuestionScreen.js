import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetQuestionQuery } from '../../slices/questionsApiSlice';

const QuestionScreen = () => {
  const {id: questionId} = useParams()
  const { data: question, isLoading, error } = useGetQuestionQuery(questionId);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <h1>{question.title}</h1>
          <div className="cards-container">
            {question.numberOfSections}
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionScreen;
