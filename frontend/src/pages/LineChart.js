import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';


const LineChart = (props) => {
    let [series , setSeries] = useState([{
        name: "Taches",
        data: []
    }])
    let [options , setOptions] = useState({
        chart: {
          height: 350,
          type: 'line',
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
          text: 'Tâches finis pendant un intervalle de temps',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: [],
        }
      })

      useEffect(()=>{
        // axios.get("https://example.com/api")
        // .then((res)=>{})
        // .catch((err)=>{})
        const donnee = [10, 41, 35, 43, 12, 21, 7, 24, 34]
        setSeries([{ name: "Taches", data: donnee }]
        )

        const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
        setOptions(prevOptions => ({
          ...prevOptions,
          xaxis: {
            ...prevOptions.xaxis,
            categories: categories
          }
        }));
    },[])

    return (
        <>
            <ReactApexChart options={options} series={series} type="line" height={350} />    
        </>
    );
};

export default LineChart;