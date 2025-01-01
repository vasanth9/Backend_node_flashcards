const express = require("express");

const router = express.Router();

const User = require("../models/user");

router.post("/post", async (req, res) => {
  try {
    const { name, password } = req.body;
    const checkUser = await User.findOne({ name, password });
    if(checkUser){
        return res.status(400).json({
            message:"User Already exists"
        })
    }
    const user = new User({name,password});
    await user.save();
    return res.status(201).json({
        message:"User created successfully",
        user
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({
        message:"Internal Server Error"
    })
  }
});

module.exports = router
