const express = require('express');
const router = express.Router();
const { createForm, getFormById } = require('../controllers/controllers');

// POST /api/forms: Create a new form
router.post('/', createForm);

// GET /api/forms/:formId: Retrieve a form by ID
router.get('/:formId', getFormById);

module.exports = router;
