

const mongoose = require("mongoose");

// Define Course Progress Schema


// Define Student Schema
const adminSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: { required: true, type: String },
  
});

// Create Student model
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
