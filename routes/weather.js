const express = require('express');
const axios = require('axios');
const router = express.Router();

const dotenv = require('dotenv');
dotenv.config({ path: './local.env' });

router.get("/weather/:city", async (req, res) => {
    console.log("hello")
    const { city } = req.params;

    try {
        const apiKey = '4820c9cae231d8b6be88bf83cb2f4eb5';
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

