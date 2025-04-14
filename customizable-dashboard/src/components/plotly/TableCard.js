import React from 'react';
import PropTypes from 'prop-types';

const TableCard = ({ cardObj, cardWidth, cardHeight, itemBorder }) => {
    console.log(cardObj)
    const { html_data = [], table_header = [], table_data = [] } = cardObj['object_data'];

    return (
        <div className={`col-${cardWidth} p-1`}>
            <div className={`card p-0 border-${itemBorder}`} style={{ height: cardHeight }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ height: cardHeight }}>
                        {html_data.length > 0 ? (
                            <div dangerouslySetInnerHTML={{ __html: html_data.join("") }} />
                        ) : (
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        {table_header.map((header, index) => (
                                            <th key={index} className="p-1">{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {table_data.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className="p-1">{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

TableCard.propTypes = {
    cardObj: PropTypes.object.isRequired,
    cardWidth: PropTypes.number.isRequired,
    cardHeight: PropTypes.string.isRequired,
    itemBorder: PropTypes.string.isRequired,
};

export default TableCard;
