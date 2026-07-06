import { createContext, useContext, useState } from 'react'

const AdminAuthContext = createContext(null)
const DEMO_PASSWORD = 'daily123'

export function AdminAuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(() => sessionStorage.getItem('dm_admin') === 'true')

  const login = (password) => {
    if (password === DEMO_PASSWORD) {
      sessionStorage.setItem('dm_admin', 'true')
      setIsAuthed(true)
      return true
    }
    return false
  }

  const logout = () => {
    sessionStorage.removeItem('dm_admin')
    setIsAuthed(false)
  }

  return (
    <AdminAuthContext.Provider value={{ isAuthed, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export const useAdminAuth = () => useContext(AdminAuthContext)
