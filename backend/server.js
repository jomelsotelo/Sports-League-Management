import express from 'express'
import userRoutes from './routes/user.js'
import db from './config/database.js'

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/user', userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

