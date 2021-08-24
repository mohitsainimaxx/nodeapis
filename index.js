const express=require('express');
const Joi=require('joi');/*user validation*/
const routers=require('./routes/routers');
const bodyParser = require("body-parser");

const app=express();
app.use(express.json());
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',routers);
const port=process.env.PORT||8080;
app.listen(port,()=>console.log(`Listening port is ${port}`));