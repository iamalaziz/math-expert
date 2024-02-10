import React from 'react';
import { Link } from 'react-router-dom';

import './_card.scss';

const Card = ({ question }) => {
  return (
    <div className="card-wrapper">
      <Link to={`/questions/${question._id}`}>
        <div className="card-top">
          <div className="img-overlay">
            <img src={question.image} alt="topic image" />
          </div>
          <h2>{question.title}</h2>
        </div>
      </Link>
      <div className="card-footer">
        <h2>{question.title}</h2>
        <p>Number of Tasks: {question.numberOfSections}</p>
        <p>Number of Total Questions: {question.numOfTotalQuestions}</p>
        <Link to={`/questions/${question._id}`}>
          <button className="btn-start">PRACTICE</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
