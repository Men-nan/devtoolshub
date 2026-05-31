"use client";

import Link from "next/link";
import { useState } from "react";
import { tools } from "@/lib/tools";

export default function Header() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const results =
    query.length > 0
      ? tools.filter(
          (t) =>
            t.name.toLowerCase().includes(query.toLowerCase()) ||
            t.keywords.some((k) => k.includes(query.toLowerCase()))
        )
      : [];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <span className="text-2xl">🛠️</span>
            <span>DevToolsHub</span>
          </Link>

          {/* Search */}
          <div className="relative hidden sm:block w-64">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResults(true);
              }}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
              onFocus={() => query.length > 0 && setShowResults(true)}
              placeholder="搜索工具..."
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {showResults && results.length > 0 && (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                {results.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={tool.href}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                  >
                    <span>{tool.icon}</span>
                    <span>{tool.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
              全部工具
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
