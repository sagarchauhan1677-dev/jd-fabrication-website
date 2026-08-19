import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { name: 'Industrial Shed Fabrication', href: '/services/industrial-shed-fabrication' },
  { name: 'PEB Buildings', href: '/services/peb-buildings' },
  { name: 'Steel Fabrication', href: '/services/steel-fabrication' },
  { name: 'Warehouse Construction', href: '/services/warehouse-construction' },
  { name: 'Roofing & Cladding', href: '/services/roofing-cladding' },
  { name: 'Structural Works', href: '/services/structural-works' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setShowServicesMenu(false);
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
          <Link to="/" className="group flex items-center gap-3" onClick={handleLinkClick}>
            <img
              src="/jd-enterprise-logo.svg"
              alt="J.D. Enterprise industrial fabrication and construction company"
              className="h-14 w-auto max-w-[200px] rounded-xl bg-white/95 px-2 py-1 object-contain shadow-lg transition-all duration-300 sm:h-16 sm:max-w-[250px] lg:h-20 lg:max-w-[290px]"
            />
            <span className={`hidden border-l-2 border-orange-500 pl-3 text-xs font-bold uppercase leading-5 tracking-[0.12em] xl:block ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              Industrial Fabrication
              <span className={`block font-medium normal-case tracking-normal ${isScrolled ? 'text-orange-600' : 'text-orange-300'}`}>
                &amp; Construction
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setShowServicesMenu(true)}
                    onMouseLeave={() => setShowServicesMenu(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setShowServicesMenu((prev) => !prev)}
                      className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        isScrolled ? 'text-gray-700 hover:text-primary hover:bg-gray-100' : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {showServicesMenu && (
                      <div className="absolute left-0 top-full z-50 pt-2">
                        <div className="w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              onClick={handleLinkClick}
                              className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-primary hover:bg-gray-100' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a href="tel:+919099099916" className="ml-4 hidden lg:inline-flex items-center space-x-2 rounded-full btn-gradient px-6 py-3 text-sm font-semibold text-white shadow-xl">
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className={`rounded-lg p-2 transition-colors duration-300 lg:hidden ${isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen ? 'mt-4 max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`space-y-2 rounded-xl p-4 ${isScrolled ? 'bg-gray-50' : 'bg-white/10 backdrop-blur-md'}`}>
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key={link.name} className="space-y-2">
                    <Link to={link.href} onClick={handleLinkClick} className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all ${isScrolled ? 'text-gray-700 hover:text-primary hover:bg-white' : 'text-white hover:bg-white/10'}`}>
                      {link.name}
                    </Link>
                    <div className="space-y-1 pl-3">
                      {serviceLinks.map((service) => (
                        <Link key={service.name} to={service.href} onClick={handleLinkClick} className={`block rounded-lg px-4 py-2 text-sm transition-all ${isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'}`}>
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link key={link.name} to={link.href} onClick={handleLinkClick} className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all ${isScrolled ? 'text-gray-700 hover:text-primary hover:bg-white' : 'text-white hover:bg-white/10'}`}>
                  {link.name}
                </Link>
              );
            })}
            <a href="tel:+919099099916" onClick={handleLinkClick} className="mt-4 flex items-center justify-center space-x-2 rounded-lg btn-gradient px-4 py-3 text-xs font-semibold text-white sm:text-sm">
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
