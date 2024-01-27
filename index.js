const express = require('express');
const urlhandling = require('./routes/url')
const  connectMongoDB  = require('./connection')

const app = express();
const PORT = 8001;

app.use(express.json());

connectMongoDB('mongodb://127.0.0.1:27017/url-shortner')


app.use('/url' , urlhandling);

app.listen(PORT , () => console.log(`Server Started at PORT:${PORT}!!`));
