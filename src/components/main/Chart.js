import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Chart = () => {
  const chartData = {
    series: [40, 35, 25],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
        align: 'left',
      },
      labels: ['Male &nbsp; &nbsp; ', 'Female', 'Others '],
    },
  };

  return (
      <div className="chart-wrap mx-auto"> 
        <div id="chart">
          <ReactApexChart options={chartData.options} series={chartData.series} type="donut" width={380} />
        </div>
      </div>
  );
};

export default Chart;
