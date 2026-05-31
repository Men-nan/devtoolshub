import { tools } from "@/lib/tools";
import { generateToolMetadata } from "@/lib/metadata";
import TimestampClient from "./ToolClient";

const tool = tools.find((t) => t.slug === "timestamp")!;
export const metadata = generateToolMetadata(tool);

export default function TimestampPage() {
  return <TimestampClient />;
}
