// Include express, mongoose.
const express = require('express');
const app = express()
const mongoose = require('mongoose');

// Set mongoose strictQuery to false.
mongoose.set("strictQuery", false);

// Set momgoDB URI.
const mongoURI = "mongodb://localhost:27017/";

// Include routes created by us.
var routes = require('./route/routes');

// Include cors.
const cors = require('cors');

// Use cors through express.
app.use(cors(
    {
    origin: "http://localhost:4200"
    }
));

// Listen to port using express.
app.listen(9001, function check(error) {
    if(error){
        console.log("error........");

    }else{
        console.log("started.....................")
    }
});

  mongoose.connect('mongodb://localhost:27017/RegistrationProject',{useNewUrlParser:true, useUnifiedTopology:true}).then(() => console.log('Connected!'));
 
  app.use(express.json());
  app.use(routes);
  
