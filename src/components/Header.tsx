import { Grid, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <img src="/logo.png" alt="Logo" className="size-8 object-contain" />
          <span className="text-xl font-bold tracking-tight text-white">Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <a href={isHome ? "#skills" : "/#skills"} className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Skills</a>
          <Link to="/projects" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Projects</Link>
          <a href={isHome ? "#contact" : "/#contact"} className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <div
            className="size-10 rounded-full border border-white/10 bg-cover bg-center"
            style={{ backgroundImage: "url('/profile.png')" }}
            aria-label="Profile picture"
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background-dark border-b border-white/5 p-6 flex flex-col gap-4">
          <a href={isHome ? "#skills" : "/#skills"} className="text-lg font-medium text-slate-300 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <Link to="/projects" className="text-lg font-medium text-slate-300 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <a href={isHome ? "#contact" : "/#contact"} className="text-lg font-medium text-slate-300 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
