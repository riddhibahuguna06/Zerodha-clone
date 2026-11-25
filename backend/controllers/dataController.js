const { HoldingModel } = require("../models/HoldingModel");

const { tempHoldings } = require("../init/holdings");


async function addHoldings(req, res) {
  try {
    await HoldingModel.insertMany(tempHoldings);
    res.status(201).json({ message: "Holdings added successfully" });
  } catch (err) {
    console.error("Error inserting holdings:", err);
    res.status(500).json({ message: "Could not insert holdings" });
  }
}


async function getAllHoldings(req, res) {
  try {
    const holdings = await HoldingModel.find({});
    res.json(holdings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ message: "Could not fetch holdings" });
  }
}



module.exports = { addHoldings, addPositions, getAllHoldings, getAllPositions };
