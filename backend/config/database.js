import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const mongoURI = process.env.URI

//This connect to the mongodatabase
if (!mongoURI) {
  console.error('MongoDB URI is not defined. Please check your environment variables.');
  process.exit(1); // Exit the process if the URI is not defined
}

mongoose.connect(mongoURI)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

//Close down MongoDB connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection disconnected through app termination');
    process.exit(0);
  });
});

export default db