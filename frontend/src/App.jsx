import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import DriverDashboard from './pages/DriverDashboard'
import Login from './pages/Login'
import Vehicles from './pages/Vehicles'
import Drivers from './pages/Drivers'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <nav className="p-4 bg-white dark:bg-slate-800 shadow">
        <div className="container mx-auto flex gap-4">
          <Link to="/admin" className="font-semibold">Admin</Link>
          <Link to="/driver" className="font-semibold">Driver</Link>
          <Link to="/vehicles" className="font-semibold">Vehicles</Link>
          <Link to="/drivers" className="font-semibold">Drivers</Link>
          <Link to="/login" className="ml-auto">Login</Link>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/driver" element={<DriverDashboard />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/drivers" element={<Drivers />} />
        </Routes>
      </main>
    </div>
  )
}
