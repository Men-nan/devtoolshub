# 🛠️ DevToolsHub

免费在线开发者工具集合。无需注册，即开即用，所有数据在浏览器本地处理。

## 功能工具

| 工具 | 说明 |
|------|------|
| 📄 JSON 格式化 | 格式化、校验、压缩 JSON 数据 |
| 🔐 Base64 编解码 | 文本 Base64 编码与解码 |
| 🔗 URL 编解码 | URL/URI 组件编码与解码 |
| 🔢 哈希生成器 | SHA-1/SHA-256/SHA-384/SHA-512 哈希 |
| 🧪 正则测试器 | 实时正则表达式匹配与高亮 |
| 🎨 颜色转换器 | HEX/RGB/HSL 颜色格式互转 |
| 🆔 UUID 生成器 | 批量生成 UUID v4 |
| 🔑 密码生成器 | 可配置强度的安全密码生成 |
| ⏰ 时间戳转换 | Unix 时间戳与日期互转 |
| 📝 文本对比 | 文本差异对比与高亮 |

## 技术栈

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** 部署

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 启动
npm start
```

## 部署到 Vercel

```bash
npm i -g vercel
vercel
```

## 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── page.tsx           # 首页
│   └── tools/             # 工具页面
├── components/             # React 组件
│   ├── Header.tsx         # 导航栏
│   ├── Footer.tsx         # 页脚
│   ├── ToolLayout.tsx     # 工具页布局
│   └── AdSlot.tsx         # 广告位
└── lib/
    └── tools.ts           # 工具注册表
```

## 变现策略

- Google AdSense 广告
- Carbon Ads（开发者受众）
- 联盟营销链接

## License

MIT
