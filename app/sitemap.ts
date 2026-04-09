import { MetadataRoute } from "next";
import { SITE_METADATA } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_METADATA.url;

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/goods`,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
