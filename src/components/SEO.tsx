import { Helmet } from "react-helmet-async";
import { localBusinessSchema, organizationSchema } from "../utils/schema";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  siteName?: string;
  robots?: string;
  imageAlt?: string;
};

export default function SEO({
  title,
  description,
  keywords,
  url,
  ogTitle = title,
  ogDescription = description,
  ogImage = "https://jdfabrication.co.in/logo.png",
  twitterTitle = title,
  twitterDescription = description,
  twitterImage = "https://jdfabrication.co.in/logo.png",
  siteName = "J.D Enterprise",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  imageAlt = "J.D Enterprise industrial fabrication and construction services in Ahmedabad, Gujarat",
}: SEOProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
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
  };

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}

      <meta name="robots" content={robots} />
      <meta name="author" content="J.D Enterprise" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta
        property="og:image"
        content={ogImage}
      />
      <meta
        property="og:image:alt"
        content={imageAlt}
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={twitterTitle}
      />
      <meta
        name="twitter:description"
        content={twitterDescription}
      />
      <meta
        name="twitter:image"
        content={twitterImage}
      />
      <meta
        name="twitter:image:alt"
        content={imageAlt}
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