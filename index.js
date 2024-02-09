const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const weatherRoutes = require('./routes/weather');
const userRoutes = require('./routes/user');
require('./db');


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors());

// Routes
app.use('/api', weatherRoutes);
app.use('/api', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
