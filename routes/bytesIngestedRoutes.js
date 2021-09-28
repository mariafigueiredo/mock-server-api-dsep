const express = require('express');

const bytesIngestedController = require('../controllers/bytesIngestedController');

const router = express.Router();

router.route('').post(bytesIngestedController.getBytes);

module.exports = router;