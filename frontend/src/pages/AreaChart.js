import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const data =  {
    series: [{
      name: "STOCK ABC",
      data: series.monthDataSeries1.prices
    }],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      
      title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left'
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: 'left'
      }
    },  
  };

const AreaChart = () => {
    let [series , setSeries] = useState([])
    let [options , setOptions] = useState({})

    useEffect(()=>{
      setSeries(data.series)
      setOptions(data.options)
    },[])

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    );
};

export default AreaChart;