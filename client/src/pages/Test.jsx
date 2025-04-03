// NOTE: THIS PAGE IS FOR TESTING PURPOSES ONLY
// DO NOT LINK TO THE ACTUAL FUNCTIONS

import React from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Dashboard from '../components/dashboard/dashboard'

const Test = () => {
	return (
		<main className="grid grid-cols-[220px_1fr] gap-4 p-4">
			<Sidebar />
			<Dashboard />
		</main>
	)
}

export default Test
