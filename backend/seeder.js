import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import questions from './data/questions.js';
import User from './models/userModel.js';
import Topic from './models/questionModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Topic.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleTopics = questions.map((q) => {
      return { ...q, user: adminUser };
    });

    await Topic.insertMany(sampleTopics)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.log( `${error}`)
    process.exit(1)
  }
};
const destroyData = async () => {
  try {
    await Topic.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.log( `${error}`.red.inverse)
    process.exit(1)
  }
};

if(process.argv[2] === '-d') {
  destroyData()
}else {
  importData()
}