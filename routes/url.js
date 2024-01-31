const express = require('express');
const { handleCreateShortUrl,handleRedirectUrl,handleDeleteUrl,handleHomePage } = require('../controllers/url')
const router = express.Router();

router
    .route('/')
    .get(handleHomePage)
    .post(handleCreateShortUrl)
    
router
    .route('/:id')
    .get(handleRedirectUrl)
    .delete(handleDeleteUrl)

module.exports = router;