import { MetadataRoute } from "next";
import { SITE_METADATA } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_METADATA.url;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/thanks`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1, // Lower priority for thanks page
    },
  ];
}
