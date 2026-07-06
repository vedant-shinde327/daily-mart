import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingCart, Menu, X, Leaf, Languages } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useLang } from '../context/LangContext.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { count } = useCart()
  const { t, lang, toggleLang } = useLang()
  const navigate = useNavigate()

  const links = [
    { to: '/', label: t('home') },
    { to: '/products', label: t('products') },
    { to: '/contact', label: t('contact') },
  ]

  const submitSearch = (e) => {
    e.preventDefault()
    navigate(`/products?q=${encodeURIComponent(query)}`)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-forest/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="grid place-items-center w-10 h-10 rounded-xl2 bg-forest text-white">
            <Leaf size={22} />
          </span>
          <span className="font-display font-800 text-xl text-forest leading-none">
            Daily<span className="text-amber">Mart</span>
          </span>
        </Link>

        <form onSubmit={submitSearch} className="hidden md:flex flex-1 max-w-md items-center bg-cream border border-forest/15 rounded-full px-4 py-2 gap-2">
          <Search size={18} className="text-forest/60" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search')}
            className="bg-transparent outline-none text-sm w-full placeholder:text-ink/40"
          />
        </form>

        <nav className="hidden lg:flex items-center gap-6 ml-auto">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-ink/80 hover:text-forest transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleLang}
          className="hidden sm:flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-forest/20 text-forest hover:bg-forest hover:text-white transition-colors"
        >
          <Languages size={14} /> {lang === 'en' ? 'मराठी' : 'English'}
        </button>

        <Link to="/cart" className="relative grid place-items-center w-10 h-10 rounded-full bg-forest/10 text-forest hover:bg-forest hover:text-white transition-colors">
          <ShoppingCart size={20} />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber text-white text-[10px] font-bold w-5 h-5 rounded-full grid place-items-center">
              {count}
            </span>
          )}
        </Link>

        <button className="lg:hidden grid place-items-center w-10 h-10" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-3 bg-white border-t border-forest/10">
          <form onSubmit={submitSearch} className="flex items-center bg-cream border border-forest/15 rounded-full px-4 py-2 gap-2 mt-3">
            <Search size={18} className="text-forest/60" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t('search')} className="bg-transparent outline-none text-sm w-full" />
          </form>
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm font-medium py-1">
              {l.label}
            </Link>
          ))}
          <button onClick={toggleLang} className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-forest/20 text-forest w-fit">
            <Languages size={14} /> {lang === 'en' ? 'मराठी' : 'English'}
          </button>
        </div>
      )}
    </header>
  )
}
