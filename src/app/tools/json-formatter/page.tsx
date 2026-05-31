import { tools } from "@/lib/tools";
import { generateToolMetadata } from "@/lib/metadata";
import JsonFormatterClient from "./ToolClient";

const tool = tools.find((t) => t.slug === "json-formatter")!;

export const metadata = generateToolMetadata(tool);

export default function JsonFormatterPage() {
  return <JsonFormatterClient />;
}
