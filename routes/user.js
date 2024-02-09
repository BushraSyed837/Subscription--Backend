const express = require("express");
const router = express.Router();
const User = require("../model/user");
const axios = require("axios");

const { MongoClient } = require("mongodb");

router.post("/google/auth", async (req, res) => {
  const { accessToken } = req.body;
  try {
    const response = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log(response);

    if (!response.data) {
      throw new Error("Failed to fetch user profile");
    }

    const userData = response.data;

    const existingUser = await User.findOne({ email: userData.email });

    if (!existingUser) {
      // User already exists, send a message indicating that the user is already registered
      const newUser = new User({
        username: userData.name,
        email: userData.email,
        profilePicture: userData.picture,
      });

      // Save the new user document to MongoDB using Mongoose
      await newUser.save();
    }

    // Create a new user document using the User model

    res.sendStatus(200);
  } catch (error) {
    console.error("Error authenticating with Google:", error);
    res.status(500).send("Error authenticating with Google");
  }
});

module.exports = router;
