const express = require("express");
const router = express.Router();
const { agregarVenta } = require("../controller/ventasController");

router.post("/", agregarVenta);

module.exports = router;
