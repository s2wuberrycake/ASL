import React from 'react'
import CurrentAccount from './CurrentAccount'
import Settings from './Settings'
import Menu from './Menu'

const Sidebar = () => {
  return (
    <div className='rounded-lg w-flex'>
      {/* Sidebar container with flex layout */}
      <div className='overflow-hidden sticky top-4 h-[calc(100vh-32px-48px)] flex flex-col'>
        {/* Scrollable when hovered */}
        <div className='sidebar-scrollable h-full overflow-y-auto hover:overflow-y-scroll flex flex-col'>
          <CurrentAccount /> {/* Ensure this is not being constrained in height */}
          <div className='mt-4'> {/* Add margin-top here for Menu */}
            <Menu />
          </div>
          <div className='mt-4'> {/* Add margin-top here for Logout */}
            <Settings />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
