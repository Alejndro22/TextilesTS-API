import React, { useEffect } from 'react';
import './HomeScreen.css';
import Product from '../components/Product';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { getInventario as listInventario} from '../redux/actions/inventarioActions';

const HomeScreen = () => {

  const dispatch = useDispatch();

  const getInventario = useSelector(state => state.getInventario);
  const { inventario, loading, error } = getInventario;

  useEffect(() => {
    dispatch(listInventario())
  }, [dispatch]);

  return (
    <div className='homescreen'>
      <h2 className='homescreen__tittle'>Productos Disponibles</h2>
      
      <div className='homescreen__products'>
        {loading ? (
          <h2>Cargando...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          inventario.map((inv) => <Product
          key={inv._id}
          inventarioId={inv._id}
          nombre={inv.nombre}
          precio={inv.precio}
          descripcion={inv.descripcion}
          urlImagen={inv.urlImagen}
          />)
        )}
      </div>
    </div>
  )
}

export default HomeScreen