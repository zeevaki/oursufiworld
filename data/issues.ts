export type Issue = {
  slug: string;
  title: string;
  color: string;
  stat: string;
  reality: string;
  sufiName: string;
  sufiSlug: string;
  sufiResponse: string;
  actions: string[];
};

export const issues: Issue[] = [
  {
    slug: "plastic-oceans",
    title: "Plastic in the Oceans",
    color: "#059669",
    stat: "11 million tonnes of plastic enter the ocean every year",
    reality: "By 2050, there will be more plastic in the ocean than fish by weight. Microplastics have been found in human blood, in the lungs of newborns, in the deepest trenches of the ocean floor. We have filled the womb of the world with our waste.",
    sufiName: "Rumi",
    sufiSlug: "rumi",
    sufiResponse: "Rumi wrote: 'You are not a drop in the ocean. You are the entire ocean in a drop.' The ocean is not a dumping ground. It is a mirror of the divine. Every piece of plastic thrown into it is a desecration — not of nature, but of the sacred itself. The Sufi tradition asks: what does it mean to love something? It means to protect it. It means to refuse to harm it. It means to see the divine in it. We cannot love the ocean and fill it with plastic. We must choose.",
    actions: ["Refuse single-use plastic — carry, reuse, refill", "Support ocean cleanup organizations", "Push for corporate accountability, not just individual behavior", "Teach children to see the ocean as sacred, not as a resource"],
  },
  {
    slug: "amazon-deforestation",
    title: "Amazon Deforestation",
    color: "#065F46",
    stat: "An area the size of a football field is destroyed every single minute",
    reality: "The Amazon rainforest produces 20% of the world's oxygen and houses 10% of all species on Earth. It is the lungs of our planet. Since 1970, over 20% of it has been destroyed — for cattle ranching, soy farming, logging, and mining. Indigenous communities who have protected it for thousands of years are being murdered for defending it.",
    sufiName: "Kabir",
    sufiSlug: "kabir",
    sufiResponse: "Kabir wrote: 'The forest is the true temple.' He did not mean this metaphorically. He meant that the divine is present in living things — in trees, in rivers, in soil — more honestly than in any building made by human hands. To destroy the Amazon is to destroy a temple older than any religion, more sacred than any text. The Sufi path is the path of reverence. Reverence for the divine in all its forms. The tree is not a resource. The tree is a prayer.",
    actions: ["Support indigenous land rights — the best forest protectors on Earth", "Choose products certified deforestation-free", "Pressure governments to enforce environmental protections", "Reduce meat consumption — cattle farming is the #1 driver of Amazon destruction"],
  },
  {
    slug: "weapons",
    title: "Weapons of Mass Destruction",
    color: "#DC2626",
    stat: "13,000 nuclear warheads exist — enough to end human civilization many times over",
    reality: "Nine countries possess nuclear weapons. The United States and Russia together hold 90% of them. Each major nuclear power has the ability to destroy every city on Earth multiple times. These weapons exist not as last resorts but as constant threats — tools of political leverage built on the willingness to commit mass murder. They have been developed, tested, and deployed on civilian populations. The bombs dropped on Hiroshima and Nagasaki killed 200,000 people in two days.",
    sufiName: "Allama Iqbal",
    sufiSlug: "iqbal",
    sufiResponse: "Iqbal wrote: 'The nation's politics, the mullah's religion — both are the same poison in different cups.' He understood that violence sanctioned by the state and violence sanctioned by religion both flow from the same source: the belief that some human lives matter less than others. The Sufi tradition has only one answer to weapons of mass destruction: there is no mass that is not divine. There is no destruction that is not a wound in God. The atomic bomb is the ultimate statement that we do not believe in the sacred. OurSufiWorld is the counterstatement.",
    actions: ["Support nuclear disarmament treaties and organizations", "Vote for leaders committed to non-proliferation", "Teach the history of Hiroshima and Nagasaki in every school", "Refuse the logic that security comes from the capacity to destroy"],
  },
  {
    slug: "womens-and-lgbtq-rights",
    title: "Women's & LGBTQ+ Rights",
    color: "#DB2777",
    stat: "Over 60 countries still criminalize same-sex relationships — and women remain unequal under law in most of the world",
    reality: "Women constitute more than half of humanity, yet in most of the world they remain unequal under law, unequal in pay, unequal in safety, and unequal in their right to make decisions about their own bodies. One in three women globally experiences physical or sexual violence in her lifetime. In many countries, a woman cannot travel, marry, divorce, or work without a male guardian's permission. Honor killings, child marriage, and forced veiling are enforced not as culture but as religion — a religion weaponized against the very people it claims to protect.\n\nLGBTQ+ people face criminalization, imprisonment, torture, and execution in over 60 countries. In several Muslim-majority nations, homosexuality carries the death penalty. Conversion therapy — a practice condemned by every major medical organization as harmful and ineffective — is still legal and practiced across the world, including in parts of the United States. Trans people face epidemic-level violence. And the cruelty is almost always done in God's name.\n\nYet the most honest voices within the world's great traditions are pushing back. Pope Francis — head of the Catholic Church — declared: 'Homosexuality is not a crime,' called existing criminalization laws 'unjust,' and personally told a transgender person: 'God loves us as we are.' He wrote that the Church must not be 'judges who only deny, push back and exclude.' Muslims for Progressive Values, a Los Angeles-based Islamic organization founded by female imam Ani Zonneveld, affirms that LGBTQ inclusion is 'historically, theologically, and spiritually authentic' to Islam — that sexual and gender diversity were acknowledged in the Qur'an itself and accepted by the Prophet Muhammad. Their message is simple and radical: 'Be Yourself. Be Muslim.' The Sufi tradition knew this long before any modern organization put it into words.",
    sufiName: "Shah Hussain",
    sufiSlug: "shah-hussain",
    sufiResponse: "Shah Hussain — the saint of Lahore — wore the red dress of a Hindu bride. He danced at shrines when dancing was forbidden. He loved Madho Lal, a young Hindu man, so completely that the two became a single name: Madho Lal Hussain. Their bond dissolved the boundary between faiths, between genders, between what society permitted and what the heart demanded. The orthodox condemned him. The poor celebrated him. He did not ask for their permission either way. He wrote: 'Neither Hindu nor Muslim am I. I have taken the path of love and left both behind.' This is the Sufi answer to every law that uses God to cage a human being: love does not require your authorization. The divine in every person cannot be criminalized, cannot be converted, cannot be erased. Shah Hussain lived this truth five centuries ago. The world is still catching up.",
    actions: [
      "Support the full legal equality of women — in pay, in law, in bodily autonomy",
      "Oppose the criminalization of LGBTQ+ people everywhere it exists",
      "Reject conversion therapy — it is not treatment, it is torture",
      "Defend Muslim, Christian, and Jewish voices within their traditions who affirm inclusion",
      "Listen to organizations like Muslims for Progressive Values who reclaim faith for the marginalized",
    ],
  },
  {
    slug: "climate",
    title: "Climate Change & Pollution",
    color: "#0D9488",
    stat: "The last decade was the hottest in 125,000 years of human history",
    reality: "The burning of fossil fuels has raised global temperatures by 1.2 degrees Celsius above pre-industrial levels. We are on track for 2.5 to 4 degrees of warming by 2100 — a transformation that will make large parts of the Earth uninhabitable, cause catastrophic flooding, drive mass extinction, and force hundreds of millions of people from their homes. The communities that will suffer most are the ones that produced the least carbon. This is not just a climate crisis. It is a justice crisis.",
    sufiName: "Umar Khayyam",
    sufiSlug: "umar-khayyam",
    sufiResponse: "Umar Khayyam wrote: 'Into this Universe, and why not knowing, nor whence, like Water willy-nilly flowing.' We were placed on this earth without explanation and without instructions. What we were given is this: one world, extraordinary and irreplaceable, burning with life. Khayyam's entire philosophy is built on the preciousness of the present moment — and there is no present moment without a habitable earth. To burn the world for profit is to squander the only gift we were given. Climate action is not a political position. It is a spiritual obligation to the moment we inhabit.",
    actions: ["Reduce personal carbon footprint — but demand systemic change", "Support renewable energy legislation", "Hold fossil fuel companies legally accountable", "Center frontline communities in climate solutions"],
  },
  {
    slug: "drugs",
    title: "Drugs & Addiction",
    color: "#7C5C3B",
    stat: "Over 700,000 people die from drug overdoses globally every year",
    reality: "The global drug crisis is not a moral failure of individuals. It is a structural failure of societies that have left millions of people without belonging, without purpose, without hope. Research consistently shows that addiction is driven not by the drug itself but by disconnection — from community, from meaning, from self. The 'war on drugs' has criminalized poverty and mental illness while doing nothing to reduce addiction. Drug trafficking funds wars, corrupts governments, and destroys communities — most of all, the communities with the least power to resist it.",
    sufiName: "Rumi",
    sufiSlug: "rumi",
    sufiResponse: "The Sufi masters understood intoxication. They wrote about it constantly — the wine of divine love, the tavern of the heart, the drunkenness of union with God. They understood the longing that drives people to substances: the longing for something larger than the small, painful self. Rumi wrote: 'There is a voice that doesn't use words. Listen.' Addiction is, in part, the failure to hear that voice. The Sufi answer is not prohibition. It is connection — to community, to meaning, to the divine spark within every person that no drug can permanently extinguish.",
    actions: ["Treat addiction as a health issue, not a criminal one", "Fund mental health and community connection programs", "Oppose the criminalization of poverty and drug use", "Support harm reduction approaches — they save lives"],
  },
  {
    slug: "religious-hatred",
    title: "Religious Hatred",
    color: "#7C3AED",
    stat: "Over 80% of the world's population lives in countries with high religious hostilities or restrictions",
    reality: "Religious hatred takes many forms — from mob violence triggered by a whispered accusation to laws that carry the death penalty for leaving a faith or questioning a text. Pakistan's blasphemy laws (Sections 295-B and 295-C) have been used to imprison and sentence to death Christians, Ahmadis, Hindus, Shia Muslims, and Sufis — often on fabricated charges, often followed by extrajudicial mob killings before any trial. Asia Bibi spent eight years on death row for allegedly insulting the Prophet in a dispute over a cup of water. Across the world, atheists and agnostics face imprisonment, torture, and execution for the crime of non-belief. In several countries, apostasy — leaving Islam — is legally punishable by death.\n\nIn India, the rise of Hindu nationalist politics under BJP-aligned movements has brought a surge of violence against Muslims — cow vigilante lynchings, mosque demolitions, anti-Muslim hate speech from elected officials, the Citizenship Amendment Act that excluded Muslims from its protections, and the systematic erasure of Muslim history from school curricula. The 2020 Delhi riots killed dozens. Entire Muslim neighborhoods have been bulldozed as collective punishment. A country that was born from Gandhi's vision of pluralism is watching that vision be dismantled brick by brick.\n\nReligious hatred is not only a phenomenon of the East. In the United States, including Texas, Christian nationalist movements have directed open hostility toward Muslims and Hindus — treating them as foreign threats to a 'Christian nation' rather than as neighbors and fellow citizens. Mosques and Hindu temples have been vandalized. Politicians have used anti-Muslim and anti-Hindu rhetoric as electoral strategy. The logic is identical to every other form of religious hatred: our God is the real God, and your presence here is a problem.\n\nUnderneath all of it is the same ancient lie: that God needs human beings to punish other human beings for their beliefs. The Sufi tradition has always known this is a lie.",
    sufiName: "Bulleh Shah",
    sufiSlug: "bulleh-shah",
    sufiResponse: "Bulleh Shah was expelled from his own Muslim community for choosing a spiritual teacher of a lower caste. He was called a heretic, a kafir, an apostate. He was refused burial in his hometown. He knew exactly what religious hatred felt like — from the inside of the tradition doing the hating. And his response was not bitterness. It was one of the most radical acts in the history of religion: he kept loving. He wrote: 'Tear down the mosque, tear down the temple, tear down everything in sight — but do not break a human heart, for that is where God resides.' Blasphemy laws do not protect God. God does not need protection. They protect the powerful from being questioned. Bulleh Shah spent his entire life questioning them. He is still questioning them.",
    actions: [
      "Oppose blasphemy laws in Pakistan and everywhere they exist — they are instruments of persecution, not faith",
      "Defend the rights of atheists, agnostics, and non-believers to exist without fear",
      "Protect religious minorities — Ahmadis, Christians, Hindus, Sikhs — against mob violence and legal discrimination",
      "Reject the idea that God requires human beings to punish other human beings for their beliefs",
      "Support organizations defending freedom of conscience globally",
    ],
  },
  {
    slug: "education",
    title: "A Broken Education System",
    color: "#D97706",
    stat: "300 million children worldwide cannot read a simple sentence after years of schooling",
    reality: "The global education system was largely designed in the 19th century to produce factory workers and obedient citizens. It measures narrow academic performance while ignoring creativity, emotional intelligence, critical thinking, and moral courage. It silences teachers who think differently and students who express themselves unconventionally. It produces graduates who can pass tests but cannot question systems. In the process, it has failed hundreds of millions of children — particularly those who are poor, who speak minority languages, who learn differently, or who simply refuse to be silent.",
    sufiName: "Allama Iqbal",
    sufiSlug: "iqbal",
    sufiResponse: "Iqbal's entire life was an argument about education. He believed that the purpose of education was not to produce servants of empire or economy, but to awaken the Khudi — the self — to its own divine potential. A fully educated human being, in Iqbal's vision, is one who knows who they are, why they are here, and what love demands of them. This is not mysticism divorced from the world. This is the most practical vision of education ever articulated: raise human beings who are awake, who are loving, who are courageous, who cannot be used as instruments of destruction because they know their own worth too well.",
    actions: ["Support Science of Reading and bilingual education approaches", "Demand curriculum that teaches critical thinking, not just compliance", "Protect teachers who bring their full selves into classrooms", "Fund arts, music, and physical education — not just test prep"],
  },
];

export function getIssueBySlug(slug: string): Issue | undefined {
  return issues.find((i) => i.slug === slug);
}
