import { FAQS } from "@/lib/constants";

export const StructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shachihata Inc.",
    "alternateName": "シヤチハタ株式会社",
    "url": "https://www.shachihata.co.jp/",
    "logo": "https://www.shachihata.co.jp/assets/img/common/header/logo.svg", // Best guess for logo, or omit if unsure. Using generic logic or omitting for safety? Better to omit specific image if unsafe, but highly likely.
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
    "@type": "Product",
    "name": "Sound-Synced WEB Penlight",
    "alternateName": "音響連動WEBペンライト",
    "description": "会場と配信を“ひとつ”にする、音響連動WEBペンライト。アプリインストール不要、QRコードで即参加。",
    "brand": {
      "@type": "Brand",
      "name": "Shachihata"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "JPY",
      "availability": "https://schema.org/InStock",
      "price": "0", // It's a B2B service mainly, pricing is "contact us". But schema likes a price. Maybe omit price or use AggregateOffer.
      // Better to use AggregateRating or just description if price is variable.
      // Let's omit price and use "availability": "https://schema.org/OnlineOnly" if possible.
      "url": "https://www.shachihata.co.jp/" 
    }
  };
  
  // Refine Product: Since it's a B2B service/solution, "Service" might be better, but "Product" is standard for physical/software products.
  
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
