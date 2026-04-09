import { MetadataRoute } from "next";
import { SITE_METADATA } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_METADATA.url;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/thanks", // Usually don't want thanks page indexed
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
