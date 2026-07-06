import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext.jsx'

export default function CategoryCard({ category }) {
  const { lang } = useLang()
  return (
    <motion.div whileHover={{ y: -3 }}>
      <Link
        to={`/products?category=${encodeURIComponent(category.name)}`}
        className="flex flex-col items-center gap-2 bg-white rounded-xl2 shadow-card border border-forest/5 p-4 hover:border-amber/40 transition-colors"
      >
        <span className="text-3xl w-14 h-14 grid place-items-center rounded-full bg-forest/10">{category.icon}</span>
        <span className="text-xs sm:text-sm font-semibold text-ink text-center">
          {lang === 'en' ? category.name : category.mr}
        </span>
      </Link>
    </motion.div>
  )
}
