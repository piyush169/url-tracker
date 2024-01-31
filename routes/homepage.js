const express = require('express');
const { handleHomePage } = require('../controllers/url')
const router = express.Router();

router
    .route('/')
    .get(handleHomePage)

module.exports = router;