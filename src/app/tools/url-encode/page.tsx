"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { tools } from "@/lib/tools";

const tool = tools.find((t) => t.slug === "url-encode")!;

export default function UrlEncodePage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [type, setType] = useState<"component" | "full">("component");

  const process = () => {
    if (mode === "encode") {
      setOutput(type === "component" ? encodeURIComponent(input) : encodeURI(input));
    } else {
      try {
        setOutput(type === "component" ? decodeURIComponent(input) : decodeURI(input));
      } catch {
        setOutput("解码失败：无效的编码字符串");
      }
    }
  };

  const copy = () => navigator.clipboard.writeText(output);
  const clear = () => { setInput(""); setOutput(""); };

  return (
    <ToolLayout
      tool={tool}
      howTo={[
        "在输入框中输入 URL 或文本",
        "选择编码或解码模式",
        "选择编码类型（组件编码或完整 URL 编码）",
        "点击「转换」按钮",
      ]}
      faq={[
        {
          question: "encodeURIComponent 和 encodeURI 有什么区别？",
          answer: "encodeURIComponent 会编码所有特殊字符，适合编码 URL 参数值。encodeURI 不会编码 URL 结构字符（如 :、/、?、#），适合编码完整 URL。",
        },
      ]}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <button onClick={() => setMode("encode")} className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "encode" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}>编码</button>
          <button onClick={() => setMode("decode")} className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "decode" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}>解码</button>
          <select value={type} onChange={(e) => setType(e.target.value as "component" | "full")} className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option value="component">组件编码 (encodeURIComponent)</option>
            <option value="full">URL编码 (encodeURI)</option>
          </select>
          <button onClick={process} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium">转换</button>
          <button onClick={copy} disabled={!output} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm font-medium disabled:opacity-50">复制</button>
          <button onClick={clear} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">清空</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">输入</label>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="https://example.com/path?name=你好&value=1" className="w-full h-48 p-3 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">输出</label>
            <textarea value={output} readOnly placeholder="结果..." className="w-full h-48 p-3 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50 resize-none" />
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
