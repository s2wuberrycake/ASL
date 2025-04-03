import React from 'react'
import CurrentAccount from './CurrentAccount'

const Sidebar = () => {
	return (
		<div className="rounded-lg pb-4 w-[220px]">
			<div className="overflow-y-scroll overflow-x-hidden sticky top-4 h-[calc(100vh-32px-48px)]">
				<CurrentAccount />
				{/* TODO:
					- Account (Sign out)
					- Dashboard (Analytics, Reports)
					- Members (CRUD)
					- Updates (Logs)
					- Visit Log (RFID Scan, Member Display, Logs)
					- Archive (Backup)

					Can use external components or DaisyUI.
				*/}
				This is the sidebar
			</div>

			{/* TODO:
				- Settings (Edit accounts, permissions, etc.)
			*/}
		</div>
	)
}

export default Sidebar
