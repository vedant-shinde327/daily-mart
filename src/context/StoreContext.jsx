import { createContext, useContext, useState } from 'react'
import { categories as initialCategories, products as initialProducts } from '../data/products.js'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [products, setProducts] = useState(initialProducts)
  const [categories, setCategories] = useState(initialCategories)
  const [orders, setOrders] = useState([])

  // ---- Products ----
  const addProduct = (product) => {
    const id = Math.max(0, ...products.map((p) => p.id)) + 1
    setProducts((prev) => [...prev, { ...product, id }])
  }
  const updateProduct = (id, updates) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)))
  }
  const deleteProduct = (id) => setProducts((prev) => prev.filter((p) => p.id !== id))

  // ---- Categories ----
  const addCategory = (category) => setCategories((prev) => [...prev, category])
  const deleteCategory = (name) => setCategories((prev) => prev.filter((c) => c.name !== name))

  // ---- Orders (populated automatically when a customer checks out) ----
  const addOrder = (order) => {
    const id = `DM${1000 + orders.length + 1}`
    setOrders((prev) => [{ id, status: 'Pending', createdAt: new Date().toISOString(), ...order }, ...prev])
    return id
  }
  const updateOrderStatus = (id, status) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)))
  }

  return (
    <StoreContext.Provider
      value={{
        products, addProduct, updateProduct, deleteProduct,
        categories, addCategory, deleteCategory,
        orders, addOrder, updateOrderStatus,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
