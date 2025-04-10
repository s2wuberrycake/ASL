// Login.jsx
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Toaster, toast } from 'sonner'
import bgImage from '../../assets/login-bg.png'

const Login = () => {
  const [values, setValues] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(true)  // New loading state
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const response = await axios.get('http://localhost:3000/auth/home', {
            headers: { Authorization: `Bearer ${token}` }
          })
          if (response.status === 201) {
            navigate('/')
          }
        } catch (err) {
          console.log('Token check failed:', err)
        }
      }
      setLoading(false)  // Set loading to false once check is complete
    }

    checkAuth()
  }, [navigate])

  // If still loading, render nothing
  if (loading) {
    return null  // Don't render anything while loading
  }

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/auth/login', values)
      if (response.status === 201) {
        localStorage.setItem('token', response.data.token)
        navigate('/')
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          toast.error('User does not exist')
        } else if (err.response.status === 401) {
          toast.error('Password is incorrect')
        }
      } else {
        console.error('Error:', err)
        toast.error('An unexpected error occurred')
      }
    }
  }

  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Toaster />
      <div className="absolute bg-accent opacity-96 inset-0 z-0"></div>
      <div className="sm:flex sm:flex-row justify-center mx-0 min-h-screen">
        <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
          <div className="self-start hidden lg:flex flex-col text-white">
            <h1 className="mb-3 font-bold text-5xl">Bodimetrix Fitness Gym</h1>
            <p className="pr-3">Create new accounts using the default super-admin account shipped with the app</p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-base-100 mx-auto rounded-2xl w-100 shadow-lg">
            <h3 className="mb-4 font-semibold text-2xl text-base-content">Sign In</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral tracking-wide">Username</label>
                <input
                  className="input input-bordered w-full"
                  type="text"
                  placeholder="admin"
                  name="username"
                  onChange={handleChanges}
                />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-neutral tracking-wide">Password</label>
                <input
                  className="input input-bordered w-full"
                  type="password"
                  placeholder="*****"
                  name="password"
                  onChange={handleChanges}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex w-full flex-col lg:flex-row">
                  <div className="divider lg:divider-vertical"></div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-full">{'>>>'}</button>
            </form>

            <div className="pt-5 text-center text-neutral text-xs">
              <span>Membership Management System</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
