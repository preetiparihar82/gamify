import express from "express";
import Message from "../models/message.js"; // Make sure this path and casing match the filename exactly

const router = express.Router();

// POST /api/contact
router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, msg: "All fields are required." });
    }

    // Save message to DB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    console.log("Message received:", newMessage);

    res.status(201).json({ success: true, msg: "Message received!" });
  } catch (err) {
    console.error("Error saving message:", err.message);
    res.status(500).json({ success: false, msg: "Server Error" });
  }
});

export default router;
