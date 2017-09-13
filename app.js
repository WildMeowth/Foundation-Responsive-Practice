var express=require("express");
var app=express();
var session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static("./html"));
app.listen(3000);
