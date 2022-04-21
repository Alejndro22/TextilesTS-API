import React from 'react'
import './ProductScreen.css'

function ProductScreen() {
  return (
    <div className='productscreen'>

      <div className='productscreen__left'>

        <div className='left__image'>
          <img src='https://images.unsplash.com/photo-1622914050511-9227d8533bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
          alt='product name'></img>
        </div>
        
        <div className='left__info'>
          <p className='left__name'>Producto 1</p>
          <p>Q.455.00</p>
          <p>Esta es una descripcion del prodcuto...</p>
        </div>

      </div>

      <div className='productscreen__rigth'>

        <div className='right__info'>
          <p>
            Pricio: <span>Q.455.00</span>
          </p>

          <p>
            Estado: <span>Stock</span>
          </p>

          <p>
            Qty
            <select>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </p>

          <p>
            <button type='button'>Agregar a carrito</button>
          </p>

        </div>
      </div>
    </div>
  )
}

export default ProductScreen