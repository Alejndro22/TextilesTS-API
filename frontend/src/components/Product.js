import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import "../screens/ProductScreen";

const Product = ({ urlImagen, nombre, precio, descripcion, inventarioId }) => {
  return (
    <div className="product">
      <img
        src={urlImagen}
        alt={nombre}
      ></img>

      <div className="product_info">
        <p className="info_name">{nombre}</p>
        <p className="info_description">{descripcion.substring(0,100)}...</p>

        <p className="info_price">Q{precio}</p>

        <Link to={`/products/${inventarioId}`} className="info_button">
          Ver
        </Link>
      </div>
    </div>
  );
};

export default Product;
