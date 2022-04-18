const Inventario = require("../models/Inventario");

const todosLosProductos = async (req, res) => {
  try {
    const inventario = await Inventario.find({});
    res.json(inventario);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

const productoPorId = async (req, res) => {
  try {
    const producto = await Inventario.findById(req.params.id);
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

module.exports = {
  todosLosProductos,
  productoPorId,
};
