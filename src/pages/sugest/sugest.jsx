import React, { useState }  from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios'
import '../shop/shop.css';
import { PRODUCTS } from '../../products';

export const Sugest = () => {
  const location = useLocation();
  let itemId = location.state.itemId;

  const [message, setMessage] = useState('');
  const [data, setData] = useState('');
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  
  
  function getData() {
    axios.get('https://flask-c335.onrender.com/api/v1/predictions/'+ itemId)
      .then(res => {
        const newData = res.data.map(item => item.id);
        setData(newData);
          
        setMessage(res.data.message); // Establecer el mensaje en el estado
        // Buscar objetos en PRODUCTS que coincidan con los IDs
        const suggestedProducts = PRODUCTS.filter(product => newData.includes(product.id));
        setSuggestedProducts(suggestedProducts);
      })
      .catch(err => {
          console.error(err); // Manejar errores en la consola
          setMessage('Error interno del servidor'); // Establecer mensaje de error en el estado
      });
  }
  
  
  return (
    <div className='container'>
      <h1>Recomendaciones</h1>
      <button onClick={getData}>Click me</button>
      {data && (
        <div>
          {suggestedProducts.map(product => (
            <div key={product.id}>
              <img src={product.productImage} alt={product.productName} />
              <p>{product.productName}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
