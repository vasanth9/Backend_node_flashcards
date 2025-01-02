const mongoose = require("mongoose");

const {Schema} = mongoose;

const cardScheme = new Schema({
    question:{
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Card', cardScheme);