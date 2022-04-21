import React from 'react'
import './CartScreen.css'
import CartItem from '../components/CartItem'

function CartScreen() {
  return (
    <div className='cartscreen'>

      <div className='cartscreen__left'>
        <h2>Carro de compras</h2>

        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </div>

      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
          <p>SubTotal (0) items</p>
          <p>Q.499.00</p>
        </div>
        <div>
          <button>Verificar</button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen