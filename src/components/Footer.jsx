import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="page-container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-gray-400 uppercase">
            Solun Barber Studio
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Precision fades, classic shaves, and a premium booking experience.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
          <div className="space-y-1">
            <p className="font-semibold text-white">Visit us</p>
            <p>21 King Street, Downtown</p>
            <p>Open Tue – Sun, 9:00 – 21:00</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-white">Contact</p>
            <a href="tel:+1234567890" className="block hover:text-brand-gold">
              +1 (234) 567-890
            </a>
            <a
              href="mailto:hello@solunbarber.com"
              className="block hover:text-brand-gold"
            >
              hello@solunbarber.com
            </a>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-white">Quick links</p>
            <Link to="/services" className="block hover:text-brand-gold">
              Services
            </Link>
            <Link to="/book" className="block hover:text-brand-gold">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-container flex flex-col items-center justify-between gap-3 py-4 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Solun Barber Studio. All rights reserved.</p>
          <p className="space-x-3">
            <span>Crafted for a modern barber booking experience.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
