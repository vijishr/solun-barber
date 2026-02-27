import { useEffect, useState } from 'react'
import ServiceCard from '../components/ServiceCard.jsx'
import { fetchServices } from '../services/api.js'

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let alive = true
    const load = async () => {
      try {
        setLoading(true)
        setError('')
        const data = await fetchServices()
        if (alive) setServices(data)
      } catch (err) {
        if (alive)
          setError(err?.response?.data?.message || 'Failed to load services')
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
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
          Services
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Choose your perfect service.
        </h1>
        <p className="max-w-2xl text-sm text-gray-300">
          Every appointment is crafted around detail, comfort, and time well
          spent. Explore our most popular options before you book.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading && (
          <div className="col-span-full text-sm text-gray-300">
            Loading services…
          </div>
        )}
        {!loading && error && (
          <div className="col-span-full text-sm text-red-300">{error}</div>
        )}
        {!loading && !error && services.length === 0 && (
          <div className="col-span-full text-sm text-gray-300">
            No services found. Ask the admin to add services.
          </div>
        )}
        {!loading &&
          !error &&
          services.map((service) => (
            <ServiceCard
              key={service._id}
              name={service.name}
              price={`$${service.price}`}
              duration={service.duration}
              description={service.description || '—'}
            />
          ))}
      </div>
    </div>
  )
}

export default Services
