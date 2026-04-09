import { FAQS, SITE_METADATA } from "@/lib/constants";

export const StructuredData = () => {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_METADATA.siteName,
    "url": SITE_METADATA.url,
    "description": SITE_METADATA.description,
    "publisher": {
      "@type": "Organization",
      "name": "Shachihata Inc."
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shachihata Inc.",
    "alternateName": "シヤチハタ株式会社",
    "url": SITE_METADATA.url,
    "logo": `${SITE_METADATA.url}/shachihata-logo.png`,
    "foundingDate": "1941-09-24",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4-69, Amazuka-cho",
      "addressLocality": "Nishi-ku, Nagoya",
      "addressRegion": "Aichi",
      "postalCode": "451-0021",
      "addressCountry": "JP"
    },
    "sameAs": [
      "https://www.instagram.com/artline.japan",
      "https://www.facebook.com/shachihata.official", 
      "https://www.youtube.com/@shachihataxstamper7890" // Official Shachihata Xstamper channel
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "telephone": "+81-52-521-3600" // Representative phone
    }
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": ["Product", "SoftwareApplication"],
    "name": "音響連動スマホペンライト（音響連動ソリューション）",
    "alternateName": "Sound-Synced WEB Penlight",
    "description": "会場と配信を“ひとつ”にする、音響連動スマホペンライト。アプリインストール不要、QRコードで即参加できるイベント最適化ツール。",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "All",
    "brand": {
      "@type": "Brand",
      "name": "Shachihata"
    },
    "category": "B2B Service",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "JPY",
      "availability": "https://schema.org/OnlineOnly",
      "url": SITE_METADATA.url
    }
  };
  
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
};
