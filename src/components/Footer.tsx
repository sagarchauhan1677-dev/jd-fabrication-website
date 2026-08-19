import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Industrial Shed Fabrication',
  'PEB Buildings',
  'Steel Fabrication',
  'Warehouse Construction',
  'Roofing & Cladding',
  'Custom Steel Structures',
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/Jashdhan1998', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/j.d.enterprise1677/', label: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10" />

      <div className="relative max-w-8xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/jd-enterprise-logo.svg"
                alt="J.D. Enterprise – Just Think We Do"
                className="h-28 w-auto max-w-full object-contain rounded-2xl bg-white/95 p-3 shadow-2xl"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Leading industrial fabrication and construction company in India, delivering premium quality engineering solutions since 1996.
            </p>
            <p className="text-white text-sm font-medium mb-3">Follow us</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex items-center justify-center p-3 bg-white/15 border border-white/20 text-white rounded-xl shadow-sm transition-all duration-300 hover:bg-white hover:text-primary"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary -mb-2" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300 text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary -mb-2" />
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary -mb-2" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  17/A J.D Enterprise, Shahpur Society,<br />
                  Opp Master Colony, Ahmedabad,<br />
                  Gujarat — 380004
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919099099916" className="text-gray-300 text-sm hover:text-secondary transition-colors">
                    +91 90990 99916
                  </a>
                  <a href="tel:+919409119219" className="text-gray-300 text-sm hover:text-secondary transition-colors">
                    +91 94091 19219
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:sagar.chauhan@jdfabrication.co.in" className="text-gray-300 text-sm hover:text-secondary transition-colors">
                  sagar.chauhan@jdfabrication.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {currentYear} J.D Enterprise. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
