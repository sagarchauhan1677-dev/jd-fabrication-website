import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  User,
  Building2,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SAGARSINH_PHONE = '919099099916';
const HARDIKSINH_PHONE = '919409119219';
const WA_MESSAGE = encodeURIComponent(
  'Hello J.D Enterprise! I would like to inquire about your industrial fabrication services.'
);

const contacts = [
  {
    name: 'Sagarsinh Chauhan',
    role: 'managing director',
    phone: '+91 90990 99916',
    phoneRaw: '+919099099916',
    whatsapp: `https://wa.me/${SAGARSINH_PHONE}?text=${WA_MESSAGE}`,
    initials: 'SC',
    color: 'from-secondary to-orange-600',
  },
  {
    name: 'Hardiksinh Chauhan',
    role: 'Director',
    phone: '+91 94091 19219',
    phoneRaw: '+919409119219',
    whatsapp: `https://wa.me/${HARDIKSINH_PHONE}?text=${WA_MESSAGE}`,
    initials: 'HC',
    color: 'from-accent to-blue-700',
  },
];

const infoCards = [
  {
    icon: MapPin,
    title: 'Our Location',
    lines: ['17/A J.D Enterprise, Shahpur Society,', 'Opp Master Colony, Ahmedabad,', 'Gujarat — 380004'],
    action: {
      href: 'https://maps.google.com/?q=Shahpur+Society,Opp+Master+Colony,Ahmedabad+380004',
      label: 'Get Directions',
    },
    badge: null as string | null,
    bg: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
  {
    icon: Mail,
    title: 'Email Address',
    lines: ['jd1677@jdfabrication.co.in'],
    action: { href: 'mailto:jd1677@jdfabrication.co.in', label: 'Send Email' },
    badge: null as string | null,
    bg: 'bg-accent/10',
    iconColor: 'text-accent',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['We never close — reach us any time,', 'any day of the year.'],
    action: null,
    badge: '24 / 7',
    bg: 'bg-green-500/10',
    iconColor: 'text-green-600',
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center space-x-2 mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="w-8 h-0.5 bg-secondary" />
            <span className="text-secondary font-medium text-sm tracking-wider uppercase">Contact Us</span>
            <span className="w-8 h-0.5 bg-secondary" />
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 ${isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
            Let's Build Something{' '}
            <span className="text-secondary">Great Together</span>
          </h2>
          <p className={`text-gray-500 text-lg ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            Reach out to our team for a free consultation and project quote.
          </p>
        </div>

        {/* ── Personal Contact Cards ── */}
        <div className={`grid sm:grid-cols-2 gap-5 mb-10 ${isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
          {contacts.map((c) => (
            <div
              key={c.name}
              className="group relative bg-primary rounded-2xl p-6 overflow-hidden shadow-xl border border-white/5 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Gradient glow */}
              <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${c.color} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />

              <div className="relative flex items-start gap-5">
                {/* Avatar */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-heading font-bold text-lg">{c.initials}</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-0.5">{c.role}</p>
                  <h3 className="font-heading text-white text-xl font-bold mb-3">{c.name}</h3>

                  <div className="flex flex-wrap gap-2">
                    {/* Call button */}
                    <a
                      href={`tel:${c.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm font-medium transition-all duration-200"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{c.phone}</span>
                    </a>

                    {/* WhatsApp button */}
                    <a
                      href={c.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/30 rounded-lg text-[#4ade80] text-sm font-medium transition-all duration-200"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Info Strip ── */}
        <div className={`grid sm:grid-cols-3 gap-5 mb-12 ${isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center mb-4`}>
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-heading font-bold text-primary">{card.title}</h4>
                {card.badge && (
                  <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full leading-none">
                    {card.badge}
                  </span>
                )}
              </div>
              {card.lines.map((line, i) => (
                <p key={i} className="text-gray-500 text-sm leading-relaxed">{line}</p>
              ))}
              {card.action && (
                <a
                  href={card.action.href}
                  className={`inline-flex items-center gap-1 mt-3 text-xs font-semibold ${card.iconColor} hover:underline`}
                >
                  {card.action.label} &rarr;
                </a>
              )}
            </div>
          ))}
        </div>

        {/* ── Form + Map ── */}
        <div className={`grid lg:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-orange-400 to-accent rounded-t-2xl" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Send className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary">Send a Message</h3>
                <p className="text-gray-400 text-sm">We're available 24/7 — always here for you</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5 shadow-inner">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-primary mb-2">Message Sent!</h4>
                <p className="text-gray-500 text-center max-w-xs">
                  Thank you for reaching out. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-secondary">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-gray-800 placeholder:text-gray-400 text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone <span className="text-secondary">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-gray-800 placeholder:text-gray-400 text-sm"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-gray-800 placeholder:text-gray-400 text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Service Required
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-gray-700 text-sm appearance-none bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="industrial-shed">Industrial Shed Fabrication</option>
                        <option value="peb-buildings">PEB Buildings</option>
                        <option value="steel-fabrication">Steel Fabrication</option>
                        <option value="warehouse">Warehouse Construction</option>
                        <option value="roofing">Roofing & Cladding</option>
                        <option value="custom">Custom Steel Structures</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Project Details <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none text-gray-800 placeholder:text-gray-400 text-sm"
                    placeholder="Tell us about your project — size, location, requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 btn-gradient rounded-xl text-white font-bold text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to be contacted by J.D Enterprise.
                </p>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="flex flex-col gap-5">
            {/* Company identity card */}
            <div className="bg-primary rounded-2xl p-6 flex items-start gap-4 shadow-xl">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-heading text-white text-lg font-bold">J.D Enterprise</h4>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  17/A Shahpur Society, Opp Master Colony,<br />
                  Ahmedabad, Gujarat — 380004
                </p>
                <a
                  href="mailto:jd1677@jdfabrication.co.in"
                  className="inline-flex items-center gap-1.5 mt-3 text-secondary text-sm font-medium hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  jd1677@jdfabrication.co.in
                </a>
              </div>
            </div>

            {/* Map Button */}
            <a
              href="https://maps.app.goo.gl/YDtCS6eDoUxeNy787"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-br from-secondary to-orange-600 rounded-2xl overflow-hidden shadow-lg border border-orange-300 min-h-[300px] flex items-center justify-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center px-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white text-2xl font-heading font-bold mb-2">View on Google Maps</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  17/A Shahpur Society<br />
                  Opp Master Colony, Ahmedabad<br />
                  Gujarat — 380004
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-secondary font-semibold text-sm group-hover:bg-gray-100 transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>Open Location</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
