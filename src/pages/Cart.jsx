import { Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useLang } from '../context/LangContext.jsx'

export default function Cart() {
  const { items, updateQty, removeFromCart, subtotal, delivery, total } = useCart()
  const { t } = useLang()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="max-w-md mx-auto px-4 py-24 text-center">
        <ShoppingBag size={48} className="mx-auto text-forest/30 mb-4" />
        <p className="text-ink/60 mb-6">{t('emptyCart')}</p>
        <Link to="/products" className="bg-forest text-white font-semibold px-6 py-3 rounded-full hover:bg-forest-dark transition-colors">
          {t('continueShopping')}
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        <h1 className="font-display font-700 text-2xl mb-2">{t('cart')}</h1>
        {items.map((item) => (
          <div key={item.key} className="flex gap-4 bg-white rounded-xl2 shadow-card border border-forest/5 p-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{item.name}</h3>
              <p className="text-xs text-ink/50 mb-2">{item.weight}</p>
              <div className="flex items-center gap-3 border border-forest/20 rounded-full px-3 py-1 w-fit">
                <button onClick={() => updateQty(item.key, item.qty - 1)}><Minus size={14} /></button>
                <span className="w-5 text-center text-sm">{item.qty}</span>
                <button onClick={() => updateQty(item.key, item.qty + 1)}><Plus size={14} /></button>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between">
              <button onClick={() => removeFromCart(item.key)} className="text-red-400 hover:text-red-600">
                <Trash2 size={18} />
              </button>
              <span className="font-display font-700 text-forest">₹{item.price * item.qty}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl2 shadow-card border border-forest/5 p-6 h-fit sticky top-24">
        <h2 className="font-display font-600 text-lg mb-4">Order Summary</h2>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-ink/60">{t('subtotal')}</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-ink/60">{t('deliveryFee')}</span>
          <span>{delivery === 0 ? <span className="text-forest font-semibold">{t('free')}</span> : `₹${delivery}`}</span>
        </div>
        {delivery > 0 && (
          <p className="text-xs text-amber-dark bg-amber/10 rounded-lg p-2 mb-2">
            Add ₹{500 - subtotal} more to get FREE delivery!
          </p>
        )}
        <div className="border-t border-forest/10 my-3" />
        <div className="flex justify-between font-display font-700 text-lg mb-5">
          <span>{t('total')}</span>
          <span className="text-forest">₹{total}</span>
        </div>
        <button
          onClick={() => navigate('/checkout')}
          className="w-full bg-amber text-white font-semibold py-3 rounded-full hover:bg-amber-dark transition-colors"
        >
          {t('checkout')}
        </button>
      </div>
    </div>
  )
}
