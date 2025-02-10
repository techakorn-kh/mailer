const express = require('express');
const router = express.Router();

const office365Controllers = require('../controllers/office365Controllers');

router.post('/sendMail', office365Controllers.sendMail);

module.exports = router;