import React from 'react';
import { Link } from 'react-router-dom';

import './_card.scss';

const Card = ({ key, question }) => {
  return (
    <div className="card-wrapper">
      <Link to={`/questions/${question._id}`}>
        <h2>{question.title}</h2>
      </Link>
      <p>{question.numberOfSections}</p>
      <p>{question.numOfTotalQuestions}</p>
    </div>
  );
};

export default Card;
