import { tools } from "@/lib/tools";
import { generateToolMetadata } from "@/lib/metadata";
import ColorConverterClient from "./ToolClient";

const tool = tools.find((t) => t.slug === "color-converter")!;
export const metadata = generateToolMetadata(tool);

export default function ColorConverterPage() {
  return <ColorConverterClient />;
}
