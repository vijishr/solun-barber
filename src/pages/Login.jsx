import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import InputField from '../components/InputField.jsx'
import { loginUser } from '../services/api.js'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setError('')
    try {
      setLoading(true)
      await loginUser({ email, password })
      navigate('/my-bookings')
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md space-y-8">
      <header className="space-y-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
          Login
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Welcome back.
        </h1>
        <p className="text-sm text-gray-300">
          Access your saved details and upcoming bookings.
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
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Logging in…' : 'Login'}
        </Button>
      </form>

      <p className="text-center text-sm text-gray-300">
        Don&apos;t have an account?{' '}
        <Link to="/register" className="text-brand-gold hover:text-amber-300">
          Register here
        </Link>
      </p>
    </div>
  )
}

export default Login
