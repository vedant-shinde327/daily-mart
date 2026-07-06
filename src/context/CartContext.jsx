import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([]) // {id, name, price, image, qty, weight}

  const addToCart = (product, qty = 1, weight) => {
    setItems((prev) => {
      const key = `${product.id}-${weight || product.unit}`
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i))
      }
      return [
        ...prev,
        { key, id: product.id, name: product.name, price: product.price, image: product.image, weight: weight || product.unit, qty },
      ]
    })
  }

  const removeFromCart = (key) => setItems((prev) => prev.filter((i) => i.key !== key))
  const updateQty = (key, qty) =>
    setItems((prev) => prev.map((i) => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i)))
  const clearCart = () => setItems([])

  const subtotal = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items])
  const delivery = subtotal >= 500 || subtotal === 0 ? 0 : 40
  const total = subtotal + delivery
  const count = items.reduce((s, i) => s + i.qty, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clearCart, subtotal, delivery, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
