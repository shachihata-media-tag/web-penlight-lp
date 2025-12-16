import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://penlight.shachihata.co.jp"; // Assuming production URL or Env

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
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
