const express = require('express');
const router = express.Router();


//Routes
router.get('',(req , res) => {
    res.render('index'); //Actually it link to ./layouts/main.ejs
});


//導出Router使app.js可以app.use引入
module.exports = router; 