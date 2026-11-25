const {model} = require("mongoose");
const {UsersSchema} = require("../schemas/userSchema");
const UsersModel = new model("user" ,UsersSchema);

module.exports = {UsersModel};