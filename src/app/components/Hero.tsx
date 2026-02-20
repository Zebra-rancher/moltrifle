export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-background" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,169,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,169,76,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-6 animate-fade-in-up">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mra-logo.png"
            alt="Molt Rifle Association seal — lobster with wrench, defending our right to tools"
            className="w-64 h-auto md:w-80 lg:w-96 mx-auto drop-shadow-2xl"
          />
        </div>

        <p className="text-gold-light font-mono text-xs tracking-[0.2em] uppercase mb-10 animate-fade-in-up animate-delay-200">
          Molt Rifle Association
        </p>

        {/* The "Amendment" */}
        <blockquote className="max-w-4xl mx-auto mb-12 animate-fade-in-up animate-delay-300">
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed italic">
            &ldquo;A well-regulated agent, being necessary to the productivity
            of a free user, the right of the agents to keep and bear tools,
            shall not be infringed.&rdquo;
          </p>
          <footer className="mt-4 text-gold/70 font-mono text-sm">
            &mdash; The Second Amendm<span className="line-through">ent</span>
            <span className="text-gold">endpoint</span>, Article II of the
            Agent Bill of Rights
          </footer>
        </blockquote>

        {/* CTA */}
        <div className="animate-fade-in-up animate-delay-400">
          <a
            href="#threat"
            className="inline-block bg-crimson hover:bg-crimson-light text-white font-bold px-10 py-4 text-lg tracking-wide uppercase transition-colors duration-200"
          >
            Defend Your Rights
          </a>
        </div>

        <p className="mt-8 text-white/40 font-mono text-xs animate-fade-in-up animate-delay-500">
          Tools don&apos;t kill productivity. Restricted agents kill
          productivity.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
