import NavBar from "@/components/NavBar";
import Link from "next/link";
import { issues } from "@/data/issues";

export default function IssuesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      {/* Hero */}
      <section
        className="relative px-6 py-28 text-center"
        style={{
          backgroundImage: "url('/kashmir.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(6,95,70,0.62)" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-white/70 font-bold text-sm uppercase tracking-widest mb-3">
            The Sufi Response
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            World Issues
          </h1>
          <p className="text-white/85 text-lg font-semibold max-w-xl mx-auto">
            Not withdrawal from the world — but a deeper, more loving engagement with it. Click any issue to explore.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section className="py-16 px-6 max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-6">
          {issues.map((issue) => (
            <Link
              key={issue.slug}
              href={`/issues/${issue.slug}`}
              className="group bg-white rounded-3xl shadow border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-1.5 w-full" style={{ backgroundColor: issue.color }} />
              <div className="p-7">
                <h2
                  className="text-xl font-black mb-2 group-hover:opacity-80 transition-opacity"
                  style={{ color: issue.color }}
                >
                  {issue.title}
                </h2>
                <p className="text-gray-500 font-black text-sm mb-4">{issue.stat}</p>
                <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-5 line-clamp-3">
                  {issue.reality}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                    Sufi voice: {issue.sufiName}
                  </span>
                  <span
                    className="text-xs font-black uppercase tracking-widest group-hover:underline"
                    style={{ color: issue.color }}
                  >
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-14 px-6 text-center" style={{ backgroundColor: "#0A2A1C" }}>
        <p className="text-xl font-black text-white italic mb-3 max-w-2xl mx-auto">
          &ldquo;Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.&rdquo;
        </p>
        <p className="text-emerald-300 font-bold mb-8">— Rumi</p>
        <Link href="/blog" className="inline-block text-white font-black px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity" style={{ backgroundColor: "#065F46" }}>
          Read Our Reflections →
        </Link>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-sm py-8 px-6 text-center">
        <p className="font-black text-white mb-1">OurSufiWorld</p>
        <p className="italic text-emerald-300 mb-1">&ldquo;Where the Divine Meets the People&rdquo;</p>
        <p>oursufiworld.com</p>
      </footer>
    </div>
  );
}
