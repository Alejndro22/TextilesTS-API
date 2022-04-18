require("dotenv").config;

const productosData = require("./data/inventario");
const connectDB = require("./config/db");
const Inventario = require("./models/Inventario");

connectDB();

const importarData = async () => {
  try {
    await Inventario.deleteMany({});
    await Inventario.insertMany(productosData);

    console.log("Datos importados con exito");
    process.exit();
  } catch (error) {
    console.error("Ha ocurrido un error, importe fallido");
    process.exit(1);
  }
};

importarData();
