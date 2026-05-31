import { tools } from "@/lib/tools";
import { generateToolMetadata } from "@/lib/metadata";
import HashGeneratorClient from "./ToolClient";

const tool = tools.find((t) => t.slug === "hash-generator")!;
export const metadata = generateToolMetadata(tool);

export default function HashGeneratorPage() {
  return <HashGeneratorClient />;
}
