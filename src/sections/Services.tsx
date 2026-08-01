import {
  Factory,
  Building,
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
      "We design and construct high-quality Industrial Sheds, Factory Sheds, Warehouse Sheds and Puff Panel Sheds with durable steel structures, ensuring maximum strength, efficiency and long-term performance for industrial applications across Gujarat.",
    image: IMAGES.industrialSheds,
  },
  {
    icon: Building,
    title: "PEB Buildings",
    description:
      "Our Pre-Engineered Building (PEB) solutions provide fast construction, cost-effective designs and long-lasting structural performance for factories, warehouses, industrial units and commercial buildings.",
    image: IMAGES.pebBuildings,
  },
  {
    icon: Wrench,
    title: "Steel Fabrication",
    description:
      "Professional Steel Fabrication, MS Fabrication, Structural Steel Fabrication, Heavy Fabrication and Custom Metal Fabrication services for industrial projects using high-quality materials and precision engineering.",
    image: IMAGES.steelFabrication,
  },
  {
    icon: Warehouse,
    title: "Warehouse Construction",
    description:
      "Complete Warehouse Construction solutions including structural steel work, industrial roofing, storage facilities and logistics infrastructure designed for maximum functionality and operational efficiency.",
    image: IMAGES.warehouse,
  },
  {
    icon: Home,
    title: "Roofing & Cladding",
    description:
      "Industrial Roofing Contractor specializing in Metal Roofing, Roofing Sheets, Cladding Systems, Tin Shed Fabrication and weather-resistant roofing solutions for factories, warehouses and commercial buildings.",
    image: IMAGES.roofing,
  },
  {
    icon: Layers,
    title: "Custom Steel Structures",
    description:
      "We manufacture custom steel structures including Mezzanine Floors, Canopies, Staircases, Railings, Gates, Conveyor Structures, Pipe Fabrication and other industrial fabrication solutions as per client requirements.",
    image: IMAGES.industrialSheds,
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />

      <div
        ref={ref}
        className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10 relative"
      >
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div
            className={`inline-flex items-center space-x-2 mb-4 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <span className="w-8 h-0.5 bg-secondary" />
            <span className="text-secondary font-medium text-sm tracking-wider uppercase">
              Our Services
            </span>
            <span className="w-8 h-0.5 bg-secondary" />
          </div>

          <h2
            className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 ${
              isVisible
                ? "animate-fade-in-up animation-delay-100"
                : "opacity-0"
            }`}
          >
            Steel Fabrication, Industrial Shed &{" "}
            <span className="text-secondary">PEB Building Services</span>
          </h2>

          <p
            className={`text-gray-600 text-lg ${
              isVisible
                ? "animate-fade-in-up animation-delay-200"
                : "opacity-0"
            }`}
          >
            J.D Enterprise provides complete Industrial Fabrication, Steel
            Fabrication, Structural Steel Work, PEB Buildings, Warehouse
            Construction, Roofing Solutions and Custom Metal Fabrication
            services across Ahmedabad and Gujarat with over 28 years of
            engineering excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} by J.D Enterprise in Ahmedabad, Gujarat`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />

                <div className="absolute bottom-4 left-4 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shadow-lg">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="mt-5 pt-5 border-t border-gray-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-secondary font-medium text-sm group-hover:text-primary transition-colors"
                  >
                    <span>Get a Quote</span>

                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";