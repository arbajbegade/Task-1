import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = ({ data }) => {
  const chartData = {
    series: data || [348,692,105], // Default to [0] if data is not available
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
      labels: ['Male', 'Female', 'Unknown'], // You can modify labels based on your data
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
