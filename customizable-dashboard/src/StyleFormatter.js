import React, { useEffect, useState } from 'react';

const StyleFormatter = ({ customStyles, handleStyleChange, isDivSelected }) => {
    console.log(isDivSelected)
    const [borderShown, setBorderShown] = useState(true);

    useEffect(() => {
        if (!isDivSelected) {
            setBorderShown(true); // Reset to default when no div is selected
        }
    }, [isDivSelected]);

    const toggleBorderVisibility = () => {
        setBorderShown(!borderShown);
        handleStyleChange('border', !borderShown ? '1px solid black' : 'none');
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <h3>Modify Selected Object Styles</h3>

            <div>
                <label>Height: </label>
                <select 
                    onChange={(e) => handleStyleChange('height', e.target.value)} 
                    value={customStyles.height}
                    disabled={!isDivSelected}
                >
                    <option value="auto">auto</option>
                    <option value="fit-content">fit-content</option>
                    <option value="100%">100%</option>
                    <option value="50%">50%</option>
                </select>
                <input
                    type="text"
                    placeholder="Custom"
                    onChange={(e) => handleStyleChange('height', e.target.value)}
                    value={customStyles.height}
                    disabled={!isDivSelected}
                />
            </div>

            <div>
                <label>Width: </label>
                <select 
                    onChange={(e) => handleStyleChange('width', e.target.value)} 
                    value={customStyles.width}
                    disabled={!isDivSelected}
                >
                    <option value="auto">auto</option>
                    <option value="fit-content">fit-content</option>
                    <option value="100%">100%</option>
                    <option value="50%">50%</option>
                </select>
                <input
                    type="text"
                    placeholder="Custom"
                    onChange={(e) => handleStyleChange('width', e.target.value)}
                    value={customStyles.width}
                    disabled={!isDivSelected}
                />
            </div>

            <div>
                <label>Padding: </label>
                <input
                    type="text"
                    placeholder="e.g., 10px 20px"
                    onChange={(e) => handleStyleChange('padding', e.target.value)}
                    value={customStyles.padding}
                    disabled={!isDivSelected}
                />
            </div>

            <div>
                <label>Margin: </label>
                <input
                    type="text"
                    placeholder="e.g., 10px 20px"
                    onChange={(e) => handleStyleChange('margin', e.target.value)}
                    value={customStyles.margin}
                    disabled={!isDivSelected}
                />
            </div>

            <div>
                <label>
                    <input 
                        type="checkbox" 
                        checked={borderShown} 
                        onChange={toggleBorderVisibility}
                        disabled={!isDivSelected}
                    />
                    Show Border
                </label>
            </div>

            <div>
                <label>Border Radius: </label>
                <input
                    type="text"
                    placeholder="e.g., 10px"
                    onChange={(e) => handleStyleChange('borderRadius', e.target.value)}
                    value={customStyles.borderRadius}
                    disabled={!isDivSelected}
                />
            </div>
        </div>
    );
};

export default StyleFormatter;
