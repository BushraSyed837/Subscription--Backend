const express = require("express");
const router = express.Router();
const Subscription = require("../model/subscription");
const axios = require("axios");

router.post("/subscribe", async (req, res) => {
  try {
    console.log(req.body)
    const subscription = new Subscription(req.body);
    await subscription.save();
    res.status(201).json({ message: "Subscription saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/models", async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
