require("dotenv").config();
const express =  require("express");
const mongoose = require("mongoose")
const app = express() ;
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

const {HoldingModel} = require("./models/HoldingModel");
const {PositionsModel} = require("./models/PositionsModel");

const {tempHoldings} = require("./init/holdings");
const {tempPositions} = require("./init/positions");

const PORT = process.env.PORT || 3002 ;
const url = process.env.MONGO_URL ;

app.post("/addHoldings" , async (req , res) => {
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

app.post("/addPositions" , async (req , res) => {
try{
await PositionsModel.insertMany(tempPositions) ;
res.status(201).send({
    message : "Positions added sucessfully"
})
}catch(err){
console.error(err);
res.status(500).send("Error inserting positions!");
}
});

app.get("/allHoldings" , async (req , res) => {

    try{

    let result = await HoldingModel.find({});
    res.json(result);

    }catch(err){
        console.error("Error fetching holdings:", err);
        res.status(500).json({ message: "Could not fetch holdings" });
    }
});

app.get("/allPositions" , async (req , res) => {

    try{
     
        let result = await PositionsModel.find({});
        res.json(result);

    }catch(err){
        console.error("Error fetching positions:", err);
        res.status(500).json({ message: "Could not fetch positions" });
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

