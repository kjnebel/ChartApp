"use client";

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
    
    const [lineChartData, setLineChartData] = useState([0, 0, 0, 0]);
    const [lineChartLabels, setLineChartLabels] = useState(['','','','']);
    let series = [{name: "series-a", data: lineChartData}];
    let options = {
        chart: {
          id: "line-chart"
        },
        markers: {
            size: 5
        },
        xaxis: {
            categories: lineChartLabels,
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

    const getLineChartData = async () => {
        const url = "http://localhost:8000/api/line-chart-data/";

        await fetch(url).then(response => response.json())
        .then((json) => {
            setLineChartData(json.data);
            setLineChartLabels(json.labels);
        })
        .catch((error) => {
            console.log("error: ", error);
        })
    }

    useEffect(() => {
        getLineChartData();
    }, []);

    useEffect(() => {
        series = [{name: "series-a", data: lineChartData}];
        options = {
            chart: {
                id: "line-chart"
              },
              markers: {
                  size: 5
              },
              xaxis: {
                  categories: lineChartLabels,
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
        };
    }, [lineChartData, lineChartLabels]);

    return (
        <>
            <Chart 
                options={options}
                series={series}
                type="line"
                width="500"
                className="chart"
            />
        </>
    )
}

export default LineChart;