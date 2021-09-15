const express = require("express");
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const stripe = require("stripe")("sk_test")
const Order = require('../models/orderModel')

router.post("/placeorder", async(req, res) => {
  
    const {token , subtotal , currentUser , cartItems} = req.body
  
    
        const customer = await stripe.customers.create({
            email : token.email,
            source:token.id
        })
  
        const payment = await stripe.charges.create({
            amount:subtotal*100,
            currency:'inr',
            customer : customer.id,
            receipt_email : token.email
        }, {
            idempotencyKey : uuidv4()
        })
  
        if(payment)
        {
  
            const order = new Order({
                name : currentUser.name,
                email : currentUser.email ,
                userid : currentUser._id ,
                orderItems : cartItems , 
                orderAmount : subtotal,
                shippingAddress : {
                    address : token.card.address_line1,
                    city : token.card.address_city,
                    country : token.card.address_country,
                    postalCode : token.card.address_zip
                },
                transactionId : payment.source.id ,
                isDelivered : false
            })
            
            order.save(err=>{
                if(err)
                {
                    res.status(400).json({ message: 'Something went wrong' + error});
                }

                else{
                    res.send('Order placed successfully')

                }
            })
  
            
        }
        else{
            return res.status(400).json({ message: 'Something went wrong' + error});
        }
  
   
       
 
  
  });

  router.post("/getordersbyuserid", async(req, res) => {
    const userid = req.body.userid
     Order.find({userid : userid}, (err, docs)=>{

        if(err){
            return res.status(400).json({ message: 'Something went wrong' + error});

        }
        else{
            res.send(docs)
        }

     })
        
  });
  


  router.post("/getorderbyid", async(req, res) => {
    const orderid = req.body.orderid
     Order.find({ _id : orderid}, (err, docs)=>{

        if(err){
            return res.status(400).json({ message: 'Something went wrong' + error});

        }
        else{
            res.send(docs[0])
        }

     })
        
  });


  router.get("/getallorders", (req, res) => {

    Order.find({} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }else{
             res.send(docs)
        }

    })
  
});

  module.exports = router
