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

const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const producto = await Inventario.findById(id);

  if (!producto) {
    const error = new Error("Producto No Encontrado");
    return res.status(404).json({ msg: error.message });
  }

  var newExistencias = producto.existencias - req.body.existencias;
  // if (newExistencias < 0) {
  //   const error = new Error("No pueden quedar existencias negativas");
  //   return res.status(404).json({ msg: error.message });
  // }

  producto.existencias = newExistencias;

  try {
    const productoActualizado = await producto.save();
    res.json(productoActualizado);
  } catch (error) {
    return res.status(503).json({ msg: error.message });
  }
};

module.exports = {
  todosLosProductos,
  productoPorId,
  actualizarProducto,
};
