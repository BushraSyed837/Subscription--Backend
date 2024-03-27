const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const subscriptionRoutes = require('./routes/subscription');
require('./db');


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors());

// Routes
app.use('/api', subscriptionRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
