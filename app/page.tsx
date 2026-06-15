import Link from "next/link";
import NavBar from "@/components/NavBar";

const issues = [
  { emoji: "🌊", label: "Plastic in the Oceans" },
  { emoji: "🌳", label: "Amazon Deforestation" },
  { emoji: "☢️", label: "Weapons of Mass Destruction" },
  { emoji: "⚔️", label: "Wars & Armed Conflict" },
  { emoji: "🌡️", label: "Climate Change & Pollution" },
  { emoji: "💊", label: "Drugs & Addiction" },
  { emoji: "🏫", label: "A Broken Education System" },
];

const sufis = [
  { name: "Allama Iqbal", origin: "Pakistan / India", emoji: "🌙" },
  { name: "Rumi", origin: "Persia / Turkey", emoji: "🌀" },
  { name: "Bulleh Shah", origin: "Punjab", emoji: "🌹" },
  { name: "Kabir", origin: "India", emoji: "🪔" },
  { name: "Rabia al-Adawiyya", origin: "Iraq", emoji: "💫" },
  { name: "Shah Hussain", origin: "Lahore", emoji: "🎶" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-32"
        style={{
          backgroundImage: "url('/kashmir.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "520px",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(6,95,70,0.62)" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-white/70 font-bold text-sm uppercase tracking-widest mb-4">
            Ancient Wisdom · Urgent Action
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-5 leading-tight"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
          >
            OurSufiWorld
          </h1>
          <p className="text-2xl font-bold text-white/80 mb-4 italic">
            &ldquo;Where the Divine Meets the People&rdquo;
          </p>
          <p className="text-white/85 text-lg font-semibold mb-10 max-w-xl mx-auto leading-relaxed">
            The great Sufi masters did not hide from the world. They walked into it — singing, questioning, loving, demanding justice. This is their tradition applied to the crises of our time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/sufis"
              className="bg-white font-black px-6 py-3 rounded-2xl hover:bg-primary-light transition-colors shadow-md"
              style={{ color: "#065F46" }}
            >
              Meet the Sufis →
            </Link>
            <Link
              href="/issues"
              className="font-black px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity shadow-md text-white"
              style={{ backgroundColor: "#D97706" }}
            >
              World Issues →
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-6 px-6 text-center text-white" style={{ backgroundColor: "#065F46" }}>
        <p className="font-bold text-base max-w-2xl mx-auto">
          Sufism does not ask you to leave the world. It asks you to love it enough to transform it.
        </p>
      </section>

      {/* What is this */}
      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-black text-gray-800 mb-5">What Is OurSufiWorld?</h2>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-5">
          OurSufiWorld is a spiritual-activist platform that draws from the deepest wells of Sufi tradition — Iqbal&apos;s vision of the awakened self, Rumi&apos;s ocean of love, Bulleh Shah&apos;s defiance of orthodoxy, Kabir&apos;s bridge between faiths — and points that wisdom directly at the most urgent crises facing our planet and our people.
        </p>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed">
          The oceans are full of plastic. The Amazon is burning. Weapons designed to destroy cities exist in the hands of governments. Children are failed by education systems that were built to produce workers, not human beings. The Sufis had something to say about all of this. We are here to say it.
        </p>
      </section>

      {/* Sufis preview */}
      <section className="bg-primary-light py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-800 text-center mb-2">The Sufis</h2>
          <p className="text-gray-500 font-semibold text-center mb-10">
            Poets, mystics, wanderers — and the most radical thinkers of their time.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {sufis.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-2xl shadow border border-primary-light p-5 text-center"
              >
                <div className="text-4xl mb-2">{s.emoji}</div>
                <div className="font-black text-gray-800 text-sm">{s.name}</div>
                <div className="text-gray-400 text-xs font-semibold mt-1">{s.origin}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/sufis"
              className="inline-block text-white font-black px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#065F46" }}
            >
              Explore Their Lives & Wisdom →
            </Link>
          </div>
        </div>
      </section>

      {/* Issues preview */}
      <section className="py-16 px-6 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-black text-gray-800 text-center mb-2">The Issues</h2>
        <p className="text-gray-500 font-semibold text-center mb-10">
          The Sufi response to the crises of our time.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {issues.map((issue) => (
            <div
              key={issue.label}
              className="bg-white rounded-2xl shadow border border-gray-100 p-5 flex items-center gap-4"
            >
              <span className="text-3xl">{issue.emoji}</span>
              <span className="font-black text-gray-700 text-sm">{issue.label}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/issues"
            className="inline-block text-white font-black px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#D97706" }}
          >
            Explore the Issues →
          </Link>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0A2A1C" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl font-black text-white italic mb-4 leading-relaxed">
            &ldquo;Do not be satisfied with the stories that come before you. Unfold your own myth.&rdquo;
          </p>
          <p className="text-emerald-300 font-bold">— Rumi</p>
        </div>
      </section>

      {/* Our world family */}
      <section className="py-16 px-6 bg-primary-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-800 mb-3">Part of the OurWorld Family</h2>
          <p className="text-gray-600 font-semibold mb-8">
            OurSufiWorld is the spiritual home. Visit our sister sites for education, research, and classroom tools.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://ourteachingworld.com" target="_blank" rel="noopener noreferrer"
              className="bg-white text-primary font-black px-5 py-3 rounded-2xl hover:shadow-md transition-shadow border border-gray-100 text-sm">
              OurTeachingWorld.com
            </a>
            <a href="https://ourreadingworld.com" target="_blank" rel="noopener noreferrer"
              className="bg-white text-primary font-black px-5 py-3 rounded-2xl hover:shadow-md transition-shadow border border-gray-100 text-sm">
              OurReadingWorld.com
            </a>
            <a href="https://ourmathworld.com" target="_blank" rel="noopener noreferrer"
              className="bg-white text-primary font-black px-5 py-3 rounded-2xl hover:shadow-md transition-shadow border border-gray-100 text-sm">
              OurMathWorld.com
            </a>
          </div>
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
