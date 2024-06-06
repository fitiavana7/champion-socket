import ReactApexChart from 'react-apexcharts';
import React, { useEffect, useState } from 'react';
// import AreaChart from './AreaChart';
import BarChart from './BarChart';
import LineChart from './LineChart';

const Dashboard = () => {
    let [series , setSeries] = useState([])
    let [options , setOptions] = useState({
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: false,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          }
        },
      },
      xaxis: {
        type: 'datetime',
        categories: [],
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    })

    useEffect(()=>{
        // axios.get("https://example.com/api")
        // .then((res)=>{})
        // .catch((err)=>{})
        const donnee = [{
          name: 'CREATED',
          data: [44, 55, 41, 67, 22, 43]
        }, {
          name: 'REVIEW',
          data: [13, 23, 20, 8, 13, 27]
        }, {
          name: 'CLOSED',
          data: [11, 17, 15, 15, 21, 14]
        },]
      setSeries(donnee)
      const categories = ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
      '01/05/2011 GMT', '01/06/2011 GMT']
      setOptions(prevOptions => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories: categories
        }
    }));

    },[])

    return <>
        <ReactApexChart options={options} series={series} type="bar" height={350} />    
     </>
};

export default Dashboard;