const express = require('express');

const disponibilityRoleController = require('../controllers/disponibilityRoleController');

const router = express.Router();

router.route('').post(disponibilityRoleController.getDisponibility);

module.exports = router;