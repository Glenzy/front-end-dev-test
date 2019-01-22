import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/filterActions';
import Button from '../Button'
import { filterProductsPropTypes } from '../../types/filterPropTypes'

export class FilterProducts extends Component {
    handleClick = (event) => {
        const clickedElement = event.currentTarget.getAttribute('name');
        if(clickedElement === "Show All Brands"){
            return this.props.actions.showAllBrands();
        }
       return this.props.actions.filterBrands(clickedElement);
    }
    removeDuplicates = (productsList) =>{
        const brandNames = productsList.map((product) =>{
            return product.brand;
        });
       return [...new Set(brandNames)]
    }

    render() {
    const {productsList} = this.props;
    const productBrands = this. removeDuplicates(productsList);
        return ( 
        <section className="filter-buttons">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-md-3 col-lg-2">
                        <Button 
                            text="Show All Brands"
                            classes="btn brand-filter"
                            type="Brand filter"
                            name="Show All Brands"
                            handleClick={this.handleClick} 
                        />
                        </div>
                    {productBrands.map((brand, index)=>{
                        return (
                        <div key={index} className="col-xs-12 col-md-3 col-lg-2">
                            <Button
                            text={brand} 
                            handleClick={this.handleClick} 
                            type="Brand filter"
                            classes="btn brand-filter"
                            name={brand}
                            />
                        </div>);
                    })}
                </div>
            </div> 
        </section>

        );
    }
}

FilterProducts.propTypes = {
    ...filterProductsPropTypes,
}

function mapStateToProps(state) {
    return { 
        productsList: state.products.productsList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterProducts);