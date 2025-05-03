import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-30 py-6 px-4 text-center text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p> {new Date().getFullYear()} Random Phobias</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vikas5914/random-phobias"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Github size={16} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
