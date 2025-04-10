import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
	return (
		<div className='card card-border border-base-300 card-sm'>
			<ul className='menu w-full'>
				<li className="menu-title">Dashboard</li>
				<li className='pb-4'>
					<Link to='/'>
					<i className="fi fi-rr-dashboard-monitor text-base opacity-70"></i>
					Home
					</Link>
				</li>

				<li class="menu-title">Membership</li>
				<li>
					<Link to='/members'>
					<i className="fi fi-rr-member-search text-base opacity-70"></i>
					Members
					</Link>
				</li>
				<li>
					<Link to='/updates'>
					<i className="fi fi-rr-catalog-magazine text-base opacity-70"></i>
					Updates
					</Link>
				</li>
				<li>
					<Link to='/visits'>
					<i className="fi fi-rr-vision-target text-base opacity-70"></i>
					Visits
					</Link>
				</li>
				<li>
					<Link to='/archive'>
					<i className="fi fi-rr-archive text-base opacity-70"></i>
					Archive
					</Link>
				</li>
			</ul>
			
		</div>
	)
}

export default Menu
