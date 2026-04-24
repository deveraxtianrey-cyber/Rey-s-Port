import { Grid, Twitter, Linkedin, Dribbble } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 bg-background-dark mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="Logo" className="size-6 object-contain" />
          <span className="font-bold text-white">Hub</span>
        </Link>

        <p className="text-slate-500 text-sm">© 2026 Christian Rey M. De Vera. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-white transition-colors">
            <Twitter className="size-5" />
          </a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">
            <Linkedin className="size-5" />
          </a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">
            <Dribbble className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
