import express from 'express';
import questions from './data/questions.js';
import dotenv, { config } from 'dotenv';
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {res.send("API is running!")})
app.get('/api/questions', (req, res) => {
  res.send(questions)
})
app.get('/api/questions/:id', (req, res) =>{
  const question = questions.find(q => q._id === +req.params.id)
  res.send(question);
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});