import React, {useEffect, useState} from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {CurrencyDetail} from "../services/types";
import Money from "./Money";
import {getTickers} from "../services/api";

const columnHelper = createColumnHelper<CurrencyDetail>()

const columns = [
  columnHelper.accessor('symbol', {
    cell: info => info.getValue(),
    header: () => <span>Symbol</span>,
  }),
  columnHelper.accessor('bid', {
    cell: info => <Money>{info.getValue()}</Money>,
    header: () => <span>Bid</span>,
  }),
  columnHelper.accessor('ask', {
    cell: info => <Money>{info.getValue()}</Money>,
    header: () => <span>Ask</span>
  }),
  columnHelper.accessor('last', {
    cell: info => <Money>{info.getValue()}</Money>,
    header: () => <span>Last</span>
  }),
  columnHelper.accessor('dailyHigh', {
    cell: info => <Money>{info.getValue()}</Money>,
    header: () => <span>Daily High</span>
  }),
  columnHelper.accessor('dailyChangePercent', {
    cell: info => <Money>{info.getValue()}</Money>,
    header: () => <span>Change, %</span>
  }),
  columnHelper.accessor('dailyLow', {
    cell: info => <Money>{info.getValue()}</Money>,
    header: () => <span>Daily Low</span>
  }),
  columnHelper.accessor('dailyVolume', {
    cell: info => <Money>{info.getValue()}</Money>,
    header: () => <span>Volume</span>
  }),
]


const CurrencyTable: React.FC = () => {
  const [data, setData] = useState<CurrencyDetail[] | null>(null);

  useEffect(() => {
    getTickers(['BTC', 'ETH', 'XRP']).then(setData);
  }, [])


  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if(!data) return <>Loading...</>
  return (
      <table>
        <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
  );
}

export default CurrencyTable;
