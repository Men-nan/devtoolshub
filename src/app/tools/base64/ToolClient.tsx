"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { tools } from "@/lib/tools";

const tool = tools.find((t) => t.slug === "base64")!;

export default function Base64Client() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");

  const process = () => {
    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input))));
      }
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  const copy = () => navigator.clipboard.writeText(output);
  const clear = () => { setInput(""); setOutput(""); setError(""); };

  return (
    <ToolLayout
      tool={tool}
      howTo={[
        "在输入框中输入要编码或解码的文本",
        "选择「编码」或「解码」模式",
        "点击「转换」按钮",
        "点击「复制」将结果复制到剪贴板",
      ]}
      faq={[
        {
          question: "什么是 Base64？",
          answer: "Base64 是一种基于 64 个可打印字符来表示二进制数据的编码方式。常用于在 HTTP 环境下传递较长的标识信息。",
        },
        {
          question: "Base64 编码是加密吗？",
          answer: "不是。Base64 只是一种编码方式，不提供任何安全性。任何人都可以轻松解码 Base64 数据。",
        },
      ]}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMode("encode")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === "encode" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            编码
          </button>
          <button
            onClick={() => setMode("decode")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === "decode" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            解码
          </button>
          <button onClick={process} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium">
            转换
          </button>
          <button onClick={copy} disabled={!output} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm font-medium disabled:opacity-50">
            复制
          </button>
          <button onClick={clear} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
            清空
          </button>
        </div>

        {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">❌ {error}</div>}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">输入</label>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder={mode === "encode" ? "输入要编码的文本..." : "输入 Base64 字符串..."} className="w-full h-64 p-3 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">输出</label>
            <textarea value={output} readOnly placeholder="结果将显示在这里..." className="w-full h-64 p-3 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50 resize-none" />
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
