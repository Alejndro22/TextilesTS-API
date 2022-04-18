require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const inventarioRoutes = require("./routes/inventarioRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/inventario", inventarioRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server corriendo en puerto ${PORT}`));
