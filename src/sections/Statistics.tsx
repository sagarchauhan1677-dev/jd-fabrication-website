import { useCountAnimation } from '../hooks/useScrollAnimation';
import { TrendingUp, Users, Calendar, Headphones } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: 1000,
    suffix: '+',
    label: 'Projects Completed',
    color: 'bg-secondary',
  },
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Happy Clients',
    color: 'bg-accent',
  },
  {
    icon: Calendar,
    value: 28,
    suffix: '+',
    label: 'Years Experience',
    color: 'bg-primary',
  },
  {
    icon: Headphones,
    value: 24,
    suffix: '/7',
    label: 'Support Available',
    color: 'bg-secondary',
  },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const { count, ref } = useCountAnimation(stat.value);

  return (
    <div
      ref={ref}
      className="text-center"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div
        className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
      >
        <stat.icon className="w-8 h-8 text-white" />
      </div>

      <div className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-2">
        {count}
        <span className="text-secondary">{stat.suffix}</span>
      </div>

      <p className="text-gray-600 font-medium">{stat.label}</p>
    </div>
  );
}
