import React from 'react';

const Label = ({ text="Hi", color, fontSize, onSelect }) => {
    console.log(onSelect)
    const labelStyle = {
        color: color || '#000',
        "font-size": fontSize || '16px',
        border: '1px solid white'
    };

    return (
        <div style={labelStyle}>
            {text || 'Default Label Text'}
        </div>
    );
};

export default Label;
