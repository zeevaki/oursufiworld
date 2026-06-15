import NavBar from "@/components/NavBar";
import Link from "next/link";

const sufiVoices = [
  {
    name: "Rumi",
    slug: "rumi",
    color: "#0D9488",
    line: "Out beyond ideas of wrongdoing and rightdoing, there is a field. I will meet you there.",
    source: "Masnavi",
    note: "Rumi did not say: out beyond Islam and Christianity. He said: out beyond wrongdoing and rightdoing. The field he points to belongs to no religion. It belongs to every soul that has ever longed for something real.",
  },
  {
    name: "Bulleh Shah",
    slug: "bulleh-shah",
    color: "#DC2626",
    line: "Bullah ki jaana main kaun? — Who am I? Bulleh Shah does not know. I am not the believer inside the mosque. I am not Moses following the law. I am not among the pure and pious.",
    source: "Kafi — Bullah ki jaana",
    note: "He did not say he was nothing. He said he was beyond the labels. The submission in his heart needed no certificate from any institution.",
  },
  {
    name: "Kabir",
    slug: "kabir",
    color: "#D97706",
    line: "The world has died reading books; no one became wise. The one who reads two and a half letters of Love — that one is truly learned.",
    source: "Doha",
    note: "When Kabir died, his Hindu and Muslim followers argued over his body — each wanting to claim him for their own rites. According to legend, they lifted the shroud and found only flowers. He had always belonged to both. He had always belonged to neither. He belonged to love.",
  },
  {
    name: "Shah Hussain",
    slug: "shah-hussain",
    color: "#B45309",
    line: "Neither Hindu nor Muslim am I. I have taken the path of love and left both behind.",
    source: "Kafi",
    note: "He and his companion Madho Lal — a Hindu boy from Lahore — became so inseparable that they were given one name: Madho Lal Hussain. Two faiths. One soul. This is not metaphor. This is what submission to love actually looks like.",
  },
  {
    name: "Allama Iqbal",
    slug: "iqbal",
    color: "#065F46",
    line: "Tu shaheen hai, parwaz hai kaam tera — You are a falcon; flight is your destiny. There are still more skies ahead of you.",
    source: "Bal-e-Jibril",
    note: "Iqbal's falcon belongs to no nation, no sect, no tribe. It belongs to the sky. He believed the awakened human soul — the Khudi — was the one thing every tradition was trying, in its own language, to describe.",
  },
  {
    name: "Rumi",
    slug: "rumi",
    color: "#0D9488",
    line: "I looked in temples, churches, and mosques. But I found the divine within my own heart.",
    source: "Diwan-e-Shams",
    note: "The divine did not check Rumi's religion at the door of his own heart. It was already there — as it is in every heart that turns toward it.",
  },
];

export default function WeAreOnePage() {
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
            The Vision of OurSufiWorld
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            We Are One
          </h1>
          <p className="text-white/90 text-lg font-semibold max-w-xl mx-auto">
            The truth hidden in plain sight — in a word fourteen centuries old
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-14">

        {/* The Word Itself */}
        <section className="mb-14">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
            The Word Itself
          </h2>
          <p className="text-gray-700 font-semibold text-base leading-relaxed mb-5">
            The Arabic word <em>Islam</em> does not mean a religion. It means <strong>submission</strong> — the act of surrendering the self to the one God. And the word <em>Muslim</em> does not mean a member of a particular faith community. It means <strong>one who submits</strong>.
          </p>
          <p className="text-gray-700 font-semibold text-base leading-relaxed mb-5">
            This distinction changes everything. In the Quranic understanding, Abraham was a muslim — a submitter — long before the Prophet Muhammad was born. So was Moses. So was Jesus. The Quran does not claim them for one religion. It recognizes them as bearers of the same light, speaking in different languages to different peoples at different moments in history.
          </p>
          <p className="text-gray-700 font-semibold text-base leading-relaxed">
            Which means: a Hindu who surrenders their heart to the divine is, in the deepest sense of the word, a muslim. A Christian who submits in love and service to God is a muslim. A Jew, a Buddhist, a person of no formal religion who orients their whole life toward truth and the sacred — they are all, in the language of the Quran itself, muslims. Not members of a religion. Participants in a single act of the heart that has no name, no border, and no gatekeepers.
          </p>
        </section>

        <hr className="border-gray-100 mb-14" />

        {/* Imam Feisal Abdul Rauf */}
        <section className="mb-14">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
            A Voice From Our Own Time
          </h2>
          <div className="rounded-2xl p-7 mb-6" style={{ backgroundColor: "#065F4610" }}>
            <blockquote className="text-gray-700 font-semibold text-base leading-relaxed italic mb-4">
              "God says in the Quran that there is only one true religion — God's religion. It is the same theme that God revealed to all of the prophets, even before Muhammad."
            </blockquote>
            <p className="text-xs font-black uppercase tracking-widest text-primary">
              Imam Feisal Abdul Rauf — <em>What's Right with Islam Is What's Right with America</em>
            </p>
          </div>
          <p className="text-gray-700 font-semibold text-base leading-relaxed mb-5">
            Imam Feisal Abdul Rauf — founder of the Cordoba Initiative and one of the most important Muslim voices in America — built his life's work on this foundation. In his landmark book, he argued that what divides the Muslim world from the West is not religion. It is politics, economics, fear, and the human habit of turning what is universal into what is tribal.
          </p>
          <p className="text-gray-700 font-semibold text-base leading-relaxed mb-5">
            His vision was of a new Cordoba — a reference to the golden era of Islamic Spain, when Muslims, Jews, and Christians produced science, philosophy, poetry, and medicine together under one sky. Not because they erased their differences. But because they agreed that truth was larger than any single tradition's claim on it.
          </p>
          <p className="text-gray-700 font-semibold text-base leading-relaxed">
            He said: <em>"I as a Muslim want you, as a Christian, to really be a perfect Christian. I want my Jewish friends to be perfect Jews — to live according to the highest principles of what it means to be a Jew, to be a Christian, to be a Muslim."</em> This is not relativism. This is the deepest possible respect: the belief that every path, walked with full sincerity, leads to the same mountain top.
          </p>
        </section>

        <hr className="border-gray-100 mb-14" />

        {/* The Sufis Knew */}
        <section className="mb-14">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
            The Sufis Knew This
          </h2>
          <p className="text-gray-500 font-semibold text-sm mb-10">
            They did not read it in a book. They lived it. Here is what they said.
          </p>

          <div className="flex flex-col gap-8">
            {sufiVoices.map((voice, i) => (
              <div key={i} className="rounded-2xl p-6 border border-gray-100 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 rounded-full" style={{ backgroundColor: voice.color }} />
                  <Link
                    href={`/sufis/${voice.slug}`}
                    className="font-black text-base hover:underline"
                    style={{ color: voice.color }}
                  >
                    {voice.name}
                  </Link>
                  <span className="text-xs text-gray-400 font-semibold">{voice.source}</span>
                </div>
                <blockquote
                  className="text-gray-800 font-semibold text-base leading-relaxed italic mb-4 whitespace-pre-line"
                  style={{ borderLeft: `3px solid ${voice.color}`, paddingLeft: "1rem" }}
                >
                  {voice.line}
                </blockquote>
                <p className="text-gray-500 font-semibold text-sm leading-relaxed">
                  {voice.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-100 mb-14" />

        {/* Our Statement */}
        <section className="mb-14">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
            Why This Site Exists
          </h2>
          <p className="text-gray-700 font-semibold text-base leading-relaxed mb-5">
            OurSufiWorld was built on a simple conviction: the great Sufi poets were not the property of one religion, one nation, or one century. They belong to anyone who has ever felt the longing for something real — for love that does not divide, for truth that does not require an enemy, for a God large enough to hold all of us.
          </p>
          <p className="text-gray-700 font-semibold text-base leading-relaxed mb-5">
            We are not asking you to become a Muslim. We are not asking you to leave whatever you are. We are saying what Rumi said, what Bulleh Shah said, what Kabir said, what Imam Feisal Abdul Rauf said in our own time: <strong>the submission of the heart to the divine has no religion. It is the religion.</strong>
          </p>
          <div
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: "#065F46" }}
          >
            <p className="text-white font-black text-xl leading-relaxed mb-2">
              Hindu. Christian. Muslim. Jew. Atheist. Seeker.
            </p>
            <p className="text-white/80 font-semibold text-base">
              If you are here — if something in these words moved you — you are already part of what this site is about.
            </p>
            <p className="text-white font-black text-2xl mt-6">We Are One.</p>
          </div>
        </section>

        {/* Nav */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Link
            href="/sufis"
            className="text-white font-black text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#065F46" }}
          >
            Meet the Sufis →
          </Link>
          <Link
            href="/issues"
            className="text-white font-black text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#D97706" }}
          >
            World Issues →
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
