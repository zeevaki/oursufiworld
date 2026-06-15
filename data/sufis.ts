export type Sufi = {
  slug: string;
  name: string;
  years: string;
  origin: string;
  color: string;
  tagline: string;
  quote: string;
  bio: string;
  relevance: string;
  couplets: { text: string; source: string; translation?: string }[];
};

export const sufis: Sufi[] = [
  {
    slug: "iqbal",
    name: "Allama Iqbal",
    years: "1877–1938",
    origin: "Sialkot, Punjab",
    color: "#065F46",
    tagline: "The Poet of the East — who dreamed of a humanity awakened to its divine potential",
    quote: "Rise, for the dawn has broken. The world awaits your awakening. Do not sleep — the caravan has already moved on.",
    bio: "Muhammad Iqbal was a poet, philosopher, and visionary whose work transcended nations, religions, and centuries. Writing in Urdu and Persian, he revived the Sufi concept of the Khudi — the self — not as ego, but as the divine spark within every human being that, when fully realized, can transform the world. He warned against blind nationalism, against the slavery of materialism, against the division of humanity into competing tribes. His Shikwa and Jawab-e-Shikwa are conversations with God so honest they were considered scandalous. His Bang-e-Dra is a call to a sleeping civilization. He believed that a human being who truly knows themselves knows God — and a humanity that truly knows itself needs no weapons, no borders, no wars.",
    relevance: "Iqbal's vision of the awakened self is the direct antidote to the passive consumerism that drives climate destruction, to the tribal nationalism that produces war, and to the hollow educational systems that produce workers instead of thinkers. He asked: what does a fully realized human being look like? OurSufiWorld asks the same question.",
    couplets: [
      {
        text: "Khudi ko kar buland itna ke har taqdeer se pehle\nKhuda bande se khud pooche — bata, teri raza kya hai.",
        source: "Bang-e-Dra",
        translation: "Raise yourself so high that before every decree of fate, God Himself asks you: Tell me — what is your will?",
      },
      {
        text: "Sitaron se aage jahan aur bhi hain\nAbhi ishq ke imtihan aur bhi hain.",
        source: "Bal-e-Jibril",
        translation: "Beyond the stars, there are other worlds still. There are still more trials of love ahead.",
      },
      {
        text: "Tu shaheen hai, parwaz hai kaam tera\nTere samne aasman aur bhi hain.",
        source: "Bal-e-Jibril",
        translation: "You are a falcon; flight is your destiny. There are still more skies ahead of you.",
      },
      {
        text: "Apne mann mein doob kar paa ja suragh-e-zindagi\nTu agar mera nahi banta, na ban, apna toh ban.",
        source: "Zarb-e-Kaleem",
        translation: "Dive into your own soul and find the secret of life. If you will not be mine, so be it — but at least be your own.",
      },
    ],
  },
  {
    slug: "rumi",
    name: "Rumi",
    years: "1207–1273",
    origin: "Balkh (modern Afghanistan) / Konya (Turkey)",
    color: "#0D9488",
    tagline: "The greatest mystical poet in human history — whose love dissolved every border",
    quote: "Out beyond ideas of wrongdoing and rightdoing, there is a field. I will meet you there.",
    bio: "Jalal ad-Din Muhammad Rumi wrote over 70,000 verses of poetry, most of them dictated in a state of ecstatic love. His Masnavi is one of the greatest works of world literature. His Diwan-e-Shams is an ocean of longing and union. But Rumi was not merely a poet — he was a theologian, a teacher, and a man who had been broken open by grief (the death of his teacher Shams of Tabriz) and rebuilt by love. He taught that the divine is not in temples or mosques or churches — it is in the turning of the heart toward truth. His followers, the Mevlevi, practice the Sema — the whirling that represents the movement of all creation around the divine center. Rumi wrote in Persian but belonged to no single nation. He is claimed by Turkey, Iran, Afghanistan — and by anyone who has ever felt the longing for something larger than themselves.",
    relevance: "Rumi's most radical teaching is this: the boundary between self and other is an illusion. It is this illusion that allows us to dump plastic in oceans we think of as 'out there,' to cut down forests we think of as 'somewhere else,' to send weapons to wars we think of as 'their problem.' Rumi dissolves the boundary. When the divine meets the people, there is no 'other' ocean. There is no 'other' forest. There is no 'other' child.",
    couplets: [
      {
        text: "Listen to the reed flute, how it tells a tale of separations —\nsinging of the day it was cut from the reed bed.",
        source: "Masnavi, Book I — Opening verses",
      },
      {
        text: "I looked in temples, churches, and mosques.\nBut I found the divine within my own heart.",
        source: "Diwan-e-Shams",
      },
      {
        text: "Your task is not to seek for love,\nbut merely to seek and find all the barriers within yourself\nthat you have built against it.",
        source: "Masnavi",
      },
      {
        text: "Silence is the language of God.\nAll else is poor translation.",
        source: "Diwan-e-Shams",
      },
      {
        text: "You are not a drop in the ocean.\nYou are the entire ocean in a drop.",
        source: "Masnavi",
      },
    ],
  },
  {
    slug: "bulleh-shah",
    name: "Bulleh Shah",
    years: "1680–1757",
    origin: "Uch Sharif, Punjab",
    color: "#DC2626",
    tagline: "The rebel saint who tore down every wall — caste, creed, and convention",
    quote: "Tear down the mosque, tear down the temple, tear down everything in sight — but do not break a human heart, for that is where God resides.",
    bio: "Bulleh Shah was born into a Syed family — the highest caste in Muslim Punjab — and chose as his spiritual teacher a man of the Arain caste, considered far beneath him. For this, he was expelled from his community, called a heretic, forbidden from being buried in his hometown. He did not care. His kafi — short, piercing Punjabi poems — demolished every orthodoxy he encountered. He questioned religious authority, mocked empty ritual, celebrated dancing and music that the mullahs condemned, and insisted that the only real religion was the religion of love. He was considered dangerous by every establishment of his time. His poetry is now sung across Pakistan and India as a shared inheritance. The walls he tore down are still standing. He is still tearing them down.",
    relevance: "Bulleh Shah's refusal to accept caste — to choose a teacher based on wisdom rather than birth — is the foundation of every social justice movement. The education system that tracks children by class and postcode, the border that divides the Punjabi people from themselves, the war that kills farmers on both sides of a line drawn by a British lawyer in 1947 — Bulleh Shah would have recognized all of these as the same heresy: the substitution of human categories for human beings.",
    couplets: [
      {
        text: "Bullah ki jaana main kaun?\nNa main momin vich masjidan,\nna main musa di zehan,\nna main paak pavitraan.",
        source: "Kafi — Bullah ki jaana",
        translation: "Who am I? Bulleh Shah does not know. I am not the believer inside the mosque. I am not Moses following the law. I am not among the pure and pious.",
      },
      {
        text: "Ranjha Ranjha kardi ni main\naape Ranjha hoi.\nSado ni mainu Dhido Ranjha,\nHeer na akho koi.",
        source: "Kafi",
        translation: "Calling Ranjha, calling Ranjha — I have become Ranjha myself. Call me Dhido Ranjha. Let no one call me Heer anymore.",
      },
      {
        text: "Ilm hazaar kitaab da parha,\npar apna aap na parha.\nJaa jaa warna andar ja,\nkehna kisey da na dhar.",
        source: "Kafi",
        translation: "You have read a thousand books of knowledge but have not read yourself. Go, go, go within — don't hold on to anyone's words.",
      },
      {
        text: "Masjid dha de, mandir dha de,\ndha de jo kuch dainda.\nIk kisay da dil na dhavin,\nRab dilan vich rehnda.",
        source: "Kafi",
        translation: "Tear down the mosque, tear down the temple, tear down whatever you wish. But do not break a single heart — for God lives in hearts.",
      },
    ],
  },
  {
    slug: "kabir",
    name: "Kabir",
    years: "1440–1518",
    origin: "Varanasi, India",
    color: "#D97706",
    tagline: "The weaver-saint who stitched together Islam and Hinduism with threads of pure truth",
    quote: "I have been thinking of the difference between water and the waves on it. Rising, water still, water. Falling back, it is water, only water.",
    bio: "Kabir was a weaver in Varanasi who became one of the most radical spiritual voices in human history. He was raised Muslim but studied under a Hindu guru (Ramananda) at a time when such a thing was unthinkable. He rejected both traditions wherever they became walls rather than doors. His dohas — short, two-line poems of devastating precision — mock the mullah who counts beads while ignoring the poor, the pandit who bathes in the Ganges while staying dirty inside, the pilgrim who travels to Mecca while God sits ignored in his own heart. Kabir was claimed by both Hindus and Muslims after his death — when his followers argued over his body, legend says they found only flowers. He belongs to both. He belongs to neither. He belongs to truth.",
    relevance: "Kabir's bridge between Islam and Hinduism is exactly the bridge the world needs today — not a merger of religions, not a denial of difference, but an insistence that the divine is larger than any single tradition's map of it. His refusal of religious nationalism is the antidote to every war fought in God's name — including the ones happening right now.",
    couplets: [
      {
        text: "Pothi padh padh jag mua,\npandit bhaya na koy.\nDhai aakhar prem ke,\npadhe so pandit hoy.",
        source: "Doha",
        translation: "The world has died reading books; no one became wise. The one who reads two and a half letters of Love — that one is truly learned.",
      },
      {
        text: "Dukh mein sumiran sab kare,\nsukh mein kare na koy.\nJo sukh mein sumiran kare,\nto dukh kahe ko hoy.",
        source: "Doha",
        translation: "Everyone remembers God in sorrow; no one in happiness. If you remembered God in happiness, why would sorrow come at all?",
      },
      {
        text: "Bura jo dekhan main chala,\nbura na milya koy.\nJo dil khoja aapna,\nmujhse bura na koy.",
        source: "Doha",
        translation: "I set out to find the wicked; I found no one wicked. When I searched my own heart — no one worse than me.",
      },
      {
        text: "Maati kahe kumhar se,\ntu kya rondhe mohe.\nEk din aisa aayega,\nmain rondhunga tohe.",
        source: "Doha",
        translation: "The clay says to the potter: Why do you knead me? One day will come when I will knead you.",
      },
    ],
  },
  {
    slug: "umar-khayyam",
    name: "Umar Khayyam",
    years: "1048–1131",
    origin: "Nishapur, Khorasan (modern Iran)",
    color: "#059669",
    tagline: "Mathematician, astronomer, and poet — who found God in a wine cup and eternity in a single moment",
    quote: "I sent my Soul through the Invisible, some letter of that After-life to spell: and by and by my Soul return'd to me, and answer'd: 'I Myself am Heav'n and Hell.'",
    bio: "Umar Khayyam was one of the most extraordinary minds of the medieval world. As a mathematician he solved cubic equations centuries before Europe knew how. As an astronomer he reformed the Persian calendar to an accuracy that surpassed the Gregorian calendar introduced five centuries later. And as a poet he wrote the Rubaiyat — thousands of four-line quatrains (ruba'i) that ask, with devastating precision, the questions no one else dared ask: Who put us here? Why? And what are we to make of the short, burning moment we are given? When Edward FitzGerald translated 75 of these quatrains into English in 1859, they became one of the most widely read poems in the history of the English language. Khayyam used the imagery of wine, roses, and the tavern not as endorsements of indulgence but as Sufi metaphors: wine is divine love, the tavern is the heart, the cup is the human vessel filled with the presence of God. He was a mystic who refused easy comfort, a philosopher who refused false certainty, and a poet who told the truth.",
    relevance: "Khayyam's great theme is the preciousness of the present moment — not because the future is hopeless, but because the present is all we are ever actually given. In a world of endless distraction, algorithmic anxiety, and manufactured urgency, his voice cuts through: be here, now. The clay pot does not worry about the potter's plans. The rose does not negotiate with the wind. Khayyam calls us back to what is real — and in doing so, asks us to treat this one world, this one life, this one earth, as the irreplaceable gift that it is.",
    couplets: [
      {
        text: "I sent my Soul through the Invisible,\nsome letter of that After-life to spell:\nAnd by and by my Soul return'd to me,\nAnd answer'd: 'I Myself am Heav'n and Hell.'",
        source: "Rubaiyat, Quatrain LXVI (FitzGerald translation)",
      },
      {
        text: "The Moving Finger writes; and, having writ,\nMoves on: nor all thy Piety nor Wit\nShall lure it back to cancel half a Line,\nNor all thy Tears wash out a Word of it.",
        source: "Rubaiyat, Quatrain LI (FitzGerald translation)",
      },
      {
        text: "A Book of Verses underneath the Bough,\nA Jug of Wine, a Loaf of Bread — and Thou\nBeside me singing in the Wilderness —\nOh, Wilderness were Paradise enow!",
        source: "Rubaiyat, Quatrain XII (FitzGerald translation)",
      },
      {
        text: "Into this Universe, and why not knowing,\nNor whence, like Water willy-nilly flowing:\nAnd out of it, as Wind along the Waste,\nI know not whither, willy-nilly blowing.",
        source: "Rubaiyat, Quatrain XXIX (FitzGerald translation)",
      },
    ],
  },
  {
    slug: "shah-hussain",
    name: "Shah Hussain",
    years: "1538–1599",
    origin: "Lahore, Punjab",
    color: "#B45309",
    tagline: "The saint of Lahore who danced his way to God and scandalized everyone doing it",
    quote: "Neither Hindu nor Muslim am I. I have taken the path of love and left both behind.",
    bio: "Shah Hussain was a Sufi of the Qadiri order in Lahore who became notorious for dancing at shrines, wearing the red clothes of a Hindu bride, and taking as his closest companion a young Hindu boy named Madho Lal — a friendship so deep that they became known as Madho Lal Hussain, a single name for two people of different faiths. He wrote kafi in Punjabi that mixed Islamic and Hindu imagery with wild, joyful abandon. He was condemned by the orthodox, celebrated by the poor, and is buried in Lahore at a shrine still visited by hundreds of thousands. His annual Mela (festival) is one of the most vibrant celebrations in Pakistan — Hindus and Muslims and Sikhs dancing together at the tomb of a man who refused to choose.",
    relevance: "Shah Hussain's refusal to be either Hindu or Muslim — his insistence on being simply a lover of the divine — is the radical act this divided world needs. He did not ask for tolerance. He did not ask for coexistence. He danced across the boundary until it disappeared. That is the OurSufiWorld vision: not peaceful coexistence of separate worlds, but the joyful dissolution of the walls between them.",
    couplets: [
      {
        text: "Maye ni mein kinu akhan,\ndard vichhora tera.\nAkhan kinu, sun-ne kinu,\nkoi na mahra mera.",
        source: "Kafi — Maye ni",
        translation: "Mother, to whom shall I speak of the pain of your separation? To whom shall I say it, who shall hear it — I have no one of my own.",
      },
      {
        text: "Ni main jogi de naal jaana,\nmera jogi naal jaana.\nChhad ke apna ghar baar,\nmera jogi naal jaana.",
        source: "Kafi",
        translation: "I will go with the wandering mystic, I will go with the wandering mystic. Leaving behind my home and hearth — I will go with the wandering mystic.",
      },
      {
        text: "Tenu ishq namaaz hai,\ntenu yaar hai qibla.\nTenu dil da sajda kar,\ntenu yaar hai qibla.",
        source: "Kafi",
        translation: "Love is your prayer; the Beloved is your direction of worship. Bow with your heart — the Beloved is your qibla.",
      },
    ],
  },
];

export function getSufiBySlug(slug: string): Sufi | undefined {
  return sufis.find((s) => s.slug === slug);
}
