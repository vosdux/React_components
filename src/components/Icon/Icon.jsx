import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Icon.css';

const Icon = ({
    name, className, onClick, size, disabled, ...attrs,
}) => {

    const elemSize = size ? {fontSize: `${size}rem`} : null;

    const classes = classNames(
        'fa',
        `fa-${name}`,
        className,
        { func: onClick },
        { disabled }

    )

    return (
        <i 
            className={classes}
            onClick={disabled ? null : onClick}
            style={elemSize}
            {...attrs}
        />
    );
};

Icon.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.number,
    disabled: PropTypes.bool,
};

Icon.defaultProsp = {
    name: '',
    className: '',
    onClick: null,
    size: null,
    disabled: false,
};

export default Icon;