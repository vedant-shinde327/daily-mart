import { useState } from 'react'
import { Plus, Pencil, Trash2, X } from 'lucide-react'
import { useStore } from '../../context/StoreContext.jsx'

const emptyForm = { name: '', category: 'Fruits', price: '', oldPrice: '', unit: '1 kg', stock: 'In Stock', image: '', description: '', weights: '', rating: 4.5 }

export default function AdminProducts() {
  const { products, categories, addProduct, updateProduct, deleteProduct } = useStore()
  const [editing, setEditing] = useState(null) // product id or 'new' or null
  const [form, setForm] = useState(emptyForm)

  const openNew = () => { setForm(emptyForm); setEditing('new') }
  const openEdit = (p) => {
    setForm({ ...p, weights: p.weights?.join(', ') || '' })
    setEditing(p.id)
  }
  const close = () => setEditing(null)

  const save = (e) => {
    e.preventDefault()
    const payload = {
      ...form,
      price: Number(form.price),
      oldPrice: Number(form.oldPrice) || Number(form.price),
      rating: Number(form.rating) || 4.5,
      weights: form.weights.split(',').map((w) => w.trim()).filter(Boolean),
      images: form.image ? [form.image] : [],
    }
    if (editing === 'new') addProduct(payload)
    else updateProduct(editing, payload)
    close()
  }

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  const inputCls = 'w-full border border-forest/20 rounded-lg px-3 py-2 text-sm outline-none focus:border-forest'

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display font-700 text-2xl">Products</h1>
          <p className="text-ink/60 text-sm">{products.length} products in catalogue</p>
        </div>
        <button onClick={openNew} className="flex items-center gap-2 bg-forest text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-forest-dark transition-colors">
          <Plus size={16} /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl2 shadow-card border border-forest/5 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-ink/50 border-b border-forest/10">
              <th className="py-3 pl-4 pr-2">Product</th>
              <th className="py-3 px-2">Category</th>
              <th className="py-3 px-2">Price</th>
              <th className="py-3 px-2">Stock</th>
              <th className="py-3 pr-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-forest/5">
                <td className="py-2.5 pl-4 pr-2 flex items-center gap-3">
                  <img src={p.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                  <span className="font-medium">{p.name}</span>
                </td>
                <td className="py-2.5 px-2 text-ink/60">{p.category}</td>
                <td className="py-2.5 px-2">₹{p.price}</td>
                <td className="py-2.5 px-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${p.stock === 'In Stock' ? 'bg-forest/10 text-forest' : 'bg-red-100 text-red-500'}`}>{p.stock}</span>
                </td>
                <td className="py-2.5 pr-4 text-right space-x-2">
                  <button onClick={() => openEdit(p)} className="text-forest hover:text-forest-dark"><Pencil size={16} className="inline" /></button>
                  <button onClick={() => deleteProduct(p.id)} className="text-red-400 hover:text-red-600"><Trash2 size={16} className="inline" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing !== null && (
        <div className="fixed inset-0 bg-ink/50 z-50 flex items-center justify-center p-4">
          <form onSubmit={save} className="bg-white rounded-xl2 w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-700 text-lg">{editing === 'new' ? 'Add Product' : 'Edit Product'}</h2>
              <button type="button" onClick={close}><X size={20} /></button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium mb-1 block">Product Name</label>
                <input required value={form.name} onChange={update('name')} className={inputCls} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium mb-1 block">Category</label>
                  <select value={form.category} onChange={update('category')} className={inputCls}>
                    {categories.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium mb-1 block">Unit</label>
                  <input value={form.unit} onChange={update('unit')} className={inputCls} placeholder="e.g. 1 kg" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium mb-1 block">Price (₹)</label>
                  <input required type="number" value={form.price} onChange={update('price')} className={inputCls} />
                </div>
                <div>
                  <label className="text-xs font-medium mb-1 block">Old Price (₹)</label>
                  <input type="number" value={form.oldPrice} onChange={update('oldPrice')} className={inputCls} />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium mb-1 block">Stock Status</label>
                <select value={form.stock} onChange={update('stock')} className={inputCls}>
                  <option>In Stock</option>
                  <option>Limited Stock</option>
                  <option>Out of Stock</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium mb-1 block">Image URL</label>
                <input value={form.image} onChange={update('image')} className={inputCls} placeholder="https://..." />
              </div>
              <div>
                <label className="text-xs font-medium mb-1 block">Available Weights (comma separated)</label>
                <input value={form.weights} onChange={update('weights')} className={inputCls} placeholder="500 g, 1 kg, 2 kg" />
              </div>
              <div>
                <label className="text-xs font-medium mb-1 block">Description</label>
                <textarea value={form.description} onChange={update('description')} className={inputCls} rows={3} />
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button type="button" onClick={close} className="flex-1 border border-forest/20 text-ink/70 font-semibold py-2.5 rounded-full">Cancel</button>
              <button type="submit" className="flex-1 bg-forest text-white font-semibold py-2.5 rounded-full hover:bg-forest-dark transition-colors">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
