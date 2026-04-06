import { useFadeIn } from "../hooks/useFadeIn"
import projectsData from "../data/projects.json"

export default function Projects() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="proyectos"
      ref={ref}
      className={`py-32 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <span className="text-primary font-label uppercase tracking-[0.2em] text-xs">
              {projectsData.portfolioLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">
              {projectsData.title}
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label uppercase text-xs tracking-widest"
          >
            {projectsData.exploreAllLabel}{" "}
            <span className="material-symbols-outlined">north_east</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projectsData.items.map((project) => {
            const colSpan = project.size === "large" ? "md:col-span-8" : "md:col-span-4"

            return (
              <div
                key={project.title}
                className={`${colSpan} group relative rounded-xl overflow-hidden bg-surface-container border border-outline-variant/10 h-[400px]`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 space-y-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-label uppercase tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className={`${project.size === "large" ? "text-3xl" : "text-2xl"} font-headline font-bold`}>
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-on-surface-variant max-w-md">{project.description}</p>
                  )}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-primary text-sm font-label uppercase tracking-widest hover:text-primary-dim transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">code</span>
                      Codigo
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 text-secondary text-sm font-label uppercase tracking-widest hover:text-secondary-dim transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
