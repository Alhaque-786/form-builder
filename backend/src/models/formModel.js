// formModel.js
const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
  type: { type: String, required: true },
  label: { type: String, required: true },
  name: { type: String, required: true },
  options: [String], // For dropdown
  placeholder: String, // For input
});

const formSchema = new mongoose.Schema({
  formName: { type: String, required: true },
  elements: [elementSchema],
}, {
  timestamps: true
});

const submissionSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  formData: mongoose.Schema.Types.Mixed,
}, {
  timestamps: true
});

const Form = mongoose.model('Form', formSchema);
const Submission = mongoose.model('Submission', submissionSchema);

module.exports = { Form, Submission };
