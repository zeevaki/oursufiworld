import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function EdhiPage() {
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
            A Sufi In Action — 1928 to 2016
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Abdul Sattar Edhi
          </h1>
          <p className="text-white/90 text-lg font-semibold max-w-xl mx-auto">
            He wrote no poetry. He left no couplets. His entire life was the verse.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-14">

        {/* Opening */}
        <section className="mb-12">
          <blockquote
            className="text-2xl font-black text-gray-800 italic leading-relaxed mb-3"
            style={{ borderLeft: "4px solid #065F46", paddingLeft: "1.25rem" }}
          >
            &ldquo;People have become educated, but have not become human.&rdquo;
          </blockquote>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wide">— Abdul Sattar Edhi</p>
        </section>

        {/* His Story */}
        <section className="mb-14">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
            His Story
          </h2>
          <p className="text-gray-700 font-semibold text-base leading-relaxed mb-5">
            Abdul Sattar Edhi was born in 1928 in Bantva, a small town in Gujarat, India, into a Memon Muslim family. He had little formal schooling — by his own account, he was never a student of books. His education came from a single, unforgettable source: his mother, who taught him from early childhood to notice the people around him who had nothing, and to do something about it. She gave him small amounts of money as a boy, not to spend on himself, but to give to someone who needed it more. That lesson never left him.
          </p>
          <p className="text-gray-700 font-semibold text-base leading-relaxed mb-5">
            After Partition in 1947, his family migrated to Karachi, Pakistan. There, with no wealth, no institutional backing, and no formal religious credentials, he began doing what his mother had taught him — one act of help at a time. In 1951 he started what would become the Edhi Foundation, beginning with a small dispensary for the poor of Karachi.
          </p>
          <p className="text-gray-700 font-semibold text-base leading-relaxed">
            He wore the same simple clothes for decades — by his own description, he owned only two sets of them. He never drew a salary from the organization he built. He lived in a single room with a small kitchenette at the foundation's headquarters until the end of his life. Everything the foundation earned went back into the people it served.
          </p>
        </section>

        <hr className="border-gray-100 mb-14" />

        {/* What He Built */}
        <section className="mb-14">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
            What He Built
          </h2>
          <p className="text-gray-700 font-semibold text-base leading-relaxed mb-6">
            From one dispensary, Edhi built what became the largest welfare organization in Pakistan's history — and one of the largest volunteer-run humanitarian networks on Earth:
          </p>
          <ul className="flex flex-col gap-4">
            {[
              "The world's largest volunteer ambulance network — answering emergencies in cities and remote villages alike, free of charge",
              "Cradles placed outside Edhi centers across Pakistan, where mothers unable to care for a newborn could leave the baby anonymously and safely, rather than abandon it on the street",
              "Orphanages, shelters for the homeless, and homes for the elderly with nowhere else to go",
              "Free hospitals, maternity homes, and rehabilitation centers for the mentally ill and for people struggling with addiction",
              "A morgue service that washed, prepared, and buried unclaimed and unidentified bodies with dignity — including those other institutions refused to touch",
              "Disaster relief delivered during floods, earthquakes, and conflicts, often among the first responders on the scene",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-0.5 font-black text-lg leading-none" style={{ color: "#065F46" }}>→</span>
                <span className="text-gray-700 font-semibold text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-gray-100 mb-14" />

        {/* His Philosophy */}
        <section className="mb-14">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
            His Philosophy
          </h2>
          <div className="rounded-2xl p-7 mb-6" style={{ backgroundColor: "#065F4610" }}>
            <blockquote className="text-gray-700 font-semibold text-base leading-relaxed italic mb-4">
              &ldquo;I am neither for religion, nor against it.&rdquo;
            </blockquote>
            <p className="text-xs font-black uppercase tracking-widest text-primary">— Abdul Sattar Edhi</p>
          </div>
          <p className="text-gray-700 font-semibold text-base leading-relaxed mb-5">
            Edhi served everyone who needed help — Muslim, Hindu, Christian, anyone — without asking what they believed. His ambulances carried the dead and dying of every faith to be buried or cremated according to their own rites. He said true faith was shown through service, not through declarations. He did not need a theology degree to know this. He needed only what his mother had already given him.
          </p>
          <p className="text-gray-700 font-semibold text-base leading-relaxed">
            This is exactly the message at the heart of <Link href="/we-are-one" className="text-primary font-bold hover:underline">We Are One</Link> — that submission to God is not a credential issued by an institution. It is a posture of the heart, proven by what the hands do. Edhi never wrote a single line of poetry. But Rumi, Bulleh Shah, and Kabir would have recognized him instantly as one of their own — a man whose entire life was the couplet, and whose love for God was inseparable from his love for the poorest person in front of him.
          </p>
        </section>

        {/* Donate CTA */}
        <section
          className="rounded-2xl p-8 text-center mb-12"
          style={{ backgroundColor: "#065F46" }}
        >
          <p className="text-white font-black text-xl leading-relaxed mb-3">
            His foundation is still saving lives in Pakistan today.
          </p>
          <p className="text-white/80 font-semibold text-base mb-6">
            The Edhi Foundation continues to run ambulances, shelters, and free hospitals across the country — funded entirely by donations, exactly as Edhi intended.
          </p>
          <a
            href="https://www.edhi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white font-black px-7 py-3.5 rounded-2xl hover:bg-primary-light transition-colors shadow-md text-base"
            style={{ color: "#065F46" }}
          >
            Visit Edhi Foundation & Donate →
          </a>
        </section>

        {/* Nav */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Link
            href="/sufis"
            className="text-white font-black text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#0D9488" }}
          >
            ← Meet the Poet-Sufis
          </Link>
          <Link
            href="/we-are-one"
            className="text-white font-black text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#D97706" }}
          >
            We Are One →
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
