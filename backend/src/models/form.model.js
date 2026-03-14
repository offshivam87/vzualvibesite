const mongoose = require("mongoose")

const formSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true, 
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
  },
  videoType: {
    type: String,
    required: [true, 'Video type is required'],
    enum: ['Ai Video', 'Motion graphics Video', 'Transitional Video', 'Talking Head Video', 'Fitness Video','Social Media Content Marketing','Other'], // optional — customize as per your form
  },
  budgetRange: {
    type: String,
    required: [true, 'Budget range is required'],
  },
  vision: {
    type: String,
    required: [true, 'Vision is required'],
    minlength: [10, 'Vision must be at least 10 characters long'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const formModel= mongoose.model("form",formSchema)
module.exports = formModel