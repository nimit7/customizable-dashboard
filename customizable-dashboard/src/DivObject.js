import React from 'react';
import ContentRenderer from './ContentRenderer';

const DivObject = ({ object, onSelect, renderChildren, isSelected }) => {
    const divClassName = `div-overlay ${isSelected ? 'selected' : ''}`;
    console.log(object)

    return (
        <div
            className={`${object?.className} ${divClassName}`}
            style={object.style}
            onClick={(event) => onSelect(event, object.id)}
        >
            <ContentRenderer content={object.content} />
            {renderChildren()}
        </div>
    );
};


export default DivObject;
