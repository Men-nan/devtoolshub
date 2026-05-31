import Link from "next/link";
import { categories, tools } from "@/lib/tools";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <span className="text-2xl">🛠️</span>
              <span>DevToolsHub</span>
            </div>
            <p className="text-sm text-gray-400">
              免费在线开发者工具集合。无需注册，即开即用，所有数据在浏览器本地处理。
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-3">工具分类</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/?category=${cat.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {cat.icon} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="text-white font-semibold mb-3">热门工具</h3>
            <ul className="space-y-2">
              {tools.slice(0, 5).map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={tool.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">关于</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-gray-400">
                  所有工具均在浏览器本地运行，不上传任何数据。
                </span>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  GitHub 开源仓库
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} DevToolsHub. 免费在线开发者工具。</p>
        </div>
      </div>
    </footer>
  );
}
