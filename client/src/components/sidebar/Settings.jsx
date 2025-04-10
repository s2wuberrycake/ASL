import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Settings = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    const token = localStorage.getItem('token')
    try {
      if (token) {
        await axios.post(
          'http://localhost:3000/auth/logout',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      }
    } catch (error) {
      console.log('Server logout skipped or failed.')
    }

    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className='card card-border border-base-300 card-sm'>
      <ul className='menu w-full'>
        <li className="menu-title">Settings</li>

        <li>
          <a href="/accounts">
            <i className="fi fi-rr-user-lock text-base opacity-70"></i>
            Accounts
          </a>
        </li>

        <li>
          <a href="/backup">
            <i className="fi fi-rr-back-up text-base opacity-70"></i>
            Backup
          </a>
        </li>

        <li
          onClick={handleLogout}
          className='rounded-full hover:bg-red-500 hover:text-white transition-colors duration-200 cursor-pointer'
        >
          <div className="px-4 py-2">Logout</div>
        </li>
      </ul>
    </div>
  )
}

export default Settings
