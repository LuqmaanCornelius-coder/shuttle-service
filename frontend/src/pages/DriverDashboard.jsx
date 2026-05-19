import React from 'react'

export default function DriverDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Driver Dashboard</h1>
      <div className="space-y-2">
        <div className="p-4 bg-white dark:bg-slate-800 rounded shadow">Upcoming trips: --</div>
        <div className="p-4 bg-white dark:bg-slate-800 rounded shadow">Assigned vehicle: --</div>
      </div>
    </div>
  )
}
