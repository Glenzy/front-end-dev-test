import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/filterActions';
import Button from '../Button'

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
                    <div className="col-xs-12 col-md-3 col-lg-2 brand-filter">
                        <Button 
                            text="Show All"
                            classes="btn "
                            type="Brand filter"
                            name="Show All"
                            handleClick={this.handleClick} 
                        />
                            <hr className="hr-hover-effect" />
                        </div>
                    {productBrands.map((brand, index)=>{
                        return (
                        <div key={index} className="col-xs-12 col-md-3 col-lg-2 brand-filter">
                            <Button
                            text={brand} 
                            handleClick={this.handleClick} 
                            type="Brand filter"
                            classes="btn"
                            name={brand}
                            />
                            <hr className="hr-hover-effect" />
                        </div>);
                    })}
                </div>
            </div> 
        </section>

        );
    }
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