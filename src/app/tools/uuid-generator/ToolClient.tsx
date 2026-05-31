"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { tools } from "@/lib/tools";

const tool = tools.find((t) => t.slug === "uuid-generator")!;

function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function UuidGeneratorClient() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [noDashes, setNoDashes] = useState(false);

  const generate = () => {
    const result = Array.from({ length: count }, () => {
      let uuid = generateUUID();
      if (uppercase) uuid = uuid.toUpperCase();
      if (noDashes) uuid = uuid.replace(/-/g, "");
      return uuid;
    });
    setUuids(result);
  };

  const copyAll = () => navigator.clipboard.writeText(uuids.join("\n"));

  return (
    <ToolLayout
      tool={tool}
      howTo={[
        "设置要生成的 UUID 数量",
        "选择格式选项（大写、无连字符）",
        "点击「生成」按钮",
        "点击「复制全部」复制所有 UUID",
      ]}
      faq={[
        { question: "什么是 UUID？", answer: "UUID（通用唯一标识符）是一种 128 位的标识符，用于在分布式系统中唯一标识信息。UUID v4 是随机生成的，碰撞概率极低。" },
      ]}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">数量：</label>
            <input type="number" min={1} max={100} value={count} onChange={(e) => setCount(+e.target.value)} className="w-20 px-2 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <label className="flex items-center gap-1 text-sm text-gray-700">
            <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} /> 大写
          </label>
          <label className="flex items-center gap-1 text-sm text-gray-700">
            <input type="checkbox" checked={noDashes} onChange={(e) => setNoDashes(e.target.checked)} /> 无连字符
          </label>
          <button onClick={generate} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">生成</button>
          <button onClick={copyAll} disabled={uuids.length === 0} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm font-medium disabled:opacity-50">复制全部</button>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 min-h-[200px] font-mono text-sm">
          {uuids.length === 0 ? (
            <span className="text-gray-400">点击「生成」按钮创建 UUID</span>
          ) : (
            uuids.map((uuid, i) => (
              <div key={i} className="py-1 flex items-center gap-2">
                <span className="text-gray-400 w-8 text-right">{i + 1}.</span>
                <span>{uuid}</span>
                <button onClick={() => navigator.clipboard.writeText(uuid)} className="ml-auto text-xs text-blue-600 hover:underline">复制</button>
              </div>
            ))
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
