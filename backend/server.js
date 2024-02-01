import express from 'express';
import dotenv, { config } from 'dotenv';
import connectDB from './config/db.js';
import questionsRoutes from './routes/questionsRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import cookieParser from 'cookie-parser';
dotenv.config();
connectDB();

const app = express();
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running!');
});
app.use('/api/questions', questionsRoutes);
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Server running on port ${port}. ${process.env.NODE_ENV}`);
});
