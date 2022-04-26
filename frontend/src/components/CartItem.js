import React from 'react'
import './CartItem.css'
import {Link} from 'react-router-dom'

const CartItem = ({item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className='cartitem'>
        <div className='cartitem__image'>
            <img src={item.urlImagen} 
            alt={item.nombre}></img>
        </div>

        <Link to={`/product/${item.producto}`} className = 'cartitem__name'>
            <p>{item.nombre}</p>
        </Link>

        <p className='cartitem__price'>Q{item.precio}</p>

        <select className='cartitem__select' value={item.qty} onChange={(e) => qtyChangeHandler(item.producto, e.target.value)}
        >
            {[...Array(item.existencias).keys()].map((x) => (
                <option key={x+1} value={x+1}>
                    {x+1}
                </option>
            ))}
        </select>

        <button className='cartitem__deleteBtn' onClick={() => removeHandler(item.producto)}>
            <i className='fas fa-trash'></i>
        </button>

    </div>
  )
}

export default CartItem