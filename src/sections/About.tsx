import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { IMAGES } from "../constants/images";

const highlights = [
  "Premium quality engineering solutions",
  "Timely project completion",
  "Customer satisfaction guaranteed",
  "Experienced team of professionals",
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50" />

      <div
        ref={ref}
        className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10 relative"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div
            className={`${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.roofing}
                  alt="Industrial steel fabrication project by J.D Enterprise in Ahmedabad, Gujarat"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-2xl shadow-xl p-6 max-w-[280px]">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary">
                      28+
                    </span>
                  </div>

                  <div>
                    <p className="font-heading font-bold text-primary text-lg">
                      Years
                    </p>
                    <p className="text-gray-500 text-sm">
                      of Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-secondary/20 rounded-2xl" />
              <div className="absolute -bottom-4 left-12 w-16 h-16 bg-secondary/10 rounded-xl" />
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            {/* Section Label */}
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="w-8 h-0.5 bg-secondary" />
              <span className="text-secondary font-medium text-sm tracking-wider uppercase">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-secondary">
                Industrial Construction
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              J.D Enterprise is one of Gujarat's leading industrial fabrication
              companies with over 28 years of experience specializing in Steel
              Fabrication, Industrial Shed Fabrication, PEB Buildings,
              Warehouse Construction, Roofing Solutions, Structural Steel Work,
              MS Fabrication, Heavy Fabrication, Mezzanine Floors, Canopy
              Fabrication, Staircase Fabrication and Custom Industrial
              Structures. We proudly serve Ahmedabad and all of Gujarat with
              high-quality engineering solutions, timely project completion and
              complete customer satisfaction.
            </p>

            {/* Highlights */}
            <ul className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-gray-700 group-hover:text-primary transition-colors">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#services"
              className="inline-flex items-center space-x-2 text-secondary font-semibold hover:text-primary transition-colors group"
            >
              <span>Explore Our Services</span>

              <span className="inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
