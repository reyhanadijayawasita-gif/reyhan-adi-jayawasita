import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";
import { navItems } from "@/lib/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...navItems.map((item) => item.href)];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
