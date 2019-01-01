import React, { Component } from 'react';
import { CartItems } from "./components/CardItems";
import {ItemForm} from "./components/ItemForm";

class App extends Component {
    render() {
        return(
            <div className="App">
                <CartItems />
                <ItemForm />
            </div>
        )
    }
}

export default App;