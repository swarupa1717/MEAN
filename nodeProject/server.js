const express = require('express');

const app = express()


const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const mongoURI = "mongodb://localhost:27017/";
var routes = require('./route/routes');
const cors = require('cors');

app.use(cors(
    {
    origin: "http://localhost:4200"
    }
));

app.listen(9001, function check(error) {
    if(error){
        console.log("error........");

    }else{
        console.log("started.....................")
    }
});

  mongoose.connect('mongodb://127.0.0.1:27017/RegistrationProject',{useNewUrlParser:true, useUnifiedTopology:true}).then(() => console.log('Connected!'));
 
  app.use(express.json());
  app.use(routes);
