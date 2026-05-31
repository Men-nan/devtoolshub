"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { tools } from "@/lib/tools";

const tool = tools.find((t) => t.slug === "json-formatter")!;

export default function JsonFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
  };

  const clear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <ToolLayout
      tool={tool}
      howTo={[
        "在输入框中粘贴或输入 JSON 数据",
        "点击「格式化」按钮美化 JSON，或点击「压缩」按钮去除空白",
        "可调整缩进空格数（2 或 4）",
        "点击「复制」将结果复制到剪贴板",
      ]}
      faq={[
        {
          question: "什么是 JSON？",
          answer:
            "JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，易于人阅读和编写，也易于机器解析和生成。它基于 JavaScript 的子集，但独立于语言。",
        },
        {
          question: "JSON 格式化的缩进应该用几个空格？",
          answer: "常见的缩进是 2 个空格或 4 个空格。2 个空格更紧凑，4 个空格更易读。本工具支持两种选择。",
        },
        {
          question: "我的数据是否安全？",
          answer: "完全安全。所有 JSON 处理都在您的浏览器本地完成，数据不会上传到任何服务器。",
        },
      ]}
    >
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={format}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            格式化
          </button>
          <button
            onClick={minify}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
          >
            压缩
          </button>
          <button
            onClick={copy}
            disabled={!output}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium disabled:opacity-50"
          >
            复制结果
          </button>
          <button
            onClick={clear}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            清空
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <label className="text-sm text-gray-600">缩进:</label>
            <select
              value={indent}
              onChange={(e) => setIndent(Number(e.target.value))}
              className="px-2 py-1 border border-gray-300 rounded text-sm"
            >
              <option value={2}>2 空格</option>
              <option value={4}>4 空格</option>
            </select>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            ❌ {error}
          </div>
        )}

        {/* Input/Output */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">输入 JSON</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='{"name": "DevToolsHub", "version": 1}'
              className="w-full h-80 p-3 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">输出结果</label>
            <textarea
              value={output}
              readOnly
              placeholder="格式化结果将显示在这里..."
              className="w-full h-80 p-3 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50 resize-none"
            />
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
