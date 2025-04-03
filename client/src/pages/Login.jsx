import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logoImage from '../assets/logo.png'
import bgImage from '../assets/login-bg.png'

const Login = () => {
	const [values, setValues] = useState({ username: '', password: '' })
	const [errorMessage, setErrorMessage] = useState('')
	const [showAlert, setShowAlert] = useState(false)
	const [alertExit, setAlertExit] = useState(false)
	const navigate = useNavigate()

	const handleChanges = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', values);
            if (response.status === 201) {
                localStorage.setItem('token', response.data.token);
                navigate('/');
            }
        } catch (err) {
            if (err.response) {
                if (err.response.status === 404) {
                    showError('User does not exist');
                } else if (err.response.status === 401) {
                    showError('Password is incorrect');
                }
            } else {
                console.error('Error:', err);
            }
        }
    };
    
    // Function to handle alert state updates with restart logic
    const showError = (message) => {
        setShowAlert(false); // Hide the existing alert instantly
        setTimeout(() => {
            setErrorMessage(message);
            setShowAlert(true);
            triggerAlertExit();
        }, 50); // Small delay to restart animation
    };
    
	// Fade out alert after 3 seconds
	const triggerAlertExit = () => {
		setTimeout(() => {
			setAlertExit(true)
			setTimeout(() => {
				setShowAlert(false)
				setAlertExit(false)
			}, 500)
		}, 3000)
	}

	return (
		<div
			className="bg-no-repeat bg-cover bg-center relative min-h-screen"
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<div className="absolute bg-gradient-to-b from-primary to-secondary opacity-90 inset-0 z-0"></div>
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

                        {showAlert && (
                            <div
                                className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-5 alert alert-error
                                shadow-lg w-96 z-50 transition-all ${alertExit ? 'animate-slide-up' : 'animate-slide-down'}`}
                            >
                                <span className="alert-text">{errorMessage}</span>
                            </div>
                        )}

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
