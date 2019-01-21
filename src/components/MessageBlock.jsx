import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export const MessageBlock = (props) => {
    const {message, icon, styleClass} = {...props}; 
    return (
        <div>
            {icon && <FontAwesomeIcon icon={icon} />}
            <h2 className={icon ? `inline-block ${styleClass}`: `${styleClass}`}>{message}</h2>
        </div>
    );
}

MessageBlock.propTypes = {
    message:PropTypes.string.isRequired,
    className:PropTypes.string,
    icon:PropTypes.string,
}


export default MessageBlock;