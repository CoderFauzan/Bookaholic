const mongoose  = require("mongoose");

var mongoDBURL = 'mongodb+srv://fmz:fmz123@cluster0.cbyyd.mongodb.net/bookshop'

mongoose.connect(mongoDBURL,{useUnifiedTopology:true,useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error',()=>{
    console.log('Mongo Db connection failed')
})

dbconnect.on('connected',()=>{
    console.log('Mongo Db connection success')
})


module.exports = mongoose
