import express from 'express';
import {
  getAllQuestions,
  getQuestionById,
} from '../controllers/questionController.js';

const router = express.Router();

router.route('/').get(getAllQuestions)
router.route('/:id').get(getQuestionById)

export default router;
