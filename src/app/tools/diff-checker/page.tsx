import { tools } from "@/lib/tools";
import { generateToolMetadata } from "@/lib/metadata";
import DiffCheckerClient from "./ToolClient";

const tool = tools.find((t) => t.slug === "diff-checker")!;
export const metadata = generateToolMetadata(tool);

export default function DiffCheckerPage() {
  return <DiffCheckerClient />;
}
