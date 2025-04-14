import React from 'react';

const Header = ({ toggleEditor }) => {
    return (
        <header style={{ padding: '10px', background: '#333', color: '#fff' }}>
            <button onClick={toggleEditor} style={{ color: '#fff' }}>
                Editor
            </button>
        </header>
    );
};

export default Header;
