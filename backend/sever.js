const express = require('express');
const app= express();
const PORT = 4567
const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://aswathysuresh251:ayshumubi773@cluster0.255mxi0.mongodb.net/")
.then(()=>{console.log("MongoDB connected successfully")})
.catch((err)=>{console.log("Error connecting in MongoDB"+err)})

app.get('/',(req,res)=>{
    res.send('server is connecting')
})

app.get('/about',(req,res)=>{
    res.send('About')
})
app.listen(PORT,()=>{
 console.log(`listening on port ${PORT}`);
});
