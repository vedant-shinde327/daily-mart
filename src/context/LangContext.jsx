import { createContext, useContext, useState } from 'react'

const dict = {
  en: {
    home: 'Home', products: 'Products', cart: 'Cart', contact: 'Contact',
    search: 'Search for groceries...', addToCart: 'Add to Cart', viewDetails: 'View Details',
    shopNow: 'Shop Now', categories: 'Shop by Category', featured: 'Featured Products',
    popular: 'Popular Products', whyUs: 'Why Choose Us', reviews: 'What Our Customers Say',
    delivery: 'Delivery Information', subtotal: 'Subtotal', deliveryFee: 'Delivery Fee',
    total: 'Total', free: 'FREE', checkout: 'Proceed to Checkout', placeOrder: 'Place Order via WhatsApp',
    buyNow: 'Buy Now', emptyCart: 'Your cart is empty', continueShopping: 'Continue Shopping',
    quantity: 'Quantity', availableWeights: 'Available Weights', description: 'Description',
    name: 'Full Name', phone: 'Phone Number', address: 'Delivery Address', landmark: 'Landmark',
    pincode: 'Pincode', payment: 'Payment Method', cod: 'Cash on Delivery', online: 'Online (Demo)',
  },
  mr: {
    home: 'मुख्यपृष्ठ', products: 'उत्पादने', cart: 'कार्ट', contact: 'संपर्क',
    search: 'किराणा शोधा...', addToCart: 'कार्टमध्ये टाका', viewDetails: 'तपशील पहा',
    shopNow: 'आता खरेदी करा', categories: 'श्रेणीनुसार खरेदी', featured: 'वैशिष्ट्यीकृत उत्पादने',
    popular: 'लोकप्रिय उत्पादने', whyUs: 'आम्हालाच का निवडावे', reviews: 'ग्राहकांचे अभिप्राय',
    delivery: 'डिलिव्हरी माहिती', subtotal: 'उपएकूण', deliveryFee: 'डिलिव्हरी शुल्क',
    total: 'एकूण', free: 'मोफत', checkout: 'चेकआउट करा', placeOrder: 'व्हॉट्सअॅपद्वारे ऑर्डर द्या',
    buyNow: 'आत्ता खरेदी करा', emptyCart: 'तुमची कार्ट रिकामी आहे', continueShopping: 'खरेदी सुरू ठेवा',
    quantity: 'प्रमाण', availableWeights: 'उपलब्ध वजन', description: 'वर्णन',
    name: 'पूर्ण नाव', phone: 'फोन नंबर', address: 'पत्ता', landmark: 'लँडमार्क',
    pincode: 'पिनकोड', payment: 'पेमेंट पद्धत', cod: 'कॅश ऑन डिलिव्हरी', online: 'ऑनलाइन (डेमो)',
  },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = (key) => dict[lang][key] || key
  const toggleLang = () => setLang((p) => (p === 'en' ? 'mr' : 'en'))
  return <LangContext.Provider value={{ lang, t, toggleLang }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
