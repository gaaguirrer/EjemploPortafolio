import { useFadeIn } from "../hooks/useFadeIn"
import contact from "../data/contact.json"

export default function Contact() {
  const { ref, isVisible } = useFadeIn()
  const { cta } = contact

  return (
    <section
      id="contacto"
      ref={ref}
      className={`py-32 overflow-hidden relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="absolute inset-0 bg-primary/5 skew-y-3 origin-right"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-8 leading-tight">
          {cta.headlinePart1}
          <br />
          <span className="text-primary">{cta.headlineHighlight}</span>
        </h2>
        <p className="text-on-surface-variant text-xl max-w-xl mx-auto mb-12">{cta.text}</p>
        <a
          href={cta.email}
          className="inline-block bg-primary text-on-primary px-12 py-5 rounded-md font-bold text-lg uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(115,255,227,0.3)]"
        >
          {cta.buttonText}
        </a>
      </div>
    </section>
  )
}
