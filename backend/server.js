import express from 'express';
import dotenv, { config } from 'dotenv';
import connectDB from './config/db.js'
import questionsRoutes from './routes/questionsRoutes.js';
import {notFound, errorHandler} from './middlewares/errorMiddleware.js';

dotenv.config()
connectDB()

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {res.send("API is running!")})
app.use('/api/questions', questionsRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});