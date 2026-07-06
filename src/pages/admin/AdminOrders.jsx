import { useState } from 'react'
import { ChevronDown, ChevronUp, Phone } from 'lucide-react'
import { useStore } from '../../context/StoreContext.jsx'

const statuses = ['Pending', 'Confirmed', 'Out for Delivery', 'Delivered', 'Cancelled']

const statusColor = {
  Pending: 'bg-amber/10 text-amber-dark',
  Confirmed: 'bg-forest/10 text-forest',
  'Out for Delivery': 'bg-blue-100 text-blue-600',
  Delivered: 'bg-forest text-white',
  Cancelled: 'bg-red-100 text-red-500',
}

export default function AdminOrders() {
  const { orders, updateOrderStatus } = useStore()
  const [expanded, setExpanded] = useState(null)

  return (
    <div>
      <h1 className="font-display font-700 text-2xl mb-1">Orders</h1>
      <p className="text-ink/60 text-sm mb-6">{orders.length} orders placed by customers via checkout</p>

      {orders.length === 0 ? (
        <div className="bg-white rounded-xl2 shadow-card border border-forest/5 p-10 text-center text-ink/50 text-sm">
          No orders yet. Orders placed by customers on the storefront will show up here automatically.
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map((o) => (
            <div key={o.id} className="bg-white rounded-xl2 shadow-card border border-forest/5 overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === o.id ? null : o.id)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-sm">{o.id}</span>
                  <span className="text-sm text-ink/60">{o.customer?.name}</span>
                  <span className="text-xs text-ink/40">{new Date(o.createdAt).toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor[o.status]}`}>{o.status}</span>
                  <span className="font-display font-700 text-forest">₹{o.total}</span>
                  {expanded === o.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>

              {expanded === o.id && (
                <div className="px-5 pb-5 border-t border-forest/10 pt-4 grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-ink/50 mb-2">ITEMS</p>
                    <ul className="space-y-1 text-sm">
                      {o.items.map((i) => (
                        <li key={i.key} className="flex justify-between">
                          <span>{i.name} ({i.weight}) x{i.qty}</span>
                          <span>₹{i.price * i.qty}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-sm mt-2 pt-2 border-t border-forest/10 space-y-1">
                      <div className="flex justify-between text-ink/60"><span>Subtotal</span><span>₹{o.subtotal}</span></div>
                      <div className="flex justify-between text-ink/60"><span>Delivery</span><span>{o.delivery === 0 ? 'FREE' : `₹${o.delivery}`}</span></div>
                      <div className="flex justify-between font-semibold"><span>Total</span><span>₹{o.total}</span></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink/50 mb-2">CUSTOMER</p>
                    <p className="text-sm">{o.customer?.name}</p>
                    <p className="text-sm text-ink/60 flex items-center gap-1"><Phone size={13} /> {o.customer?.phone}</p>
                    <p className="text-sm text-ink/60 mt-1">{o.customer?.address}, {o.customer?.landmark}</p>
                    <p className="text-sm text-ink/60">Pincode: {o.customer?.pincode}</p>
                    <p className="text-sm text-ink/60 mt-1">Payment: {o.payment === 'COD' ? 'Cash on Delivery' : 'Online (Demo)'}</p>

                    <p className="text-xs font-semibold text-ink/50 mt-4 mb-2">UPDATE STATUS</p>
                    <select
                      value={o.status}
                      onChange={(e) => updateOrderStatus(o.id, e.target.value)}
                      className="border border-forest/20 rounded-lg px-3 py-2 text-sm outline-none"
                    >
                      {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
