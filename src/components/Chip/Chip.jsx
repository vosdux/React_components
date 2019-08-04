import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon/Icon';
import Image from '../Img/Image';

import './Chip.css';

const Chip = ({
    text, withImage, withIcon, withClose, imageSrc, imgAlt, iconName, className,
    id, onChipClick, onCloseClick,
}) => {

    const classes = classNames(
        "chip",
        className,
    );

    const onChipAction = () => {
        onChipClick(id);
    };

    const onCloseClickAction = (e) => {
        e.stopPropagetion();
        onCloseClick(e, id);
    }

    return (
        <div className={classes} onClick={onChipAction}>
            {withImage &&
                <span className="chipImage">
                    <Image src={imageSrc} alt={imgAlt} width={24} height={24} />
                </span>
            }
            {withIcon &&
                <span className="chipIcon">
                    <Icon name={iconName} />
                </span>
            }
            <span className="chipText" onClick={onCloseClickAction}>{text}</span>
            {withClose &&
                <span className="chipClose">
                    <Icon name="times" />
                </span>
            }
        </div>
    );
};

Chip.propTypes = {
    text: PropTypes.string.isRequired,
    withImage: PropTypes.bool,
    withIcon: PropTypes.bool,
    withClose: PropTypes.bool,
    imageSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    iconName: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    onChipClick: PropTypes.func,
    onCloseClick: PropTypes.func,
};

Chip.defaultProps = {
    withImage: false,
    withIcon: false,
    withClose: false,
    imageSrc: '',
    imgAlt: '',
    iconName: 'user-tie',
    className: '',
    id: null,
    onChipClick: () => {},
    onCloseClick: () => {},
};

export default Chip;