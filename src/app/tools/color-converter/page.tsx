"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { tools } from "@/lib/tools";

const tool = tools.find((t) => t.slug === "color-converter")!;

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const m = hex.replace("#", "").match(/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  return m ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) } : null;
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export default function ColorConverterPage() {
  const [hex, setHex] = useState("#3b82f6");
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [hsl, setHsl] = useState({ h: 217, s: 91, l: 60 });

  const updateFromHex = (val: string) => {
    setHex(val);
    const c = hexToRgb(val);
    if (c) { setRgb(c); setHsl(rgbToHsl(c.r, c.g, c.b)); }
  };

  const updateFromRgb = (r: number, g: number, b: number) => {
    setRgb({ r, g, b });
    setHex(rgbToHex(r, g, b));
    setHsl(rgbToHsl(r, g, b));
  };

  const copy = (val: string) => navigator.clipboard.writeText(val);

  return (
    <ToolLayout
      tool={tool}
      howTo={[
        "在任意格式输入框中输入颜色值",
        "其他格式会自动同步转换",
        "使用颜色选择器直观选色",
        "点击复制按钮复制颜色值",
      ]}
      faq={[
        { question: "HEX、RGB、HSL 有什么区别？", answer: "HEX 是十六进制表示（如 #FF0000），RGB 是红绿蓝三通道（如 rgb(255,0,0)），HSL 是色相-饱和度-亮度（如 hsl(0,100%,50%)）。它们表示相同的颜色，只是格式不同。" },
      ]}
    >
      <div className="space-y-6">
        {/* Color Preview */}
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-xl border-2 border-gray-200 shadow-inner" style={{ backgroundColor: hex }} />
          <div className="flex flex-col gap-1 text-sm">
            <button onClick={() => copy(hex)} className="text-left hover:text-blue-600">HEX: {hex}</button>
            <button onClick={() => copy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)} className="text-left hover:text-blue-600">RGB: rgb({rgb.r}, {rgb.g}, {rgb.b})</button>
            <button onClick={() => copy(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)} className="text-left hover:text-blue-600">HSL: hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</button>
          </div>
        </div>

        {/* Color Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">颜色选择器</label>
          <input type="color" value={hex} onChange={(e) => updateFromHex(e.target.value)} className="w-16 h-10 cursor-pointer" />
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">HEX</label>
            <input type="text" value={hex} onChange={(e) => updateFromHex(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">RGB</label>
            <div className="flex gap-2">
              {(["r", "g", "b"] as const).map((ch) => (
                <input key={ch} type="number" min={0} max={255} value={rgb[ch]}
                  onChange={(e) => updateFromRgb(ch === "r" ? +e.target.value : rgb.r, ch === "g" ? +e.target.value : rgb.g, ch === "b" ? +e.target.value : rgb.b)}
                  className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm" placeholder={ch.toUpperCase()} />
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">HSL</label>
            <div className="flex gap-2">
              <input type="number" min={0} max={360} value={hsl.h} readOnly className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50" placeholder="H" />
              <input type="number" min={0} max={100} value={hsl.s} readOnly className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50" placeholder="S" />
              <input type="number" min={0} max={100} value={hsl.l} readOnly className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50" placeholder="L" />
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
