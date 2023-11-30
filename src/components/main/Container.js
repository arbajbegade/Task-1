import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import BarChartIcon from '@mui/icons-material/BarChart';
import Chart from './Chart';
import BasicTable from './BasicTable';
import ChartTable from './ChartTable';

function SwitchButton({ onChange, checked, label }) {
  return (
    <div className="flex items-center transition duration-300 ease-in-out">
      <span className="mr-2">{label}</span>
      <Switch
        checked={checked}
        onChange={onChange}
        inputProps={{ 'aria-label': 'toggle chart' }}
        sx={{
          '.Mui-checked': {
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: '#4299E1',
            },
          },
        }}
      />
    </div>
  );
}

function Container() {
  const [isDonutChart, setDonutChart] = useState(true);

  const handleChartToggle = (isDonut) => {
    setDonutChart(isDonut);
  };

  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 mt-10">
      <div className="flex-1 border-b sm:border-r border-gray-300 p-4">
        <h1 className="text-xl font-bold mb-4">Ad Insights</h1>
        <hr className="mb-4 border-t border-gray-300" />
        <BasicTable />
      </div>

      <div className="flex-1 p-4">
        <div className="flex flex-col">
          <div className='flex items-center justify-around'>
            <h1 className="text-xl font-bold mb-4">Ad Insights</h1>
            <h1 className=""></h1>
            <select className='border px-2 -mt-3'>
              <option value="">Clicks</option>
              <option value="">Cost </option>
              <option value="">Conversions</option>
              <option value="">Revenue</option>
            </select>
          </div>
          <hr className="mb-4 border-t border-gray-300" />
          {isDonutChart ? <Chart /> : <ChartTable />}
          <div className="flex justify-center items-center mt-4 text-white bg-gray-200 w-12 rounded-xl">
            <DonutLargeIcon
              onClick={() => handleChartToggle(true)}
              className={isDonutChart ? 'bg-blue-500 rounded-full p-1' : 'bg-transparent rounded-full p-1'}
            />
            <BarChartIcon
              onClick={() => handleChartToggle(false)}
              className={!isDonutChart ? 'bg-blue-500 rounded-full p-1' : 'bg-transparent rounded-full p-1'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
