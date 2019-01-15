import React from 'react';
import { Button } from 'bootstrap-4-react';
import { buttonPropTypes } from '../types/productPropTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const button = (props) => {
    const {text, handleClick, type, classes, icon, name} = {...props}; 
    return (
        <Button 
            {...type}
            className={`${classes}`} 
            onClick={handleClick}
            name={name}> 
                {icon && <FontAwesomeIcon icon={icon}  />}
                {text} 
        </Button>  
    );
}

button.propTypes = {
    ...buttonPropTypes,
}

export default button;