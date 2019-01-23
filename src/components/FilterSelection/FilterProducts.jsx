import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/filterActions';
import Button from '../Button'


export class FilterProducts extends Component {

    componentDidMount(){
        const filterButtons =  this.removeDuplicates(this.props.productsList);
        return this.props.actions.addFilterMenuButton(filterButtons);
    }

    handleClick = (event) => {
        const clickedElement = event.currentTarget.getAttribute('name');
        if(clickedElement === "Show All"){
            return this.props.actions.showAllBrands();
        }
       return this.props.actions.filterBrands(clickedElement);
    }

    activateMenu = () => this.props.actions.activateMenu();

    removeDuplicates = (productsList) =>{
        const brandNames = productsList.map((product) =>{
            return product.brand;
        });
        const removedDuplicates = [...new Set(brandNames)];
       return removedDuplicates
    }


    render() {
    const {showFilterMenu, filterButtons} = this.props.filterMenu;
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
                            handleClick={this.activateMenu} 
                        />
                    </div>
                </div>
                <div className={showFilterMenu ? 'row selection-row open ' : 'row selection-row closed'}> 
                    <div className="col-xs-12 col-md-3 col-xl-2 brand-filter">
                        <Button 
                            text="Show All"
                            classes="btn "
                            type="Brand filter"
                            name="Show All"
                            handleClick={this.handleClick} 
                        />
                        <hr className="hr-hover-effect" />
                    </div>
                    {filterButtons && filterButtons.map((brand, index)=>{
                        return (
                        <div key={index} className="col-xs-12 col-md-3 col-xl-2 brand-filter">
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