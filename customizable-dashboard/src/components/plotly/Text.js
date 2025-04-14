import React from 'react';
import PropTypes from 'prop-types';

const TextCard = ({ cardObj, cardWidth, cardHeight, itemBorder, textAlign }) => {
    const { title, subtitle } = cardObj['object_data'];

    return (
        <div className={`col-${cardWidth} p-1`}>
            <div className={`card p-0 border-${itemBorder}`} style={{ height: cardHeight }}>
                <div className={`card-body d-flex align-items-${textAlign.toLowerCase()} p-1`}>
                    <div className="w-100">
                        <h2 style={{ textAlign: textAlign.toLowerCase(), color: '#043365' }}>{title}</h2>
                        <h6 style={{ textAlign: textAlign.toLowerCase() }}>{subtitle}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

TextCard.propTypes = {
    cardObj: PropTypes.object.isRequired,
    cardWidth: PropTypes.number.isRequired,
    cardHeight: PropTypes.string.isRequired,
    itemBorder: PropTypes.string.isRequired,
    textAlign: PropTypes.string.isRequired,
};

export default TextCard;
