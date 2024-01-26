import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: { type: 'string', required: true },
  answer: { type: 'string', required: true },
  isSolved: { type: 'boolean', required: true, default: false },
});

const sectionSchema = new mongoose.Schema({
  instruction: { type: 'string', required: true },
  numberOfQuestions: { type: 'number', required: true },
  questions: [questionSchema],
});

const topicSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  title: { type: 'string', required: true },
  numberOfSections: { type: 'number', required: true },
  numOfTotalQuestions: { type: 'number', required: true },
  sections: [sectionSchema],
});

const Topic = mongoose.model('Topic', topicSchema);

export default Topic;
