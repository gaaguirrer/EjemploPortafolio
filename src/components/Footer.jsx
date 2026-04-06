import contact from "../data/contact.json"

export default function Footer() {
  const { footer } = contact

  return (
    <footer className="bg-[#131313] w-full py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="text-lg font-black text-white font-headline">{footer.brand}</div>

        <div className="flex gap-8">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-500 hover:text-[#00F5D4] transition-colors font-body text-sm uppercase tracking-[0.05em] opacity-80 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-gray-500 font-body text-xs uppercase tracking-[0.05em]">
          © {footer.copyright}
        </div>
      </div>
    </footer>
  )
}
