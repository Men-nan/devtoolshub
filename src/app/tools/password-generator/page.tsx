import { tools } from "@/lib/tools";
import { generateToolMetadata } from "@/lib/metadata";
import PasswordGeneratorClient from "./ToolClient";

const tool = tools.find((t) => t.slug === "password-generator")!;
export const metadata = generateToolMetadata(tool);

export default function PasswordGeneratorPage() {
  return <PasswordGeneratorClient />;
}
