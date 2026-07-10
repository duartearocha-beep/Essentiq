import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.essentiq.pt/sitemap.xml",
    host: "https://www.essentiq.pt",
  };
}