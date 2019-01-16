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
                    <Col col="col">
                        <FontAwesomeIcon icon={"shopping-cart"}  onClick={this.toggleCart}/>
                        <h5 className="d-none-xs">Shopping cart</h5>
                    </Col>
                    <Card>
                        <ListGroup>
                            { itemsInCart > 0 ? null : <ListGroup.Item>No items in cart</ListGroup.Item>}
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