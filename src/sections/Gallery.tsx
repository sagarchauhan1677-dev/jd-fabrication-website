import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { galleryImages } from "../constants/images";

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const { ref, isVisible } = useScrollAnimation(0.1);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const displayedImages = showAll
    ? galleryImages
    : galleryImages.slice(0, 20);

  return (
    <section
      id="gallery"
      className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden"
    >
      <div
        ref={ref}
        className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10"
      >
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div
            className={`inline-flex items-center space-x-2 mb-4 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <span className="w-8 h-0.5 bg-secondary"></span>

            <span className="text-secondary font-medium text-sm tracking-wider uppercase">
              Gallery
            </span>

            <span className="w-8 h-0.5 bg-secondary"></span>
          </div>

          <h2
            className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 ${
              isVisible
                ? "animate-fade-in-up animation-delay-100"
                : "opacity-0"
            }`}
          >
            Industrial Fabrication &{" "}
            <span className="text-secondary">Project Gallery</span>
          </h2>

          <p
            className={`text-gray-600 text-lg ${
              isVisible
                ? "animate-fade-in-up animation-delay-200"
                : "opacity-0"
            }`}
          >
            Explore our completed Steel Fabrication, Industrial Shed, PEB
            Building, Warehouse Construction, Roofing and Structural Steel
            projects across Ahmedabad and Gujarat. Every project showcases our
            commitment to quality engineering, precision workmanship and
            customer satisfaction built over more than 28 years.
          </p>
        </div>

        {/* Images */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px] ${
            isVisible
              ? "animate-fade-in-up animation-delay-400"
              : "opacity-0"
          }`}
        >
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 ? "row-span-2" : ""
              }`}
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-secondary text-white text-xs rounded-full mb-1">
                  {image.label}
                </span>

                <p className="text-white text-xs">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-orange-600 transition"
            >
              View All Images
            </button>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-3 bg-white/10 rounded-full text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="max-w-full max-h-[80vh] object-contain mx-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}