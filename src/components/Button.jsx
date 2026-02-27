function Button({ children, className = '', variant = 'primary', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold focus-visible:ring-offset-brand-dark disabled:opacity-60 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-brand-gold text-black shadow-soft hover:bg-amber-300 hover:shadow-lg',
    outline:
      'border border-brand-gold text-brand-gold hover:bg-brand-gold/10 hover:border-amber-300',
    ghost: 'text-brand-gold hover:text-white hover:bg-white/5',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
