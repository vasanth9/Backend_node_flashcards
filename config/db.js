const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/docker-node-mongo"

const connectDB = () => {
    mongoose.connect(url, ()=>{
        console.log("connected to mongoose");
    })
}

module.exports = connectDB;