"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { tools } from "@/lib/tools";

const tool = tools.find((t) => t.slug === "hash-generator")!;

async function hashText(algorithm: string, text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function HashGeneratorPage() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<Record<string, string>>({});
  const algorithms = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];

  const generate = async () => {
    const newResults: Record<string, string> = {};
    for (const algo of algorithms) {
      newResults[algo] = await hashText(algo, input);
    }
    setResults(newResults);
  };

  const copy = (value: string) => navigator.clipboard.writeText(value);

  return (
    <ToolLayout
      tool={tool}
      howTo={[
        "在输入框中输入要计算哈希的文本",
        "点击「生成哈希」按钮",
        "查看各算法的哈希值",
        "点击哈希值旁的复制按钮复制结果",
      ]}
      faq={[
        {
          question: "什么是哈希函数？",
          answer: "哈希函数是一种将任意长度的数据映射为固定长度字符串的算法。相同的输入总是产生相同的输出，但无法从哈希值反推原始数据。",
        },
        {
          question: "为什么没有 MD5？",
          answer: "MD5 已被证明存在安全漏洞，不建议用于安全场景。本工具提供更安全的 SHA 系列算法。",
        },
      ]}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <button onClick={generate} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">生成哈希</button>
          <button onClick={() => { setInput(""); setResults({}); }} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">清空</button>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入要计算哈希的文本..."
          className="w-full h-32 p-3 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        {Object.keys(results).length > 0 && (
          <div className="space-y-3">
            {algorithms.map((algo) => (
              <div key={algo} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="font-medium text-gray-700 w-20 text-sm">{algo}</span>
                <code className="flex-1 font-mono text-sm text-gray-900 break-all">{results[algo]}</code>
                <button onClick={() => copy(results[algo])} className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300">复制</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
