import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Home from './pages/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Profile from './pages/profile/Profile'
import Members from './pages/members/Members'
import Updates from './pages/updates/Updates'
import Visits from './pages/visits/Visits'
import Archive from './pages/archive/Archive'
import Accounts from './pages/accounts/Accounts'
import Backup from './pages/backup/backup'

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
          <Route path="visits" element={<Visits />} />
          <Route path="archive" element={<Archive />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="backup" element={<Backup />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
