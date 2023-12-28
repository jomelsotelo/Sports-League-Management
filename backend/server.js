import express from 'express'
import db from './config/database.js'
const app = express();
const PORT = 5000;

app.use(express.json());
app.post('/user', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});