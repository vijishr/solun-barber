import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import InputField from '../components/InputField.jsx'
import { createBooking, fetchServices } from '../services/api.js'

function BookAppointment() {
  const navigate = useNavigate()
  const [services, setServices] = useState([])
  const [loadingServices, setLoadingServices] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const savedUser = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('user') || 'null')
    } catch {
      return null
    }
  }, [])

  const [form, setForm] = useState({
    fullName: savedUser?.name || '',
    phone: savedUser?.phone || '',
    serviceId: '',
    date: '',
    time: '',
    notes: '',
  })

  useEffect(() => {
    let alive = true
    const load = async () => {
      try {
        setLoadingServices(true)
        setError('')
        const data = await fetchServices()
        if (alive) setServices(data)
      } catch (err) {
        if (alive)
          setError(err?.response?.data?.message || 'Failed to load services')
      } finally {
        if (alive) setLoadingServices(false)
      }
    }
    load()
    return () => {
      alive = false
    }
  }, [])

  const onChange = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setSuccess('')
    setError('')

    const token = localStorage.getItem('token')
    if (!token) {
      setError('Please login to book an appointment.')
      navigate('/login')
      return
    }

    try {
      setSubmitting(true)
      await createBooking({
        fullName: form.fullName,
        phone: form.phone,
        serviceId: form.serviceId,
        date: form.date,
        time: form.time,
        notes: form.notes,
      })
      setSuccess('Booking created successfully. See it in My Bookings.')
      setForm((prev) => ({ ...prev, notes: '' }))
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to create booking')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <section className="space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Book appointment
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Reserve your chair in under a minute.
          </h1>
          <p className="text-sm text-gray-300">
            Choose your service, time, and we&apos;ll prepare the chair. No
            phone calls, no waiting list—just a smooth booking flow.
          </p>
        </header>

        <form
          className="space-y-5 rounded-3xl border border-white/10 bg-black/40 p-6 shadow-soft"
          onSubmit={onSubmit}
        >
          {error && (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          )}
          {success && (
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              {success}
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <InputField
              label="Full name"
              name="fullName"
              placeholder="Alex Carter"
              required
              value={form.fullName}
              onChange={onChange('fullName')}
            />
            <InputField
              label="Phone number"
              name="phone"
              placeholder="+1 (234) 567‑890"
              required
              value={form.phone}
              onChange={onChange('phone')}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="service"
                className="text-sm font-medium text-gray-200 tracking-wide"
              >
                Select service
              </label>
              <select
                id="service"
                name="service"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white shadow-sm focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
                value={form.serviceId}
                onChange={onChange('serviceId')}
              >
                <option value="" disabled>
                  {loadingServices ? 'Loading services…' : 'Choose a service'}
                </option>
                {!loadingServices &&
                  services.map((service) => (
                    <option key={service._id} value={service._id}>
                      {service.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Date"
                name="date"
                type="date"
                required
                value={form.date}
                onChange={onChange('date')}
              />
              <InputField
                label="Time"
                name="time"
                type="time"
                required
                value={form.time}
                onChange={onChange('time')}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="notes"
              className="text-sm font-medium text-gray-200 tracking-wide"
            >
              Notes (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Tell us about your preferred style, barber, or any details we should know."
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 shadow-sm focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
              value={form.notes}
              onChange={onChange('notes')}
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" className="w-full sm:w-auto" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Submit Booking'}
            </Button>
            <p className="text-xs text-gray-400 sm:text-right">
              Bookings are stored in MongoDB. Admin can review them instantly.
            </p>
          </div>
        </form>
      </section>

      <aside className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-black/40 to-black/80 p-6 text-sm text-gray-200">
        <h2 className="text-base font-semibold text-white">
          Studio details & timings
        </h2>
        <div className="space-y-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              Address
            </p>
            <p className="mt-1">
              21 King Street, Downtown
              <br />
              City Center, 10010
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              Opening hours
            </p>
            <p className="mt-1">
              Tue – Fri: 09:00 – 21:00
              <br />
              Sat – Sun: 10:00 – 19:00
              <br />
              Monday closed
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              Contact
            </p>
            <p className="mt-1">
              Phone:{' '}
              <span className="text-brand-gold font-medium">
                +1 (234) 567‑890
              </span>
              <br />
              Email:{' '}
              <span className="text-brand-gold font-medium">
                hello@solunbarber.com
              </span>
            </p>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default BookAppointment
