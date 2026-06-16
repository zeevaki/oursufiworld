import Link from "next/link";
import NavBar from "@/components/NavBar";
import { sufis } from "@/data/sufis";

export default function SufisPage() {
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
            Poets · Mystics · Wanderers
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            The Sufis
          </h1>
          <p className="text-white/85 text-lg font-semibold max-w-xl mx-auto">
            The most radical, courageous, and loving thinkers our world has ever produced. Click any card to read their full story.
          </p>
        </div>
      </section>

      {/* Featured: Sufi in Action */}
      <section className="py-12 px-6 max-w-5xl mx-auto w-full">
        <Link
          href="/edhi"
          className="group block bg-white rounded-3xl shadow border-2 overflow-hidden hover:shadow-lg transition-shadow"
          style={{ borderColor: "#065F46" }}
        >
          <div className="p-8 text-center">
            <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#065F46" }}>
              A Sufi In Action
            </p>
            <h2 className="text-3xl font-black text-gray-800 mb-3 group-hover:opacity-80 transition-opacity">
              Abdul Sattar Edhi
            </h2>
            <p className="text-gray-600 font-semibold text-base max-w-xl mx-auto mb-5 leading-relaxed">
              He wrote no poetry and had little formal schooling. He simply did what his mother taught him: if you want to love God, do good for humanity. He built Pakistan's largest humanitarian organization on that one lesson.
            </p>
            <p className="text-sm font-black uppercase tracking-widest group-hover:underline" style={{ color: "#065F46" }}>
              Read his story →
            </p>
          </div>
        </Link>
      </section>

      {/* Cards grid */}
      <section className="py-4 px-6 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-black text-gray-800 text-center mb-10">The Poet-Sufis</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sufis.map((s) => (
            <Link
              key={s.slug}
              href={`/sufis/${s.slug}`}
              className="group bg-white rounded-3xl shadow border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-1.5 w-full" style={{ backgroundColor: s.color }} />
              <div className="p-7">
                <h2
                  className="text-2xl font-black mb-1 group-hover:opacity-80 transition-opacity"
                  style={{ color: s.color }}
                >
                  {s.name}
                </h2>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-3">
                  {s.years} · {s.origin}
                </p>
                <p className="text-gray-600 font-semibold text-sm mb-5 leading-relaxed">
                  {s.tagline}
                </p>
                <blockquote
                  className="border-l-4 pl-4 py-1 italic text-gray-500 font-semibold text-sm leading-relaxed"
                  style={{ borderColor: s.color }}
                >
                  &ldquo;{s.quote.length > 120 ? s.quote.slice(0, 120) + "…" : s.quote}&rdquo;
                </blockquote>
                <p
                  className="mt-5 text-xs font-black uppercase tracking-widest group-hover:underline"
                  style={{ color: s.color }}
                >
                  Read their story →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing quote */}
      <section className="py-14 px-6 text-center" style={{ backgroundColor: "#0A2A1C" }}>
        <p className="text-xl font-black text-white italic mb-3 max-w-2xl mx-auto">
          &ldquo;The Sufi is the one whose thought keeps pace with the foot — present in every step, not lost in the destination.&rdquo;
        </p>
        <p className="text-emerald-300 font-bold">— Ibn Arabi</p>
        <div className="mt-8">
          <Link
            href="/issues"
            className="inline-block text-white font-black px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#D97706" }}
          >
            See How Their Wisdom Meets Today&apos;s Issues →
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-sm py-8 px-6 text-center">
        <p className="font-black text-white mb-1">OurSufiWorld</p>
        <p className="italic text-emerald-300 mb-1">&ldquo;Where the Divine Meets the People&rdquo;</p>
        <p>oursufiworld.com</p>
      </footer>
    </div>
  );
}
