const express = require('express');
const app= express();
const PORT = 1994
const mongoose = require ('mongoose');
const cors = require('cors'); // to remore cor issue
app.use(cors())  // cor policy activation
app.use(express.json()); // to render json req from frontend
app.use(express.urlencoded({extended:true})); // to render form data from frontend


mongoose.connect("mongodb+srv://aswathysuresh251:ayshumubi773@cluster0.255mxi0.mongodb.net/")
.then(()=>{console.log("MongoDB connected successfully")})
.catch((err)=>{console.log("Error connecting in MongoDB"+err)})

app.post('/addData', (req, res) => {
    try {

        let item = req.body
        console.log(item)



    } catch (error) {
        res.send(error);
    }
})


app.listen(PORT,()=>{
 console.log(`listening on port ${PORT}`);
});
