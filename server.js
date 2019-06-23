require("./models/db");

const express = require("express");
const employeeController = require('./controllers/employeeController');
const bodyparser = require("body-parser")
const path = require('path');
const exphbs = require('express-handlebars');
var app = express(); 
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
app.use('/assets',express.static(path.join(__dirname,'assets')));
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname + '/views/layouts/' }));
app.set('view engine','hbs');



app.listen(3000,() => {
    console.log("Express server started at port : 3000");
});
app.use('/employee',employeeController);