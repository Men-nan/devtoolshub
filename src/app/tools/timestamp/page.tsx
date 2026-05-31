"use client";

import { useState, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";
import { tools } from "@/lib/tools";

const tool = tools.find((t) => t.slug === "timestamp")!;

export default function TimestampPage() {
  const [now, setNow] = useState(Math.floor(Date.now() / 1000));
  const [inputTs, setInputTs] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [convertedDate, setConvertedDate] = useState("");
  const [convertedTs, setConvertedTs] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(timer);
  }, []);

  const tsToDate = () => {
    const ts = parseInt(inputTs);
    if (isNaN(ts)) return;
    const ms = ts > 1e12 ? ts : ts * 1000;
    const d = new Date(ms);
    setConvertedDate(d.toLocaleString("zh-CN") + "\n" + d.toISOString());
  };

  const dateToTs = () => {
    const d = new Date(inputDate);
    if (isNaN(d.getTime())) return;
    setConvertedTs(`秒: ${Math.floor(d.getTime() / 1000)}\n毫秒: ${d.getTime()}`);
  };

  const copy = (val: string) => navigator.clipboard.writeText(val);

  return (
    <ToolLayout
      tool={tool}
      howTo={[
        "当前 Unix 时间戳实时显示在顶部",
        "输入时间戳点击「转日期」转换为可读日期",
        "输入日期点击「转时间戳」转换为 Unix 时间戳",
      ]}
      faq={[
        { question: "什么是 Unix 时间戳？", answer: "Unix 时间戳是从 1970年1月1日 00:00:00 UTC 到现在的秒数。它是计算机系统中广泛使用的时间表示方式。" },
        { question: "秒级和毫秒级时间戳怎么区分？", answer: "秒级时间戳是 10 位数字（如 1700000000），毫秒级是 13 位数字（如 1700000000000）。本工具会自动识别。" },
      ]}
    >
      <div className="space-y-6">
        {/* Current Timestamp */}
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
          <div className="text-sm text-blue-600 mb-1">当前 Unix 时间戳</div>
          <div className="text-3xl font-mono font-bold text-blue-900">{now}</div>
          <div className="text-sm text-blue-600 mt-1">{new Date(now * 1000).toLocaleString("zh-CN")}</div>
        </div>

        {/* Timestamp to Date */}
        <div className="p-4 bg-white rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-3">时间戳 → 日期</h3>
          <div className="flex gap-3">
            <input type="text" value={inputTs} onChange={(e) => setInputTs(e.target.value)} placeholder="输入时间戳（如 1700000000）" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm" />
            <button onClick={tsToDate} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">转日期</button>
          </div>
          {convertedDate && (
            <pre className="mt-3 p-3 bg-gray-50 rounded text-sm font-mono whitespace-pre-wrap">{convertedDate}</pre>
          )}
        </div>

        {/* Date to Timestamp */}
        <div className="p-4 bg-white rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-3">日期 → 时间戳</h3>
          <div className="flex gap-3">
            <input type="datetime-local" value={inputDate} onChange={(e) => setInputDate(e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm" />
            <button onClick={dateToTs} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">转时间戳</button>
          </div>
          {convertedTs && (
            <pre className="mt-3 p-3 bg-gray-50 rounded text-sm font-mono whitespace-pre-wrap">{convertedTs}</pre>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
