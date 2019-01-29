import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import posed, { PoseGroup } from 'react-pose';
import * as actions from '../../actions/cartActions';
import { loadProducts } from '../../actions/productActions';
import Product from './Product.jsx';
import MessageBlock from '../MessageBlock.jsx'

const FadeInProducts = posed.div({
    enter: { x: 0, y:0, opacity: 1 },
    exit: { x: 900, y:-100, opacity: 0, transition: { duration: 300 } }
  });

export class ProductPage extends Component {

    componentDidMount(){
        return this.props.actions.loadProducts();
    }

    handleClick = (event) => {
       return this.props.actions.addToCart(event.target.name);
    }
    
    filterProductList = (array,key,value) => {
        return array.filter(function (element) {
            return element[key] == value;
        });
    }

    displayError = (errorMessage) => {
        return <MessageBlock styleClass="no-products" message={errorMessage}/>;
    }
    
    checkForErrors = () => {
        const { productsList, errorLoadingProducts} = this.props.products;
        const getProductsInCart = this.filterProductList(productsList,  'inCart', true);
        const getOnlyPublishedProducts = this.filterProductList(productsList, 'isPublished', true);
        if(errorLoadingProducts){
            return this.displayError(' Sorry, looks like we\'ve run into problems!');
        }

        if(getProductsInCart.length >= getOnlyPublishedProducts.length){
           return  this.displayError('Sorry, looks like we\'ve run out of stock!');
        }

        return false;
    }


    render(){
        const productsList = this.props.products.productsList;

        const checkForErrors = this.checkForErrors();
        return (
            <section className="product-list">
                <div className="container-fluid">
                    <div className="row row-eq-height justify-content-around ">
                        <PoseGroup>
                            {productsList.map((product, index)=>{
                                if(product.isPublished && product.show ){
                                    return (
                                        <FadeInProducts  key={index} className="col-product col-xs-12 col-sm-6 col-lg-3 text-center">
                                            <Product  key={index} id={index} {...product} handleClick={this.handleClick} />
                                        </FadeInProducts>
                                        );
                                } else {
                                    return;
                                }
                            })}
                        </PoseGroup>
                        <div className="col">
                          {checkForErrors}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
  return {
      products: state.products,
      cart: state.products.cart
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...actions,
      loadProducts,
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
