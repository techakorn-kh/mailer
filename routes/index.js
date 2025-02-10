const express = require('express');
const router = express.Router();

const office365Routes = require('./office365Routes');

router.use('/office365', office365Routes);

module.exports = router;