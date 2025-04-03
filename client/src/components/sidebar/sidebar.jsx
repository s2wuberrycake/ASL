import React from 'react'
import CurrentAccount from './CurrentAccount'

const sidebar = () => {
  return (
    <div className="rounded-lg pb-4bg-gray-100 w-[220px]">
        <div className="overflow-y-scroll overflow-x-hidden sticky top-4 h-[calc(100vh-32px-48px)]">
            <CurrentAccount />
            {/* TODO
            - account(signout)
            - dashboard(analytics)
                -reports
            - members(CRUD)
            - updates(logs)
            - visit log(RFID scan, member display, logs)
            - archive(backup)
            
            Can use external components or from daisyui*/}
            This is sidebar
        </div>

        {/* TODO
        - settings(edit accounts, edit ) */}
    </div>
  )
}

export default sidebar
