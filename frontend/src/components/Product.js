import React from 'react';
import './Product.css';
import {Link} from 'react-router-dom';
import '../screens/ProductScreen';

const Product = () => {
  return (
    <div className="product">
        <img src="https://images.unsplash.com/photo-1622914050511-9227d8533bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
        alt="product name"></img>

        <div className= "product_info">
            <p className = "info_name">Producto 1</p>
            <p className = "info_description">
                Aca esta la informacion del prodcuto
            </p>

            <p className='info_price'>Q.455.00</p>

            <Link to={`/products/${1111}`} className='info_button'>Ver</Link>

        </div>
    </div>
  )
}

export default Product