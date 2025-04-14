import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
// import { getComponentData } from '../../services/dashboardService';
// import useDashboardApi from '../../hooks/useDashboardApi';
// import { Icon } from '@mui/material';

const DUMMY_OPTION = {
    xAxis: {
        type: 'category',
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '30%']
    },
    visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [{
            gt: 1,
            lt: 3,
            color: 'rgba(0, 180, 0, 0.5)'
        }, {
            gt: 5,
            lt: 7,
            color: 'rgba(0, 180, 0, 0.5)'
        }]
    },
    series: [
        {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
                color: 'green',
                width: 5
            },
            markLine: {
                symbol: ['none', 'none'],
                label: { show: false },
                data: [
                    { xAxis: 1 },
                    { xAxis: 3 },
                    { xAxis: 5 },
                    { xAxis: 7 }
                ]
            },
            areaStyle: {},
            data: [
                ['2019-10-10', 200],
                ['2019-10-11', 400],
                ['2019-10-12', 650],
                ['2019-10-13', 500],
                ['2019-10-14', 250],
                ['2019-10-15', 300],
                ['2019-10-16', 450],
                ['2019-10-17', 300],
                ['2019-10-18', 100]
            ]
        }
    ]
};


const Graphs = ({ option, dashId, compId, colWidth = 12, style, displayModalHandler, modalData }) => {
    // const { getCompApiFuncHandler: getGraphOptionsData, data, error, isLoading } = useDashboardApi();
    // const echartsRef = useRef(null);

    // const getGraphOptionsDataHandler = () => {
    //     getGraphOptionsData(getComponentData, dashId, compId);
    // }

    // useEffect(() => {
    //     !option && getGraphOptionsDataHandler();
    // }, [compId]);

    // useEffect(() => {
    //     if (echartsRef.current) {
    //         const echartsInstance = echartsRef.current.getEchartsInstance();
    //         echartsInstance.setOption(option || data, { notMerge: true });
    //     }
    // }, [option, data]);

    // if (option) {
    //     return (
    //         <div className={`col-${colWidth} d-flex flex-column`} style={style}>
    //             <ReactEcharts ref={echartsRef} option={option} />
    //         </div>
    //     );
    // }
    return (
        <div className={`col-${colWidth} d-flex flex-column`} style={style}>
            <ReactEcharts 
            // ref={echartsRef} 
            option={DUMMY_OPTION} />
        </div>
    );
    if (DUMMY_OPTION) {
    }

    // return isLoading
    //     // ? <Loader className='mx-auto' />
    //     ? "Loading..."
    //     : (
    //         <div className={`col-${colWidth} d-flex flex-column`} style={style}>
    //             {Object.keys(data).length && (
    //                 <ReactEcharts option={data} />
    //             )}
    //         </div>
    //     );
}

export default Graphs;
