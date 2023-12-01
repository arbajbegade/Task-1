import React, { useState,useEffect } from 'react';
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
  const [selectedOption, setSelectedOption] = useState('cost'); 
  const [chartData, setChartData] = useState('');
  
    const rows = [
      { name: 'Male', clicks: 348, cost: 12528, conversions: 42, revenue: 62118 },
      { name: 'Female', clicks: 692, cost: 24912, conversions: 35, revenue: 5175 },
      { name: 'Unknown', clicks: 105, cost: 3943, conversions: 3, revenue: 4489 },
    ];

  const handleChartToggle = (isDonut) => {
    setDonutChart(isDonut);
    updateChartData(selectedOption);
  };

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    updateChartData(selectedValue);
  };

  const updateChartData = (selectedValue) => {
    // Modify this logic based on your specific requirements
    const newData = rows.map((row) => row[selectedValue]);
    setChartData(newData);
  };
 

  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 mt-10">
  <div className="flex-1 border-b sm:border-r border-gray-300 p-4">
    <h1 className="text-xl font-bold mb-4">Ad Insights</h1>
    <hr className="mb-4 border-t border-gray-300" />
    <BasicTable />
  </div>

  <div className="flex-1 p-4 flex flex-col justify-between"> {/* Added 'flex-col' and 'justify-between' */}
    <div className="flex flex-col">
      <div className='flex items-center justify-around'>
        <h1 className="text-xl font-bold mb-4">Ad Insights</h1>
        <h1 className=""></h1>
        <select className='border px-2 -mt-3' onChange={handleDropdownChange}>
          <option value="clicks">Clicks</option>
          <option value="cost">Cost</option>
          <option value="conversions">Conversions</option>
          <option value="revenue">Revenue</option>
        </select>
      </div>
      <hr className="mb-4 border-t border-gray-300" />

      {isDonutChart ? <Chart data={chartData} /> : <ChartTable rows={rows} />}
    </div>

    {/* Buttons placed at the bottom */}
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

  );
}

export default Container;
