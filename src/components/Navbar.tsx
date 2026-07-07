import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        isScrolled
          ? 'bg-white/95 shadow-2xl py-3'
          : 'bg-slate-900/30 py-3 sm:py-5'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <img
              src="/logo.png?v=2"
              alt="J.D Enterprise"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain rounded-2xl bg-white/90 p-1 shadow-lg transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919099099916"
              className="ml-4 hidden lg:inline-flex items-center space-x-2 px-6 py-3 rounded-full btn-gradient text-white font-semibold text-sm shadow-xl"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-primary hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`rounded-xl p-4 space-y-2 ${
              isScrolled ? 'bg-gray-50' : 'bg-white/10 backdrop-blur-md'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary hover:bg-white'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919099099916"
              onClick={handleLinkClick}
              className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg btn-gradient text-white font-semibold text-xs sm:text-sm mt-4"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
