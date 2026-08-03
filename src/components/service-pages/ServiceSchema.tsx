type ServiceSchemaProps = {
  serviceName: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; item: string }>;
  faqs?: Array<{ question: string; answer: string }>;
};

export default function ServiceSchema({
  serviceName,
  description,
  url,
  breadcrumbs = [],
  faqs = [],
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "serviceType": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "J.D Enterprise",
      "url": "https://jdfabrication.co.in",
      "telephone": "+91-9099099916",
      "email": "sagar.chauhan@jdfabrication.co.in",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "IN",
      },
      "areaServed": ["Ahmedabad", "Gujarat"],
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Gujarat",
    },
    "url": url,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "J.D Enterprise",
    "image": "https://jdfabrication.co.in/logo.png",
    "url": "https://jdfabrication.co.in",
    "telephone": "+91-9099099916",
    "email": "sagar.chauhan@jdfabrication.co.in",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "17/A J.D Enterprise, Shahpur Society, Opp Master Colony",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380004",
      "addressCountry": "IN",
    },
    "areaServed": [
      { "@type": "City", "name": "Ahmedabad" },
      { "@type": "State", "name": "Gujarat" },
    ],
    "priceRange": "₹₹",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </>
  );
}
