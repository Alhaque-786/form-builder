Form Builder Backend
This is the backend server for the Form Builder application. It provides APIs to create, retrieve, and submit forms. The server is built using Node.js, Express, and MongoDB with Mongoose.

Table of Contents
Features
Prerequisites
Installation
Environment Variables
Running the Server
API Endpoints
Project Structure

Features
Create and save form structures with various elements (input, dropdown, date select).
Retrieve form structures by ID.
Submit form data and retrieve submissions for a form.
Error handling for invalid form IDs.
Prerequisites
Node.js (version 14 or higher)
MongoDB (local or cloud-based)

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/form-builder-backend.git
cd form-builder-backend
Install dependencies:

bash
Copy code
npm install
Set up MongoDB:

Ensure you have MongoDB installed and running locally, or use a MongoDB cloud service like MongoDB Atlas.

Environment Variables
Create a .env file in the root directory and add the following variables:

bash
Copy code
PORT=5006
MONGODB_URI=mongodb://localhost:27017/form-builder
Replace mongodb://localhost:27017/form-builder with your MongoDB connection string if using a cloud service or a different local setup.

Running the Server
To start the development server, run:

bash
Copy code
npm run dev
This will start the server on the port specified in your .env file (default is 5006).

API Endpoints
1. Create a New Form
URL: POST /api/forms
Description: Save a new form structure.
Request Body:
json
Copy code
{
  "formName": "My Form",
  "elements": [
    {
      "type": "input",
      "label": "Name",
      "name": "name",
      "placeholder": "Enter your name"
    },
    {
      "type": "dropdown",
      "label": "Options",
      "name": "options",
      "options": ["Option 1", "Option 2", "Option 3"]
    },
    {
      "type": "date",
      "label": "Date of Birth",
      "name": "dob"
    }
  ]
}
2. Retrieve a Form by ID
URL: GET /api/forms/:formId
Description: Retrieve a form structure by its ID.
3. Submit Form Data
URL: POST /api/forms/:formId/submissions
Description: Submit form data.
Request Body:
json
Copy code
{
  "formData": {
    "name": "John Doe",
    "options": "Option 1",
    "dob": "1990-01-01"
  }
}
4. Retrieve Form Submissions
URL: GET /api/forms/:formId/submissions
Description: Retrieve all submissions for a form.
Project Structure
bash
Copy code
backend/
├── config/
│   └── db.js             # Database connection setup
├── controllers/
│   └── formController.js # API logic for form-related operations
├── models/
│   ├── Form.js           # Mongoose schema for forms
│   └── Submission.js     # Mongoose schema for submissions
├── routes/
│   └── formRoutes.js     # Route definitions
├── .env                  # Environment variables
├── .gitignore            # Git ignore file
├── package.json          # Node.js dependencies and scripts
├── README.md             # Project documentation
└── src/
    └── app.js            # Main application entry point