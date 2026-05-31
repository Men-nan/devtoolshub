export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  keywords: string[];
  href: string;
}

export const categories = [
  { slug: "formatters", name: "格式化", icon: "📄" },
  { slug: "encoders", name: "编解码", icon: "🔐" },
  { slug: "generators", name: "生成器", icon: "⚡" },
  { slug: "converters", name: "转换器", icon: "🔄" },
  { slug: "testers", name: "测试器", icon: "🧪" },
] as const;

export const tools: Tool[] = [
  {
    slug: "json-formatter",
    name: "JSON 格式化",
    description: "在线 JSON 格式化、校验、压缩工具。支持语法高亮和错误定位。",
    category: "formatters",
    icon: "📄",
    keywords: ["json", "格式化", "formatter", "validator", "beautify", "minify"],
    href: "/tools/json-formatter",
  },
  {
    slug: "base64",
    name: "Base64 编解码",
    description: "在线 Base64 编码和解码工具，支持文本和文件。",
    category: "encoders",
    icon: "🔐",
    keywords: ["base64", "encode", "decode", "编解码"],
    href: "/tools/base64",
  },
  {
    slug: "url-encode",
    name: "URL 编解码",
    description: "在线 URL 编码和解码工具，支持 URI 组件编码。",
    category: "encoders",
    icon: "🔗",
    keywords: ["url", "encode", "decode", "uri", "编解码"],
    href: "/tools/url-encode",
  },
  {
    slug: "hash-generator",
    name: "哈希生成器",
    description: "在线生成 MD5、SHA-1、SHA-256、SHA-512 哈希值。",
    category: "generators",
    icon: "🔢",
    keywords: ["hash", "md5", "sha1", "sha256", "sha512", "哈希", "摘要"],
    href: "/tools/hash-generator",
  },
  {
    slug: "regex-tester",
    name: "正则表达式测试",
    description: "在线正则表达式测试工具，实时匹配高亮，内置常用模式。",
    category: "testers",
    icon: "🧪",
    keywords: ["regex", "regular expression", "正则", "匹配", "测试"],
    href: "/tools/regex-tester",
  },
  {
    slug: "color-converter",
    name: "颜色转换器",
    description: "在线颜色格式转换，支持 HEX、RGB、HSL 互转。",
    category: "converters",
    icon: "🎨",
    keywords: ["color", "hex", "rgb", "hsl", "颜色", "转换"],
    href: "/tools/color-converter",
  },
  {
    slug: "uuid-generator",
    name: "UUID 生成器",
    description: "在线批量生成 UUID v4，支持自定义格式和数量。",
    category: "generators",
    icon: "🆔",
    keywords: ["uuid", "guid", "generator", "生成器", "唯一标识"],
    href: "/tools/uuid-generator",
  },
  {
    slug: "password-generator",
    name: "密码生成器",
    description: "在线安全密码生成器，可配置长度和字符类型。",
    category: "generators",
    icon: "🔑",
    keywords: ["password", "generator", "密码", "生成器", "安全"],
    href: "/tools/password-generator",
  },
  {
    slug: "timestamp",
    name: "时间戳转换",
    description: "在线 Unix 时间戳与日期格式互转工具。",
    category: "converters",
    icon: "⏰",
    keywords: ["timestamp", "unix", "epoch", "时间戳", "转换"],
    href: "/tools/timestamp",
  },
  {
    slug: "diff-checker",
    name: "文本对比",
    description: "在线文本差异对比工具，高亮显示不同之处。",
    category: "testers",
    icon: "📝",
    keywords: ["diff", "compare", "text", "对比", "差异"],
    href: "/tools/diff-checker",
  },
];

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase();
  return tools.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.includes(q))
  );
}
