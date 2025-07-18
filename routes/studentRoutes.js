const express = require("express");
const Student = require("../model/student");
const router = express.Router();

// Add new student interest
router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all responses
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 }); // Latest first
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
