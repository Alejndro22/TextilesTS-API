const express = require("express");
const router = express.Router();
const {
  todosLosProductos,
  productoPorId,
  actualizarProducto,
} = require("../controller/inventarioController");

//@desc GET todos los productos de la bd
//@route GET /api/inventario
//@access Public
router.get("/", todosLosProductos);

//@desc GET un producto por id de la bd
//@route GET /api/inventario/:id
//@access Public
router.get("/:id", productoPorId);

//@desc PUT actualizar un producto por id
//@route PUT /api/inventario/:id
//@access Public
router.put("/:id", actualizarProducto);

module.exports = router;
