const express = require("express");

const router = express.Router();

const Card = require("../models/card");

router.post("/add",async(req , res)=>{
    try{
    const {question,answer} = req.body;
    const checkQuestion = await Card.findOne({question,answer});

    if(checkQuestion){
        return res.status(400).json({
            message:"Question and answer pair already exists"
        })
    }
    const card = new Card({question,answer});
    await card.save();
    return res.status(201).json({
        message:"card created successfully",
        card
    });
} catch(e){
    return res.status(500).json({
        message:"Internal Server Error"
    })
}
})

router.get("/",async(req , res)=>{
const allCards = await Card.find();
res.status(200).json({
    message:"allCards",
    allCards
})
})

module.exports = router