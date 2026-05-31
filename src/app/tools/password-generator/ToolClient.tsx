"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";
import { tools } from "@/lib/tools";

const tool = tools.find((t) => t.slug === "password-generator")!;

const charSets = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

export default function PasswordGeneratorClient() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({ uppercase: true, lowercase: true, numbers: true, symbols: true });
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    let chars = "";
    if (options.uppercase) chars += charSets.uppercase;
    if (options.lowercase) chars += charSets.lowercase;
    if (options.numbers) chars += charSets.numbers;
    if (options.symbols) chars += charSets.symbols;
    if (!chars) chars = charSets.lowercase;

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    setPassword(Array.from(array, (x) => chars[x % chars.length]).join(""));
    setCopied(false);
  }, [length, options]);

  const copy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStrength = (): { label: string; color: string } => {
    if (length < 8) return { label: "弱", color: "text-red-600" };
    if (length < 12) return { label: "中等", color: "text-yellow-600" };
    if (length < 16) return { label: "强", color: "text-green-600" };
    return { label: "非常强", color: "text-green-700" };
  };

  const strength = getStrength();

  return (
    <ToolLayout
      tool={tool}
      howTo={[
        "设置密码长度（建议至少 12 位）",
        "选择包含的字符类型",
        "点击「生成密码」按钮",
        "点击「复制」将密码复制到剪贴板",
      ]}
      faq={[
        { question: "多长的密码才安全？", answer: "建议至少 12 位，包含大小写字母、数字和特殊字符。16 位以上的随机密码在当前计算能力下几乎无法暴力破解。" },
        { question: "密码在本地生成安全吗？", answer: "是的。密码使用浏览器的 crypto.getRandomValues() API 生成，这是密码学安全的随机数生成器，所有计算都在本地完成。" },
      ]}
    >
      <div className="space-y-4">
        {/* Password Display */}
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <code className="flex-1 font-mono text-lg break-all">{password || "点击生成按钮..."}</code>
          {password && (
            <button onClick={copy} className={`px-4 py-2 rounded-lg text-sm font-medium ${copied ? "bg-green-600 text-white" : "bg-gray-600 text-white hover:bg-gray-700"}`}>
              {copied ? "已复制!" : "复制"}
            </button>
          )}
        </div>

        {password && <div className="text-sm">强度：<span className={`font-medium ${strength.color}`}>{strength.label}</span></div>}

        {/* Length */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-700">密码长度</label>
            <span className="text-sm text-gray-500">{length} 位</span>
          </div>
          <input type="range" min={4} max={64} value={length} onChange={(e) => setLength(+e.target.value)} className="w-full" />
        </div>

        {/* Options */}
        <div className="flex flex-wrap gap-4">
          {Object.entries(charSets).map(([key, val]) => (
            <label key={key} className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={options[key as keyof typeof options]}
                onChange={(e) => setOptions({ ...options, [key]: e.target.checked })}
              />
              {key === "uppercase" ? "大写字母" : key === "lowercase" ? "小写字母" : key === "numbers" ? "数字" : "特殊字符"}
            </label>
          ))}
        </div>

        <button onClick={generate} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
          生成密码
        </button>
      </div>
    </ToolLayout>
  );
}
