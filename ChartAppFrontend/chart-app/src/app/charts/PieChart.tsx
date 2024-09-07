'use client';

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

// Function to get pie chart data and return a rendered pie chart
const PieChart = () => {
    
    const [pieData, setPieData] = useState([0,0,0,0]);
    const [pieChartLabels, setPieChartLabels] = useState(['','','','']);
    let series = pieData;
    let options = {
        chart: {
          id: "pie-chart"
        },
        title: {
            text: "Pie Chart",
            align: "center",
            style: {
                color: "#ABA4AA"
            }
        },
        legend: {
            labels: {
                colors: "#ABA4AA"
            }
        },
        labels: pieChartLabels
    }

    const getPieChartData = async () => {
        const url = 'http://localhost:8000/api/pie-chart-data/';

        await fetch(url).then(response => response.json())
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
            title: {
                text: "Pie Chart",
                align: "center",
                style: {
                    color: "#ABA4AA"
                }
            },
            legend: {
                labels: {
                    colors: "#ABA4AA"
                }
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
                className="chart"
            />
        </>
    )
}

export default PieChart;