import bgImage from '../assets/login-bg.png'
import axios from 'axios'
import {useState, React} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:3000/auth/Login', values)
            if(response.status === 200) {
                navigate('/dashboard')
            }
        } catch(err) {
            console.log(err)
        }
    }

  return (
    <div className="min-h-screen grid place-content-center gap-4" style={{ backgroundImage: `url(${bgImage})` }}>
                <fieldset className="fieldset h-100 w-120 bg-base-200 border border-base-300 p-4 rounded-box">
            <div className="grid grid-cols-2 gap-4">
                <div className="..."></div>
                <div className="...">
                    <legend className="fieldset-legend">Login</legend>
                <form onSubmit={handleSubmit}>
                    <label className="fieldset-label">Username</label>
                    <input type="text" className="input" placeholder="username"
                    name="username" onChange={handleChanges}/>
                    
                    <label className="fieldset-label">Password</label>
                    <input type="password" className="input" placeholder="Password"
                    name="password" onChange={handleChanges}/>
                    
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                </div>
            </div>
        </fieldset>
    </div>
    
  )
}

export default Login
