import Link from "next/link";
import type { Tool } from "@/lib/tools";
import { tools } from "@/lib/tools";
import AdSlot from "./AdSlot";

interface ToolLayoutProps {
  tool: Tool;
  children: React.ReactNode;
  faq?: { question: string; answer: string }[];
  howTo?: string[];
}

export default function ToolLayout({ tool, children, faq, howTo }: ToolLayoutProps) {
  const relatedTools = tools
    .filter((t) => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, 3);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqJsonLd =
    faq && faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">
            首页
          </Link>
          <span>/</span>
          <span className="text-gray-900">{tool.name}</span>
        </nav>

        {/* Ad Top */}
        <AdSlot position="top" className="mb-6" />

        {/* Title & Description */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{tool.name}</h1>
        <p className="text-gray-600 mb-6 max-w-2xl">{tool.description}</p>

        {/* Tool Content */}
        <div className="mb-8">{children}</div>

        {/* Ad In-Article */}
        <AdSlot position="in-article" className="my-8" />

        {/* How To */}
        {howTo && howTo.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">使用方法</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              {howTo.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>
        )}

        {/* FAQ */}
        {faq && faq.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">常见问题</h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <details key={i} className="group border border-gray-200 rounded-lg">
                  <summary className="flex items-center justify-between px-4 py-3 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
                    {item.question}
                    <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-4 pb-3 text-gray-600">{item.answer}</div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">相关工具</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedTools.map((t) => (
                <Link
                  key={t.slug}
                  href={t.href}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <span className="text-2xl">{t.icon}</span>
                  <div>
                    <div className="font-medium text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500 line-clamp-1">{t.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Ad Bottom */}
        <AdSlot position="bottom" className="mt-8" />
      </main>
    </>
  );
}
