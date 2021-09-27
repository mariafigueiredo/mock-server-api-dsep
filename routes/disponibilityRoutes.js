const express = require('express');

const disponibilityRoleController = require('../controllers/disponibilityRoleController');

const router = express.Router();

router.route('').get(disponibilityRoleController.getDisponibility);

module.exports = router;