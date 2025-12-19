const express = require("express");
const router = express.Router();
const { getBalancesByGroup } = require("../controllers/balanceController");

router.get("/:groupId", getBalancesByGroup);

module.exports = router;
