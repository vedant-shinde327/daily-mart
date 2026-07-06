import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Truck, ShieldCheck, Clock3, Wallet, Star, MapPin, Phone, Mail } from 'lucide-react'
import HeroSlider from '../components/HeroSlider.jsx'
import CategoryCard from '../components/CategoryCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { useLang } from '../context/LangContext.jsx'
import { useStore } from '../context/StoreContext.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

function Section({ title, subtitle, children }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-6">
        <h2 className="font-display font-700 text-2xl sm:text-3xl text-ink">{title}</h2>
        {subtitle && <p className="text-ink/60 text-sm mt-1">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  )
}

export default function Home() {
  const { t } = useLang()
  const { products, categories } = useStore()
  const featured = products.slice(0, 5)
  const popular = products.slice(5, 10)

  const whyUs = [
    { icon: Truck, title: 'Fast Delivery', desc: 'Same-day delivery across Basmat & Vasmat.' },
    { icon: ShieldCheck, title: 'Quality Assured', desc: 'Freshness checked before every dispatch.' },
    { icon: Wallet, title: 'Best Prices', desc: 'Everyday low prices on all essentials.' },
    { icon: Clock3, title: 'Always Open', desc: '7 AM – 10 PM, all days of the week.' },
  ]

  const reviews = [
    { name: 'Anita Deshmukh', text: 'Daily Mart delivers the freshest vegetables in Basmat. Never disappointed!' },
    { name: 'Rahul Patil', text: 'Great prices and super quick delivery. My family shops here every week.' },
    { name: 'Sneha Kulkarni', text: 'Suhas ji personally makes sure the order is packed well. Highly recommend.' },
  ]

  return (
    <div>
      <HeroSlider />

      <Section title={t('categories')}>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-3">
          {categories.map((c) => (
            <CategoryCard key={c.name} category={c} />
          ))}
        </div>
      </Section>

      <Section title={t('featured')} subtitle="Hand-picked essentials with the best offers this week">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Section>

      <Section title={t('popular')} subtitle="What our neighbours are buying the most">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {popular.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products" className="inline-block bg-amber text-white font-semibold px-8 py-3 rounded-full hover:bg-amber-dark transition-colors">
            View All Products
          </Link>
        </div>
      </Section>

      <section className="bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-4 mb-2">
            <h2 className="font-display font-700 text-2xl sm:text-3xl">{t('delivery')}</h2>
            <p className="text-white/70 text-sm mt-1">Free delivery on orders above ₹500 · ₹40 delivery below that</p>
          </div>
          {whyUs.map((w) => {
            const Icon = w.icon
            return (
              <div key={w.title} className="bg-white/10 rounded-xl2 p-5 backdrop-blur">
                <Icon size={26} className="text-amber mb-3" />
                <h3 className="font-display font-600 mb-1">{w.title}</h3>
                <p className="text-sm text-white/70">{w.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      <Section title={t('whyUs')}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((w) => {
            const Icon = w.icon
            return (
              <motion.div key={w.title} whileHover={{ y: -4 }} className="bg-white rounded-xl2 shadow-card border border-forest/5 p-6 text-center">
                <span className="mx-auto grid place-items-center w-14 h-14 rounded-full bg-amber/10 text-amber mb-3">
                  <Icon size={26} />
                </span>
                <h3 className="font-display font-600 mb-1">{w.title}</h3>
                <p className="text-sm text-ink/60">{w.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      <Section title={t('reviews')}>
        <div className="grid sm:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <motion.div key={r.name} whileHover={{ y: -4 }} className="bg-white rounded-xl2 shadow-card border border-forest/5 p-6">
              <div className="flex gap-1 text-amber mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm text-ink/70 mb-4">"{r.text}"</p>
              <span className="font-semibold text-sm text-forest">{r.name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title={t('contact')}>
        <div className="bg-white rounded-xl2 shadow-card border border-forest/5 p-6 sm:p-8 grid sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <MapPin className="text-forest shrink-0" />
            <div>
              <p className="font-semibold text-sm">Address</p>
              <p className="text-sm text-ink/60">Near Union Bank, Basmat</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-forest shrink-0" />
            <div>
              <p className="font-semibold text-sm">Phone / WhatsApp</p>
              <p className="text-sm text-ink/60">+91 86687 81633</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-forest shrink-0" />
            <div>
              <p className="font-semibold text-sm">Owner</p>
              <p className="text-sm text-ink/60">Suhas Karle</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
