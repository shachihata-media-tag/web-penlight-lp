import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://penlight.shachihata.co.jp";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/thanks", // Usually don't want thanks page indexed
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
