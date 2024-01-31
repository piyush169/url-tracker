const express = require('express');
const urlhandling = require('./routes/url')
const homehandling = require('./routes/homepage')
const path = require('path')
const methodOverride = require('method-override');

const  connectMongoDB  = require('./connection')

const app = express();
const PORT = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'));



connectMongoDB('mongodb://127.0.0.1:27017/url-shortner')

app.set('view engine' , 'ejs');
app.set("views" , path.resolve('./views'))

app.use('/' , homehandling);
app.use('/url' , urlhandling);

app.listen(PORT , () => console.log(`Server Started at PORT:${PORT}!!`));
