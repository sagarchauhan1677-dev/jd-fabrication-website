import {
  Award,
  Gem,
  Clock,
  IndianRupee,
  Settings,
  Shield,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const reasons = [
  {
    icon: Award,
    title: 'Experienced Engineers',
    description: 'Our team brings decades of collective expertise in industrial construction.',
  },
  {
    icon: Gem,
    title: 'Premium Quality Materials',
    description: 'We use only the finest materials ensuring durability and longevity.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We pride ourselves on meeting deadlines without compromising quality.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Competitive rates with transparent pricing and no hidden costs.',
  },
  {
    icon: Settings,
    title: 'Customized Solutions',
    description: 'Tailored designs to match your specific industrial requirements.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Strict safety protocols ensuring secure construction environments.',
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="why-us"
      className="py-20 lg:py-32 bg-primary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center space-x-2 mb-4 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <span className="w-8 h-0.5 bg-secondary" />
            <span className="text-secondary font-medium text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
            <span className="w-8 h-0.5 bg-secondary" />
          </div>

          <h2
            className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 ${
              isVisible
                ? 'animate-fade-in-up animation-delay-100'
                : 'opacity-0'
            }`}
          >
            Why Industries Trust{' '}
            <span className="text-secondary">J.D Enterprise</span>
          </h2>

          <p
            className={`text-gray-300 text-lg ${
              isVisible
                ? 'animate-fade-in-up animation-delay-200'
                : 'opacity-0'
            }`}
          >
            We combine expertise, quality, and dedication to deliver exceptional
            results that exceed expectations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${
                isVisible
                  ? 'animate-fade-in-up'
                : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                <reason.icon className="w-7 h-7 text-secondary" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
