import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, Row } from 'bootstrap-4-react';
import Button  from '../Button';
import * as actions from '../../actions/productActions';

export class ShoppingCartContainer extends Component {
    handleClick = () =>{
       return  console.log('cart button');
    }
    render(){
        const productsList = this.props.productsList;
        return (
            <section className="shopping-cart">
                <Container >
                    <Row>
                    <h1>Oh Hello, I'm the cart</h1>
                        {productsList.map((product)=>{
                            if(product.isInCart){
                                return <Button classes="remove-from-cart danger" handleClick={this.handleClick}text="remove from cart" />
                            } else {
                                return;
                            }
                        })}
                    </Row>
                </Container>
            </section>

        );
    }
}

function mapStateToProps(state) {
  return {productsList: state.productsList}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...actions
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);
