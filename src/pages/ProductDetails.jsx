import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Minus, Plus, ShoppingCart, Star, ChevronLeft } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useLang } from '../context/LangContext.jsx'
import { useStore } from '../context/StoreContext.jsx'
import ProductCard from '../components/ProductCard.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { t } = useLang()
  const { products } = useStore()
  const product = products.find((p) => p.id === Number(id))
  const [activeImg, setActiveImg] = useState(0)
  const [weight, setWeight] = useState(product?.weights?.[0])
  const [qty, setQty] = useState(1)

  if (!product) {
    return <div className="max-w-3xl mx-auto px-4 py-16 text-center">Product not found. <Link to="/products" className="text-forest underline">Back to products</Link></div>
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-ink/60 hover:text-forest mb-6">
        <ChevronLeft size={16} /> Back
      </button>

      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <div className="bg-cream rounded-xl2 overflow-hidden aspect-square mb-3">
            <img src={product.images[activeImg]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setActiveImg(i)} className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${activeImg === i ? 'border-forest' : 'border-transparent'}`}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-wide text-forest/60 font-semibold">{product.category}</span>
          <h1 className="font-display font-700 text-2xl sm:text-3xl mt-1 mb-2">{product.name}</h1>
          <div className="flex items-center gap-1 text-amber mb-3">
            <Star size={16} fill="currentColor" /> <span className="text-sm text-ink/70">{product.rating} rating</span>
          </div>

          <div className="flex items-baseline gap-3 mb-4">
            <span className="font-display font-800 text-3xl text-forest">₹{product.price}</span>
            <span className="text-ink/40 line-through">₹{product.oldPrice}</span>
            <span className="text-xs font-semibold bg-amber/10 text-amber px-2 py-1 rounded-full">
              {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
            </span>
          </div>

          <p className="text-sm text-ink/70 leading-relaxed mb-6">{product.description}</p>

          <div className="mb-5">
            <p className="text-sm font-semibold mb-2">{t('availableWeights')}</p>
            <div className="flex gap-2 flex-wrap">
              {product.weights.map((w) => (
                <button
                  key={w}
                  onClick={() => setWeight(w)}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${weight === w ? 'bg-forest text-white border-forest' : 'border-forest/20 text-ink/70'}`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm font-semibold mb-2">{t('quantity')}</p>
            <div className="flex items-center gap-3 w-fit border border-forest/20 rounded-full px-3 py-1.5">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}><Minus size={16} /></button>
              <span className="w-6 text-center text-sm font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}><Plus size={16} /></button>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => addToCart(product, qty, weight)}
              className="flex-1 flex items-center justify-center gap-2 bg-forest text-white font-semibold py-3 rounded-full hover:bg-forest-dark transition-colors"
            >
              <ShoppingCart size={18} /> {t('addToCart')}
            </button>
            <button
              onClick={() => { addToCart(product, qty, weight); navigate('/checkout') }}
              className="flex-1 bg-amber text-white font-semibold py-3 rounded-full hover:bg-amber-dark transition-colors"
            >
              {t('buyNow')}
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display font-700 text-xl mb-5">You may also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  )
}
