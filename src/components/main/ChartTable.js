import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel } from '@mui/material';

function ChartTable({ rows }) {
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedRows = rows.slice().sort((a, b) => {
    const aValue = orderBy ? a[orderBy] : null;
    const bValue = orderBy ? b[orderBy] : null;

    if (order === 'asc') {
      return aValue < bValue ? -1 : 1;
    } else {
      return aValue > bValue ? -1 : 1;
    }
  });

  const calculateTotal = () => {
    const total = {
      name: 'Total',
      clicks: 0,
      cost: 0,
      conversions: 0,
      revenue: 0,
    };

    rows.forEach((row) => {
      total.clicks += row.clicks;
      total.cost += row.cost;
      total.conversions += row.conversions;
      total.revenue += row.revenue;
    });

    return total;
  };

  const totalRow = calculateTotal();

  return (
    <div className="max-w-full">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={() => handleSort('name')}
              >
                Groups
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'clicks'}
                direction={orderBy === 'clicks' ? order : 'asc'}
                onClick={() => handleSort('clicks')}
              >
                Clicks
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'cost'}
                direction={orderBy === 'cost' ? order : 'asc'}
                onClick={() => handleSort('cost')}
              >
                Cost
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'conversions'}
                direction={orderBy === 'conversions' ? order : 'asc'}
                onClick={() => handleSort('conversions')}
              >
                Conversions
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'revenue'}
                direction={orderBy === 'revenue' ? order : 'asc'}
                onClick={() => handleSort('revenue')}
              >
                Revenue
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.clicks}</TableCell>
              <TableCell align="left">USD {row.cost}</TableCell>
              <TableCell align="left">{row.conversions}</TableCell>
              <TableCell align="left">USD {row.revenue}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align="left">{totalRow.name}</TableCell>
            <TableCell align="left">{totalRow.clicks}</TableCell>
            <TableCell align="left">USD {totalRow.cost}</TableCell>
            <TableCell align="left">{totalRow.conversions}</TableCell>
            <TableCell align="left">USD {totalRow.revenue}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default ChartTable;
