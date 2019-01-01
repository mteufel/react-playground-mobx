import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Provider } from 'mobx-react';
import { ShoppingCart } from './store/ShoppingCart'

import { configure, autorun } from 'mobx'


configure( { enforceActions: 'observed' } )

const shoppingCart = new ShoppingCart();

autorun( () => {
    console.log(shoppingCart.items.length)
    console.log(shoppingCart.items.map(item => item.name));
    console.log(shoppingCart.totalPrice);
});


shoppingCart.add( { name: 'Computer', price: 500.00 });
shoppingCart.add( { name: 'Mouse', price: 5.99 });


ReactDOM.render(<Provider store={shoppingCart}>
    <App />
    </Provider>, document.getElementById('app'));