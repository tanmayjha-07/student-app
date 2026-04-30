const mongoose = require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/practice");
        console.log("DB connected");
    } catch(error){
        console.log(error);
    }

}

module.exports=connectDB;
