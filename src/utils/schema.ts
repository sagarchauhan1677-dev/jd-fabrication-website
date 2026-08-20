export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://jdfabrication.co.in/#organization",
  "name": "J.D. Enterprise",
  "alternateName": "J.D. Enterprise Fabrication Works",
  "url": "https://jdfabrication.co.in/",
  "logo": { "@type": "ImageObject", "url": "https://jdfabrication.co.in/jd-enterprise-logo.svg" },
  "foundingDate": "1996",
  "slogan": "Just Think We Do",
  "knowsAbout": ["Industrial fabrication", "MS steel fabrication", "Structural steel fabrication", "Industrial sheds", "PEB buildings", "Warehouse construction", "Roofing and cladding"],
  "description": "J.D. Enterprise is an industrial fabrication and construction company in Ahmedabad, Gujarat specialising in industrial sheds, PEB buildings, MS and structural steel fabrication, warehouse construction, roofing and cladding.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "17/A J.D. Enterprise, Shahpur Society, Opp Master Colony",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380004",
    "addressCountry": "IN"
  },
  "telephone": "+91-9099099916",
  "email": "sagar.chauhan@jdfabrication.co.in",
  "sameAs": ["https://www.facebook.com/Jashdhan1998", "https://www.instagram.com/j.d.enterprise1677/", "https://x.com/JDENTERPRISE007"],
  "areaServed": [
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "City", "name": "Sanand" },
    { "@type": "Place", "name": "Changodar" },
    { "@type": "Place", "name": "Chhatral" },
    { "@type": "City", "name": "Vadodara" },
    { "@type": "State", "name": "Gujarat" }
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://jdfabrication.co.in/#localbusiness",
  "name": "J.D. Enterprise",
  "alternateName": "J.D. Enterprise Fabrication Works",
  "image": "https://jdfabrication.co.in/jd-enterprise-logo.svg",
  "url": "https://jdfabrication.co.in/",
  "telephone": "+91-9099099916",
  "email": "sagar.chauhan@jdfabrication.co.in",
  "priceRange": "₹₹",
  "parentOrganization": { "@id": "https://jdfabrication.co.in/#organization" },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  }],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "17/A J.D. Enterprise, Shahpur Society, Opp Master Colony",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380004",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "City", "name": "Sanand" },
    { "@type": "Place", "name": "Changodar" },
    { "@type": "Place", "name": "Chhatral" },
    { "@type": "City", "name": "Vadodara" },
    { "@type": "State", "name": "Gujarat" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Industrial Fabrication Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Shed Fabrication", "url": "https://jdfabrication.co.in/services/industrial-shed-fabrication" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PEB Buildings", "url": "https://jdfabrication.co.in/services/peb-buildings" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MS and Structural Steel Fabrication", "url": "https://jdfabrication.co.in/services/steel-fabrication" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse Construction", "url": "https://jdfabrication.co.in/services/warehouse-construction" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roofing and Cladding", "url": "https://jdfabrication.co.in/services/roofing-cladding" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Works", "url": "https://jdfabrication.co.in/services/structural-works" } }
    ]
  },
  "description": "Industrial fabricators in Ahmedabad providing industrial shed fabrication, PEB buildings, MS and structural steel fabrication, warehouse construction, roofing and cladding across Gujarat."
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://jdfabrication.co.in/services#service",
  "name": "Industrial Fabrication and Construction Services",
  "serviceType": "Industrial fabrication and construction",
  "provider": { "@id": "https://jdfabrication.co.in/#localbusiness" },
  "areaServed": [
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "State", "name": "Gujarat" }
  ],
  "url": "https://jdfabrication.co.in/services"
};
