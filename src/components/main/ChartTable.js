import React from 'react';

function createData(
  name,
  clicks,
  cost,
  conversions,
  revenue
) {
  return { name, clicks, cost, conversions, revenue };
}

const rows = [
  createData('Male', 348, 'USD 12,528', 42, 'USD 62,118'),
  createData('Female', 692, 'USD 24,912', 35, 'USD 5,175'),
  createData('Unkhown', 105, 'USD 3,943', 3, 'USD 4,489'),
];

function calculateTotals(data) {
  const totals = data.reduce(
    (acc, row) => {
      acc.clicks += row.clicks;
      acc.cost += parseFloat(row.cost.replace('USD ', '').replace(',', ''));
      acc.conversions += row.conversions;
      acc.revenue += parseFloat(row.revenue.replace('USD ', '').replace(',', ''));
      return acc;
    },
    { clicks: 0, cost: 0, conversions: 0, revenue: 0 }
  );

  return createData(
    'Total',
    totals.clicks,
    `USD ${totals.cost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`,
    totals.conversions,
    `USD ${totals.revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
  );
}

export default function ChartTable() {
  const totalRow = calculateTotals(rows);

  return (
    <div className="max-w-full overflow-x-auto">
    <table className="min-w-full bg-white border ">
      <thead>
        <tr className="font-semibold text-xs sm:text-base">
          <th className="py-2 px-2 sm:px-4 border-b text-left">Groups</th>
          <th className="py-2 px-2 sm:px-4 border-b text-right">Clicks</th>
          <th className="py-2 px-2 sm:px-4 border-b text-right">Cost</th>
          <th className="py-2 px-2 sm:px-4 border-b text-right">Conversions</th>
          <th className="py-2 px-2 sm:px-4 border-b text-right">Revenue</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name} className="border-b text-[10px] sm:text-sm">
            <td className="py-2 px-2 sm:px-4">{row.name}</td>
            <td className="py-2 px-2 sm:px-4 text-right">{row.clicks}</td>
            <td className="py-2 px-2 sm:px-4 text-right">{row.cost}</td>
            <td className="py-2 px-2 sm:px-4 text-right">{row.conversions}</td>
            <td className="py-2 px-2 sm:px-4 text-right">{row.revenue}</td>
          </tr>
        ))}
        <tr className="font-semibold text-[10px] sm:text-sm">
          <td className="py-2 px-2 sm:px-4">{totalRow.name}</td>
          <td className="py-2 px-2 sm:px-4 text-right">{totalRow.clicks}</td>
          <td className="py-2 px-2 sm:px-4 text-right">{totalRow.cost}</td>
          <td className="py-2 px-2 sm:px-4 text-right">{totalRow.conversions}</td>
          <td className="py-2 px-2 sm:px-4 text-right">{totalRow.revenue}</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}
