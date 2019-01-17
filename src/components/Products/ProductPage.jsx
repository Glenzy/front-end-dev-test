import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/productActions';
import Product from './Product.jsx';

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
                        {productsList.map((product, index)=>{
                            if(product.isPublished === "true" && !product.inCart){
                                return <Product  key={index} id={index} {...product} handleClick={this.handleClick} />
                            } else {
                                return;
                            }
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
  return {productsList: state.products.productsList}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...actions
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
