import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://manastirkuvezdin.rs/sitemap.xml",
    host: "https://manastirkuvezdin.rs",
  };
}
