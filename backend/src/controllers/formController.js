// formController.js
const { Form, Submission } = require('../models/formModel');

const createForm = async (req, res) => {
  const { formName, elements } = req.body;

  if (!formName || !elements) {
    return res.status(400).json({ message: 'Form name and elements are required.' });
  }

  try {
    const form = new Form({ formName, elements });
    const createdForm = await form.save();
    res.status(201).json(createdForm);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getForm = async (req, res) => {
  try {
    const form = await Form.findById(req.params.formId);
    if (form) {
      res.json(form);
    } else {
      res.status(404).json({ message: 'Form not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const submitForm = async (req, res) => {
    const { formId } = req.params;  // Extract formId from URL parameters
    const { formData } = req.body;  // Extract formData from request body
  
    // Validate input
    if (!formId || !formData) {
      return res.status(400).json({ message: 'Form ID and form data are required.' });
    }
  
    try {
      // Create a new submission with the formId from URL and formData from body
      const submission = new Submission({ formId, formData });
      const createdSubmission = await submission.save();
      res.status(201).json(createdSubmission);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  

const getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ formId: req.params.formId });
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createForm, getForm, submitForm, getSubmissions };
