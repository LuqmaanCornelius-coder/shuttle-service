import React from 'react'

export default function Login() {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-slate-800 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form className="space-y-4">
        <input className="w-full p-2 border rounded" placeholder="Email" />
        <input type="password" className="w-full p-2 border rounded" placeholder="Password" />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Sign in</button>
      </form>
    </div>
  )
}
