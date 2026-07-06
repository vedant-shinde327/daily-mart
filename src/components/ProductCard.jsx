import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Leaf } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useLang } from '../context/LangContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { t } = useLang()
  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl2 shadow-card border border-forest/5 overflow-hidden flex flex-col group"
    >
      <Link to={`/products/${product.id}`} className="relative block aspect-square overflow-hidden bg-cream">
        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <span className="absolute top-2 left-2 bg-amber text-white text-[11px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <Leaf size={11} /> {discount}% OFF
        </span>
        <span className={`absolute top-2 right-2 text-[10px] font-semibold px-2 py-1 rounded-full ${product.stock === 'In Stock' ? 'bg-forest/90 text-white' : 'bg-red-500/90 text-white'}`}>
          {product.stock}
        </span>
      </Link>
      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <span className="text-[11px] uppercase tracking-wide text-forest/60 font-semibold">{product.category}</span>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-display font-600 text-sm text-ink line-clamp-2">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1 text-amber text-xs">
          <Star size={13} fill="currentColor" /> <span className="text-ink/70">{product.rating}</span>
        </div>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="font-display font-700 text-forest">₹{product.price}</span>
          <span className="text-xs text-ink/40 line-through">₹{product.oldPrice}</span>
          <span className="text-[11px] text-ink/50 ml-auto">/{product.unit}</span>
        </div>
        <button
          onClick={() => addToCart(product, 1)}
          className="mt-2 flex items-center justify-center gap-2 bg-forest text-white text-sm font-semibold py-2 rounded-full hover:bg-forest-dark transition-colors"
        >
          <ShoppingCart size={15} /> {t('addToCart')}
        </button>
      </div>
    </motion.div>
  )
}
