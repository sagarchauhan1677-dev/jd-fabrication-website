export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "J.D Enterprise",
  "url": "https://jdfabrication.co.in",
  "logo": "https://jdfabrication.co.in/jd-enterprise-logo.svg",
  "foundingDate": "1996",
  "slogan": "Just Think We Do",
  "knowsAbout": ["Industrial fabrication", "Steel fabrication", "Industrial sheds", "PEB buildings", "Warehouse construction", "Roofing and cladding"],
  "description": "J.D Enterprise is a leading industrial fabrication and construction company in Ahmedabad, Gujarat, India specializing in industrial sheds, PEB buildings, steel fabrication, warehouse construction and roofing systems.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "17/A J.D Enterprise, Shahpur Society, Opp Master Colony",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380004",
    "addressCountry": "IN"
  },
  "telephone": "+91-9099099916",
  "email": "sagar.chauhan@jdfabrication.co.in",
  "sameAs": [
    "https://www.instagram.com/j.d.enterprise1677/",
    "https://x.com/JDENTERPRISE007"
  ],
  "areaServed": [
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "State", "name": "Gujarat" },
    { "@type": "Country", "name": "India" }
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "J.D Enterprise",
  "image": "https://jdfabrication.co.in/jd-enterprise-logo.svg",
  "url": "https://jdfabrication.co.in",
  "telephone": "+91-9099099916",
  "email": "sagar.chauhan@jdfabrication.co.in",
  "priceRange": "₹₹",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "17/A J.D Enterprise, Shahpur Society, Opp Master Colony",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380004",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "State", "name": "Gujarat" },
    { "@type": "Country", "name": "India" }
  ],
  "description": "Industrial fabrication and construction company in Ahmedabad, Gujarat offering industrial shed fabrication, PEB buildings, steel fabrication, warehouse construction and roofing & cladding services."
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Industrial Fabrication and Construction Services",
  "serviceType": "Industrial fabrication and construction",
  "provider": {
    "@type": "LocalBusiness",
    "name": "J.D Enterprise"
  },
  "areaServed": [
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "State", "name": "Gujarat" },
    { "@type": "Country", "name": "India" }
  ],
  "url": "https://jdfabrication.co.in/services"
};
