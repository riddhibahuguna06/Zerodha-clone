const { PositionsModel } = require("../models/PositionsModel");

const { tempPositions } = require("../init/positions");

async function addPositions(req, res) {
  try {
    await PositionsModel.insertMany(tempPositions);
    res.status(201).json({ message: "Positions added successfully" });
  } catch (err) {
    console.error("Error inserting positions:", err);
    res.status(500).json({ message: "Could not insert positions" });
  }
}

async function getAllPositions(req, res) {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).json({ message: "Could not fetch positions" });
  }
}

module.exports = { addPositions, getAllPositions };