import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const SugestContext = createContext(null);

export const SugestContextProvider = (props) => {
    // const [cartItems, setCartItems] = useState(getDefaultCart());

    const getSuggestions = (itemId) => {
        let itemInfo = PRODUCTS.find((product)=>product.id === Number(itemId));
        console.log(itemId);
    };

    const contextValue = {getSuggestions};

    return(
        <SugestContext.Provider value={contextValue}>
            {props.children}
        </SugestContext.Provider>
    ); 
};