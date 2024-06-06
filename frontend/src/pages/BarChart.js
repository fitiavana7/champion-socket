import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';


const BarChart = (props) => {
    let [series , setSeries] = useState([{
      data: []
    }])

    let [options , setOptions] = useState({
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [],
      }
    })

    useEffect(()=>{
      const donnee = [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] 
      setSeries(donnee)

      const categories = ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'Germany'
    ]
    
      setOptions(prevOptions => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories: categories
        }}))
    },[])

    return (
        <div id="chart">
           <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
    );
};

export default BarChart;