const express = require('express');
const path = require('path');

const app = express();

// Init Middleware
app.use(express.json());

// Auth Routes
app.use('/api/auth', require('./Backend/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));