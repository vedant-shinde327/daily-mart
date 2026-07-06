import { Phone } from 'lucide-react'

const PHONE = '918668781633'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hi Daily Mart, I would like to know more about your products.')}`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor"><path d="M16 2.9C8.8 2.9 2.9 8.8 2.9 16c0 2.5.7 4.9 2 7L3 29l6.2-1.8c2 1.1 4.3 1.7 6.8 1.7 7.2 0 13.1-5.9 13.1-13.1S23.2 2.9 16 2.9zm0 23.8c-2.2 0-4.4-.6-6.2-1.8l-.4-.2-4.3 1.3 1.3-4.2-.3-.4c-1.3-2-1.9-4.2-1.9-6.5C4.2 9.5 9.5 4.2 16 4.2S27.8 9.5 27.8 16 22.5 26.7 16 26.7zm6.9-8.6c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.5s-1.2 1.2-1.2 2.9 1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.1.8.3 1.4.5 1.9.7.8.2 1.5.2 2 .1.6-.1 2.2-.9 2.4-1.7.3-.9.3-1.6.2-1.7-.1-.2-.3-.3-.7-.4z"/></svg>
      </a>
      <a
        href={`tel:+${PHONE}`}
        className="w-14 h-14 rounded-full bg-forest text-white grid place-items-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
    </div>
  )
}
