import { useFadeIn } from "../hooks/useFadeIn"
import profile from "../data/profile.json"

export default function About() {
  const { ref, isVisible } = useFadeIn()
  const { about, profileImage } = profile

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className={`max-w-7xl mx-auto px-8 pt-32 pb-20 mb-32 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 relative">
          <div className="relative z-10 rounded-xl overflow-hidden aspect-[4/5] bg-surface-container shadow-2xl">
            <img
              src={profileImage}
              alt={`${profile.name} - ${about.subtitle}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary opacity-40"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary opacity-40"></div>
        </div>

        <div className="lg:col-span-7 pt-4">
          <span className="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
            {about.subtitle}
          </span>
          <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight"
            dangerouslySetInnerHTML={{
              __html: about.headline.replace(/(\S+)\s+(\S+)\s+(.*)/, '$1 <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">$2</span> $3')
            }}
          ></h1>

          <div className="space-y-8 text-on-surface-variant leading-relaxed">
            <div className="glass-card p-6 rounded-lg border-l-4 border-primary/40">
              <h3 className="font-headline text-on-surface font-bold text-xl mb-2 italic">{about.experience.title}</h3>
              <p>{about.experience.text}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-headline text-on-surface font-bold text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">interests</span>
                  {about.interests.title}
                </h3>
                <p className="text-sm">{about.interests.text}</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-headline text-on-surface font-bold text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">track_changes</span>
                  {about.goals.title}
                </h3>
                <p className="text-sm">{about.goals.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
