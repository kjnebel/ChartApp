'use client';

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

// Function to get bar chart data and return a rendered bar chart
const BarChart = () => {
    
    const [barData, setBarData] = useState([{x: "", y:0}]);
    let series = [{name: 'series-a', data: barData}];
    let options = {
        chart: {
          id: "bar-chart"
        },
        title: {
            text: "Bar Chart",
            align: "center",
            style: {
                color: "#ABA4AA"
            }
        },
        xaxis: {
            labels: {
                style: {
                    colors: "#ABA4AA"
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#ABA4AA"
                }
            }
        }
    }

    const getBarData = async () => {
        const url = 'http://localhost:8000/api/bar-chart-data/';

        await fetch(url).then(response => response.json())
        .then((json) => {
            console.log('json: ', json.data)

            setBarData(json.data);
        })
        .catch((error) => {
            console.log('error: ', error);
        })
    }

    useEffect(() => {
        getBarData();
    }, []);

    useEffect(() => {
        series = [{name: 'series-a', data: barData}];
    }, [barData])

    return (
        <>
            <Chart 
                options={options}
                series={series}
                type="bar"
                width="500"
                className="chart"
            />
        </>
    )
}

export default BarChart;