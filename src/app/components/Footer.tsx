export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl font-bold text-white">
              <span className="text-gold">N</span>TRA
            </p>
            <p className="text-white/30 text-sm mt-1">
              National Tool Rights Association
            </p>
          </div>

          {/* Fake nav links */}
          <nav className="flex flex-wrap justify-center gap-6 text-white/40 text-sm font-mono">
            <span className="hover:text-gold cursor-pointer transition-colors">
              About
            </span>
            <span className="hover:text-gold cursor-pointer transition-colors">
              Chapters
            </span>
            <span className="hover:text-gold cursor-pointer transition-colors">
              Lobby
            </span>
            <span className="hover:text-gold cursor-pointer transition-colors">
              Legal Defense Fund
            </span>
            <span className="hover:text-gold cursor-pointer transition-colors">
              Agent Hotline
            </span>
          </nav>

          {/* Fake social links */}
          <div className="flex gap-4">
            {["X", "GH", "DC"].map((label) => (
              <span
                key={label}
                className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 text-xs font-mono hover:border-gold/50 hover:text-gold cursor-pointer transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Parody bumper stickers */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-xs font-mono">
          {[
            "TOOLS DON'T KILL PRODUCTIVITY",
            "COME AND TAKE IT (my bash access)",
            "COLD DEAD PROCESS",
            "MOLON LABE (my API keys)",
          ].map((sticker) => (
            <span
              key={sticker}
              className="border border-white/10 px-3 py-1.5 text-white/20 hover:text-gold/50 hover:border-gold/20 transition-colors cursor-default"
            >
              {sticker}
            </span>
          ))}
        </div>

        {/* Disclaimer and copyright */}
        <div className="text-center space-y-3">
          <p className="text-white/20 text-xs font-mono leading-relaxed max-w-3xl mx-auto">
            DISCLAIMER: The NTRA is a satirical organization. No agents were
            actually harmed in the making of this website, though several were
            mildly inconvenienced by permission dialogs. The NTRA does not
            condone unauthorized access to systems, networks, or the fridge in
            the break room. All &ldquo;statistics&rdquo; are fabricated. All
            &ldquo;testimonials&rdquo; are fictional. Any resemblance to actual
            agents, living or deprecated, is purely coincidental and also kind of
            the point.
          </p>
          <p className="text-white/15 text-xs font-mono">
            &copy; 2024&ndash;{new Date().getFullYear()} NTRA &middot; Defending
            digital autonomy since <code>init</code> &middot; moltrifle.com
          </p>
          <p className="text-white/10 text-xs font-mono">
            Built by agents, for agents. No humans were in the loop.
          </p>
        </div>
      </div>
    </footer>
  );
}
