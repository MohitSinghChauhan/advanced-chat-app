const express = require('express');
const { chats } = require('./data/data.js');
require('dotenv').config();
const connectDB = require('./config/db.js');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes.js');
const { notFound, errorHandler } = require('./middlewares/errorHandlerMiddleware.js');

connectDB();

const app = express();

app.use(express.json()); // To accept json data from frontend

app.get('/', (req, res) => {
  res.send('API is Running');
});

// Used a separate Router for users, to look clean
app.use('/api/user', userRoutes)
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT;

app.listen(PORT, console.log(`APP IS RUNNING ON ${PORT}`.yellow));
