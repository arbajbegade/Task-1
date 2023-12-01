import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from '@mui/material';

const BasicTable = () => {
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const rows = [
    { name: 'Cosmetics', clicks: 712, cost: 4272, conversions: 8, revenue: 16568 },
    { name: 'Serums', clicks: 3961, cost: 27331, conversions: 115, revenue: 362526 },
    { name: 'Facewash', clicks: 9462, cost: 76831, conversions: 123, revenue: 266800 },
    { name: 'Shampoos', clicks: 439, cost: 2151, conversions: 5, revenue: 11029 },
    { name: 'Conditioners', clicks: 1680, cost: 3864, conversions: 49, revenue: 175245 },
    { name: 'Facewash 2', clicks: 2000, cost: 29370, conversions: 189, revenue: 623106 },
  ];

  const handleSort = (property) => {
    const newSortOrder = sortBy === property && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortBy(property);
    setSortOrder(newSortOrder);
  };

  const sortedRows = rows.sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortOrder === 'asc') {
      return aValue < bValue ? -1 : 1;
    } else {
      return aValue > bValue ? -1 : 1;
    }
  });

  const totalRow = {
    name: 'Total',
    clicks: rows.reduce((sum, row) => sum + row.clicks, 0),
    cost: rows.reduce((sum, row) => sum + row.cost, 0),
    conversions: rows.reduce((sum, row) => sum + row.conversions, 0),
    revenue: rows.reduce((sum, row) => sum + row.revenue, 0),
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sortBy === 'name'}
                direction={sortBy === 'name' ? sortOrder : 'asc'}
                onClick={() => handleSort('name')}
              >
                Campaigns
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={sortBy === 'clicks'}
                direction={sortBy === 'clicks' ? sortOrder : 'asc'}
                onClick={() => handleSort('clicks')}
              >
                Clicks
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={sortBy === 'cost'}
                direction={sortBy === 'cost' ? sortOrder : 'asc'}
                onClick={() => handleSort('cost')}
              >
                Cost
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={sortBy === 'conversions'}
                direction={sortBy === 'conversions' ? sortOrder : 'asc'}
                onClick={() => handleSort('conversions')}
              >
                Conversions
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={sortBy === 'revenue'}
                direction={sortBy === 'revenue' ? sortOrder : 'asc'}
                onClick={() => handleSort('revenue')}
              >
                Revenue
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row, index) => (
            <TableRow key={row.name} className={index % 2 === 1 ? 'bg-gray-100' : ''}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.clicks}</TableCell>
              <TableCell align="right">USD {row.cost}</TableCell>
              <TableCell align="right">{row.conversions}</TableCell>
              <TableCell align="right">USD {row.revenue}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>{totalRow.name}</TableCell>
            <TableCell align="right">{totalRow.clicks}</TableCell>
            <TableCell align="right">USD {totalRow.cost}</TableCell>
            <TableCell align="right">{totalRow.conversions}</TableCell>
            <TableCell align="right">USD {totalRow.revenue}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable
