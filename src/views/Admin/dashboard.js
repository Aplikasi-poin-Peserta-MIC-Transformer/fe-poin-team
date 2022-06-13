/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Table from '../../components/table'
import data from './dummy-data.json'

const dashboard = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'No',
        accessor: 'id',
        Cell: ({ row }) => row.index + 1, 
        width: 10,
      },
      {
        Header: 'Event',
        accessor: 'nama_event',
      },
      {
        Header: 'Action',
        accessor: 'action',
        width: 50,
        Cell: ({ row }) => (
          <div>
            <button className='btn btn-success btn-sm'>Edit</button>
            <button className='btn btn-primary btn-sm'>view</button>
            <button className='btn btn-danger btn-sm'>Delete</button>
          </div>
        ),
      },
    ],
    []
  )
  const [filter, setFilter] = React.useState('')
  return (
    <div>
      <div className='table-header' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>{data?.length} Event</span>
        <div className="input-group mb-2" style={{ width: "auto" }}>
          <input
            type='text'
            placeholder='Search'
            className='kelompok-form-control'
            onChange={(e) => setFilter(e.target.value)}
          />
          <div className="input-group-prepend">
            <div className="input-group-text">search</div>
          </div>
        </div>
        <button className='btn btn-primary btn-sm'>Add Event</button>
      </div>
      <Table columns={columns} data={data} fillterValue={filter} fillter_target="nama_event" />
    </div>
  )
}

export default dashboard