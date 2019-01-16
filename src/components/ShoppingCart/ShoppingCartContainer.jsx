import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Card, ListGroup, Col } from 'bootstrap-4-react';
import ShoppingCartItem from './ShoppingCartItem.jsx';
import * as actions from '../../actions/shoppingCartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ShoppingCartContainer extends Component {
    handleClick = (event) => {
        const clickedElement = event.currentTarget.getAttribute('name');
       return this.props.actions.removeFromCart(clickedElement);
    }
    toggleCart = ()=>  this.props.actions.toggleCart();

    render() {
    const {productsList, itemsInCart, cartIsOpen} = this.props;
        return ( 
        <section className={cartIsOpen ? 'shopping-cart shown' : 'shopping-cart'} name="shopping-cart">
            <Container>
                <Row>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item onClick={this.toggleCart}>
                                <FontAwesomeIcon icon={"shopping-cart"}  />
                                <h5 className="d-none d-sm-inline-block">Shopping cart</h5>
                            </ListGroup.Item>
                            { itemsInCart > 0 ? null : <ListGroup.Item className="cart-item">No items in cart</ListGroup.Item>}
                            {
                                productsList.map((product, index) => {
                                    if (product.inCart) {
                                        return <ShoppingCartItem  key={index} id={index} {...product} handleClick={this.handleClick} />
                                    } else {
                                        return;
                                    }
                                })
                               
                            } 
                        </ListGroup>
                    </Card>
                </Row> 
            </Container> 
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);