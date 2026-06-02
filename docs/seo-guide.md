# SEO 优化指南

## 🔍 搜索引擎提交

### 1. Google Search Console

**步骤：**
1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 点击「添加资源」
3. 选择「网址前缀」
4. 输入: `https://men-nan.github.io/devtoolshub/`
5. 验证方式：选择「HTML 文件」
6. 下载验证文件，放到 `out/` 目录
7. 重新部署到 GitHub Pages
8. 点击「验证」

**提交 Sitemap:**
1. 左侧菜单选择「站点地图」
2. 输入: `sitemap.xml`
3. 点击「提交」

### 2. Bing Webmaster

**步骤：**
1. 访问 [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. 使用 Microsoft 账号登录
3. 点击「添加站点」
4. 输入: `https://men-nan.github.io/devtoolshub/`
5. 验证方式：选择「HTML Meta Tag」
6. 在 `layout.tsx` 的 `<head>` 中添加 meta 标签
7. 重新部署
8. 点击「验证」

**提交 Sitemap:**
1. 左侧菜单选择「站点地图」
2. 输入: `https://men-nan.github.io/devtoolshub/sitemap.xml`
3. 点击「提交」

### 3. 百度站长平台

**步骤：**
1. 访问 [百度站长平台](https://ziyuan.baidu.com)
2. 使用百度账号登录
3. 点击「用户中心」→「站点管理」
4. 点击「添加网站」
5. 输入: `https://men-nan.github.io/devtoolshub/`
6. 验证方式：选择「HTML 标签验证」
7. 在 `layout.tsx` 的 `<head>` 中添加 meta 标签
8. 重新部署
9. 点击「完成验证」

**提交 Sitemap:**
1. 左侧菜单选择「链接提交」→「自动提交」→「sitemap」
2. 输入: `https://men-nan.github.io/devtoolshub/sitemap.xml`
3. 点击「提交」

---

## 📝 关键词优化

### 目标关键词

| 关键词 | 月搜索量 | 竞争度 | 优先级 |
|--------|---------|--------|--------|
| json 格式化 | 10万+ | 中 | ⭐⭐⭐ |
| base64 编解码 | 5万+ | 中 | ⭐⭐⭐ |
| 正则表达式测试 | 3万+ | 中 | ⭐⭐⭐ |
| 在线密码生成器 | 2万+ | 低 | ⭐⭐ |
| uuid 生成器 | 1万+ | 低 | ⭐⭐ |
| 时间戳转换 | 1万+ | 低 | ⭐⭐ |
| 颜色转换器 | 1万+ | 低 | ⭐⭐ |
| 哈希生成器 | 5千+ | 低 | ⭐⭐ |
| 文本对比 | 5千+ | 低 | ⭐⭐ |
| url 编解码 | 5千+ | 低 | ⭐⭐ |

### 长尾关键词

- json 格式化在线
- json 校验工具
- base64 编码解码在线
- 正则表达式在线测试
- 在线生成随机密码
- uuid 在线生成
- unix 时间戳转换
- hex 颜色代码转换
- sha256 哈希在线计算
- 文本差异对比工具

---

## 📊 SEO 监控

### 监控工具

1. **Google Analytics**
   - 访问: https://analytics.google.com/
   - 添加跟踪代码到 `layout.tsx`

2. **Google Search Console**
   - 监控搜索表现
   - 查看索引状态
   - 发现错误

3. **Ahrefs / SEMrush**
   - 关键词排名监控
   - 竞争对手分析
   - 反向链接监控

### 关键指标

- 有机搜索流量
- 关键词排名
- 页面索引数量
- 点击率 (CTR)
- 平均排名

---

## 📅 内容更新计划

### 第一周
- [x] 提交 Google Search Console
- [x] 提交 Bing Webmaster
- [x] 提交百度站长平台

### 第二周
- [ ] 发布掘金文章
- [ ] 发布 CSDN 文章
- [ ] 发布知乎回答

### 第三周
- [ ] 发布 V2EX 帖子
- [ ] 发布 SegmentFault 文章
- [ ] GitHub README 更新

### 第四周
- [ ] 监控搜索表现
- [ ] 优化低排名关键词
- [ ] 添加新工具

---

## 🎯 预期效果

### 1 个月后
- Google 收录 10+ 页面
- 日均访问 50-100
- 开始获得自然搜索流量

### 3 个月后
- Google 收录 30+ 页面
- 日均访问 500-1000
- 部分关键词进入前 100

### 6 个月后
- Google 收录 50+ 页面
- 日均访问 2000-5000
- 核心关键词进入前 50

### 12 个月后
- Google 收录 100+ 页面
- 日均访问 10000+
- 核心关键词进入前 20
- 开始产生广告收入
