import { useFadeIn } from "../hooks/useFadeIn"
import skillsData from "../data/skills.json"

const colorMap = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
}

const borderColorMap = {
  primary: "hover:border-primary/40",
  secondary: "hover:border-secondary/40",
  tertiary: "hover:border-tertiary/40",
}

export default function Skills() {
  const { ref, isVisible } = useFadeIn()
  const { techStack, softSkills } = skillsData

  return (
    <section
      id="habilidades"
      ref={ref}
      className={`bg-surface-container-low py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">{techStack.title}</h2>
            <p className="text-on-surface-variant">{techStack.subtitle}</p>
          </div>
          <div className="h-px flex-grow mx-8 bg-outline-variant/20 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStack.categories.map((category) => (
            <div key={category.title} className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <span className={`material-symbols-outlined ${colorMap[category.color]} text-3xl`}>
                  {category.icon}
                </span>
                <h3 className="font-headline text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="glass-card p-4 rounded-lg flex justify-between items-center group hover:bg-surface-container transition-all"
                  >
                    <span className="font-medium">{item.name}</span>
                    <span
                      className={`material-symbols-outlined ${colorMap[category.color]} group-hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="font-label text-tertiary uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
            {softSkills.subtitle}
          </span>
          <h2 className="font-headline text-4xl font-bold">{softSkills.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {softSkills.items.map((skill) => {
            const colSpan = skill.size === "wide" ? "md:col-span-2 lg:col-span-3" : "md:col-span-2 lg:col-span-2"
            const isSmall = skill.size === "small"

            return (
              <div
                key={skill.title}
                className={`${colSpan} ${
                  isSmall ? "bg-surface-container-high" : "bg-surface-container"
                } p-8 rounded-xl border border-outline-variant/10 ${borderColorMap[skill.color]} transition-all group`}
              >
                <span
                  className={`material-symbols-outlined ${colorMap[skill.color]} ${isSmall ? "text-4xl" : "text-4xl"} mb-${isSmall ? "4" : "6"}`}
                >
                  {skill.icon}
                </span>
                <h4 className={`font-headline ${isSmall ? "text-xl" : "text-2xl"} font-bold mb-${isSmall ? "2" : "3"}`}>
                  {skill.title}
                </h4>
                <p className={`text-on-surface-variant ${isSmall ? "text-sm" : ""} leading-relaxed`}>
                  {skill.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
