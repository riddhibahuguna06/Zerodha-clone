require("dotenv").config();
const express =  require("express");
const mongoose = require("mongoose")
const app = express() ;

const {HoldingModel} = require("./models/HoldingModel");
const {PositionsModel} = require("./models/PositionsModel");

const {tempHoldings} = require("./init/holdings");
const {tempPositions} = require("./init/positions");

const PORT = process.env.PORT || 3002 ;
const url = process.env.MONGO_URL ;

app.get("/addHoldings" , async (req , res) => {
    try{
    
         await HoldingModel.insertMany(tempHoldings);

        res.status(201).send({
        message : "Holdings added successfully"
        })
    
    }catch(e){
     console.error(e);
     res.status(500).send("Error inserting holding!")
    }
});

app.get("/addPositions" , async (req , res) => {
try{
await PositionsModel.insertMany(tempPositions) ;
res.status(201).send({
    message : "Positions added sucessfully"
})
}catch(err){
console.error(e);
res.status(500).send("Error inserting holding!");
}
});

async function startServer(){
    try{
        await mongoose.connect(url);
        console.log("DB connected") ;

     app.listen(PORT , () => {
    console.log("App started!");   
});
    }catch(err){
        console.error("Connection failed", err);
    }
}

startServer();

