import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/filterActions';
import Button from '../Button'


export class FilterProducts extends Component {

    handleClick = (event) => {
        const clickedElement = event.currentTarget.getAttribute('name');
        this.props.actions.makeButtonActive(clickedElement);
        if(clickedElement === "Show All"){
            return this.props.actions.showAllBrands();
        }
       return this.props.actions.filterBrands(clickedElement);
    }
    openFilterMenu = () => this.props.actions.openFilterMenu();
    removeDuplicates = (productsList) =>{
        const brandNames = productsList.map((product) =>{
            return product.brand;
        });
        const removedDuplicates = [...new Set(brandNames)];
       return removedDuplicates
    }


    render() {
    const {openFilterMenu, filterButtons} = this.props.filterMenu;
        return ( 
        <section className="filter-buttons">
            <div className="container-fluid">
                <div className="row">
                    <div className="d-block d-md-none">
                        <Button 
                            text="Filter brands"
                            classes="activate-menu btn"
                            type="Brand filter"
                            name="Show All"
                            icon="angle-right"
                            iconPosition="right"
                            handleClick={this.openFilterMenu} 
                        />
                    </div>
                </div>
                <div className={openFilterMenu ? 'row selection-row open ' : 'row selection-row closed'}> 
                    {filterButtons && filterButtons.map((brand, index)=>{
                        return (
                        <div key={index} className="col-xs-12 col-md-3 col-xl-2 brand-filter">
                            <Button
                            text={brand.name} 
                            handleClick={this.handleClick} 
                            type="Brand filter"
                            classes={brand.active ? 'active btn' : 'btn'}
                            name={brand.name}
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
        filterMenu: state.filterMenu
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