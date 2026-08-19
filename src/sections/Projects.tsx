import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
  {
    id: 1,
    slug: "industrial-fabrication-sanand",
    title: "Industrial Fabrication Project Experience",
    category: "Industrial Fabrication",
    location: "Sanand, Gujarat",
    image: "/images/Industrial%20Sheds/Industrial-sheds5.jpeg",
  },
  {
    id: 2,
    slug: "steel-fabrication-changodar",
    title: "Steel Fabrication Project Experience",
    category: "Steel Fabrication",
    location: "Changodar, Gujarat",
    image: "/images/Steel%20Fabrication/steelfabrication1.jpeg",
  },
  {
    id: 3,
    slug: "industrial-shed-chhatral",
    title: "Industrial Shed Project Experience",
    category: "Industrial Shed",
    location: "Chhatral, Gujarat",
    image: "/images/Industrial%20Sheds/Industrial-sheds6.jpeg",
  },
  {
    id: 4,
    slug: "peb-building-vadodara",
    title: "PEB and Steel Building Project Experience",
    category: "PEB Building",
    location: "Vadodara, Gujarat",
    image: "/images/PEB%20Buildings/PEB-buildings1.jpeg",
  },
  {
    id: 5,
    slug: "fabrication-work-ahmedabad-airport",
    title: "Fabrication Work at Ahmedabad International Airport",
    category: "Custom Fabrication",
    location: "Ahmedabad, Gujarat",
    image: "/images/projects/airport-amul-outlet.svg",
  },
];

const categories = [
  "All",
  "Industrial Fabrication",
  "Steel Fabrication",
  "Industrial Shed",
  "PEB Building",
  "Custom Fabrication",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, isVisible } = useScrollAnimation(0.1);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div ref={ref} className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className={`mb-4 inline-flex items-center space-x-2 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <span className="h-0.5 w-8 bg-secondary" />
            <span className="text-sm font-medium uppercase tracking-wider text-secondary">
              Project Experience
            </span>
            <span className="h-0.5 w-8 bg-secondary" />
          </div>

          <h2 className={`mb-6 font-heading text-3xl font-bold text-primary sm:text-4xl lg:text-5xl ${isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"}`}>
            Industrial Fabrication Across <span className="text-secondary">Gujarat</span>
          </h2>

          <p className={`text-lg text-gray-600 ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}>
            Explore J.D. Enterprise project experience in key industrial areas.
            We publish only verified locations and capabilities—never invented client
            names, project dimensions or performance claims.
          </p>
        </div>

        <div className={`mb-12 flex flex-wrap justify-center gap-3 ${isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ${activeCategory === category ? "bg-primary text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg card-hover ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} by J.D. Enterprise in ${project.location}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary transition-colors group-hover:text-secondary">
                  {project.title}
                </h3>
                <div className="mb-5 mt-3 flex items-center text-sm text-gray-500">
                  <MapPin className="mr-1 h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-primary"
                >
                  View Verified Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-8 py-4 font-semibold text-primary transition-all hover:bg-primary hover:text-white"
          >
            Discuss Your Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
