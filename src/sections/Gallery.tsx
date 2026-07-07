import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { galleryImages as initialGalleryImages } from '../constants/images';

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

const STORAGE_KEY = 'jd-gallery-images';

const defaultGalleryImages: GalleryImage[] = initialGalleryImages.map((image) => ({ ...image }));

export default function Gallery() {
  const [galleryImages, _setGalleryImages] = useState<GalleryImage[]>(() => {
    if (typeof window === 'undefined') return defaultGalleryImages;

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultGalleryImages;

    try {
      return JSON.parse(saved) as GalleryImage[];
    } catch {
      return defaultGalleryImages;
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.1);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(galleryImages));
    }
  }, [galleryImages]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="gallery"
      className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden"
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
              Gallery
            </span>
            <span className="w-8 h-0.5 bg-secondary" />
          </div>

          <h2
            className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 ${
              isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
            }`}
          >
            Our Work{' '}
            <span className="text-secondary">Gallery</span>
          </h2>

          <p
            className={`text-gray-600 text-lg ${
              isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
            }`}
          >
            Browse our real project photos — each image represents the craftsmanship
            and quality J.D Enterprise delivers on every build.
          </p>
        </div>

        {/* Featured Bento Grid */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px] ${
            isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
          }`}
        >
          {/* Large feature card (row-span-2) */}
          <div
            className="relative group cursor-pointer overflow-hidden rounded-2xl row-span-2"
            onClick={() => openModal(0)}
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-medium rounded-full mb-2">
                {galleryImages[0].label}
              </span>
              <p className="text-white font-medium text-sm">{galleryImages[0].alt}</p>
            </div>
          </div>

          {/* Regular cards */}
          {galleryImages.slice(1).map((image, index) => (
            <div
              key={index + 1}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => openModal(index + 1)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-medium rounded-full mb-1">
                  {image.label}
                </span>
                <p className="text-white font-medium text-xs">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-3 text-white hover:text-secondary transition-colors bg-white/10 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-secondary transition-colors bg-white/10 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-secondary transition-colors bg-white/10 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full">
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl mx-auto"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-secondary w-6'
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
