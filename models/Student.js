const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    rollNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    branch: {
        type: String,
        trim: true
    },
    marks: {
        type: Number,
        min: 0,
        max: 100
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
