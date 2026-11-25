const express = require("express");
const {
  addHoldings,
  getAllHoldings,
} = require("../controllers/dataController");

const router = express.Router();

router.post("/addHoldings", addHoldings);

router.get("/allHoldings", getAllHoldings);


module.exports = router;
