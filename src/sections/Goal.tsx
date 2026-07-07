import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Goal() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="goal" className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={ref}
            className={`rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-white transition-opacity duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative h-[520px] sm:h-[580px] lg:h-[640px] bg-slate-100 flex items-center justify-center">
              <img
                src="/images/Father.jpg.JPG"
                alt="Dhanrajsinh Chauhan"
                className="max-h-full max-w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-950/90 px-6 py-5">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Founder & Inspiration</p>
                <p className="text-3xl sm:text-4xl font-semibold text-white mt-2">Dhanrajsinh Chauhan</p>
              </div>
            </div>
          </div>

          <div
            className={`space-y-6 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } transition-opacity duration-700 delay-150`}
          >
            <div className="inline-flex items-center space-x-3">
              <span className="w-10 h-0.5 bg-secondary" />
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                Our Goal
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Building the future with <span className="text-secondary">family values</span> and legacy.
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
              Our goal is to continue the hard work started by our family and deliver strong, reliable industrial solutions with honesty, quality, and care. This section highlights the values behind our business and the inspiration we carry forward.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
                <p className="text-slate-900 font-semibold text-lg">Family Values</p>
                <p className="text-slate-500 text-sm mt-2">Every project is rooted in our father’s hard work, discipline, and trust.</p>
              </div>
              <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
                <p className="text-slate-900 font-semibold text-lg">Quality First</p>
                <p className="text-slate-500 text-sm mt-2">We aim for workmanship that honors our past and sets the standard for the future.</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full btn-gradient text-white font-semibold"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
