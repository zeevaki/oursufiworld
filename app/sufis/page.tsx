import NavBar from "@/components/NavBar";
import Link from "next/link";

const sufis = [
  {
    name: "Allama Iqbal",
    years: "1877–1938",
    origin: "Sialkot, Punjab",
    emoji: "🌙",
    color: "#6D28D9",
    tagline: "The Poet of the East — who dreamed of a humanity awakened to its divine potential",
    quote: "Rise, for the dawn has broken. The world awaits your awakening. Do not sleep — the caravan has already moved on.",
    bio: "Muhammad Iqbal was a poet, philosopher, and visionary whose work transcended nations, religions, and centuries. Writing in Urdu and Persian, he revived the Sufi concept of the Khudi — the self — not as ego, but as the divine spark within every human being that, when fully realized, can transform the world. He warned against blind nationalism, against the slavery of materialism, against the division of humanity into competing tribes. His Shikwa and Jawab-e-Shikwa are conversations with God so honest they were considered scandalous. His Bang-e-Dra is a call to a sleeping civilization. He believed that a human being who truly knows themselves knows God — and a humanity that truly knows itself needs no weapons, no borders, no wars.",
    relevance: "Iqbal's vision of the awakened self is the direct antidote to the passive consumerism that drives climate destruction, to the tribal nationalism that produces war, and to the hollow educational systems that produce workers instead of thinkers. He asked: what does a fully realized human being look like? OurSufiWorld asks the same question.",
  },
  {
    name: "Rumi",
    years: "1207–1273",
    origin: "Balkh (modern Afghanistan) / Konya (Turkey)",
    emoji: "🌀",
    color: "#0EA5E9",
    tagline: "The greatest mystical poet in human history — whose love dissolved every border",
    quote: "Out beyond ideas of wrongdoing and rightdoing, there is a field. I will meet you there.",
    bio: "Jalal ad-Din Muhammad Rumi wrote over 70,000 verses of poetry, most of them dictated in a state of ecstatic love. His Masnavi is one of the greatest works of world literature. His Diwan-e-Shams is an ocean of longing and union. But Rumi was not merely a poet — he was a theologian, a teacher, and a man who had been broken open by grief (the death of his teacher Shams of Tabriz) and rebuilt by love. He taught that the divine is not in temples or mosques or churches — it is in the turning of the heart toward truth. His followers, the Mevlevi, practice the Sema — the whirling that represents the movement of all creation around the divine center. Rumi wrote in Persian but belonged to no single nation. He is claimed by Turkey, Iran, Afghanistan — and by anyone who has ever felt the longing for something larger than themselves.",
    relevance: "Rumi's most radical teaching is this: the boundary between self and other is an illusion. It is this illusion that allows us to dump plastic in oceans we think of as 'out there,' to cut down forests we think of as 'somewhere else,' to send weapons to wars we think of as 'their problem.' Rumi dissolves the boundary. When the divine meets the people, there is no 'other' ocean. There is no 'other' forest. There is no 'other' child.",
  },
  {
    name: "Bulleh Shah",
    years: "1680–1757",
    origin: "Uch Sharif, Punjab",
    emoji: "🌹",
    color: "#DC2626",
    tagline: "The rebel saint who tore down every wall — caste, creed, and convention",
    quote: "Tear down the mosque, tear down the temple, tear down everything in sight — but do not break a human heart, for that is where God resides.",
    bio: "Bulleh Shah was born into a Syed family — the highest caste in Muslim Punjab — and chose as his spiritual teacher a man of the Arain caste, considered far beneath him. For this, he was expelled from his community, called a heretic, forbidden from being buried in his hometown. He did not care. His kafi — short, piercing Punjabi poems — demolished every orthodoxy he encountered. He questioned religious authority, mocked empty ritual, celebrated dancing and music that the mullahs condemned, and insisted that the only real religion was the religion of love. He was considered dangerous by every establishment of his time. His poetry is now sung across Pakistan and India as a shared inheritance. The walls he tore down are still standing. He is still tearing them down.",
    relevance: "Bulleh Shah's refusal to accept caste — to choose a teacher based on wisdom rather than birth — is the foundation of every social justice movement. The education system that tracks children by class and postcode, the border that divides the Punjabi people from themselves, the war that kills farmers on both sides of a line drawn by a British lawyer in 1947 — Bulleh Shah would have recognized all of these as the same heresy: the substitution of human categories for human beings.",
  },
  {
    name: "Kabir",
    years: "1440–1518",
    origin: "Varanasi, India",
    emoji: "🪔",
    color: "#D97706",
    tagline: "The weaver-saint who stitched together Islam and Hinduism with threads of pure truth",
    quote: "I have been thinking of the difference between water and the waves on it. Rising, water still, water. Falling back, it is water, only water.",
    bio: "Kabir was a weaver in Varanasi who became one of the most radical spiritual voices in human history. He was raised Muslim but studied under a Hindu guru (Ramananda) at a time when such a thing was unthinkable. He rejected both traditions wherever they became walls rather than doors. His dohas — short, two-line poems of devastating precision — mock the mullah who counts beads while ignoring the poor, the pandit who bathes in the Ganges while staying dirty inside, the pilgrim who travels to Mecca while God sits ignored in his own heart. Kabir was claimed by both Hindus and Muslims after his death — when his followers argued over his body, legend says they found only flowers. He belongs to both. He belongs to neither. He belongs to truth.",
    relevance: "Kabir's bridge between Islam and Hinduism is exactly the bridge the world needs today — not a merger of religions, not a denial of difference, but an insistence that the divine is larger than any single tradition's map of it. His refusal of religious nationalism is the antidote to every war fought in God's name — including the ones happening right now.",
  },
  {
    name: "Rabia al-Adawiyya",
    years: "717–801",
    origin: "Basra, Iraq",
    emoji: "💫",
    color: "#059669",
    tagline: "The first great Sufi poet — a woman who loved God without fear and without bargain",
    quote: "O God, if I worship You out of fear of Hell, burn me in Hell. If I worship You in hope of Paradise, exclude me from Paradise. But if I worship You for Your own sake, do not withhold from me Your eternal beauty.",
    bio: "Rabia al-Adawiyya was born into poverty, orphaned young, and sold into slavery. She bought her freedom through her devotion and spent the rest of her life in prayer, poetry, and radical theological honesty. She was the first to articulate what would become the heart of Sufi theology: that God should be loved not out of fear of hell or hope of paradise, but purely, freely, for God's own sake. She rejected multiple marriage proposals, not out of rejection of love, but because her love was already given. She gathered disciples — men and women — and taught without apology. In a tradition that would become overwhelmingly male, she stands at the very beginning, and at the very top. Her love was not soft. It was terrifyingly pure.",
    relevance: "Rabia's insistence on love without transaction — worship not for reward but for the sake of the beloved — is the deepest challenge to the transactional logic that destroys our planet. We do not protect the Amazon because it benefits us. We protect it because it is alive. We do not stop war because it is expensive. We stop it because human life is sacred. Rabia's love asks nothing in return. That is exactly the love the world needs.",
  },
  {
    name: "Shah Hussain",
    years: "1538–1599",
    origin: "Lahore, Punjab",
    emoji: "🎶",
    color: "#7C3AED",
    tagline: "The kafir saint of Lahore who danced his way to God and scandalized everyone doing it",
    quote: "Neither Hindu nor Muslim am I. I have taken the path of love and left both behind.",
    bio: "Shah Hussain was a Sufi of the Qadiri order in Lahore who became notorious for dancing at shrines, wearing the red clothes of a Hindu bride, and taking as his closest companion a young Hindu boy named Madho Lal — a friendship so deep that they became known as Madho Lal Hussain, a single name for two people of different faiths. He wrote kafi in Punjabi that mixed Islamic and Hindu imagery with wild, joyful abandon. He was condemned by the orthodox, celebrated by the poor, and is buried in Lahore at a shrine still visited by hundreds of thousands. His annual Mela (festival) is one of the most vibrant celebrations in Pakistan — Hindus and Muslims and Sikhs dancing together at the tomb of a man who refused to choose.",
    relevance: "Shah Hussain's refusal to be either Hindu or Muslim — his insistence on being simply a lover of the divine — is the radical act this divided world needs. He did not ask for tolerance. He did not ask for coexistence. He danced across the boundary until it disappeared. That is the OurSufiWorld vision: not peaceful coexistence of separate worlds, but the joyful dissolution of the walls between them.",
  },
];

export default function SufisPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      {/* Hero */}
      <section
        className="relative px-6 py-24 text-center"
        style={{
          backgroundImage: "url('/kashmir.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(6,95,70,0.62)" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-black text-white mb-4" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
            The Sufis
          </h1>
          <p className="text-white/85 text-lg font-semibold max-w-xl mx-auto">
            Poets, mystics, wanderers — and the most radical, courageous, loving thinkers our world has ever produced.
          </p>
        </div>
      </section>

      {/* Sufis */}
      <section className="py-16 px-6 max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-10">
          {sufis.map((s) => (
            <div key={s.name} className="bg-white rounded-3xl shadow border border-gray-100 overflow-hidden">
              <div className="p-7 border-b-4" style={{ borderColor: s.color }}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl">{s.emoji}</span>
                  <div>
                    <h2 className="text-2xl font-black text-gray-800">{s.name}</h2>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wide">{s.years} · {s.origin}</p>
                    <p className="font-semibold text-sm mt-1" style={{ color: s.color }}>{s.tagline}</p>
                  </div>
                </div>
                <blockquote className="border-l-4 pl-4 py-1 italic text-gray-600 font-semibold text-base" style={{ borderColor: s.color }}>
                  &ldquo;{s.quote}&rdquo;
                </blockquote>
              </div>
              <div className="p-7">
                <h3 className="font-black text-gray-700 text-sm uppercase tracking-wide mb-2">Their Life</h3>
                <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-5">{s.bio}</p>
                <div className="rounded-2xl p-4" style={{ backgroundColor: s.color + "12" }}>
                  <h3 className="font-black text-sm uppercase tracking-wide mb-2" style={{ color: s.color }}>
                    Why This Matters Now
                  </h3>
                  <p className="text-gray-600 font-semibold text-sm leading-relaxed">{s.relevance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-6 text-center" style={{ backgroundColor: "#1E1B4B" }}>
        <p className="text-xl font-black text-white italic mb-3 max-w-2xl mx-auto">
          &ldquo;The Sufi is the one whose thought keeps pace with the foot — present in every step, not lost in the destination.&rdquo;
        </p>
        <p className="text-emerald-300 font-bold">— Ibn Arabi</p>
        <div className="mt-8">
          <Link href="/issues" className="inline-block text-white font-black px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D97706" }}>
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
