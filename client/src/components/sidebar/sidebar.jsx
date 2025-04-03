import React from 'react'
import CurrentAccount from './CurrentAccount'

const Sidebar = () => {
	return (
		<div className="rounded-lg pb-4 w-[220px]">
			<div className="overflow-y-hidden overflow-x-hidden sticky top-4 h-[calc(100vh-32px-48px)]">
				<CurrentAccount />
                <ul className="menu rounded-box w-56">
                    <li>
                        <summary>Dashboard</summary>
                    </li>
                    <li>
                        <details open>
                            <summary>Membership</summary>
                            <ul>
                                <li><a>Members</a></li>
                                <li><a>Updates</a></li>
                                <li><a>Visits</a></li>
                                <li><a>Archive</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details open>
                            <summary>Settings</summary>
                            <ul>
                                <li><a>Accounts</a></li>
                                <li><a>Backups</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>

				{/* TODO: functional buttons linking to respective pages
                    - Profile
					- Dashboard
                        - Reports
					- Members
                        - Updates
                        - Visit Log
					- Archive
                    - Settings
                        - Accounts
                        - Backups
				*/}
			</div>
		</div>
	)
}

export default Sidebar
