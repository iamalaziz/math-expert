const questions = [
  {
    title: 'Adding and Subtracting',
    numberOfSections: 3,
    numOfTotalQuestions: 15,
    image: 'images/1.png',
    sections: [
      {
        instruction: 'Add numbers.',
        numberOfQuestions: 5,
        questions: [
          {
            question: '5+2=',
            answer: '7',
          },
          {
            question: '2+3',
            answer: '5',
          },
          {
            question: '1+2=',
            answer: '3',
          },
          {
            question: '5+5=',
            answer: '10',
          },
          {
            question: '5+6=',
            answer: '11',
          },
        ],
      },
      {
        instruction: 'Subtract numbers.',
        numberOfQuestions: 5,
        questions: [
          {
            question: '5-2=',
            answer: '3',
          },
          {
            question: '3-2',
            answer: '1',
          },
          {
            question: '2-1=',
            answer: '1',
          },
          {
            question: '5-5=',
            answer: '0',
          },
          {
            question: '6-1=',
            answer: '5',
          },
        ],
      },
      {
        instruction: 'Calculate.',
        numberOfQuestions: 5,
        questions: [
          {
            question: '5+2+2=',
            answer: '9',
          },
          {
            question: '2+3-1',
            answer: '4',
          },
          {
            question: '1+2+1=',
            answer: '4',
          },
          {
            question: '5-5+2=',
            answer: '2',
          },
          {
            question: '6-4+11=',
            answer: '13',
          },
        ],
      },
    ],
  },
  {
    title: 'Multiplication and Division',
    numberOfSections: 3,
    numOfTotalQuestions: 15,
    image: 'images/2.png',
    sections: [
      {
        instruction: 'Multiply numbers.',
        numberOfQuestions: 5,
        questions: [
          {
            question: '5*2=',
            answer: '10',
          },
          {
            question: '2+3',
            answer: '5',
          },
          {
            question: '1+2=',
            answer: '3',
          },
          {
            question: '5+5=',
            answer: '10',
          },
          {
            question: '5+6=',
            answer: '11',
          },
        ],
      },
      {
        instruction: 'Subtract numbers.',
        numberOfQuestions: 5,
        questions: [
          {
            question: '5-2=',
            answer: '3',
          },
          {
            question: '3-2',
            answer: '1',
          },
          {
            question: '2-1=',
            answer: '1',
          },
          {
            question: '5-5=',
            answer: '0',
          },
          {
            question: '6-1=',
            answer: '5',
          },
        ],
      },
      {
        instruction: 'Calculate.',
        numberOfQuestions: 5,
        questions: [
          {
            question: '5+2+2=',
            answer: '9',
          },
          {
            question: '2+3-1',
            answer: '4',
          },
          {
            question: '1+2+1=',
            answer: '4',
          },
          {
            question: '5-5+2=',
            answer: '2',
          },
          {
            question: '6-4+11=',
            answer: '13',
          },
        ],
      },
    ],
  },
  {
    title: 'Geometry',
    numberOfSections: 1,
    numOfTotalQuestions: 2,
    image: 'images/1.png',
    sections: [
      {
        instruction: 'Calculate the area.',
        numberOfQuestions: 5,
        questions: [
          {
            question: 'Area of rectangle with length 5 and width 3',
            answer: '15',
          },
          {
            question: 'Area of rectangle with length 5 and width 3',
            answer: '15',
          },
        ],
      },
    ],
  },
  {
    title: 'Fractions and Decimals',
    numberOfSections: 1,
    numOfTotalQuestions: 1,
    image: 'images/1.png',
    sections: [
      {
        instruction: 'Simplify the fraction.',
        numberOfQuestions: 5,
        questions: [
          {
            question: '3/9',
            answer: '1/3',
          },
        ],
      },
    ],
  },
  {
    title: 'Measurement',
    numberOfSections: 1,
    numOfTotalQuestions: 1,
    image: 'images/2.png',
    sections: [
      {
        instruction: 'Convert the measurement.',
        numberOfQuestions: 1,
        questions: [
          {
            question: 'Convert 2 kilometers to meters.',
            answer: '2000',
          },
        ],
      },
    ],
  },
];

export default questions;
