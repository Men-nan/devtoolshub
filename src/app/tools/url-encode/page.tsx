import { tools } from "@/lib/tools";
import { generateToolMetadata } from "@/lib/metadata";
import UrlEncodeClient from "./ToolClient";

const tool = tools.find((t) => t.slug === "url-encode")!;
export const metadata = generateToolMetadata(tool);

export default function UrlEncodePage() {
  return <UrlEncodeClient />;
}
