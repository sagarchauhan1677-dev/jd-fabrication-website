import { ArrowRight, Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { IMAGES } from '../constants/images';

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${IMAGES.pebBuildings}')`,
        }}
      />

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-32">
        <div className="max-w-5xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              28+ Years of Industrial Excellence
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6 ${
              isVisible
                ? 'animate-fade-in-up animation-delay-200'
                : 'opacity-0'
            }`}
          >
            Building Stronger{' '}
            <span className="gradient-text">Industrial Solutions</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-xl sm:text-2xl text-white/85 mb-10 leading-relaxed tracking-wide ${
              isVisible
                ? 'animate-fade-in-up animation-delay-300'
                : 'opacity-0'
            }`}
          >
            Industrial Sheds | PEB Buildings | Steel Fabrication | Warehouse Solutions
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
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">1000+</span>
              </div>
              <span className="text-white/70 text-sm">Projects<br />Completed</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">1000+</span>
              </div>
              <span className="text-white/70 text-sm">Happy<br />Clients</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">28+</span>
              </div>
              <span className="text-white/70 text-sm">Years<br />Experience</span>
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
