function About() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
          About
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          A modern studio with classic craft.
        </h1>
        <p className="text-sm text-gray-300">
          Solun Barber Studio was created for people who care about detail –
          from the cut itself to the way they book it.
        </p>
      </header>

      <div className="space-y-6 text-sm text-gray-200">
        <p>
          We combine classic barbering traditions with a minimal, contemporary
          space. Every visit is designed to feel intentional – your time is
          respected, your style is understood, and your experience is elevated
          from the moment you reserve your slot.
        </p>
        <p>
          Our barbers specialize in precision fades, tailored scissor work, and
          beard detailing that works with your natural growth, not against it.
          We keep session volumes low so we never have to rush the chair.
        </p>
        <p>
          This booking interface is a front‑end concept showing how a premium
          barber experience can feel online before you even step through the
          door.
        </p>
      </div>

      <div className="grid gap-4 rounded-3xl border border-white/10 bg-black/40 p-6 text-sm text-gray-200 sm:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Experience
          </p>
          <p className="mt-2 text-lg font-semibold text-white">10+ years</p>
          <p className="mt-1 text-xs text-gray-400">
            of combined professional barbering in top city studios.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Focus
          </p>
          <p className="mt-2 text-lg font-semibold text-white">Detail first</p>
          <p className="mt-1 text-xs text-gray-400">
            Every line, fade, and finish is considered from all angles.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Atmosphere
          </p>
          <p className="mt-2 text-lg font-semibold text-white">Calm & modern</p>
          <p className="mt-1 text-xs text-gray-400">
            Clean design, curated music, and a relaxed pace.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
