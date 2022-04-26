import React from 'react'
import './ProductScreen.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { getInventarioDetails } from '../redux/actions/inventarioActions';
import { addToCart } from '../redux/actions/cartActions';
import { useParams, useNavigate } from 'react-router-dom';

const ProductScreen = () => {

  const { id } = useParams();
  let navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();


  const inventarioDetails = useSelector(state => state.getInventarioDetails);
  const { loading, error, inventario } = inventarioDetails;

  useEffect(() => {

    if (inventario && id !== inventario._id) {
      dispatch(getInventarioDetails(id))
    }
  }, [dispatch, inventario]);

  const addToCartHandler = () => {
    dispatch(addToCart(inventario._id, qty));
    navigate("/cart");
  }

  return (
    <div className='productscreen'>
      {loading ? <h2>Cargando...</h2> : error ? <h2>{error}</h2> : (
        <>
          <div className='productscreen__left'>

            <div className='left__image'>
              <img src={inventario.urlImagen}
                alt={inventario.nombre}></img>
            </div>

            <div className='left__info'>
              <p className='left__name'>{inventario.nombre}</p>
              <p>Precio: Q{inventario.precio}</p>
              <p>{inventario.descripcion}</p>
            </div>

          </div>

          <div className='productscreen__rigth'>

            <div className='right__info'>
              <p>
                Precio: <span>Q{inventario.precio}</span>
              </p>

              <p>
                Estado: <span>{inventario.existencias > 0 ? "En stock" : "Agotado"}</span>
              </p>

              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(inventario.existencias).keys()].map((x) => (
                    <option key={x+1} value={x+1}>{x+1}</option>
                  ))}
                </select>
              </p>

              <p>
                <button type='button' onClick={addToCartHandler}>Agregar a carrito</button>
              </p>

            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default ProductScreen