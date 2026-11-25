const express = require("express");
const {
  addPositions,
  getAllPositions,
} = require("../controllers/positionsController");

const router = express.Router();

router.post("/addPositions", addPositions);

router.get("/allPositions", getAllPositions);

module.exports = router;