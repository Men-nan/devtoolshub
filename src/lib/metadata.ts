import type { Metadata } from "next";
import type { Tool } from "./tools";

const baseUrl = "https://devtoolshub.dev";

export function generateToolMetadata(tool: Tool): Metadata {
  return {
    title: `${tool.name} - 免费在线工具`,
    description: tool.description,
    keywords: [...tool.keywords, "在线工具", "免费", "devtools"],
    openGraph: {
      title: `${tool.name} | DevToolsHub`,
      description: tool.description,
      url: `${baseUrl}${tool.href}`,
      siteName: "DevToolsHub",
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}${tool.href}`,
    },
  };
}
