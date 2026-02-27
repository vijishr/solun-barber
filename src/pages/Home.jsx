import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import ServiceCard from '../components/ServiceCard.jsx'

const featuredServices = [
  {
    name: 'Signature Skin Fade',
    price: '$35',
    duration: '45 minutes',
    description: 'Ultra-clean fade, tailored shape, and hot towel finish.',
  },
  {
    name: 'Beard Sculpt & Detail',
    price: '$25',
    duration: '30 minutes',
    description: 'Razor-sharp lines, hot towel, and nourishing finish.',
  },
  {
    name: 'Classic Cut & Style',
    price: '$30',
    duration: '40 minutes',
    description: 'Timeless cut, precision detailing, and premium styling.',
  },
]

function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="pt-4 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Premium Barber Booking Experience
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Look sharp.{' '}
            <span className="text-brand-gold">Book in seconds.</span>
          </h1>
          <p className="max-w-xl text-sm sm:text-base text-gray-300">
            Reserve your chair at Solun Barber Studio with a few taps. Real-time
            availability, curated services, and a space designed for modern
            gentlemen.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/book">
              <Button>Book Now</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline">View Services</Button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-gray-400">
            <div>
              <p className="font-semibold text-white">Same‑day slots</p>
              <p>Check live availability instantly.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Top-tier barbers</p>
              <p>Handpicked for craft and detail.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Contactless check‑in</p>
              <p>Arrive, sit, and relax.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_top,_rgba(245,194,107,0.18),_transparent_60%)]" />
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 shadow-soft backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  Next available
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Today, 17:30 – 19:00
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                Low wait
              </span>
            </div>
            <div className="space-y-3 text-sm text-gray-200">
              <div className="flex items-center justify-between rounded-2xl bg-black/40 px-4 py-3">
                <div>
                  <p className="font-semibold">Signature Skin Fade</p>
                  <p className="text-xs text-gray-400">45 min · $35</p>
                </div>
                <span className="text-xs text-emerald-400">Available</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-dashed border-white/10 px-4 py-3">
                <div>
                  <p className="font-semibold">Classic Cut & Style</p>
                  <p className="text-xs text-gray-400">40 min · $30</p>
                </div>
                <span className="text-xs text-gray-400">Next · 18:15</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="space-y-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Curated services, crafted for you.
            </h2>
            <p className="mt-2 text-sm text-gray-300 max-w-xl">
              From crisp fades to full restyle sessions, experience a studio
              built around precision, comfort, and time that&apos;s truly yours.
            </p>
          </div>
          <Link to="/services">
            <Button variant="outline" className="text-xs">
              Explore all services
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="space-y-8">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Why choose Solun Barber Studio?
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Not just another barbershop. A tailored experience from the moment
            you book to the final mirror check.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-brand-gold">
              Precision & consistency
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Every cut is mapped to your features, lifestyle, and personal
              style. No surprises, just sharp results.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-brand-gold">
              Premium environment
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Clean, minimal, and calm. Thoughtful lighting, music, and seating
              that feels like a private lounge.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-brand-gold">
              Effortless booking
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Real-time booking, instant confirmation, and reminders so your
              schedule stays as precise as your fade.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
