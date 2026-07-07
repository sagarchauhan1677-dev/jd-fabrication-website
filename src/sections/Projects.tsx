import { useState } from 'react';
import { ArrowRight, MapPin, Building } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { IMAGES } from '../constants/images';

const projects = [
  {
    id: 1,
    title: 'Industrial Shed with Steel Framework',
    category: 'Industrial Shed',
    location: 'ahmedabad,gujarat',
    image: IMAGES.industrialSheds,
  
  },
  {
    id: 2,
    title: 'PEB Rooftop Frame Installation',
    category: 'PEB Building',
    location: 'ahmedabad,gujarat',
    image: IMAGES.pebBuildings,
  
  },
  {
    id: 3,
    title: 'Custom Steel Play Structure',
    category: 'Custom Structure',
    location: 'ahmedabad,gujarat',
    image: IMAGES.warehouse,
  
  },
  {
    id: 4,
    title: 'Polycarbonate Roofing System',
    category: 'Roofing & Cladding',
    location: 'ahmedabad,gujarat',
    image: IMAGES.steelFabrication,
    
  },
  {
    id: 5,
    title: 'Rooftop Pergola & Cladding',
    category: 'Roofing & Cladding',
    location: 'ahmedabad,gujarat',
    image: IMAGES.roofing,
  
  },
  {
    id: 6,
    title: 'Steel Fabrication Complex',
    category: 'Industrial Shed',
    location: 'ahmedabad,gujarat',
    image: IMAGES.steelFabrication,
    size: '50,000 sq ft',
  },
];

const categories = ['All', 'Industrial Shed', 'PEB Building', 'Roofing & Cladding', 'Custom Structure'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useScrollAnimation(0.1);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      <div ref={ref} className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center space-x-2 mb-4 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <span className="w-8 h-0.5 bg-secondary" />
            <span className="text-secondary font-medium text-sm tracking-wider uppercase">
              Our Projects
            </span>
            <span className="w-8 h-0.5 bg-secondary" />
          </div>

          <h2
            className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 ${
              isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
            }`}
          >
            Featured{' '}
            <span className="text-secondary">Projects</span>
          </h2>

          <p
            className={`text-gray-600 text-lg ${
              isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
            }`}
          >
            Explore our portfolio of successfully completed industrial projects across India.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 ${
            isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-hover ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{project.location}</span>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Building className="w-4 h-4 mr-1" />
                  <span>{project.size}</span>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-secondary font-medium text-sm hover:text-primary transition-colors group/link"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 ${
            isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'
          }`}
        >
          <a
            href="#gallery"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
