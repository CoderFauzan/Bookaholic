const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../models/userModel")


router.post("/register", async(req, res) => {

    User.find({email: req.body.email}, (err,docs)=>{
        if(docs.length>0)
        {
            res.send("Email already registered")
        }
        else
        {
            

            const {name , email , password} = req.body

            const newUser = new User({name , email , password})
        
            try {
                newUser.save()
                res.send('User Registered successfully')
            } catch (error) {
                 return res.status(400).json({ message: error });
            }
        
        }
    })
  
    
});


router.post("/login", async(req, res) => {
    User.find({email: req.body.email, password: req.body.password}, (err,docs)=>{
        if(docs.length>0)
        {
            const user = {
                name : docs[0].name , 
                email : docs[0].email, 
                _id : docs[0]._id
            }

            res.send(user)
        }
        else{
            return res.status(400).json({ message: 'Invalid credentials' });
        }
    })
   
});


router.post("/update",(req,res) => {

    const {userid, updateduser} =req.body

    User.findByIdAndUpdate(userid, {
        name : updateduser.name,
        email : updateduser.email,
        password : updateduser.password
    }, (err)=>{
        if(err)
        {
            console.log(userid)
            return res.status(400).json({ message: 'Something went wrong' });

        }
        else
        {
            res.send('User details updated successfully')

        }

    })

});


router.get("/getallusers", (req, res) => {
  
    User.find({} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }
        else{
           res.send(docs)
        }
        
    })

});


router.post("/deleteuser", (req, res) => {

    User.findByIdAndRemove(req.body.userid , (err)=>{

        if(err){
            return res.status(400).json({ message: 'Something went wrong' });
        }
        else{
            res.send('User deleted successfully')
        }

    })
  
});

module.exports = router