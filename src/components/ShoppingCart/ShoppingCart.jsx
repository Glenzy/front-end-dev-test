import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Card, ListGroup } from 'bootstrap-4-react';
import ShoppingCartItem from './ShoppingCartItem.jsx';
import * as actions from '../../actions/shoppingCartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ShoppingCart extends Component {
    handleClick = (event) => {
        const clickedElement = event.currentTarget.getAttribute('name');
       return this.props.actions.removeFromCart(clickedElement);
    }
    toggleCart = ()=>  this.props.actions.toggleCart();

    render() {
    const {productsList, itemsInCart, cartIsOpen} = this.props;
        return ( 
        <section className={cartIsOpen ? 'shopping-cart shown' : 'shopping-cart'} name="shopping-cart">
            <div className="container">
                <div className="row">
                    <div className="card">
                        <ul className="list-group">
                            <li className="list-group-item" onClick={this.toggleCart}>
                                <FontAwesomeIcon icon={"shopping-cart"}  aria-label="Shopping cart"/>
                                <h5 className="d-none d-sm-inline-block">Shopping cart</h5>
                            </li>
                            { itemsInCart > 0 ? null : <li className="list-group-item cart-item">No items in cart</li>}
                            {
                                productsList.map((product, index) => {
                                    if (product.inCart) {
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
        productsList: state.products.productsList,
        itemsInCart: state.products.itemsInCart,
        cartIsOpen:state.products.cartIsOpen,
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