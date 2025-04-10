// Home.jsx
import React, { useEffect, useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'
import Sidebar from '../components/sidebar/sidebar'

const Home = () => {
  const [loading, setLoading] = useState(true)  // New loading state
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('http://localhost:3000/auth/home', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        if (response.status !== 201) {
          navigate('/login')
        }
      } catch (err) {
        console.error(err)
        navigate('/login')
      } finally {
        setLoading(false)  // Once the auth check is complete, set loading to false
      }
    }

    fetchUser()
  }, [navigate])

  // If still loading, render nothing
  if (loading) {
    return null  // Don't render anything while loading
  }

  return (
    <main className=''>
      <div className='grid grid-cols-[220px_1fr] gap-4 p-4'>
        <Sidebar />
        <div className='bg-base-100 border-base-300 md:rounded-ss-xl pb-4 h-flex'>
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default Home
