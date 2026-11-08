const {model} = require("mongoose");
const {OrdersSchema} = require("../schemas/OrdersSchema");
const OrdersModel = new model("orders" , OrderSchema);

module.exports = {OrdersModel};