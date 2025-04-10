import React, { useState, useReducer } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

const defaultData = [
  {
	firstName: 'tanner',
	lastName: 'linsley',
	age: 24,
	visits: 100,
	status: 'In Relationship',
	progress: 50,
  },
  {
	firstName: 'tandy',
	lastName: 'miller',
	age: 40,
	visits: 40,
	status: 'Single',
	progress: 80,
  },
  {
	firstName: 'joe',
	lastName: 'dirte',
	age: 45,
	visits: 20,
	status: 'Complicated',
	progress: 10,
  },
]

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('firstName', {
	cell: info => info.getValue(),
	footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.lastName, {
	id: 'lastName',
	cell: info => <i>{info.getValue()}</i>,
	header: () => <span>Last Name</span>,
	footer: info => info.column.id,
  }),
  columnHelper.accessor('age', {
	header: () => 'Age',
	cell: info => info.renderValue(),
	footer: info => info.column.id,
  }),
  columnHelper.accessor('visits', {
	header: () => <span>Visits</span>,
	footer: info => info.column.id,
  }),
  columnHelper.accessor('status', {
	header: 'Status',
	footer: info => info.column.id,
  }),
  columnHelper.accessor('progress', {
	header: 'Profile Progress',
	footer: info => info.column.id,
  }),
]

const Members = () => {
  const [data] = useState(() => [...defaultData])
  const rerender = useReducer(() => ({}), {})[1]

  const table = useReactTable({
	data,
	columns,
	getCoreRowModel: getCoreRowModel(),
  })

  return (
	<div className="p-4">
	  <h2 className="text-xl font-bold mb-4">Members Table</h2>
	  <table className="table w-full border">
		<thead>
		  {table.getHeaderGroups().map(headerGroup => (
			<tr key={headerGroup.id}>
			  {headerGroup.headers.map(header => (
				<th key={header.id} className="p-2 border">
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
				<td key={cell.id} className="p-2 border">
				  {flexRender(cell.column.columnDef.cell, cell.getContext())}
				</td>
			  ))}
			</tr>
		  ))}
		</tbody>
		<tfoot>
		  {table.getFooterGroups().map(footerGroup => (
			<tr key={footerGroup.id}>
			  {footerGroup.headers.map(header => (
				<th key={header.id} className="p-2 border">
				  {header.isPlaceholder
					? null
					: flexRender(
						header.column.columnDef.footer,
						header.getContext()
					  )}
				</th>
			  ))}
			</tr>
		  ))}
		</tfoot>
	  </table>

	  <button onClick={() => rerender()} className="mt-4 border px-4 py-2 rounded">
		Rerender
	  </button>
	</div>
  )
}

export default Members
