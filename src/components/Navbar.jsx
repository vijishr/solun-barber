import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button.jsx'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/book', label: 'Book' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/my-bookings', label: 'My Bookings' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="page-container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold to-amber-500 text-black font-bold shadow-soft">
            SB
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.15em] text-gray-300 uppercase">
              Solun
            </span>
            <span className="text-lg font-semibold tracking-wide text-white">
              Barber Studio
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition hover:text-white ${
                  isActive ? 'text-brand-gold' : 'text-gray-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login">
            <Button variant="ghost" className="text-xs">
              Sign In
            </Button>
          </Link>
          <Link to="/book">
            <Button className="text-xs">Book Now</Button>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-gray-200 md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-4 rounded-full bg-current" />
            <span className="block h-0.5 w-3 rounded-full bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/90 md:hidden">
          <div className="page-container flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-medium tracking-wide transition ${
                    isActive
                      ? 'bg-white/10 text-brand-gold'
                      : 'text-gray-200 hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-3">
              <Link to="/login" className="flex-1" onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full text-xs">
                  Sign In
                </Button>
              </Link>
              <Link to="/book" className="flex-1" onClick={() => setOpen(false)}>
                <Button className="w-full text-xs">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
