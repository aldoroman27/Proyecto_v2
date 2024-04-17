import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import './shop.css';
import { useNavigate } from 'react-router-dom';


export const Shop = () => {
  const navigate = useNavigate();

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Productos</h1>
      </div>
      <div className="products">
        {""}
        {PRODUCTS.map((product) =>(
          <Product data={product}/>
        ))}
      </div>
          <br></br>
          
    </div>
  )
}
