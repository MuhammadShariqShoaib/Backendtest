const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  degree: { type: String, required: true },
  interests: { type: [String], required: true },
  jobRole: { type: String, required: true },
  comments: { type: String },
});

module.exports = mongoose.model("Student", studentSchema);
