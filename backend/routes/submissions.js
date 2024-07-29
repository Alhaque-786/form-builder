const express = require('express');
const router = express.Router();
const { submitForm, getSubmissionsByFormId } = require('../controllers/controllers');

// POST /api/forms/:formId/submissions: Save a form submission
router.post('/:formId/submissions', submitForm);

// GET /api/forms/:formId/submissions: Retrieve all submissions for a form
router.get('/:formId/submissions', getSubmissionsByFormId);

module.exports = router;
