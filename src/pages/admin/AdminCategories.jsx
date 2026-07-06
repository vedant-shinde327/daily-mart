import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { useStore } from '../../context/StoreContext.jsx'

export default function AdminCategories() {
  const { categories, products, addCategory, deleteCategory } = useStore()
  const [name, setName] = useState('')
  const [icon, setIcon] = useState('🛒')

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    addCategory({ name: name.trim(), mr: name.trim(), icon })
    setName(''); setIcon('🛒')
  }

  const countFor = (catName) => products.filter((p) => p.category === catName).length

  return (
    <div>
      <h1 className="font-display font-700 text-2xl mb-1">Categories</h1>
      <p className="text-ink/60 text-sm mb-6">{categories.length} categories shown on the storefront</p>

      <form onSubmit={submit} className="bg-white rounded-xl2 shadow-card border border-forest/5 p-5 mb-6 flex flex-wrap items-end gap-3">
        <div>
          <label className="text-xs font-medium mb-1 block">Emoji Icon</label>
          <input value={icon} onChange={(e) => setIcon(e.target.value)} className="w-16 text-center border border-forest/20 rounded-lg px-2 py-2 text-lg" maxLength={2} />
        </div>
        <div className="flex-1 min-w-[160px]">
          <label className="text-xs font-medium mb-1 block">Category Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-forest/20 rounded-lg px-3 py-2 text-sm outline-none focus:border-forest" placeholder="e.g. Bakery" />
        </div>
        <button type="submit" className="flex items-center gap-2 bg-forest text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-forest-dark transition-colors">
          <Plus size={16} /> Add Category
        </button>
      </form>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((c) => (
          <div key={c.name} className="bg-white rounded-xl2 shadow-card border border-forest/5 p-4 flex items-center gap-3">
            <span className="text-2xl w-11 h-11 grid place-items-center rounded-full bg-forest/10">{c.icon}</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">{c.name}</p>
              <p className="text-xs text-ink/50">{countFor(c.name)} products</p>
            </div>
            <button onClick={() => deleteCategory(c.name)} className="text-red-400 hover:text-red-600">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
