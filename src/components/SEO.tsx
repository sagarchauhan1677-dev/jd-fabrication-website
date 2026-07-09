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
          "https://www.instagram.com/j.d.enterprise1677/"
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
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "17/A J.D Enterprise, Shahpur Society, Opp Master Colony",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "380004",
          "addressCountry": "IN"
        },
        "areaServed": [
          "Ahmedabad",
          "Gujarat",
          "India"
        ],
        "description":
          "J.D Enterprise specializes in Industrial Sheds, PEB Buildings, Steel Fabrication, Warehouse Construction, Roofing Solutions and Custom Industrial Structures."
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
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="J.D Enterprise" />
      <meta
        property="og:image"
        content="https://jdfabrication.co.in/logo.png"
      />

      {/* Twitter */}
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

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}