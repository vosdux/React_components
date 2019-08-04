import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Badge.css';

const Badge = ({
    value, circle, className, inline, outer, ...attrs,
}) => {

    const text = typeof value === 'string' || value instanceof String;

    const classes = classNames(
        "badge",
        { circle },
        className,
        { inline },
        { outer },
        { text },
        { warning: attrs.warning },
        { alert: attrs.alert },
        { succes: attrs.succes },
        { info: attrs.info },
    );

    return (
        <span className={classes}>
            { value }
        </span>
    );
};

Badge.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    circle: PropTypes.bool,
    className: PropTypes.string,
    inlne: PropTypes.bool,
    outer: PropTypes.bool,
};

Badge.defaultProps = {
    circle: false,
    className: '',
    inlne: false,
    outer: false,
};

export default Badge