import React from 'react'
import { useTable, useFilters } from 'react-table'

function Table({ columns, data, fillterValue, fillter_target }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter
  } = useTable({
    columns,
    data,
  },
    useFilters
  )
  
  React.useEffect(() => {
    setFilter(fillter_target, fillterValue);
  }, [fillterValue, fillter_target, setFilter])

  return (
    <div className="table-responsive">
      <table className='table table-striped table-hover align-middle table-borderd table-bordered' {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
      </table>
      </div>
  )
}

export default Table