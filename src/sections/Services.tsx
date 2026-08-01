import { Link } from "react-router-dom";
import {
  Factory,
  Building2,
  Wrench,
  Warehouse,
  Home,
  Layers,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { IMAGES } from "../constants/images";

const services = [
  {
    icon: Factory,
    title: "Industrial Shed Fabrication",
    description:
      "Custom industrial and factory shed solutions with durable steel structures for long-term performance across Gujarat.",
    image: IMAGES.industrialSheds,
    link: "/services/industrial-shed-fabrication",
  },
  {
    icon: Building2,
    title: "PEB Buildings",
    description:
      "Fast-delivery pre-engineered building systems for factories, warehouses and industrial campuses.",
    image: IMAGES.pebBuildings,
    link: "/services/peb-buildings",
  },
  {
    icon: Wrench,
    title: "Steel Fabrication",
    description:
      "Precision structural and custom steel fabrication for demanding industrial projects and plant infrastructure.",
    image: IMAGES.steelFabrication,
    link: "/services/steel-fabrication",
  },
  {
    icon: Warehouse,
    title: "Warehouse Construction",
    description:
      "Turnkey warehouse construction with planning, engineering, roofing and steel work tailored to logistics needs.",
    image: IMAGES.warehouse,
    link: "/services/warehouse-construction",
  },
  {
    icon: Home,
    title: "Roofing & Cladding",
    description:
      "Weather-resistant roofing and cladding systems for industrial facilities, plants and large-span buildings.",
    image: IMAGES.roofing,
    link: "/services/roofing-cladding",
  },
  {
    icon: Layers,
    title: "Structural Works",
    description:
      "Engineering-led structural steel works designed for robust industrial and commercial construction projects.",
    image: IMAGES.industrialSheds,
    link: "/services/structural-works",
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="relative overflow-hidden bg-gray-50 py-20 lg:py-28">
      <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div ref={ref} className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className={`mb-4 inline-flex items-center space-x-2 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <span className="h-0.5 w-8 bg-secondary" />
            <span className="text-sm font-medium uppercase tracking-wider text-secondary">Our Services</span>
            <span className="h-0.5 w-8 bg-secondary" />
          </div>

          <h2 className={`mb-6 font-heading text-3xl font-bold text-primary sm:text-4xl lg:text-5xl ${isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"}`}>
            Industrial fabrication and construction services for Ahmedabad and Gujarat
          </h2>

          <p className={`text-lg text-gray-600 ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}>
            J.D Enterprise offers complete industrial fabrication, steel work, PEB, warehouse and roofing solutions designed for long-term performance and reliable project delivery.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm card-hover ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={service.image} alt={`${service.title} by J.D Enterprise in Ahmedabad, Gujarat`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary shadow-lg">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 font-heading text-xl font-bold text-primary transition-colors group-hover:text-secondary">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>

                  <div className="mt-5 border-t border-gray-100 pt-5">
                    <Link to={service.link} className="inline-flex items-center space-x-2 text-sm font-medium text-secondary transition-colors group-hover:text-primary">
                      <span>Learn More</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
            View All Services
            <span className="text-orange-400">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}