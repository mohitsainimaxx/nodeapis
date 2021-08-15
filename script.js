const express=require('express');
const Joi=require('joi');/*user validation*/
const app=express();
const routers=require('./routes/routers');
app.use(express.json());
app.use('/',routers);
const port=process.env.PORT||8080;
app.listen(port,()=>console.log(`Listening port is ${port}`));