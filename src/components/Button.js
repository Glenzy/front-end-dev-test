import React from 'react';
import { buttonPropTypes } from '../types/productPropTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const button = (props) => {
    const {text, handleClick, type, classes, icon, name} = {...props}; 
    return (
        <button 
            type={type}
            className={`${classes}`} 
            onClick={handleClick}
            name={name}> 
                {icon && <FontAwesomeIcon icon={icon}  aria-label={type} />}
                {text} 
        </button>  
    );
}

button.propTypes = {
    ...buttonPropTypes,
}

export default button;