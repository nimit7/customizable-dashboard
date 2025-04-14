import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
    cardObj,
    cardWidth,
    cardHeight,
    itemBorder,
    textAlign,
    itemHeader
}) => {
    const cardData = cardObj.object_data;
    const metricValue = cardData["metric_value"];
    const metricChange = cardData["metric_change_s"];

    return (
        <div className={`col-${cardWidth} p-1`}>
            <div className={`card p-1 border-${itemBorder}`} style={{ height: cardHeight }}>
                <div className={`card-header text-${textAlign.toLowerCase()} p-0`} style={{ background: 'white', border: 'none' }}>
                    <h5 className="text-secondary">{itemHeader}</h5>
                    <h5>{cardData["node_name"]}</h5>
                    <h5>{cardData["cohort_name"]}</h5>
                    <div className="text-success">{cardData["segment_name"]}</div>
                </div>
                <div className="card-body d-flex align-items-center p-1">
                    <div className="w-100" style={{ textAlign: textAlign.toLowerCase() }}>
                        <h6 className="card-subtitle">{cardData["metric_name"]}</h6>
                        <h2 className="card-text" style={{ color: '#043365' }}>
                            {metricValue}
                            <small className={`h6 ${cardData['metric_change_c']}`}>{metricChange}</small>
                        </h2>
                    </div>
                </div>
                <div className={`card-footer text-${textAlign.toLowerCase()} p-0`} style={{ background: 'white', border: 'none' }}>
                    {cardData["tree_name"] && (
                        <div style={{ color: '#043365' }}>
                            <i className="bi bi-diagram-3"></i> {cardData["tree_name"]}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    cardWidth: PropTypes.number.isRequired,
    cardHeight: PropTypes.string.isRequired,
    itemBorder: PropTypes.string.isRequired,
    textAlign: PropTypes.string.isRequired,
    itemHeader: PropTypes.string.isRequired,
    cardData: PropTypes.shape({
        metric_value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        metric_change_s: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        metric_change_c: PropTypes.string.isRequired,
        node_name: PropTypes.string.isRequired,
        cohort_name: PropTypes.string.isRequired,
        segment_name: PropTypes.string.isRequired,
        tree_name: PropTypes.string,
        metric_name: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;
