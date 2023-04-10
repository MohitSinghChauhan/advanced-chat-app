const express = require('express');
const { chats } = require('./data/data.js');
require('dotenv').config();
const connectDB = require('./config/db.js');
const colors = require('colors');

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is Running');
});

app.get('/api/chat', (req,res)=>{
    res.send(chats);
})

app.get('/api/chat/:id', (req, res) => {
    //   console.log(req.params.id);
    const singleChat = chats.find((chat)=>(
        chat._id===req.params.id
        ));
        res.send(singleChat);
    });

const PORT = process.env.PORT;

app.listen(PORT, console.log(`APP IS RUNNING ON ${PORT}`.yellow));
