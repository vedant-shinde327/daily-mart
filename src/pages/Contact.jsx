import { MapPin, Phone, Clock, User } from 'lucide-react'

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-display font-700 text-3xl mb-2">Contact Daily Mart</h1>
      <p className="text-ink/60 mb-8">We'd love to hear from you — reach out for orders, bulk enquiries, or feedback.</p>

      <div className="grid sm:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div className="flex items-start gap-3 bg-white rounded-xl2 shadow-card border border-forest/5 p-5">
            <MapPin className="text-forest shrink-0" />
            <div>
              <p className="font-semibold">Store Address</p>
              <p className="text-sm text-ink/60">Near Union Bank, Basmat, Maharashtra</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl2 shadow-card border border-forest/5 p-5">
            <Phone className="text-forest shrink-0" />
            <div>
              <p className="font-semibold">Phone / WhatsApp</p>
              <p className="text-sm text-ink/60">+91 86687 81633</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl2 shadow-card border border-forest/5 p-5">
            <Clock className="text-forest shrink-0" />
            <div>
              <p className="font-semibold">Store Timings</p>
              <p className="text-sm text-ink/60">7:00 AM – 10:00 PM, All Days</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl2 shadow-card border border-forest/5 p-5">
            <User className="text-forest shrink-0" />
            <div>
              <p className="font-semibold">Owner</p>
              <p className="text-sm text-ink/60">Suhas Karle</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl2 shadow-card border border-forest/5 overflow-hidden">
          <iframe
            title="Daily Mart Location"
            className="w-full h-full min-h-[320px]"
            loading="lazy"
            src="https://www.google.com/maps?q=Union+Bank+Basmat+Maharashtra&output=embed"
          />
        </div>
      </div>
    </div>
  )
}
