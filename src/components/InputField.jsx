function InputField({
  label,
  name,
  type = 'text',
  className = '',
  required,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-200 tracking-wide"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-gray-400 shadow-sm focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
        {...props}
      />
    </div>
  )
}

export default InputField
