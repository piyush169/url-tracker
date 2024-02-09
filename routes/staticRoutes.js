const express = require('express')
const Url = require('../models/url');

const router = express.Router();

router
    .route('/')
    .get(async (req , res) => {
        if(!req.user) return res.redirect('/login');
        const allInfo = await Url.find({ createdBy: req.user._id });
        return res.render('homepage' , {
            info: allInfo,
        })
    });

router.get('/login' , (req , res) => {
    return res.render("login")
})

router.get('/signup' , (req , res) => {
    return res.render("signup")
})

module.exports = router;

        
    