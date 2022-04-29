import express from 'express';
import routes from './routes/routes.js';
import cors from 'cors';
import data from './models/task.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import bodyParser from "body-parser"

const app = express();
const port = 4050;

//connect to database mongoDB
mongoose.connect('mongodb://localhost:27017/todos_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

app.use(cors());
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/v1/task', routes);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
