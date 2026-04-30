const express = require('express');
const path = require('path');
const connectDB = require('./db/db');
const students = require('./routes/students');
const app = express();

connectDB();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', students);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
});
