const express = require('express') ;
const axios = require('axios');

const port = process.env.PORT || 3030;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.get('/df/server',(req,res)=>{
    res.send("hi")
})

require('./routes/df-routes')(app);

app.listen(port,()=>{
    console.log(" server funcionando ");
})


