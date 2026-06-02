# 🛠️ DevToolsHub - 免费在线开发者工具集合

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?style=flat-square&logo=github)](https://men-nan.github.io/devtoolshub/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

> 🚀 **无需注册，即开即用** - 所有数据在浏览器本地处理，安全可靠

🌐 **在线访问**: [https://men-nan.github.io/devtoolshub/](https://men-nan.github.io/devtoolshub/)

---

## ✨ 功能特性

### 📝 格式化工具
| 工具 | 说明 | 关键词 |
|------|------|--------|
| 📄 [JSON 格式化](https://men-nan.github.io/devtoolshub/tools/json-formatter) | 格式化、校验、压缩 JSON 数据 | json formatter, json validator |
| 📝 [文本对比](https://men-nan.github.io/devtoolshub/tools/diff-checker) | 文本差异对比与高亮 | diff checker, text compare |

### 🔐 编解码工具
| 工具 | 说明 | 关键词 |
|------|------|--------|
| 🔐 [Base64 编解码](https://men-nan.github.io/devtoolshub/tools/base64) | 文本 Base64 编码与解码 | base64 encode decode |
| 🔗 [URL 编解码](https://men-nan.github.io/devtoolshub/tools/url-encode) | URL/URI 组件编码与解码 | url encode decode |

### ⚡ 生成器工具
| 工具 | 说明 | 关键词 |
|------|------|--------|
| 🔢 [哈希生成器](https://men-nan.github.io/devtoolshub/tools/hash-generator) | SHA-1/SHA-256/SHA-384/SHA-512 哈希 | hash generator, sha256 |
| 🆔 [UUID 生成器](https://men-nan.github.io/devtoolshub/tools/uuid-generator) | 批量生成 UUID v4 | uuid generator, guid |
| 🔑 [密码生成器](https://men-nan.github.io/devtoolshub/tools/password-generator) | 可配置强度的安全密码生成 | password generator |

### 🔄 转换器工具
| 工具 | 说明 | 关键词 |
|------|------|--------|
| 🎨 [颜色转换器](https://men-nan.github.io/devtoolshub/tools/color-converter) | HEX/RGB/HSL 颜色格式互转 | color converter, hex rgb hsl |
| ⏰ [时间戳转换](https://men-nan.github.io/devtoolshub/tools/timestamp) | Unix 时间戳与日期互转 | unix timestamp converter |

### 🧪 测试器工具
| 工具 | 说明 | 关键词 |
|------|------|--------|
| 🧪 [正则表达式测试](https://men-nan.github.io/devtoolshub/tools/regex-tester) | 实时正则表达式匹配与高亮 | regex tester, regular expression |

---

## 🎯 为什么选择 DevToolsHub？

### 🔒 隐私安全
- ✅ 所有数据在浏览器本地处理
- ✅ 不上传任何数据到服务器
- ✅ 无需注册，无需登录

### ⚡ 极速体验
- ✅ 纯静态页面，加载速度极快
- ✅ 响应式设计，完美适配移动端
- ✅ 无广告干扰，专注工具本身

### 🎨 现代设计
- ✅ 简洁美观的 UI 界面
- ✅ 流畅的交互动画
- ✅ 专业的开发者体验

---

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| [Next.js](https://nextjs.org/) | 16.x | React 全栈框架 |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | 类型安全 |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | 原子化 CSS |
| [GitHub Pages](https://pages.github.com/) | - | 免费静态托管 |

---

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/Men-nan/devtoolshub.git
cd devtoolshub

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建部署

```bash
# 构建静态文件
npm run build

# 部署到 GitHub Pages
# 自动部署：推送到 main 分支即可
```

---

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── tools/             # 工具页面
│       ├── json-formatter/
│       ├── base64/
│       ├── url-encode/
│       ├── hash-generator/
│       ├── regex-tester/
│       ├── color-converter/
│       ├── uuid-generator/
│       ├── password-generator/
│       ├── timestamp/
│       └── diff-checker/
├── components/             # React 组件
│   ├── Header.tsx         # 导航栏
│   ├── Footer.tsx         # 页脚
│   ├── ToolLayout.tsx     # 工具页布局
│   ├── ToolCard.tsx       # 工具卡片
│   └── AdSlot.tsx         # 广告位
└── lib/
    ├── tools.ts           # 工具注册表
    └── metadata.ts        # SEO 元数据
```

---

## 📈 SEO 优化

- ✅ 每个工具页面独立 metadata
- ✅ Open Graph 和 Twitter Card 标签
- ✅ 结构化数据（JSON-LD）
- ✅ sitemap.xml 自动生成
- ✅ robots.txt 配置
- ✅ 语义化 HTML 结构
- ✅ 移动端友好

---

## 💰 变现策略

### 广告收入
- Google AdSense（主要收入来源）
- Carbon Ads（开发者专属广告）

### 联盟营销
- 开发者工具推荐
- 在线课程推广

### 增值服务
- API 接口服务
- 团队协作版本

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

---

## 📄 License

本项目基于 [MIT License](LICENSE) 开源。

---

## 🙏 致谢

感谢所有开源项目的贡献者！

- [Next.js](https://nextjs.org/) - React 全栈框架
- [Tailwind CSS](https://tailwindcss.com/) - 原子化 CSS 框架
- [Vercel](https://vercel.com/) - 部署平台
- [GitHub Pages](https://pages.github.com/) - 免费静态托管

---

<div align="center">

**⭐ 如果觉得有用，请给个 Star 支持一下！⭐**

[![GitHub stars](https://img.shields.io/github/stars/Men-nan/devtoolshub?style=social)](https://github.com/Men-nan/devtoolshub/stargazers)

</div>
