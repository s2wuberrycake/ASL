import React from 'react'
import CurrentAccount from './CurrentAccount'
import Logout from './Logout'
import Menu from './Menu'

const Sidebar = () => {
	return (
		<div className="rounded-lg w-flex">
			<div className="overflow-y-hidden overflow-x-hidden sticky top-4 h-[calc(100vh-32px-48px)]">
				<CurrentAccount />
                <Menu />
			</div>
                <Logout />
		</div>
	)
}

export default Sidebar
