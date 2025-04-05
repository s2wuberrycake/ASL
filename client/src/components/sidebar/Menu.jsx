import React from 'react'

const Menu = () => {
    return (
        <ul className="menu rounded-box w-56">
            <li><a>Dashboard</a></li>
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

                <details open>
                    <summary>Settings</summary>
                    <ul>
                        <li><a>Accounts</a></li>
                        <li><a>Backups</a></li>
                    </ul>
                </details>
            </li>
        </ul>
    )
}

export default Menu
