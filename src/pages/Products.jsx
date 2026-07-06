import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/ProductCard.jsx'
import { useStore } from '../context/StoreContext.jsx'

export default function Products() {
  const { products, categories } = useStore()
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const activeCategory = params.get('category') || 'All'
  const [sort, setSort] = useState('default')

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()))
    if (activeCategory !== 'All') list = list.filter((p) => p.category === activeCategory)
    if (sort === 'lowHigh') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'highLow') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [q, activeCategory, sort, products])

  const setCategory = (name) => {
    const next = new URLSearchParams(params)
    if (name === 'All') next.delete('category')
    else next.set('category', name)
    setParams(next)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-display font-700 text-2xl sm:text-3xl mb-1">All Products</h1>
      <p className="text-ink/60 text-sm mb-6">{filtered.length} items {q && `for "${q}"`}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {['All', ...categories.map((c) => c.name)].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === c ? 'bg-forest text-white border-forest' : 'border-forest/20 text-ink/70 hover:bg-forest/10'
            }`}
          >
            {c}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <SlidersHorizontal size={16} className="text-ink/50" />
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="text-sm border border-forest/20 rounded-full px-3 py-1.5 outline-none">
            <option value="default">Sort: Default</option>
            <option value="lowHigh">Price: Low to High</option>
            <option value="highLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-ink/50 py-16">No products found. Try a different search or category.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}
