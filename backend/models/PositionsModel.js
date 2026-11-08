const {model} = require("mongoose");
const {PositionsSchema} = require("../schemas/PositionsSchema");
const PositionsModel = new model("orders" , PositionsSchema);

module.exports = {PositionsModel};