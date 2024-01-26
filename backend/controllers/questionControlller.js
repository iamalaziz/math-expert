import asyncHandler from '../middlewares/asyncHandler.js';
import Topic from '../models/questionModel.js';

const getAllQuestions = asyncHandler(async (req, res) => {
  const questions = await Topic.find({});
  res.json(questions);
});

const getQuestionById = asyncHandler(async (req, res) => {
  const question = await Topic.findById(req.params.id);

  if (question) return res.send(question);
  else {
    res.status(404);
    throw new Error('Product not found!');
  }
});

export {getAllQuestions, getQuestionById}