const mongoose = require("mongoose");

const ventasSchema = new mongoose.Schema({
  carrito: [
    {
      idProducto: {
        type: String,
      },
      nombre: String,
      cantidad: {
        type: Number,
        required: true,
        min: [1, "La cantidad no puede ser menor a 1"],
      },
      precio: Number,
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

const Ventas = mongoose.model("Ventas", ventasSchema);
module.exports = Ventas;
