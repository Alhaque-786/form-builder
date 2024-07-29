const Form = require('../models/Form');
const Submission = require('../models/Submission');

// Controller function to create a new form
const createForm = async (req, res) => {
  const { formName, elements } = req.body;

  if (!formName || !elements) {
    return res.status(400).json({ message: 'Form name and elements are required.' });
  }

  try {
    const newForm = new Form({ formName, elements });
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    console.error('Error saving form:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// Controller function to get a form by ID
const getFormById = async (req, res) => {
  const { formId } = req.params;

  try {
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller function to submit form data
const submitForm = async (req, res) => {
  const { formId } = req.params;
  const { formData } = req.body;

  if (!formId || !formData) {
    return res.status(400).json({ message: 'Form ID and form data are required.' });
  }

  try {
    // Check if the form ID exists
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ message: 'Form not found.' });
    }

    // Create and save the submission
    const submission = new Submission({ formId, formData });
    const createdSubmission = await submission.save();

    res.status(201).json(createdSubmission);
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Form not exists' });
  }
};

// Controller function to get all submissions for a form
const getSubmissionsByFormId = async (req, res) => {
  const { formId } = req.params;

  try {
    const submissions = await Submission.find({ formId });
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Export controller functions
module.exports = {
  createForm,
  getFormById,
  submitForm,
  getSubmissionsByFormId
};
