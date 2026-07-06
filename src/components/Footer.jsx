import { Link } from 'react-router-dom'
import { Leaf, MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/90 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="grid place-items-center w-9 h-9 rounded-xl2 bg-amber text-white"><Leaf size={18} /></span>
            <span className="font-display font-700 text-lg text-white">Daily Mart</span>
          </div>
          <p className="text-sm text-white/70">Your trusted neighbourhood grocery store — fresh produce and daily essentials, delivered with care.</p>
        </div>
        <div>
          <h4 className="font-display font-600 mb-3 text-amber">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-600 mb-3 text-amber">Store Info</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Near Union Bank, Basmat</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 86687 81633</li>
            <li className="flex items-center gap-2"><Clock size={16} /> 7:00 AM – 10:00 PM, All Days</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-600 mb-3 text-amber">Owner</h4>
          <p className="text-sm text-white/75">Suhas Karle</p>
          <div className="flex gap-3 mt-4">
            <span className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-amber transition-colors cursor-pointer"><Facebook size={16} /></span>
            <span className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-amber transition-colors cursor-pointer"><Instagram size={16} /></span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Daily Mart, Basmat. All rights reserved. Demo site. ·{' '}
        <Link to="/admin/login" className="text-white/30 hover:text-white/60 transition-colors">Admin</Link>
      </div>
    </footer>
  )
}
