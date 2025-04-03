import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Home from './pages/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Profile from './pages/profile/Profile'
import Members from './pages/members/Members'
import Updates from './pages/updates/Updates'
import Test from './pages/Test'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home is the parent route */}
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} /> {/* Default child route */}
          <Route path="profile" element={<Profile />} />
          <Route path="members" element={<Members />} />
          <Route path="updates" element={<Updates />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} /> {/* Testing page */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
