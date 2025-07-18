const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/students", studentRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI,{
    
  })
  .then(() => {
    console.log("MongoDB Connected");
     app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
