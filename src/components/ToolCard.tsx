import Link from "next/link";
import type { Tool } from "@/lib/tools";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.href}
      className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
    >
      <div className="text-3xl mb-3">{tool.icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
        {tool.name}
      </h3>
      <p className="mt-2 text-sm text-gray-500 line-clamp-2">{tool.description}</p>
    </Link>
  );
}
