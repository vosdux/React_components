import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.css';

const Image = ({
    src, alt, className, width, height, circle, ...attrs,
}) => {

    if(!src) {
        src = `https://via.placeholder.com/${width}x${height}`
    }
    
    const classes = classNames(
        className,
        { circle }
    );

    return (
        <img 
            src={src}
            alt={alt}
            className={classes}
            width={width}
            height={height}
            {...attrs}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    circle: PropTypes.bool,
};

Image.defaultProps = {
    alt: 'image name',
    className: '',
    height: 100,
    width: 100,
    circle: false,
};

export default Image;