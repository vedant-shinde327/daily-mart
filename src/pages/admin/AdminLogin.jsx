import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Lock, Leaf } from 'lucide-react'
import { useAdminAuth } from '../../context/AdminAuthContext.jsx'

export default function AdminLogin() {
  const { isAuthed, login } = useAdminAuth()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (isAuthed) return <Navigate to="/admin" replace />

  const submit = (e) => {
    e.preventDefault()
    if (!login(password)) setError('Incorrect password. Try again.')
  }

  return (
    <div className="min-h-screen bg-forest-dark flex items-center justify-center px-4">
      <div className="bg-white rounded-xl2 shadow-soft w-full max-w-sm p-8">
        <div className="flex flex-col items-center mb-6">
          <span className="grid place-items-center w-12 h-12 rounded-xl2 bg-forest text-white mb-3"><Leaf size={24} /></span>
          <h1 className="font-display font-700 text-xl">Daily Mart Admin</h1>
          <p className="text-xs text-ink/50 mt-1">Store management panel</p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Password</label>
            <div className="flex items-center border border-forest/20 rounded-lg px-3 py-2.5 gap-2">
              <Lock size={16} className="text-forest/50" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="outline-none text-sm w-full"
                autoFocus
              />
            </div>
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
          </div>
          <button type="submit" className="w-full bg-forest text-white font-semibold py-2.5 rounded-lg hover:bg-forest-dark transition-colors">
            Login
          </button>
        </form>
        <p className="text-[11px] text-ink/40 text-center mt-5">Demo password: daily123</p>
      </div>
    </div>
  )
}
