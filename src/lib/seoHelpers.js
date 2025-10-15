// SEO Helper Functions and Schema Markup

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "name": "Perry Electrical",
    "image": "https://perryelec.com/logo.png",
    "@id": "https://perryelec.com",
    "url": "https://perryelec.com",
    "telephone": "+1-123-456-7890",
    "email": "info@perryelec.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Kansas",
      "addressRegion": "KS",
      "postalCode": "",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 0,
      "longitude": 0
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
    "sameAs": [
      "https://www.facebook.com/perryelec",
      "https://www.linkedin.com/company/perryelec"
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "State",
      "name": "Kansas"
    },
    "serviceType": [
      "Commercial Electrical Contracting",
      "Industrial Electrical Systems",
      "Institutional Electrical Installation",
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

export const injectSchema = (schema) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(schema);
  document.head.appendChild(script);
  return () => {
    document.head.removeChild(script);
  };
};

