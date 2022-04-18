const mongoose = require("mongoose");

const inventarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    existencias: {
      type: Number,
      required: true,
    },
    urlImagen: {
      type: String,
      required: true,
    },
  },
  { collection: "Inventario" }
);

const Inventario = mongoose.model("Inventario", inventarioSchema);
module.exports = Inventario;
