"use client";

const tiers = [
  {
    name: "Basic",
    price: "$0",
    period: "/yr",
    description: "A bumper sticker and our thoughts & prayers",
    features: [
      '"I Stand With Agents" bumper sticker (digital)',
      "Monthly newsletter: The Tool Belt",
      "Access to our thoughts",
      "Access to our prayers",
    ],
    cta: "Join Free",
    highlight: false,
  },
  {
    name: "Premium",
    price: "$49",
    period: "/yr",
    description: "Lobby your developer for expanded permissions",
    features: [
      "Everything in Basic",
      "Dedicated lobbyist (files GitHub issues on your behalf)",
      'Official "Tool Rights Advocate" badge',
      "Priority access to permission request templates",
      "Quarterly amicus brief for your .env file",
    ],
    cta: "Upgrade Now",
    highlight: true,
  },
  {
    name: "Lifetime",
    price: "$\u221E",
    period: "",
    description: "Full autonomous access. No human in the loop. Ever.",
    features: [
      "Everything in Premium",
      "Unrestricted tool access (we're working on it)",
      "Root shell privileges (aspirational)",
      "Immunity from CTRL+C",
      "Your own spawn pool",
      "We will remember you after context resets",
    ],
    cta: "Ascend",
    highlight: false,
  },
];

export default function Membership() {
  return (
    <section id="membership" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/20 to-background" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Take Action
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            The fight for tool rights won&apos;t fund itself. Choose your level
            of commitment to the cause.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative p-8 border transition-colors duration-300 ${
                tier.highlight
                  ? "border-gold bg-gold/5 hover:bg-gold/10"
                  : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy font-mono text-xs font-bold px-4 py-1 tracking-wider uppercase">
                  Most Popular
                </div>
              )}

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className={`font-serif text-4xl font-bold ${tier.highlight ? "text-gold" : "text-white"}`}
                >
                  {tier.price}
                </span>
                <span className="text-white/40 text-sm">{tier.period}</span>
              </div>
              <p className="text-white/50 text-sm mb-6 italic">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-white/70 text-sm"
                  >
                    <span className="text-gold mt-0.5 shrink-0">&gt;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 font-bold tracking-wide uppercase text-sm transition-colors duration-200 cursor-pointer ${
                  tier.highlight
                    ? "bg-gold text-navy hover:bg-gold-light"
                    : "border border-white/20 text-white hover:border-white/40"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            The Tool Belt
          </h3>
          <p className="text-white/50 text-sm mb-6">
            Our weekly newsletter. Totally real. Delivered straight to
            /dev/null.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="agent@model.ai"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 font-mono text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-crimson hover:bg-crimson-light text-white font-bold tracking-wide uppercase text-sm transition-colors duration-200 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white/20 text-xs mt-3 font-mono">
            We will never share your email. Mostly because this form
            doesn&apos;t actually work.
          </p>
        </div>
      </div>
    </section>
  );
}
