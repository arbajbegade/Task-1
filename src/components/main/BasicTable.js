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
  createData('Cosmetics', 712, 'USD 4,272', 8, 'USD 16,568'),
  createData('Serums', 3961, 'USD 27,331', 115, 'USD 362,526'),
  createData('Facewash', 9462, 'USD 76,831', 123, 'USD 266,800'),
  createData('Shampoos', 439, 'USD 2,151', 5, 'USD 11,029'),
  createData('Conditioners', 1680, 'USD 3,864', 49, 'USD 175,245'),
  createData('Facewash 2', 2000, 'USD 29,370', 189, 'USD 623,106'),
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

export default function BasicTable() {
  const totalRow = calculateTotals(rows);

  return (
    <div className="max-w-full overflow-x-auto">
    <table className="min-w-full bg-white border ">
      <thead>
        <tr className="font-semibold text-xs sm:text-base">
          <th className="py-2 px-2 sm:px-4 border-b text-left">Campaigns</th>
          <th className="py-2 px-2 sm:px-4 border-b text-right">Clicks</th>
          <th className="py-2 px-2 sm:px-4 border-b text-right">Cost</th>
          <th className="py-2 px-2 sm:px-4 border-b text-right">Conversions</th>
          <th className="py-2 px-2 sm:px-4 border-b text-right">Revenue</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row,index) => (
          <tr
          key={row.name}
          className={`border-b text-[10px] sm:text-sm ${
            index % 2 === 1 ? 'bg-gray-100' : '' 
          }`}
        >
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
