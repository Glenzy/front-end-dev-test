import React from 'react';
import { buttonPropTypes } from '../types/productPropTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const button = (props) => {
    const {text, handleClick, type, classes, icon, name, iconPosition} = {...props}; 
    return (
        <button 
            type={type}
            className={`${classes}`} 
            onClick={handleClick}
            name={name}> 
                {icon && iconPosition == "left" && <FontAwesomeIcon icon={icon}  aria-label={type} />}
                {text}
                {type === "nav-link" && <span className="sr-only">(current)</span>} 
                 {icon && iconPosition == "right" && <FontAwesomeIcon icon={icon}  aria-label={type} />}
        </button>  
    );
}

button.propTypes = {
    ...buttonPropTypes,
}

export default button;