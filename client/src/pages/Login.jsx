import logoImage from '../assets/logo.png'
import bgImage from '../assets/login-bg.png'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState('') // State for error message
    const [showAlert, setShowAlert] = useState(false) // State to control alert visibility
    const [alertExit, setAlertExit] = useState(false) // State to control alert exit animation
    const navigate = useNavigate()

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
                    setErrorMessage('User does not exist')
                    setShowAlert(true)
                    triggerAlertExit()
                } else if (err.response.status === 401) {
                    setErrorMessage('Password is incorrect')
                    setShowAlert(true)
                    triggerAlertExit()
                }
            } else {
                console.error("Error:", err)
            }
        }
    }

    // Trigger fade-out effect after 3 seconds
    const triggerAlertExit = () => {
        setTimeout(() => {
            setAlertExit(true)
            setTimeout(() => {
                setShowAlert(false)
                setAlertExit(false) // Reset fade-out state
            }, 500) // Wait for fade-out animation to complete before hiding the alert
        }, 3000)
    }

    return (
        <div className="bg-no-repeat bg-cover bg-center relative min-h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute bg-gradient-to-b from-primary to-secondary opacity-90 inset-0 z-0"></div>
            <div className="sm:flex sm:flex-row justify-center mx-0 min-h-screen">
                <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
                    <div className="self-start hidden lg:flex flex-col text-white">
                        <h1 className="mb-3 font-bold text-5xl">Bodimetrix Fitness Gym</h1>
                        <p className="pr-3">
                            Create new accounts using the default super-admin account shipped with the app
                        </p>
                    </div>
                </div>
                <div className="flex justify-center self-center z-10">
                    <div className="p-12 bg-base-100 mx-auto rounded-2xl w-100 shadow-lg">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-base-content">Sign In</h3>
                        </div>

                        {/* Show error message if it exists */}
                            {showAlert && (
                                <div
                                    className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-5 alert alert-error shadow-lg w-96 z-50 transition-all transform ${
                                        alertExit ? 'animate-fade-out' : 'animate-pop-up'
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="stroke-error h-6 w-6 shrink-0"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="alert-text">{errorMessage}</span>
                                </div>
                            )}


                        <form onSubmit={handleSubmit}>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral tracking-wide">Username</label>
                                    <input
                                        className="input input-bordered w-full"
                                        type="text"
                                        placeholder=""
                                        name="username"
                                        onChange={handleChanges}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-neutral tracking-wide">Password</label>
                                    <input
                                        className="input input-bordered w-full"
                                        type="password"
                                        placeholder=""
                                        name="password"
                                        onChange={handleChanges}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex w-full flex-col lg:flex-row">
                                        <div className="divider lg:divider-vertical"></div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-full">
                                        Sign in
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="pt-5 text-center text-neutral text-xs">
                            <span>
                                Membership Management System
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
