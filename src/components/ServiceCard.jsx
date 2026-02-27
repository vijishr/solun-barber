import Button from './Button.jsx'

function ServiceCard({ name, price, duration, description }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/5 via-white/0 to-white/5 border border-white/10 p-6 shadow-soft backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-wide text-white">
            {name}
          </h3>
          <p className="mt-1 text-sm text-gray-300">{description}</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="space-y-0.5">
            <p className="text-brand-gold font-semibold">{price}</p>
            <p className="text-gray-400">{duration}</p>
          </div>
          <Button className="text-xs sm:text-sm">Book Service</Button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
