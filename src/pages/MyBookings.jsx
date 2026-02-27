import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchMyBookings } from '../services/api.js'

function MyBookings() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let alive = true
    const load = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        if (alive) {
          setLoading(false)
          setBookings([])
        }
        return
      }

      try {
        setLoading(true)
        setError('')
        const data = await fetchMyBookings()
        if (alive) setBookings(data)
      } catch (err) {
        if (alive)
          setError(err?.response?.data?.message || 'Failed to load bookings')
      } finally {
        if (alive) setLoading(false)
      }
    }
    load()
    return () => {
      alive = false
    }
  }, [])

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
          My bookings
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Your upcoming visits.
        </h1>
        <p className="text-sm text-gray-300">
          View your bookings pulled from the backend.
        </p>
      </header>

      <div className="space-y-3 rounded-3xl border border-white/10 bg-black/40 p-6 shadow-soft">
        {!localStorage.getItem('token') ? (
          <p className="text-sm text-gray-300">
            Please{' '}
            <Link to="/login" className="text-brand-gold hover:text-amber-300">
              login
            </Link>{' '}
            to view your bookings.
          </p>
        ) : loading ? (
          <p className="text-sm text-gray-300">Loading bookings…</p>
        ) : error ? (
          <p className="text-sm text-red-300">{error}</p>
        ) : bookings.length === 0 ? (
          <p className="text-sm text-gray-300">
            You don&apos;t have any bookings yet. Book your first appointment to
            see it here.
          </p>
        ) : (
          <ul className="space-y-4">
            {bookings.map((booking) => (
              <li
                key={booking._id}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-base font-semibold text-white">
                    {booking.serviceId?.name || 'Service'}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Status: {booking.status}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="space-y-0.5 text-xs text-gray-300">
                    <p>
                      Date:{' '}
                      <span className="font-medium text-white">
                        {booking.date}
                      </span>
                    </p>
                    <p>
                      Time:{' '}
                      <span className="font-medium text-white">
                        {booking.time}
                      </span>
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      booking.status === 'approved'
                        ? 'bg-emerald-500/15 text-emerald-300'
                        : booking.status === 'cancelled'
                          ? 'bg-red-500/15 text-red-300'
                          : 'bg-amber-500/15 text-amber-300'
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default MyBookings
