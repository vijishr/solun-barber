import Button from '../components/Button.jsx'
import InputField from '../components/InputField.jsx'

function Contact() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <section className="space-y-6">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Let&apos;s talk before your next cut.
          </h1>
          <p className="text-sm text-gray-300">
            Ask about services, availability, or anything else you want to know
            before booking.
          </p>
        </header>

        <form
          className="space-y-5 rounded-3xl border border-white/10 bg-black/40 p-6 shadow-soft"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <InputField
              label="Full name"
              name="fullName"
              placeholder="Alex Carter"
              required
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <InputField
            label="Phone number"
            name="phone"
            placeholder="+1 (234) 567‑890"
          />
          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-200 tracking-wide"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us what you need help with or what you’d like to know."
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 shadow-sm focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
              required
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Send message
          </Button>
        </form>
      </section>

      <aside className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-black/40 to-black/80 p-6 text-sm text-gray-200">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Studio address
          </p>
          <p className="mt-2 text-base text-white">
            21 King Street, Downtown
          </p>
          <p className="mt-1 text-sm text-gray-300">
            Located in the heart of the city, moments from the central station.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Call or email
          </p>
          <p className="mt-2">
            Phone:{' '}
            <a href="tel:+1234567890" className="text-brand-gold">
              +1 (234) 567‑890
            </a>
            <br />
            Email:{' '}
            <a
              href="mailto:hello@solunbarber.com"
              className="text-brand-gold"
            >
              hello@solunbarber.com
            </a>
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Opening hours
          </p>
          <p className="mt-2">
            Tue – Fri: 09:00 – 21:00
            <br />
            Sat – Sun: 10:00 – 19:00
            <br />
            Monday closed
          </p>
        </div>
      </aside>
    </div>
  )
}

export default Contact
