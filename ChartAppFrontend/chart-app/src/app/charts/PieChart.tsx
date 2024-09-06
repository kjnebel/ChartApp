'use client';

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
    
    const [pieData, setPieData] = useState([0,0,0,0]);
    const [pieChartLabels, setPieChartLabels] = useState(['','','','']);
    let series = pieData;
    let options = {
        chart: {
          id: "pie-chart"
        },
        labels: pieChartLabels
    }

    const getPieChartData = async () => {
        const url = 'http://localhost:8000/api/pie-chart-data/';

        await fetch(url, {
            method: 'GET'
        }).then(response => response.json())
        .then((json) => {
            console.log('json: ', json.data)
            setPieChartLabels(json.labels);
            setPieData(json.data);
        })
        .catch((error) => {
            console.log('error: ', error);
        })
    }

    useEffect(() => {
        getPieChartData();
    }, []);

    useEffect(() => {
        series = pieData;
        options = {
            chart: {
              id: "pie-chart"
            },
            labels: pieChartLabels
        }
    }, [pieData, pieChartLabels])

    return (
        <>
            <Chart 
                options={options}
                series={series}
                type="donut"
                width="500"
            />
        </>
    )
}

export default PieChart;