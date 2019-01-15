import React from 'react';
import { Button } from 'bootstrap-4-react';
import { buttonPropTypes } from '../types/productPropTypes';

const button = (props) => {
    const {text, handleClick, type, classes} = {...props}; 
    return (
    <Button 
        {...type}
        className={`${classes}`} 
        onClick={handleClick}> 
            {text} 
    </Button>  
    );
}

button.propTypes = {
    ...buttonPropTypes,
}

export default button;