const User = require('../models/user');
const {v4: uuidv4} = require('uuid');
const {setUserId, getUserId} = require('../services/auth');
const { use } = require('../routes/users');


async function handleUserSignup(req , res){
    const {name , email , password} = req.body;
    const user = await User.create({
        name,
        email,
        password,
    })
    return res.redirect('/')
}

async function handleUserLogin(req , res){
    const {  email , password} = req.body;
    const user = await User.findOne({
        email,
        password,
    });
    
    if(!user){
        console.log("Invalid Email Id or Password")
        return res.redirect('/login');
    }
    else{
        const sessionId = uuidv4();
        setUserId( sessionId , user);
        res.cookie('uid' , sessionId)
        return res.redirect('/');
    }
}

module.exports = {
    handleUserLogin,
    handleUserSignup,
}