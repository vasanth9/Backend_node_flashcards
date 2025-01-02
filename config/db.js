const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/docker-node-mongo"

const connectDB = async() => {
   try{
    await mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("connected to MongoDB")
   } catch(e){
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with a failure code
   }
}

module.exports = connectDB;