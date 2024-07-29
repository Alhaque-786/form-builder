const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  formName: {
    type: String,
    required: true,
  },
  elements: [
    {
      type: {
        type: String,
        enum: ['input', 'dropdown', 'date'], // Allowed values for the type field
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      options: {
        type: [String], // Only relevant for dropdowns
        default: [],
      },
      placeholder: {
        type: String, // Only relevant for inputs
      }
    }
  ]
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
