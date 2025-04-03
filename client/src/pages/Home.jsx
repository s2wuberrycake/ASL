import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'
import Sidebar from '../components/sidebar/sidebar'

const Home = () => {
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
      }
    }

    fetchUser()
  }, [navigate])

  return (
    <main className='grid grid-cols-[220px_1fr] gap-4 p-4'>
      <Sidebar />
      <div className='bg-gray-100 rounded-lg pb-4 shadow h-[200vh]'>
        <Outlet />
      </div>
    </main>
  )
}

export default Home
