import { tools } from "@/lib/tools";
import { generateToolMetadata } from "@/lib/metadata";
import UuidGeneratorClient from "./ToolClient";

const tool = tools.find((t) => t.slug === "uuid-generator")!;
export const metadata = generateToolMetadata(tool);

export default function UuidGeneratorPage() {
  return <UuidGeneratorClient />;
}
