import React, { useEffect } from 'react'
import { useNavigate , Outlet} from 'react-router-dom'
import axios from 'axios'
import Sidebar from '../components/sidebar/sidebar'
import Footer from '../components/footer/Footer'
import Menu from '../components/menu/Menu'

const Home = () => {
	const navigate = useNavigate()

	const fetchUser = async () => {
		try {
			const token = localStorage.getItem('token')
			const response = await axios.get('http://localhost:3000/auth/home', {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			})			
			if (response.status !== 201) {
				navigate('/login')
			}
		} catch (err) {
			navigate('/login')
			console.error(err)
		}
	}

	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<main className='grid grid-cols-[220px_1fr] gap-4 p-4'>
			<Sidebar />
        <div>
          <div>
            <Menu />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      <Footer />
		</main>
	)
}

export default Home
