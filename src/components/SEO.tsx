import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  url: string;
};

export default function SEO({
  title,
  description,
  keywords,
  url,
}: SEOProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "J.D Enterprise",
        "url": "https://jdfabrication.co.in",
        "logo": "https://jdfabrication.co.in/logo.png",
        "email": "jd1677@jdfabrication.co.in",
        "telephone": "+91-9099099916",
        "sameAs": [
          "https://www.instagram.com/j.d.enterprise1677/",
          "https://x.com/JDENTERPRISE007"
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "J.D Enterprise",
        "image": "https://jdfabrication.co.in/logo.png",
        "url": "https://jdfabrication.co.in",
        "email": "jd1677@jdfabrication.co.in",
        "telephone": [
          "+91-9099099916",
          "+91-9409119219"
        ],
        "priceRange": "₹₹",
        "openingHours": [
          "Mo-Sa 09:00-18:00"
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
          {
            "@type": "City",
            "name": "Ahmedabad"
          },
          {
            "@type": "State",
            "name": "Gujarat"
          },
          {
            "@type": "Country",
            "name": "India"
          }
        ],
        "description":
          "J.D Enterprise specializes in Industrial Sheds, PEB Buildings, Steel Fabrication, Warehouse Construction, Roofing Solutions and Custom Industrial Structures.",
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Industrial Shed Fabrication"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "PEB Building"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Steel Fabrication"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Warehouse Construction"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Roofing Solutions"
            }
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}

      <meta name="robots" content="index, follow" />
      <meta name="author" content="J.D Enterprise" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="J.D Enterprise" />
      <meta
        property="og:image"
        content="https://jdfabrication.co.in/logo.png"
      />
      <meta
        property="og:image:alt"
        content="Industrial Shed & Steel Fabrication by J.D Enterprise"
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content="https://jdfabrication.co.in/logo.png"
      />
      <meta
        name="twitter:image:alt"
        content="Industrial Shed & Steel Fabrication by J.D Enterprise"
      />
      <meta
        name="twitter:site"
        content="@JDENTERPRISE007"
      />
      <meta
        name="twitter:creator"
        content="@JDENTERPRISE007"
      />

      {/* Structured Data */}
      <script
        id="schema-org"
        type="application/ld+json"
      >
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}