import { tools } from "@/lib/tools";
import { generateToolMetadata } from "@/lib/metadata";
import RegexTesterClient from "./ToolClient";

const tool = tools.find((t) => t.slug === "regex-tester")!;
export const metadata = generateToolMetadata(tool);

export default function RegexTesterPage() {
  return <RegexTesterClient />;
}
