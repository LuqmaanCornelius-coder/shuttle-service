import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Drivers() {
  const [drivers, setDrivers] = useState([])

  useEffect(() => {
    axios.get('/api/drivers').then((r) => setDrivers(r.data)).catch(()=>{});
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Drivers</h1>
      <div className="space-y-3">
        {drivers.map(d => (
          <div key={d.id} className="p-4 bg-white dark:bg-slate-800 rounded shadow">
            <div className="font-semibold">{d.user_name || 'Driver'} — {d.license_number}</div>
            <div className="text-sm text-slate-500">PDP: {d.pdp_expiry} · Rating: {d.rating}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
