import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class CartItems extends Component {
    render() {
        return <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {this.props.store.items.map( item => <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr> )}
            </tbody>
            <tfoot>
            <tr>
                <td>Total:</td>
                <td>{this.props.store.totalPrice}</td>
            </tr>
            </tfoot>
        </table>;

    }
}

export { CartItems };
