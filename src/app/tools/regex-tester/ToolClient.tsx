"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";
import { tools } from "@/lib/tools";

const tool = tools.find((t) => t.slug === "regex-tester")!;

const commonPatterns = [
  { name: "邮箱", pattern: "[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}" },
  { name: "手机号", pattern: "1[3-9]\\d{9}" },
  { name: "URL", pattern: "https?://[\\w.-]+" },
  { name: "IP地址", pattern: "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}" },
  { name: "日期 (YYYY-MM-DD)", pattern: "\\d{4}-\\d{2}-\\d{2}" },
];

export default function RegexTesterClient() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");
  const [error, setError] = useState("");

  const matches = useMemo(() => {
    if (!pattern || !testString) return [];
    try {
      const regex = new RegExp(pattern, flags);
      const results: { index: number; value: string }[] = [];
      let match: RegExpExecArray | null;
      while ((match = regex.exec(testString)) !== null) {
        results.push({ index: match.index, value: match[0] });
        if (!flags.includes("g")) break;
        if (match[0].length === 0) regex.lastIndex++;
      }
      setError("");
      return results;
    } catch (e) {
      setError((e as Error).message);
      return [];
    }
  }, [pattern, flags, testString]);

  const highlightedText = useMemo(() => {
    if (matches.length === 0) return testString;
    let result = "";
    let lastIdx = 0;
    for (const m of matches) {
      result += testString.slice(lastIdx, m.index);
      result += `<mark class="bg-yellow-200">${testString.slice(m.index, m.index + m.value.length)}</mark>`;
      lastIdx = m.index + m.value.length;
    }
    result += testString.slice(lastIdx);
    return result;
  }, [testString, matches]);

  return (
    <ToolLayout
      tool={tool}
      howTo={[
        "在「正则表达式」框中输入正则表达式",
        "设置匹配标志（g=全局，i=忽略大小写，m=多行）",
        "在「测试文本」框中输入要测试的文本",
        "匹配结果会实时高亮显示",
      ]}
      faq={[
        {
          question: "什么是正则表达式？",
          answer: "正则表达式（Regular Expression）是一种用于匹配字符串中字符组合的模式。它广泛用于文本搜索、替换和数据验证。",
        },
        {
          question: "常用的标志（flags）有哪些？",
          answer: "g（全局匹配）：查找所有匹配项；i（忽略大小写）：不区分大小写；m（多行模式）：^和$匹配每行的开始和结束。",
        },
      ]}
    >
      <div className="space-y-4">
        {/* Pattern Input */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-0">
            <label className="block text-sm font-medium text-gray-700 mb-1">正则表达式</label>
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="[\\w.-]+@[\\w.-]+\\.\\w+"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">标志</label>
            <input
              type="text"
              value={flags}
              onChange={(e) => setFlags(e.target.value)}
              className="w-20 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">❌ {error}</div>}

        {/* Common Patterns */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-500">常用：</span>
          {commonPatterns.map((p) => (
            <button key={p.name} onClick={() => setPattern(p.pattern)} className="px-2 py-1 text-xs bg-gray-100 rounded hover:bg-gray-200">{p.name}</button>
          ))}
        </div>

        {/* Test String */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">测试文本</label>
          <textarea
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            placeholder="输入要测试的文本..."
            className="w-full h-40 p-3 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">高亮结果</label>
            <div
              className="w-full h-40 p-3 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50 overflow-auto whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: highlightedText || '<span class="text-gray-400">匹配结果将高亮显示...</span>' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">匹配项 ({matches.length})</label>
            <div className="w-full h-40 p-3 border border-gray-300 rounded-lg text-sm bg-gray-50 overflow-auto">
              {matches.length === 0 ? (
                <span className="text-gray-400">无匹配</span>
              ) : (
                matches.map((m, i) => (
                  <div key={i} className="py-1 border-b border-gray-200 last:border-0">
                    <span className="text-gray-500">#{i + 1}</span>{" "}
                    <span className="font-mono">"{m.value}"</span>{" "}
                    <span className="text-gray-400 text-xs">位置: {m.index}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
