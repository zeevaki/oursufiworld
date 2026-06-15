import { notFound } from "next/navigation";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { sufis, getSufiBySlug } from "@/data/sufis";

export async function generateStaticParams() {
  return sufis.map((s) => ({ slug: s.slug }));
}

export default async function SufiPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sufi = getSufiBySlug(slug);
  if (!sufi) notFound();

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
            {sufi.years} · {sufi.origin}
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            {sufi.name}
          </h1>
          <p className="text-white/85 text-lg font-semibold max-w-xl mx-auto">
            {sufi.tagline}
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-12">
        {/* Back */}
        <Link
          href="/sufis"
          className="text-primary font-bold text-sm hover:underline mb-8 block"
        >
          ← Back to The Sufis
        </Link>

        {/* Opening quote */}
        <blockquote
          className="border-l-4 pl-6 py-2 mb-12"
          style={{ borderColor: sufi.color }}
        >
          <p
            className="text-xl font-black italic leading-relaxed mb-2"
            style={{ color: sufi.color }}
          >
            &ldquo;{sufi.quote}&rdquo;
          </p>
          <cite className="text-gray-400 text-sm font-bold not-italic">— {sufi.name}</cite>
        </blockquote>

        {/* Bio */}
        <section className="mb-12">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
            Their Life
          </h2>
          <p className="text-gray-700 font-semibold text-base leading-relaxed">{sufi.bio}</p>
        </section>

        <hr className="border-gray-100 mb-12" />

        {/* Couplets */}
        <section className="mb-12">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">
            Their Words
          </h2>
          <div className="flex flex-col gap-8">
            {sufi.couplets.map((c, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: sufi.color + "10" }}>
                <p
                  className="font-black text-lg leading-relaxed whitespace-pre-line mb-3"
                  style={{ color: sufi.color }}
                >
                  {c.text}
                </p>
                {c.translation && (
                  <p className="text-gray-600 font-semibold text-sm italic leading-relaxed mb-3 border-l-2 pl-3" style={{ borderColor: sufi.color + "60" }}>
                    {c.translation}
                  </p>
                )}
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wide">
                  — {c.source}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-100 mb-12" />

        {/* Why it matters */}
        <section className="mb-12">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
            Why This Matters Now
          </h2>
          <div className="rounded-2xl p-6" style={{ backgroundColor: sufi.color + "12" }}>
            <p className="text-gray-700 font-semibold text-base leading-relaxed">{sufi.relevance}</p>
          </div>
        </section>

        {/* Navigation to other sufis */}
        <div className="flex justify-between items-center pt-4">
          <Link href="/sufis" className="text-primary font-bold text-sm hover:underline">
            ← All Sufis
          </Link>
          <Link
            href="/issues"
            className="text-white font-black text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: sufi.color }}
          >
            Their Wisdom on World Issues →
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 text-sm py-8 px-6 text-center">
        <p className="font-black text-white mb-1">OurSufiWorld</p>
        <p className="italic text-emerald-300 mb-1">&ldquo;Where the Divine Meets the People&rdquo;</p>
        <p>oursufiworld.com</p>
      </footer>
    </div>
  );
}
