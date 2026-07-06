import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Truck, Sparkles, Tag } from 'lucide-react'
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/slide 2.png";

const slides = [
  {
    title: 'Fresh Groceries Delivered to Your Doorstep',
    sub: 'Free Home Delivery above ₹500',
    badge: 'FREE DELIVERY',
    icon: Truck,
    image: hero2,
  },
  {
    title: 'Farm Fresh Fruits & Vegetables',
    sub: 'Delivered Fresh Every Day',
    badge: 'FARM FRESH',
    icon: Sparkles,
    image: hero1,
  },
]

export default function HeroSlider() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 4500)
    return () => clearInterval(id)
  }, [])

  const slide = slides[i]
  const Icon = slide.icon

  return (
    <div className="relative h-[420px] sm:h-[480px] overflow-hidden rounded-b-[2rem]">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
        <motion.span
          key={`badge-${i}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 w-fit bg-amber text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4"
        >
          <Icon size={14} /> {slide.badge}
        </motion.span>
        <motion.h1
          key={`title-${i}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-800 text-3xl sm:text-5xl max-w-xl leading-tight"
        >
          {slide.title}
        </motion.h1>
        <motion.p
          key={`sub-${i}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-white/90 text-lg"
        >
          {slide.sub}
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <Link to="/products" className="inline-block mt-6 bg-white text-forest font-semibold px-6 py-3 rounded-full hover:bg-amber hover:text-white transition-colors w-fit">
            Shop Now
          </Link>
        </motion.div>
      </div>

      <button onClick={() => setI((i - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 grid place-items-center text-white backdrop-blur">
        <ChevronLeft size={22} />
      </button>
      <button onClick={() => setI((i + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 grid place-items-center text-white backdrop-blur">
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} className={`h-2 rounded-full transition-all ${idx === i ? 'w-8 bg-amber' : 'w-2 bg-white/50'}`} />
        ))}
      </div>
    </div>
  )
}
