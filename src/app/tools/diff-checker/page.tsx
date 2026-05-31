"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";
import { tools } from "@/lib/tools";

const tool = tools.find((t) => t.slug === "diff-checker")!;

interface DiffLine {
  type: "equal" | "added" | "removed";
  text: string;
  lineNum: number;
}

function computeDiff(text1: string, text2: string): DiffLine[] {
  const lines1 = text1.split("\n");
  const lines2 = text2.split("\n");
  const result: DiffLine[] = [];

  // Simple line-by-line diff
  const maxLen = Math.max(lines1.length, lines2.length);
  let i = 0, j = 0;

  while (i < lines1.length || j < lines2.length) {
    if (i >= lines1.length) {
      result.push({ type: "added", text: lines2[j], lineNum: j + 1 });
      j++;
    } else if (j >= lines2.length) {
      result.push({ type: "removed", text: lines1[i], lineNum: i + 1 });
      i++;
    } else if (lines1[i] === lines2[j]) {
      result.push({ type: "equal", text: lines1[i], lineNum: i + 1 });
      i++; j++;
    } else {
      // Look ahead for match
      let found1 = -1, found2 = -1;
      for (let k = j + 1; k < Math.min(j + 5, lines2.length); k++) {
        if (lines2[k] === lines1[i]) { found2 = k; break; }
      }
      for (let k = i + 1; k < Math.min(i + 5, lines1.length); k++) {
        if (lines1[k] === lines2[j]) { found1 = k; break; }
      }
      if (found2 !== -1) {
        while (j < found2) { result.push({ type: "added", text: lines2[j], lineNum: j + 1 }); j++; }
      } else if (found1 !== -1) {
        while (i < found1) { result.push({ type: "removed", text: lines1[i], lineNum: i + 1 }); i++; }
      } else {
        result.push({ type: "removed", text: lines1[i], lineNum: i + 1 });
        result.push({ type: "added", text: lines2[j], lineNum: j + 1 });
        i++; j++;
      }
    }
  }
  return result;
}

export default function DiffCheckerPage() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const diff = useMemo(() => computeDiff(text1, text2), [text1, text2]);
  const stats = useMemo(() => ({
    added: diff.filter((d) => d.type === "added").length,
    removed: diff.filter((d) => d.type === "removed").length,
    unchanged: diff.filter((d) => d.type === "equal").length,
  }), [diff]);

  return (
    <ToolLayout
      tool={tool}
      howTo={[
        "在左侧输入原始文本",
        "在右侧输入修改后的文本",
        "差异结果会自动计算并显示",
      ]}
      faq={[
        { question: "这个工具支持哪些文件类型？", answer: "本工具比较的是纯文本内容。您可以粘贴任何文本（代码、配置文件、文档等）进行对比。" },
      ]}
    >
      <div className="space-y-4">
        {/* Input */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">原始文本</label>
            <textarea value={text1} onChange={(e) => setText1(e.target.value)} placeholder="输入原始文本..." className="w-full h-48 p-3 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">修改后文本</label>
            <textarea value={text2} onChange={(e) => setText2(e.target.value)} placeholder="输入修改后的文本..." className="w-full h-48 p-3 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-4 text-sm">
          <span className="text-green-600">+{stats.added} 新增</span>
          <span className="text-red-600">-{stats.removed} 删除</span>
          <span className="text-gray-500">{stats.unchanged} 未变</span>
        </div>

        {/* Diff Output */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-700">差异结果</div>
          <div className="max-h-96 overflow-auto font-mono text-sm">
            {diff.length === 0 ? (
              <div className="p-4 text-gray-400 text-center">在上方输入文本查看差异</div>
            ) : (
              diff.map((line, i) => (
                <div
                  key={i}
                  className={`px-4 py-0.5 ${
                    line.type === "added"
                      ? "bg-green-50 text-green-800"
                      : line.type === "removed"
                      ? "bg-red-50 text-red-800"
                      : "text-gray-700"
                  }`}
                >
                  <span className="inline-block w-8 text-gray-400 select-none">
                    {line.type === "added" ? "+" : line.type === "removed" ? "-" : " "}
                  </span>
                  {line.text}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
