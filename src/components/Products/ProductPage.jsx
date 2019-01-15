import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, Row } from 'bootstrap-4-react';
import * as actions from '../../actions/productActions';
import Product from './Product.jsx';

export class ProductPage extends Component {
    handleClick = () =>{
       return console.log('add to cart button');
    }
    render(){
        const productsList = this.props.productsList;
        return (
            <section className="product-list">
                <Container >
                    <Row className="row-eq-height">
                        {productsList.map((product)=>{
                            if(product.isPublished && !product.isInCart){
                                return <Product  {...product} handleClick={this.handleClick} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
