const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('../config/db');
const formRoutes = require('../routes/forms');
const submissionRoutes = require('../routes/submissions');
require('dotenv').config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 5006;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/forms', formRoutes);
app.use('/api/forms', submissionRoutes);

// Connect to MongoDB
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
