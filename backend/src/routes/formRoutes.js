// formRoutes.js
const express = require('express');
const router = express.Router();
const { createForm, getForm, submitForm, getSubmissions } = require('../controllers/formController');

router.post('/forms', createForm);
router.get('/forms/:formId', getForm);
router.post('/forms/:formId/submissions', submitForm);
router.get('/forms/:formId/submissions', getSubmissions);

module.exports = router;
