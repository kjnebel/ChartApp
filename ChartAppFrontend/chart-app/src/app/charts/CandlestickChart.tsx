'use client';

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const CandlestickChart = () => {
    
    const [candlestickData, setCandlestickData] = useState([{x: Date, y:[0,0,0,0]}]);
    let series = [{name: 'series-a', data: candlestickData}];
    let options = {
        chart: {
          id: "candlestick-chart"
        }
    }

    const getCandlestickData = async () => {
        const url = 'http://localhost:8000/api/candlestick-data/';

        await fetch(url, {
            method: 'GET'
        }).then(response => response.json())
        .then((json) => {
            setCandlestickData(json.data);
        })
        .catch((error) => {
            console.log('error: ', error);
        })
    }

    useEffect(() => {
        getCandlestickData();
    }, []);

    useEffect(() => {
        series = [{name: 'series-a', data: candlestickData}]
    }, [candlestickData])

    return (
        <>
            <Chart 
                options={options}
                series={series}
                type="candlestick"
                width="500"
            />
        </>
    )
}

export default CandlestickChart;