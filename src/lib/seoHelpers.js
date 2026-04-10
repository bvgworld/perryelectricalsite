// SEO Helper Functions and Schema Markup

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "name": "Perry Electrical",
    "image": "https://perryelec.com/og-image.png",
    "@id": "https://perryelec.com",
    "url": "https://perryelec.com",
    "telephone": "+1-785-539-4723",
    "email": "info@perryelec.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "116 N 6th St",
      "addressLocality": "St. Marys",
      "addressRegion": "KS",
      "postalCode": "66536",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.1942,
      "longitude": -96.0711
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "areaServed": [
      { "@type": "State", "name": "Kansas" },
      { "@type": "City", "name": "Manhattan", "containedInPlace": { "@type": "State", "name": "Kansas" } },
      { "@type": "City", "name": "Topeka", "containedInPlace": { "@type": "State", "name": "Kansas" } },
      { "@type": "City", "name": "St. Marys", "containedInPlace": { "@type": "State", "name": "Kansas" } },
      { "@type": "City", "name": "Junction City", "containedInPlace": { "@type": "State", "name": "Kansas" } },
      { "@type": "City", "name": "Wamego", "containedInPlace": { "@type": "State", "name": "Kansas" } }
    ],
    "serviceType": [
      "Commercial Electrical Contracting",
      "Industrial Electrical Systems",
      "Institutional Electrical Installation",
      "Residential Electrical Service",
      "Electrical Repair",
      "Electrical Panel Upgrades",
      "EV Charger Installation",
      "Lighting Installation",
      "Backup Generator Installation"
    ]
  };
};

export const generateServiceSchema = (serviceName, description) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "ElectricalContractor",
      "name": "Perry Electrical"
    },
    "areaServed": {
      "@type": "State",
      "name": "Kansas"
    },
    "description": description,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName
          }
        }
      ]
    }
  };
};

export const generateReviewsSchema = (reviews, aggregateRating) => {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  const reviewSchema = reviews.map((review) => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author || "Anonymous"
    },
    "datePublished": review.date || new Date().toISOString(),
    "reviewBody": review.text || "",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating || 5,
      "bestRating": 5,
      "worstRating": 1
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Perry Electrical",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue || 5.0,
      "reviewCount": aggregateRating.reviewCount || reviews.length,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": reviewSchema
  };
};

export const injectSchema = (schema) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(schema);
  script.id = `schema-${Date.now()}`;
  document.head.appendChild(script);
  return () => {
    const scriptElement = document.getElementById(script.id);
    if (scriptElement) {
      document.head.removeChild(scriptElement);
    }
  };
};

