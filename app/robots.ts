import { MetadataRoute } from "next";
import { SITE_METADATA } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_METADATA.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thanks", "/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/thanks", "/api/", "/goods"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/thanks", "/api/", "/goods"],
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/thanks", "/api/", "/goods"],
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/thanks", "/api/", "/goods"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/thanks", "/api/", "/goods"],
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: ["/thanks", "/api/", "/goods"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/thanks", "/api/", "/goods"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/thanks", "/api/"],
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/thanks", "/api/", "/goods"],
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
        disallow: ["/thanks", "/api/", "/goods"],
      },
      {
        userAgent: "YouBot",
        allow: "/",
        disallow: ["/thanks", "/api/", "/goods"],
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
        disallow: ["/thanks", "/api/", "/goods"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
