import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useLang } from '../context/LangContext.jsx'
import { useStore } from '../context/StoreContext.jsx'

const PHONE = '918668781633'

export default function Checkout() {
  const { items, subtotal, delivery, total, clearCart } = useCart()
  const { addOrder } = useStore()
  const { t } = useLang()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', phone: '', address: '', landmark: '', pincode: '' })
  const [payment, setPayment] = useState('COD')

  if (items.length === 0) {
    return (
      <div className="max-w-md mx-auto px-4 py-24 text-center">
        <p className="text-ink/60 mb-6">Your cart is empty. Add products before checking out.</p>
        <Link to="/products" className="bg-forest text-white font-semibold px-6 py-3 rounded-full">Shop Now</Link>
      </div>
    )
  }

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const placeOrder = (e) => {
    e.preventDefault()
    const orderLines = items.map((i) => `• ${i.name} (${i.weight}) x${i.qty} — ₹${i.price * i.qty}`).join('\n')
    const message = `*New Order — Daily Mart*\n\n${orderLines}\n\nSubtotal: ₹${subtotal}\nDelivery: ${delivery === 0 ? 'FREE' : `₹${delivery}`}\n*Total: ₹${total}*\n\n*Customer Details*\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\nLandmark: ${form.landmark}\nPincode: ${form.pincode}\nPayment: ${payment === 'COD' ? 'Cash on Delivery' : 'Online (Demo)'}`
    addOrder({ items, subtotal, delivery, total, customer: form, payment })
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank')
    clearCart()
    navigate('/')
  }

  const inputCls = 'w-full border border-forest/20 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-forest'

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 grid lg:grid-cols-3 gap-8">
      <form onSubmit={placeOrder} className="lg:col-span-2 space-y-4 bg-white rounded-xl2 shadow-card border border-forest/5 p-6">
        <h1 className="font-display font-700 text-2xl mb-2">Checkout</h1>
        <div>
          <label className="text-sm font-medium mb-1 block">{t('name')}</label>
          <input required value={form.name} onChange={update('name')} className={inputCls} placeholder="e.g. Rahul Patil" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">{t('phone')}</label>
          <input required value={form.phone} onChange={update('phone')} className={inputCls} placeholder="10-digit mobile number" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">{t('address')}</label>
          <textarea required value={form.address} onChange={update('address')} className={inputCls} rows={3} placeholder="House no, street, area" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1 block">{t('landmark')}</label>
            <input value={form.landmark} onChange={update('landmark')} className={inputCls} placeholder="e.g. Near Union Bank" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">{t('pincode')}</label>
            <input required value={form.pincode} onChange={update('pincode')} className={inputCls} placeholder="431512" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t('payment')}</label>
          <div className="flex gap-3">
            {['COD', 'Online'].map((p) => (
              <button
                type="button"
                key={p}
                onClick={() => setPayment(p)}
                className={`flex-1 border rounded-lg py-3 text-sm font-medium transition-colors ${payment === p ? 'border-forest bg-forest/10 text-forest' : 'border-forest/20 text-ink/60'}`}
              >
                {p === 'COD' ? t('cod') : t('online')}
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className="w-full flex items-center justify-center gap-2 bg-forest text-white font-semibold py-3 rounded-full hover:bg-forest-dark transition-colors mt-2">
          <CheckCircle2 size={18} /> {t('placeOrder')}
        </button>
      </form>

      <div className="bg-white rounded-xl2 shadow-card border border-forest/5 p-6 h-fit">
        <h2 className="font-display font-600 text-lg mb-4">Order Summary</h2>
        {items.map((i) => (
          <div key={i.key} className="flex justify-between text-sm mb-2">
            <span className="text-ink/70">{i.name} x{i.qty}</span>
            <span>₹{i.price * i.qty}</span>
          </div>
        ))}
        <div className="border-t border-forest/10 my-3" />
        <div className="flex justify-between text-sm mb-1"><span className="text-ink/60">{t('subtotal')}</span><span>₹{subtotal}</span></div>
        <div className="flex justify-between text-sm mb-3"><span className="text-ink/60">{t('deliveryFee')}</span><span>{delivery === 0 ? t('free') : `₹${delivery}`}</span></div>
        <div className="flex justify-between font-display font-700 text-lg"><span>{t('total')}</span><span className="text-forest">₹{total}</span></div>
      </div>
    </div>
  )
}
