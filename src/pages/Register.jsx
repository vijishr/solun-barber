import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import InputField from '../components/InputField.jsx'
import { registerUser } from '../services/api.js'

function Register() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setError('')
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    try {
      setLoading(true)
      await registerUser({ name: fullName, email, phone, password })
      navigate('/my-bookings')
    } catch (err) {
      setError(err?.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md space-y-8">
      <header className="space-y-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
          Create account
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Set up your profile.
        </h1>
        <p className="text-sm text-gray-300">
          Save your details for faster booking next time.
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
          label="Full name"
          name="fullName"
          placeholder="Alex Carter"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
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
          label="Phone"
          name="phone"
          placeholder="+1 (234) 567‑890"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Create a password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          placeholder="Repeat your password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Creating account…' : 'Register'}
        </Button>
      </form>

      <p className="text-center text-sm text-gray-300">
        Already have an account?{' '}
        <Link to="/login" className="text-brand-gold hover:text-amber-300">
          Login
        </Link>
      </p>
    </div>
  )
}

export default Register
