var express = require('express');
var app = express();
var cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,   
    optionSuccessStatus:200,
    methods : ["GET"]
}
app.use(cors(corsOptions));