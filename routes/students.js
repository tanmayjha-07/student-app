const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

router.post("/students", async (req, res)=>{
   try{
       const student = await Student.create(req.body);
       res.status(201).json({
           message: "Student added successfully",
           student
       });
   } catch (error) {
       console.log(error);
       res.status(400).json({message: error.message});
   }
});

router.get("/students", async (req, res)=>{
    try {
        const students = await Student.find().sort({createdAt: -1});
        res.json(students);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
});

router.get("/students/:id", async (req, res)=>{
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({message: "Student not found"});
        }
        res.json(student);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
});

router.put("/students/:id", async (req, res)=>{
    try{
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );
        if (!student) {
            return res.status(404).json({message: "Student not found"});
        }
        res.json(student);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }
});

router.delete("/students/:id", async (req, res)=>{
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({message: "Student not found"});
        }
        res.json({message: "Student deleted successfully"});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
});

module.exports = router;
