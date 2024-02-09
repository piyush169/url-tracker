const express = require('express');
const { handleCreateShortUrl,handleRedirectUrl,handleDeleteUrl } = require('../controllers/url')
const router = express.Router();

router
    .route('/')
    .post(handleCreateShortUrl)
    
router
    .route('/:id')
    .get(handleRedirectUrl)
    .delete(handleDeleteUrl)

module.exports = router;