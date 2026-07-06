import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, Package, ClipboardList, Tags, LogOut, Leaf, ExternalLink } from 'lucide-react'
import { useAdminAuth } from '../../context/AdminAuthContext.jsx'

export default function AdminLayout() {
  const { isAuthed, logout } = useAdminAuth()
  if (!isAuthed) return <Navigate to="/admin/login" replace />

  const links = [
    { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
    { to: '/admin/products', label: 'Products', icon: Package },
    { to: '/admin/orders', label: 'Orders', icon: ClipboardList },
    { to: '/admin/categories', label: 'Categories', icon: Tags },
  ]

  return (
    <div className="min-h-screen flex bg-cream">
      <aside className="w-64 bg-forest-dark text-white flex flex-col shrink-0">
        <div className="flex items-center gap-2 px-5 py-5 border-b border-white/10">
          <span className="grid place-items-center w-9 h-9 rounded-xl2 bg-amber text-white"><Leaf size={18} /></span>
          <div>
            <p className="font-display font-700 leading-none">Daily Mart</p>
            <p className="text-[11px] text-white/50">Admin Panel</p>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {links.map((l) => {
            const Icon = l.icon
            return (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-amber text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Icon size={18} /> {l.label}
              </NavLink>
            )
          })}
        </nav>
        <div className="px-3 py-4 border-t border-white/10 space-y-1">
          <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-colors">
            <ExternalLink size={18} /> View Store
          </a>
          <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:bg-red-500/80 hover:text-white transition-colors">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6 sm:p-8 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  )
}
