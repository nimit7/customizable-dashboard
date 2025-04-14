import React from 'react';
import Graphs from './components/Graph';
import Label from './components/Label';

const ContentRenderer = ({ content }) => {
    console.log(content.componentId)
    switch (content.componentId?.trim()) {
        case 'display-value-1': return <DisplayValues1 />;
        case 'graph': return <Graphs />;
        case 'label': return <Label {...content.props} />;
        // Add more cases for other content values if needed
        default:
            return null;
    }
};

const DisplayValues1 = () => {
    return (
        <div>
            <div className="d-flex g9 align-items-center" style={{ width: 'fit-content' }}>
                <div className="fs12">KPI Label</div>
                <div className="fs12 text-muted">Postfix</div>
            </div>
            <div className="d-flex align-items-center">
                <div className="fs24">Value (Change%)</div>
                <span className="fs20 text-success">▲</span>
            </div>
        </div>
    );
};

export default ContentRenderer;
