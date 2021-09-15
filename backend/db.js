const mongoose  = require("mongoose");

var mongoDBURL = ''

mongoose.connect(mongoDBURL,{useUnifiedTopology:true,useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error',()=>{
    console.log('Mongo Db connection failed')
})

dbconnect.on('connected',()=>{
    console.log('Mongo Db connection success')
})


module.exports = mongoose
