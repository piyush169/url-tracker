const express = require('express');
const path = require('path')
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser')

const userhandling = require('./routes/users')
const urlhandling = require('./routes/url')
const homehandling = require('./routes/staticRoutes')
const {authcheckF , authcheck} = require('./middleware/auth')

const  connectMongoDB  = require('./connection')

const app = express();
const PORT = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'));
app.use(cookieParser());

connectMongoDB('mongodb://127.0.0.1:27017/url-shortner')

app.set('view engine' , 'ejs');
app.set("views" , path.resolve('./views'))

app.use('/' ,authcheck, homehandling);
app.use('/url' ,authcheckF, urlhandling);
app.use('/user' , userhandling)

app.listen(PORT , () => console.log(`Server Started at PORT:${PORT}!!`));
