import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Card, ListGroup, Col } from 'bootstrap-4-react';
import ShoppingCartItem from './ShoppingCartItem.jsx';
import * as actions from '../../actions/shoppingCartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ShoppingCartContainer extends Component {
    handleClick = (event) => {
       return this.props.actions.removeFromCart(event.target.name);
    }
    render() {
    const {productsList, itemsInCart} = this.props;
        return ( 
        <section className = "shopping-cart" >
            <Container>
                <Row>
                    <Col col="col">
                        <h5><FontAwesomeIcon icon={"shopping-cart"}  /> Shopping cart</h5>
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
        itemsInCart: state.products.itemsInCart
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