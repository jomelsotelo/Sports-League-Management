import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const mongoURI = process.env.URI
//This connect to the mongodatabase
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default db