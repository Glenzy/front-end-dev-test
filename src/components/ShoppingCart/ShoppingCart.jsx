import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ShoppingCartItem from './ShoppingCartItem.jsx';
import * as actions from '../../actions/cartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ShoppingCart extends Component {
    handleClick = (event) => {
        const clickedElement = event.currentTarget.getAttribute('name');
       return this.props.actions.removeFromCart(clickedElement);
    }
    toggleCart = ()=>  this.props.actions.toggleCart();

    render() {
    const {cartList, itemsInCart, cartIsOpen} = this.props;
    const hasItem = itemsInCart > 0  ? 'has-item' : '';
        return ( 
        <section className={cartIsOpen ? `shopping-cart shown ${hasItem}` : `shopping-cart ${hasItem} `} name="shopping-cart">
            <div className="container">
                <div className="row">
                    <div className="card">
                        <ul className="list-group">
                            <li className="list-group-item cart-icon" onClick={this.toggleCart}>
                                <FontAwesomeIcon icon={"shopping-cart"}  aria-label="Shopping cart"/>
                                <p className="item-count">{itemsInCart > 0  ? `${itemsInCart}` : ''}</p>
                                <h5 className="d-none d-sm-inline-block">Shopping cart</h5>
                            </li>
                            { itemsInCart > 0 ? null : <li className="list-group-item cart-item">No items in cart</li>}
                            {
                               cartList.map((product, index) => {
                                   if(product){
                                    return <ShoppingCartItem  key={index} id={index} {...product} handleClick={this.handleClick} />
                                   } else {
                                       return;
                                   }
                                })
                            } 
                        </ul>
                    </div>
                </div> 
            </div> 
        </section>

        );
    }
}

function mapStateToProps(state) {
    return { 
        cartList: state.cart.cartList,
        itemsInCart: state.cart.itemsInCart,
        cartIsOpen:state.cart.cartIsOpen,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);