import React from 'react';

import './_section.scss';

const SectionItem = ({ section }) => {
  return (
    <div className="section-item">
      <h3>{section.instruction}</h3>
      {section.questions.map((q, index) => (
        <ol key={q._id}>
          <li>
            <label>
              <span className="order-of-question">{index + 1}.</span> {q.question}
            </label>
            <input type="text" />
          </li>
        </ol>
      ))}
    </div>
  );
};

export default SectionItem;
