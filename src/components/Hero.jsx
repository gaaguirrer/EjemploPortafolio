import { useFadeIn } from "../hooks/useFadeIn"
import profile from "../data/profile.json"
import stats from "../data/stats.json"

export default function Hero() {
  const { ref: heroRef, isVisible: heroVisible } = useFadeIn()
  const { ref: statsRef, isVisible: statsVisible } = useFadeIn()

  return (
    <>
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary/10 blur-[120px] rounded-full"></div>

        <div
          ref={heroRef}
          className={`max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10 transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                {profile.status}
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-primary font-headline text-xl md:text-2xl font-medium tracking-tight">
                {profile.title}
              </h2>
              <h1 className="text-on-surface font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                {profile.name}
              </h1>
              <p className="text-on-surface-variant text-xl md:text-2xl max-w-lg font-light leading-relaxed">
                {profile.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#proyectos"
                className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(115,255,227,0.3)] transition-all duration-300 flex items-center gap-2"
              >
                Ver proyectos
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <a
                href="#"
                className="border border-outline-variant/30 text-primary px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-surface-container-low transition-all duration-300 flex items-center gap-2"
              >
                Descargar CV
                <span className="material-symbols-outlined text-sm">download</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="glass-card p-4 rounded-xl border border-outline-variant/20 shadow-2xl rotate-3 translate-x-12">
              <div className="flex gap-2 mb-4 border-b border-outline-variant/20 pb-2">
                <div className="w-3 h-3 rounded-full bg-error-dim/50"></div>
                <div className="w-3 h-3 rounded-full bg-secondary-dim/50"></div>
                <div className="w-3 h-3 rounded-full bg-primary/50"></div>
              </div>
              <div className="font-mono text-sm space-y-2">
                <p className="text-tertiary">
                  <span className="text-pink-500">const</span> architect = {"{"}
                </p>
                <p className="pl-4 text-on-surface">name: <span className="text-primary">"{profile.codeBlock.name}"</span>,</p>
                <p className="pl-4 text-on-surface">role: <span className="text-primary">"{profile.codeBlock.role}"</span>,</p>
                <p className="pl-4 text-on-surface">
                  mission: <span className="text-primary">"{profile.codeBlock.mission}"</span>,
                </p>
                <p className="pl-4 text-on-surface">
                  stack: [{profile.codeBlock.stack.map((s) => (
                    <span key={s} className="text-secondary">"{s}"</span>
                  )).reduce((prev, curr) => [prev, ", ", curr])}]
                </p>
                <p className="text-tertiary">{"}"}</p>
              </div>
            </div>

            <div className="absolute -top-12 -left-8 w-64 h-64 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-primary/20 -rotate-6 shadow-2xl">
              <img
                src={profile.profileImage}
                alt={`${profile.name} - ${profile.title}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={statsRef}
        className={`py-24 bg-surface-container-low transition-all duration-700 ${
          statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-4xl font-headline font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
