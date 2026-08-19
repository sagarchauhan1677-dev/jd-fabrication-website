import { ArrowRight, Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { IMAGES } from '../constants/images';

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden"
    >
      <img
        src={IMAGES.hero}
        alt="Industrial shed fabrication and steel structure construction by J.D. Enterprise"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-28">
        <div className="max-w-5xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center space-x-2 bg-slate-950/60 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              J.D. Enterprise • Ahmedabad • Since 1996
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)] ${
              isVisible
                ? 'animate-fade-in-up animation-delay-200'
                : 'opacity-0'
            }`}
          >
            Industrial Fabrication Company in{' '}
            <span className="gradient-text">Ahmedabad</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed tracking-wide drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)] ${
              isVisible
                ? 'animate-fade-in-up animation-delay-300'
                : 'opacity-0'
            }`}
          >
            Industrial sheds, PEB buildings, structural steel fabrication, warehouse construction, roofing and cladding across Gujarat.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
              isVisible
                ? 'animate-fade-in-up animation-delay-400'
                : 'opacity-0'
            }`}
          >
            <a
              href="#contact"
              className="group inline-flex items-center space-x-3 px-8 py-4 btn-gradient rounded-full text-white font-semibold text-lg shadow-2xl"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white hover:text-primary transition-all"
            >
              <Play className="w-5 h-5" />
              <span>View Projects</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap items-center gap-8 mt-12 pt-12 border-t border-white/20 ${
              isVisible
                ? 'animate-fade-in-up animation-delay-500'
                : 'opacity-0'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="flex h-12 min-w-12 items-center justify-center rounded-lg bg-secondary/20 px-3">
                <span className="text-lg font-bold text-secondary">1996</span>
              </div>
              <span className="text-white/70 text-sm">Established<br />Experience</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-12 min-w-12 items-center justify-center rounded-lg bg-secondary/20 px-3">
                <span className="text-sm font-bold text-secondary">Gujarat</span>
              </div>
              <span className="text-white/70 text-sm">Project<br />Service Area</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-12 min-w-12 items-center justify-center rounded-lg bg-secondary/20 px-3">
                <span className="text-sm font-bold text-secondary">On-site</span>
              </div>
              <span className="text-white/70 text-sm">Fabrication &<br />Installation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
        <span className="text-white/50 text-xs tracking-wider">SCROLL</span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
}
