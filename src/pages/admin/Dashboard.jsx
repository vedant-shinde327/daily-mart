import { Package, ClipboardList, IndianRupee, AlertTriangle } from 'lucide-react'
import { useStore } from '../../context/StoreContext.jsx'

export default function Dashboard() {
  const { products, orders } = useStore()
  const revenue = orders.reduce((s, o) => s + o.total, 0)
  const lowStock = products.filter((p) => p.stock !== 'In Stock').length

  const cards = [
    { label: 'Total Products', value: products.length, icon: Package, color: 'bg-forest/10 text-forest' },
    { label: 'Total Orders', value: orders.length, icon: ClipboardList, color: 'bg-amber/10 text-amber' },
    { label: 'Revenue (Demo)', value: `₹${revenue}`, icon: IndianRupee, color: 'bg-forest/10 text-forest' },
    { label: 'Low Stock Items', value: lowStock, icon: AlertTriangle, color: 'bg-red-100 text-red-500' },
  ]

  return (
    <div>
      <h1 className="font-display font-700 text-2xl mb-1">Dashboard</h1>
      <p className="text-ink/60 text-sm mb-6">Overview of your store, updated in real time.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((c) => {
          const Icon = c.icon
          return (
            <div key={c.label} className="bg-white rounded-xl2 shadow-card border border-forest/5 p-5">
              <span className={`inline-grid place-items-center w-11 h-11 rounded-full mb-3 ${c.color}`}>
                <Icon size={20} />
              </span>
              <p className="font-display font-700 text-2xl">{c.value}</p>
              <p className="text-xs text-ink/50">{c.label}</p>
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-xl2 shadow-card border border-forest/5 p-6">
        <h2 className="font-display font-600 text-lg mb-4">Recent Orders</h2>
        {orders.length === 0 ? (
          <p className="text-sm text-ink/50">No orders placed yet. Orders will appear here as customers check out.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-ink/50 border-b border-forest/10">
                  <th className="py-2 pr-4">Order ID</th>
                  <th className="py-2 pr-4">Customer</th>
                  <th className="py-2 pr-4">Total</th>
                  <th className="py-2 pr-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 5).map((o) => (
                  <tr key={o.id} className="border-b border-forest/5">
                    <td className="py-2 pr-4 font-medium">{o.id}</td>
                    <td className="py-2 pr-4">{o.customer?.name}</td>
                    <td className="py-2 pr-4">₹{o.total}</td>
                    <td className="py-2 pr-4">
                      <span className="text-xs font-semibold bg-amber/10 text-amber-dark px-2 py-1 rounded-full">{o.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
