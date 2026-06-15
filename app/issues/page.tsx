import NavBar from "@/components/NavBar";
import Link from "next/link";

const issues = [
  {
    emoji: "🌊",
    title: "Plastic in the Oceans",
    color: "#0EA5E9",
    stat: "11 million tonnes of plastic enter the ocean every year",
    reality: "By 2050, there will be more plastic in the ocean than fish by weight. Microplastics have been found in human blood, in the lungs of newborns, in the deepest trenches of the ocean floor. We have filled the womb of the world with our waste.",
    sufiResponse: "Rumi wrote: 'You are not a drop in the ocean. You are the entire ocean in a drop.' The ocean is not a dumping ground. It is a mirror of the divine. Every piece of plastic thrown into it is a desecration — not of nature, but of the sacred itself. The Sufi tradition asks: what does it mean to love something? It means to protect it. It means to refuse to harm it. It means to see the divine in it. We cannot love the ocean and fill it with plastic. We must choose.",
    actions: ["Refuse single-use plastic — carry, reuse, refill", "Support ocean cleanup organizations", "Push for corporate accountability, not just individual behavior", "Teach children to see the ocean as sacred, not as a resource"],
  },
  {
    emoji: "🌳",
    title: "Amazon Deforestation",
    color: "#059669",
    stat: "An area the size of a football field is destroyed every single minute",
    reality: "The Amazon rainforest produces 20% of the world's oxygen and houses 10% of all species on Earth. It is the lungs of our planet. Since 1970, over 20% of it has been destroyed — for cattle ranching, soy farming, logging, and mining. Indigenous communities who have protected it for thousands of years are being murdered for defending it.",
    sufiResponse: "Kabir wrote: 'The forest is the true temple.' He did not mean this metaphorically. He meant that the divine is present in living things — in trees, in rivers, in soil — more honestly than in any building made by human hands. To destroy the Amazon is to destroy a temple older than any religion, more sacred than any text. The Sufi path is the path of reverence. Reverence for the divine in all its forms. The tree is not a resource. The tree is a prayer.",
    actions: ["Support indigenous land rights — the best forest protectors on Earth", "Choose products certified deforestation-free", "Pressure governments to enforce environmental protections", "Reduce meat consumption — cattle farming is the #1 driver of Amazon destruction"],
  },
  {
    emoji: "☢️",
    title: "Weapons of Mass Destruction",
    color: "#DC2626",
    stat: "13,000 nuclear warheads exist — enough to end human civilization many times over",
    reality: "Nine countries possess nuclear weapons. The United States and Russia together hold 90% of them. Each major nuclear power has the ability to destroy every city on Earth multiple times. These weapons exist not as last resorts but as constant threats — tools of political leverage built on the willingness to commit mass murder. They have been developed, tested, and deployed on civilian populations. The bombs dropped on Hiroshima and Nagasaki killed 200,000 people in two days.",
    sufiResponse: "Iqbal wrote: 'The nation's politics, the mullah's religion — both are the same poison in different cups.' He understood that violence sanctioned by the state and violence sanctioned by religion both flow from the same source: the belief that some human lives matter less than others. The Sufi tradition has only one answer to weapons of mass destruction: there is no mass that is not divine. There is no destruction that is not a wound in God. The atomic bomb is the ultimate statement that we do not believe in the sacred. OurSufiWorld is the counterstatement.",
    actions: ["Support nuclear disarmament treaties and organizations", "Vote for leaders committed to non-proliferation", "Teach the history of Hiroshima and Nagasaki in every school", "Refuse the logic that security comes from the capacity to destroy"],
  },
  {
    emoji: "⚔️",
    title: "Wars & Armed Conflict",
    color: "#B45309",
    stat: "Over 100 active armed conflicts are happening right now across the world",
    reality: "Wars kill soldiers and civilians, destroy infrastructure, displace millions, and poison land and water for generations. The wars of the 21st century — in Gaza, Sudan, Yemen, Ukraine, Myanmar, and dozens of other places — are not aberrations. They are the logical conclusion of a world organized around power, profit, and the belief that violence resolves disputes. Children growing up in war zones know nothing else. The weapons used in these wars are manufactured and sold by the world's wealthiest nations.",
    sufiResponse: "Bulleh Shah said: 'Do not be proud of your knowledge. The mosquito gave Nimrod his death blow.' Every empire believes it is invincible. Every war is started by someone who believed violence would solve what love could not. The Sufi masters lived through wars — the Mongol invasions, the Crusades, the endless conflicts of medieval empires. Their response was never to take up arms. Their response was to go deeper into love. Not passive love. Not surrender. But the love that refuses to see the enemy as anything less than human — and therefore refuses to kill them.",
    actions: ["Support organizations providing humanitarian aid in conflict zones", "Advocate for diplomatic solutions and ceasefires", "Refuse the dehumanization of any people in media and conversation", "Support the International Criminal Court and accountability for war crimes"],
  },
  {
    emoji: "🌡️",
    title: "Climate Change & Pollution",
    color: "#7C3AED",
    stat: "The last decade was the hottest in 125,000 years of human history",
    reality: "The burning of fossil fuels has raised global temperatures by 1.2 degrees Celsius above pre-industrial levels. We are on track for 2.5 to 4 degrees of warming by 2100 — a transformation that will make large parts of the Earth uninhabitable, cause catastrophic flooding, drive mass extinction, and force hundreds of millions of people from their homes. The communities that will suffer most are the ones that produced the least carbon. This is not just a climate crisis. It is a justice crisis.",
    sufiResponse: "Rabia al-Adawiyya said: 'I love God with two loves — the love of longing and the love that He deserves.' The love that God deserves — that pure, unconditional love — is the love that does not extract from the beloved. The earth is not a resource. The air is not waste disposal. The Sufi tradition is a tradition of care — of tending, of protecting, of seeing the divine in the created world and therefore refusing to destroy it for convenience or profit. Climate action is not a political position. It is a spiritual obligation.",
    actions: ["Reduce personal carbon footprint — but demand systemic change", "Support renewable energy legislation", "Hold fossil fuel companies legally accountable", "Center frontline communities in climate solutions"],
  },
  {
    emoji: "💊",
    title: "Drugs & Addiction",
    color: "#065F46",
    stat: "Over 700,000 people die from drug overdoses globally every year",
    reality: "The global drug crisis is not a moral failure of individuals. It is a structural failure of societies that have left millions of people without belonging, without purpose, without hope. Research consistently shows that addiction is driven not by the drug itself but by disconnection — from community, from meaning, from self. The 'war on drugs' has criminalized poverty and mental illness while doing nothing to reduce addiction. Drug trafficking funds wars, corrupts governments, and destroys communities — most of all, the communities with the least power to resist it.",
    sufiResponse: "The Sufi masters understood intoxication. They wrote about it constantly — the wine of divine love, the tavern of the heart, the drunkenness of union with God. They understood the longing that drives people to substances: the longing for something larger than the small, painful self. Rumi wrote: 'There is a voice that doesn't use words. Listen.' Addiction is, in part, the failure to hear that voice. The Sufi answer is not prohibition. It is connection — to community, to meaning, to the divine spark within every person that no drug can permanently extinguish.",
    actions: ["Treat addiction as a health issue, not a criminal one", "Fund mental health and community connection programs", "Oppose the criminalization of poverty and drug use", "Support harm reduction approaches — they save lives"],
  },
  {
    emoji: "🏫",
    title: "A Broken Education System",
    color: "#D97706",
    stat: "300 million children worldwide cannot read a simple sentence after years of schooling",
    reality: "The global education system was largely designed in the 19th century to produce factory workers and obedient citizens. It measures narrow academic performance while ignoring creativity, emotional intelligence, critical thinking, and moral courage. It silences teachers who think differently and students who express themselves unconventionally. It produces graduates who can pass tests but cannot question systems. In the process, it has failed hundreds of millions of children — particularly those who are poor, who speak minority languages, who learn differently, or who simply refuse to be silent.",
    sufiResponse: "Iqbal's entire life was an argument about education. He believed that the purpose of education was not to produce servants of empire or economy, but to awaken the Khudi — the self — to its own divine potential. A fully educated human being, in Iqbal's vision, is one who knows who they are, why they are here, and what love demands of them. This is not mysticism divorced from the world. This is the most practical vision of education ever articulated: raise human beings who are awake, who are loving, who are courageous, who cannot be used as instruments of destruction because they know their own worth too well.",
    actions: ["Support Science of Reading and bilingual education approaches", "Demand curriculum that teaches critical thinking, not just compliance", "Protect teachers who bring their full selves into classrooms", "Fund arts, music, and physical education — not just test prep"],
  },
];

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
          <h1 className="text-5xl font-black text-white mb-4" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
            World Issues
          </h1>
          <p className="text-white/85 text-lg font-semibold max-w-xl mx-auto">
            The Sufi response to the crises of our time — not withdrawal from the world, but a deeper, more loving engagement with it.
          </p>
        </div>
      </section>

      {/* Issues */}
      <section className="py-16 px-6 max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-10">
          {issues.map((issue) => (
            <div key={issue.title} className="bg-white rounded-3xl shadow border border-gray-100 overflow-hidden">
              <div className="p-7 border-b-4" style={{ borderColor: issue.color }}>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-4xl">{issue.emoji}</span>
                  <div>
                    <h2 className="text-2xl font-black text-gray-800">{issue.title}</h2>
                    <p className="font-black text-sm mt-0.5" style={{ color: issue.color }}>{issue.stat}</p>
                  </div>
                </div>
                <p className="text-gray-600 font-semibold text-sm leading-relaxed">{issue.reality}</p>
              </div>
              <div className="p-7">
                <div className="rounded-2xl p-5 mb-5" style={{ backgroundColor: issue.color + "10" }}>
                  <h3 className="font-black text-sm uppercase tracking-wide mb-2" style={{ color: issue.color }}>
                    The Sufi Response
                  </h3>
                  <p className="text-gray-600 font-semibold text-sm leading-relaxed">{issue.sufiResponse}</p>
                </div>
                <h3 className="font-black text-gray-700 text-sm uppercase tracking-wide mb-3">What We Can Do</h3>
                <ul className="flex flex-col gap-2">
                  {issue.actions.map((action) => (
                    <li key={action} className="flex items-start gap-2 text-sm text-gray-600 font-semibold">
                      <span className="mt-0.5 font-black" style={{ color: issue.color }}>→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-6 text-center" style={{ backgroundColor: "#1E1B4B" }}>
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
