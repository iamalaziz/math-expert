import React from 'react'
import './_card.scss';

const Card = ({key, question}) => {

  return (
    <div className="card-wrapper">
      <h2>{question.title}</h2>
      <p>{question.numberOfSections}</p>
      <p>{question.numOfTotalQuestions}</p>
    </div>
  )
}

export default Card
