import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    axios.get('/api/vehicles').then((r) => setVehicles(r.data)).catch(()=>{});
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Vehicles</h1>
      <div className="space-y-3">
        {vehicles.map(v => (
          <div key={v.id} className="p-4 bg-white dark:bg-slate-800 rounded shadow">
            <div className="font-semibold">{v.reg_number} — {v.make} {v.model}</div>
            <div className="text-sm text-slate-500">Status: {v.status} · Mileage: {v.mileage}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
