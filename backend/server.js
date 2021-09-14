const bodyParser = require('body-parser');
const express = require("express");
const app = express();

var dbconnection = require('./db')
var productsRoute = require('./routes/productsRoute')
var userRoute = require('./routes/userRoute')
var orderRoute = require('./routes/orderRoute')
app.use(bodyParser.json());
app.use('/api/products/',productsRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',orderRoute)


app.get("/",(req,res)=>{
    res.send('this is fom backend')
});


const port = 8081;
app.listen(port, () => console.log('node server started'));	
 