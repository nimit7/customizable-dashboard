import React, { useEffect } from 'react'

const PlotlyGraph = ({ graphId, cardObj, cardHeight, itemBorder, cardWidth }) => {
    const cardData = cardObj.object_data;

    useEffect(() => {
        const gd = JSON.parse(cardData);
        console.log(gd)
        gd.layout.height = cardHeight;
        window?.Plotly?.newPlot(graphId, gd.data, gd.layout);
    }, [graphId, cardData]);

    return (
        <div className={`col-${cardWidth} p-1`}>
            <div className={`card p-0 border-${itemBorder}`}>
                <div className="card-body p-0">
                    <div id={graphId} className="h-auto w-100"></div>
                </div>
            </div>
        </div>
    );
}

export default PlotlyGraph