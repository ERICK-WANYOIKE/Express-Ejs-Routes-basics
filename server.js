///import express 
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
/// /// intialise express 
const app = express();

///EJS 
// register view engine
app.use(expressLayouts);
app.set('view engine', 'ejs')
// app.set('views', 'myviews');


// Routes
app.use('/', require('./routes/index.js'));
app.use('/', require('./routes/users.js'))
///// server.listen(portNumber, callbackFunction)
/// starting the server
app.listen(
    3001, ()=>{
        console.log('server is listening to port 3001')
    }
);

