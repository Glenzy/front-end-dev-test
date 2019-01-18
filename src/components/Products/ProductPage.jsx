import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import posed, { PoseGroup } from 'react-pose';
import * as actions from '../../actions/cartActions';
import Product from './Product.jsx';

const FadeInProducts = posed.div({
    show: {
        delayChildren: 400,
        staggerChildren: 250,
        opacity:1,
        x:0,
        delay:600,
    },
    hide:{
        delay:600,
        delayChildren: 100,
        staggerChildren: 250,
        opacity:0,
        transition: { duration: 1500 },
        x:100,
    }
  });
export class ProductPage extends Component {
    handleClick = (event) => {
       return this.props.actions.addToCart(event.target.name);
    }
    render(){
        const productsList = this.props.productsList;
        return (
            <section className="product-list">
                <div className="container-fluid">
                    <div className="row row-eq-height">
                        <PoseGroup>
                            {productsList.map((product, index)=>{
                                if(product.isPublished === "true" && !product.inCart){
                                    return (
                                        <FadeInProducts  key={index} className="col-product col-xs-12 col-sm-6 col-md-3">
                                            <Product  key={index} id={index} {...product} handleClick={this.handleClick} />
                                        </FadeInProducts>
                                        );
                                } else {
                                    return;
                                }
                            })}
                        </PoseGroup>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
