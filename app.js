require('dotenv').config(); //Load .env. to let it gitignore.

const express = require('express'); //import express framework to Node.js
const expressLayout = require('express-ejs-layouts'); //import express-ejs-layouts

const app = express(); //create express application
const PORT = 5000 || process.env.PORT; //If there is a PORT number Y inside env, PORT=Y, or it PORT=5000

app.use(express.static('public')); //Tell express to get static documents in public

//Templating engine
app.use(expressLayout);
app.set('layout','./index');  //set index main layout -->main.ejs
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
});