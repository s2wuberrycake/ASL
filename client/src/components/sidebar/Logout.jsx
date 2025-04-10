import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		const token = localStorage.getItem('token');
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
				);
			}
		} catch (error) {
			console.log('Server logout skipped or failed.');
		}

		localStorage.removeItem('token');
		navigate('/');
	};

	return (
		<div className="menu rounded-box w-56 p-4">
			<ul>
				<li
					onClick={handleLogout}
					className="cursor-pointer bg-base-200 hover:bg-error hover:text-white transition-all duration-200 rounded-md"
				>
					<div className="w-full px-4 py-2">Log Out</div>
				</li>
			</ul>
		</div>
	);
};

export default Logout;