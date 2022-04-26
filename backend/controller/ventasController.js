const Ventas = require("../models/Ventas");

const agregarVenta = async (req, res) => {
  const venta = new Ventas(req.body);
  await venta
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

module.exports = {
  agregarVenta,
};
