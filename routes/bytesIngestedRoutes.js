const express = require('express');

const bytesIngestedController = require('../controllers/bytesIngestedController');

const router = express.Router();

router.route('').get(bytesIngestedController.getBytes);

module.exports = router;