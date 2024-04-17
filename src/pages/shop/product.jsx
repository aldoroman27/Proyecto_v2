import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from 'react-router-dom';

export const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const navigate = useNavigate();

    const cartItemAmount = cartItems[id];   

    const handleSuggestClick = (id) => {
        navigate('/Sugest',
        {
            state: {
              itemId: id,
            }
        });
    };

    return (
        <div className='product' style={{display: 'flex', marginBottom: '250px' }}>
            <img src={productImage} style={{ marginBottom: '10px' }}/>
            <div className='description' style={{ marginBottom: '10px' }}>
                <p> 
                    <b>{productName}</b> 
                </p>
                <p>
                    ${price}
                </p>
            </div>
            <div style={{ display: 'flex', marginRight: '10px' }}>
                <button className='addToCartBttn' onClick={() => addToCart(id)}>
                    Añadir Al Carrito {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
                <button className='btn-sugest' onClick={() => handleSuggestClick(id)}>
                    Recomendaciones
                </button>
            </div>
        </div>
    );
};
