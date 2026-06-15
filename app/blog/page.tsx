import NavBar from "@/components/NavBar";
import Link from "next/link";
import { reflections } from "@/data/reflections";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      <section className="py-16 px-6 text-center text-white" style={{ backgroundColor: "#4C1D95" }}>
        <h1 className="text-4xl font-black mb-3">Reflections</h1>
        <p className="font-semibold text-lg max-w-xl mx-auto" style={{ color: "rgba(221,214,254,0.9)" }}>
          Where ancient Sufi wisdom meets today&apos;s most urgent questions.
        </p>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-6">
          {reflections.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-3xl shadow border border-gray-100 p-7 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: post.color }}
                >
                  {post.sufi}
                </span>
                <span className="text-xs text-gray-400 font-semibold ml-auto">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-black text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 font-semibold text-sm leading-relaxed mb-4">{post.subtitle}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 font-semibold">{post.date}</span>
                <span className="font-black text-sm" style={{ color: post.color }}>Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-sm py-8 px-6 text-center mt-auto">
        <p className="font-black text-white mb-1">OurSufiWorld</p>
        <p className="italic text-purple-300 mb-1">&ldquo;Where the Divine Meets the People&rdquo;</p>
        <p>oursufiworld.com</p>
      </footer>
    </div>
  );
}
