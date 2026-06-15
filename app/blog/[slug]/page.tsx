import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { reflections, getReflectionBySlug } from "@/data/reflections";

export async function generateStaticParams() {
  return reflections.map((r) => ({ slug: r.slug }));
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];

  lines.forEach((line, i) => {
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-black text-gray-800 mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.trim() === "") {
      // skip
    } else {
      const parts = line.split(/(\*[^*]+\*)/g).map((part, j) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={j}>{part.slice(1, -1)}</em>;
        }
        return part;
      });
      elements.push(
        <p key={i} className="text-gray-700 font-semibold text-base leading-relaxed mb-5">
          {parts}
        </p>
      );
    }
  });

  return elements;
}

export default async function ReflectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getReflectionBySlug(slug);
  if (!post) notFound();

  const related = reflections.filter((r) => r.slug !== post.slug);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      <main className="flex-1 py-12 px-6 max-w-2xl mx-auto w-full">
        <Link href="/blog" className="font-bold text-sm hover:underline mb-6 block" style={{ color: post.color }}>
          ← Back to Reflections
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: post.color }}
            >
              {post.sufi}
            </span>
          </div>
          <h1 className="text-3xl font-black text-gray-800 mb-3 leading-tight">{post.title}</h1>
          <p className="text-gray-500 font-semibold text-lg mb-3 leading-relaxed">{post.subtitle}</p>
          <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <hr className="border-gray-100 mb-8" />

        <article>{renderContent(post.content)}</article>

        <hr className="border-gray-100 mt-12 mb-8" />

        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-black text-gray-800 mb-4">Keep Reading</h2>
            <div className="flex flex-col gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="bg-white rounded-2xl shadow border border-gray-100 p-5 hover:shadow-md transition-shadow group flex gap-4 items-start"
                >
                  <div>
                    <h3 className="font-black text-gray-800 text-sm group-hover:text-purple-700 transition-colors mb-1">
                      {r.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-semibold">{r.sufi} · {r.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-gray-900 text-gray-400 text-sm py-8 px-6 text-center">
        <p className="font-black text-white mb-1">OurSufiWorld</p>
        <p className="italic text-purple-300 mb-1">&ldquo;Where the Divine Meets the People&rdquo;</p>
        <p>oursufiworld.com</p>
      </footer>
    </div>
  );
}
