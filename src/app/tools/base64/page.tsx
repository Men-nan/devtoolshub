import { tools } from "@/lib/tools";
import { generateToolMetadata } from "@/lib/metadata";
import Base64Client from "./ToolClient";

const tool = tools.find((t) => t.slug === "base64")!;
export const metadata = generateToolMetadata(tool);

export default function Base64Page() {
  return <Base64Client />;
}
