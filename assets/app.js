/* Torah Nexus — site script. Real content comes from the company's own material.
   Articles are credited to the Torah Nexus team (shown with a "Nexus Article" tag). */
(function () {
  "use strict";

  const MEDIA = "assets/media/";
  const VIDEO = MEDIA + "torah-holdings-commercial.mp4";

  const WA_NUMBER = "2349067102801";
  const WA = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  const IG = {
    nexus: "https://www.instagram.com/torah_nexus/",
    holdings: "https://www.instagram.com/torahholdings/",
    homz: "https://www.instagram.com/torahhomz/",
    adakole: "https://www.instagram.com/adakoleijogi/",
  };

  // Brand chapters in the Torah Holdings commercial (start time in seconds)
  const chapters = [
    { t: 0, name: "Torah Holdings", clip: "preview-holdings.mp4", what: "Opening", img: "still-aerial.jpg" },
    { t: 14, name: "Simcha Innovations", clip: "preview-simcha.mp4", what: "Construction", img: "still-simcha.jpg" },
    { t: 21, name: "Torah Homz", clip: "preview-homz.mp4", what: "Real estate", img: "still-homz.jpg" },
    { t: 41, name: "Torah Switch", clip: "preview-switch.mp4", what: "Financial solutions", img: "still-switch.jpg" },
    { t: 54, name: "Torah Signature", clip: "preview-signature.mp4", what: "Hospitality", img: "still-signature.jpg" },
    { t: 60, name: "Twoscrove Innovation", clip: "preview-twoscrove.mp4", what: "Renewable energy", img: "still-twoscrove.jpg" },
    { t: 63, name: "Torah Nexus", clip: "preview-nexus.mp4", what: "Media and communication", img: "still-nexus.jpg" },
  ];

  const services = [
    { icon: "film", title: "Media Production", text: "Commercials, brand films, documentaries and short-form video, from script to final cut." },
    { icon: "pen", title: "Branding & Creative Design", text: "Logos, brand identities, ID cards, flyers and campaign artwork that look like one brand." },
    { icon: "phone", title: "Digital Marketing & Social Media", text: "Content calendars, posting and community management across Instagram, Facebook, TikTok and LinkedIn." },
    { icon: "mic", title: "PR & Corporate Communications", text: "Press releases, media relations and messaging that protect and grow your reputation." },
    { icon: "camera", title: "Event Media & Coverage", text: "Photography, video and live coverage for launches, conferences and celebrations." },
    { icon: "mega", title: "Advertising & Promotions", text: "Campaigns for TV, radio, outdoor and online that put your offer in front of the right people." },
    { icon: "book", title: "Content Creation & Storytelling", text: "Stories, scripts and series that make people stop scrolling and remember your name." },
    { icon: "compass", title: "Media Consultancy & Strategy", text: "A clear plan for where to show up, what to say and how to measure what works." },
    { icon: "users", title: "Training & Capacity Development", text: "Hands-on training that helps your team create and manage content on their own." },
    { icon: "crown", title: "Brand Management", text: "Keeping your brand consistent and strong across every channel, month after month." },
  ];

  const talent = [
    { name: "Igwe Chikaodili Franka", role: "Actor", img: "talent-franka.jpg", ig: "franka_igwe_",
      bio: "A screen actor whose work spans Nigerian feature films and drama.",
      credits: ["Hold Me, Let Me Go", "To Adaego with Love", "The Truth About Us"] },
    { name: "Chinedu Idigo", role: "Actor · Presenter", img: "talent-chinedu.jpg", ig: "eduhandsome",
      bio: "Actor, presenter, podcaster and model. He runs The Oyagist Me podcast and designs for Edufab Signature.",
      credits: ["Mr Universe Nigeria: Mr Congeniality", "The Oyagist Me podcast", "Edufab Signature"] },
    { name: "Preach Bassey", role: "Actor", img: "talent-preach.jpg", ig: "preachbassey",
      bio: "A film actor whose recent work includes the feature film A Land Apart.",
      credits: ["A Land Apart (as Bakare)"] },
  ];

  // Team profiles (#team/<slug>). Bios come from each person's Instagram (shared by the owner 2026-10-14).
  // `photo` shows on the profile page only; `img` stays as the round photo in the team section.
  const team = [
    { slug: "celine", name: "Obiabo Celine", first: "Obiabo", last: "Celine", role: "Business Development Manager", img: "team-celine.jpg", photo: "profile-celine.jpg",
      bio: "I help brands, businesses and public figures find the right way to tell their story. My background runs across media production, event coverage, sales and Nollywood makeup, so I know what it takes to make people look and sound their best on camera. From the first conversation to the final plan, I make sure every project with Torah Nexus starts with clear goals.",
      focus: ["Client partnerships", "Media production", "Event coverage"], ig: "celines_integrated_resources" },
    { slug: "naza", name: "Anozie Naza", first: "Anozie", last: "Naza", role: "Media & Creative Officer", img: "team-naza.jpg", photo: "profile-naza.jpg",
      bio: "I am a media and communications professional working across Torah Nexus and Torah Homz, the group's real estate brand in Abuja. I plan, shoot and share the stories behind our brands, from site visits to customer events, so people can see the work and the people behind it.",
      focus: ["Media & communications", "Real estate content", "Social media"], ig: "naza__anozie" },
    { slug: "christian", name: "Ekre Christian", first: "Ekre", last: "Christian", role: "Media & Creative Officer", img: "team-christian.jpg", photo: "profile-christian.jpg",
      bio: "I am an actor, producer and filmmaker. At Torah Nexus I bring that experience in front of and behind the camera to our commercials and campaigns, and I also serve as Sales and Marketing Executive for Torah Homz, the group's real estate brand.",
      focus: ["Film production", "Acting", "Sales & marketing"], ig: "chrisjohnsonekre", email: "Krisara.ao@gmail.com" },
  ];

  const brands = [
    { name: "Torah Homz", what: "Real estate", img: "brand-homz.jpg" },
    { name: "Torah Signature", what: "Hospitality", img: "brand-signature.jpg" },
    { name: "Simcha Innovations Ltd", what: "Construction", img: "brand-simcha.jpg" },
    { name: "Twoscrove Innovation", what: "Renewable energy · logo to come", cls: "brand-twoscrove" },
    { name: "Torah Switch", what: "Financial solutions · logo to come", cls: "brand-switch" },
  ];

  const articles = [
    { id: "story-not-ad", nexus: true, title: "Why Your Brand Needs a Story, Not Just an Ad", author: "Obiabo Celine", read: 2, img: "still-family.jpg",
      excerpt: "People forget slogans. They remember how a story made them feel. Here is how we build commercials around a single human moment.",
      body: [
        "Most adverts list features. The ones people remember show a moment: a family at dinner, a key handed over, a child laughing at the table.",
        "When we plan a commercial, we start with one question. What should the viewer feel in the last five seconds? Everything else in the script works toward that feeling.",
        "> Power in every message starts with knowing which message matters most.",
      ] },
    { id: "behind-the-scenes", nexus: true, title: "Behind the Scenes: Filming Across Six Brands in One Commercial", author: "Ekre Christian", read: 2, img: "still-nexus.jpg",
      excerpt: "One film, six companies and a single story. A look at how a group commercial is planned so every brand gets its moment.",
      body: [
        "A group commercial has a hard job. It has to introduce several businesses without feeling like a list.",
        "The answer is a thread that runs through every scene. Each brand appears where it fits naturally in that story.",
        "> Every brand gets its moment, and every moment serves the story.",
      ] },
    { id: "content-people-cant-ignore", nexus: true, title: "Five Ways to Make Content People Can't Ignore", author: "Anozie Naza", read: 2, img: "still-signature.jpg",
      excerpt: "Designed with strategy, served with impact. Practical habits for social content that stops the scroll.",
      body: [
        "Open with the most interesting frame. You have about a second before someone scrolls past.",
        "Show real people. Faces earn attention faster than logos do.",
        "> Designed with strategy. Served with impact.",
      ] },
  ];


  // Ask Nexus: prepared answers drawn only from what the site already says. Not a live chat or AI.
  const faq = [
    { id: "what", q: "What does Torah Nexus do?", k: ["what", "do", "about", "who", "company", "nexus", "services", "offer"],
      a: ["Torah Nexus is a media and communication company in Asokoro, Abuja, and part of Torah Holdings.", "We plan, make and promote content for brands: commercials and brand films, branding and design, social media, PR, advertising, event coverage, storytelling, media strategy, training and brand management."],
      link: ["#services", "See all ten services"], rel: ["commercial", "start", "holdings"] },
    { id: "commercial", q: "Can you film our commercial?", k: ["film", "commercial", "video", "advert", "ad", "shoot", "documentary", "production", "drone", "brand film"],
      a: ["Yes. Media production is at the heart of what we do: commercials, brand films, documentaries and short-form video, from script to final cut.", "Our latest is the Torah Holdings group commercial, filmed in Abuja with drone cinematography, editing and captions by Torah Nexus."],
      link: ["#work", "Watch our work"], rel: ["start", "cost", "talent"] },
    { id: "social", q: "Can you manage our social media?", k: ["social", "media", "instagram", "tiktok", "facebook", "linkedin", "posting", "content", "marketing", "digital", "manage"],
      a: ["Yes. We handle digital marketing and social media: content calendars, posting and community management across Instagram, Facebook, TikTok and LinkedIn.", "We also create the content itself, from short videos to designed posts, so your pages look like one brand."],
      link: ["#services", "See our services"], rel: ["branding", "strategy", "start"] },
    { id: "events", q: "Do you cover events?", k: ["event", "events", "cover", "coverage", "launch", "conference", "wedding", "celebration", "photography", "photo", "live"],
      a: ["Yes. Event media and coverage includes photography, video and live coverage for launches, conferences and celebrations."],
      link: ["#contact", "Tell us about your event"], rel: ["social", "cost", "start"] },
    { id: "talent", q: "Can I book your talent?", k: ["talent", "book", "franka", "chinedu", "preach", "bassey", "igwe", "idigo", "actor", "actress", "presenter", "model", "cast", "host", "ambassador"],
      a: ["Yes. Torah Nexus has signed talent for commercials, campaigns and film, including Igwe Chikaodili Franka, Chinedu Idigo and Preach Bassey.", "On the Contact page, choose “Book our talent” and tell us about the project."],
      link: ["#talent", "Meet our talent"], rel: ["commercial", "cost", "start"] },
    { id: "start", q: "How do we start a project?", k: ["start", "begin", "process", "how", "work", "brief", "steps", "hire", "next"],
      a: ["You don’t need a finished brief. Tell us what you want to achieve and we take it from there in four steps.", "Listen: we learn your goal, audience and budget. Plan: a clear concept, schedule and price, agreed before we start. Create: scripting, filming, design and editing, with your review at each stage. Launch: delivered in every format you need and promoted where your audience is."],
      link: ["#contact", "Start a project"], rel: ["cost", "time", "contact"] },
    { id: "cost", q: "How much does it cost?", k: ["how much", "cost", "price", "pricing", "budget", "much", "fee", "charge", "rate", "quote", "afford", "naira"],
      a: ["Every project is priced on what it needs, so there’s no fixed price list.", "Tell us what you need and we’ll come back with a plan, a timeline and a clear price before any work starts."],
      link: ["#contact", "Ask for a quote"], rel: ["start", "time", "commercial"] },
    { id: "time", q: "How long does a project take?", k: ["how long", "long", "time", "timeline", "fast", "quick", "deadline", "when", "days", "weeks", "turnaround", "duration"],
      a: ["It depends on the project. A set of social posts is quicker than a full commercial.", "Your schedule is agreed in the plan before we start, and you review the work at each stage."],
      link: ["#contact", "Tell us your deadline"], rel: ["cost", "start"] },
    { id: "branding", q: "Can you design our brand?", k: ["brand", "branding", "logo", "design", "identity", "flyer", "id card", "artwork", "graphics", "look"],
      a: ["Yes. Branding and creative design covers logos, brand identities, ID cards, flyers and campaign artwork that look like one brand.", "Brand management then keeps it consistent across every channel, month after month."],
      link: ["#services", "See our services"], rel: ["social", "strategy"] },
    { id: "pr", q: "Do you handle PR and press?", k: ["pr", "press", "release", "public relations", "reputation", "media relations", "corporate", "communications", "journalist", "news"],
      a: ["Yes. PR and corporate communications covers press releases, media relations and messaging that protect and grow your reputation."],
      link: ["#services", "See our services"], rel: ["strategy", "campaign"] },
    { id: "ads", q: "Can you run adverts on TV, radio or billboards?", k: ["tv", "television", "radio", "billboard", "outdoor", "advertising", "promotion", "promote", "campaign ads"],
      a: ["Yes. Advertising and promotions covers campaigns for TV, radio, outdoor and online that put your offer in front of the right people."],
      link: ["#services", "See our services"], rel: ["commercial", "cost"] },
    { id: "campaign", q: "Do you work on political campaigns?", k: ["political", "politics", "campaign", "election", "candidate", "aspirant", "senate"],
      a: ["Yes. We branded the campaign movement of Adakole Ijogi, the PDP candidate for the FCT Senate seat in 2027, and made the documentary in which he shares his plans for the FCT.", "We treat campaign work like any client project: clear messaging, strong visuals and content people want to watch."],
      link: ["#work", "See the client spotlight"], rel: ["commercial", "pr"] },
    { id: "strategy", q: "Can you help with our media strategy?", k: ["strategy", "consult", "consultancy", "advice", "plan", "measure", "audience", "growth"],
      a: ["Yes. Media consultancy and strategy gives you a clear plan for where to show up, what to say and how to measure what works."],
      link: ["#services", "See our services"], rel: ["social", "training"] },
    { id: "training", q: "Do you train teams?", k: ["train", "training", "teach", "class", "workshop", "capacity", "learn", "staff"],
      a: ["Yes. Training and capacity development is hands-on training that helps your team create and manage content on their own."],
      link: ["#contact", "Ask about training"], rel: ["strategy", "social"] },
    { id: "holdings", q: "How is Torah Nexus linked to Torah Holdings?", k: ["holdings", "group", "parent", "torah homz", "signature", "simcha", "switch", "twoscrove", "family", "sister"],
      a: ["Torah Nexus is the media and communication company of Torah Holdings.", "The group also includes Torah Homz (real estate), Torah Signature (hospitality), Simcha Innovations (construction), Torah Switch (financial solutions) and Twoscrove Innovation (renewable energy)."],
      link: ["#about", "About Torah Nexus"], rel: ["what", "team"] },
    { id: "team", q: "Who is on the team?", k: ["team", "staff", "people", "crew", "manager", "officer", "who works"],
      a: ["The people behind every message include Obiabo Celine, Business Development Manager, and Anozie Naza and Ekre Christian, Media & Creative Officers."],
      link: ["#about", "Meet the team"], rel: ["contact", "what"] },
    { id: "contact", q: "Where are you and how do I reach you?", k: ["where", "address", "location", "office", "visit", "contact", "phone", "call", "number", "reach", "whatsapp", "email"],
      a: ["We’re at Cluster B, Block A, House 5, Navy Admiralty Estate, Asokoro, Abuja.", "Call +234 906 710 2801 or +234 913 379 9396, or use the Contact page, which also has WhatsApp."],
      link: ["#contact", "Go to Contact"], rel: ["start", "cost"] },
  ];
  const ASK_STARTERS = ["what", "commercial", "social", "events", "talent", "start"];

  const ICONS = {
    film: '<path d="M4 5h16v14H4z"/><path d="M8 5v14M16 5v14M4 9h4M4 15h4M16 9h4M16 15h4"/>',
    pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    phone: '<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    mega: '<path d="M4 10v4h3l8 4V6L7 10z"/><path d="M18 9a4 4 0 0 1 0 6"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 5-4 1 2-5z"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14a5 5 0 0 1 5 6"/>',
    crown: '<path d="M4 18h16l-1-10-4 4-3-6-3 6-4-4z"/>',
    ig: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    upright: '<path d="M7 17L17 7M8 7h9v9"/>',
    up: '<path d="M12 19V5M5 12l7-7 7 7"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  };
  const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const saveData = () => { try { return !!(navigator.connection && navigator.connection.saveData); } catch (e) { return false; } };
  const initials = (n) => n.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  // ---------- Building blocks ----------
  const chapterBtn = (c) => `
    <button class="chapter" data-play="${c.t}" data-clip="${c.clip}" data-brand="${esc(c.name)}">
      <img src="${MEDIA + c.img}" alt="">
      <span><b>${esc(c.name)}</b><small>${esc(c.what)}</small></span>
      <time>${fmt(c.t)}</time>
    </button>`;

  const featuredWork = () => `
    <section class="wrap" aria-labelledby="h-work">
      <div class="section-head">
        <div><span class="eyebrow">Featured work</span><h2 id="h-work" style="margin-top:8px">Torah Holdings. Look in. <em>Find yourself.</em></h2>
        <p class="lede">A group commercial for Torah Holdings and its family of companies, filmed in Abuja. Concept, filming, drone cinematography, editing and captions by Torah Nexus.</p></div>
        <span class="client-badge"><img src="${MEDIA}logo-holdings.jpg" alt="">Client: Torah Holdings</span>
      </div>
      <div class="feature">
        <button class="screen" data-play="0" aria-label="Play the Torah Holdings commercial">
          <img src="${MEDIA}still-aerial.jpg" alt="Aerial view of a Torah Homz estate at dusk in Abuja">
          <video class="screen-preview" muted loop playsinline preload="none" aria-hidden="true"></video>
          <span class="screen-brand" aria-hidden="true"></span>
          <span class="screen-play"><i></i></span>
          <span class="duration">1:25</span>
        </button>
        <div style="display:grid;gap:10px;align-content:start;min-width:0">
          <span class="eyebrow">Jump to a brand</span>
          <div class="chapters">${chapters.slice(1).map(chapterBtn).join("")}</div>
        </div>
      </div>
    </section>`;

  const serviceCard = (s) => `<div class="service">${icon(s.icon)}<h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`;

  const talentCard = (p) => `
    <article class="talent">
      <div class="talent-photo"><img src="${MEDIA + p.img}" alt="Portrait of ${esc(p.name)}"><span class="role">${esc(p.role)}</span></div>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.bio)}</p>
      <div class="credits">${p.credits.map((c) => `<span>${esc(c)}</span>`).join("")}</div>
      <a class="ig-link" href="https://www.instagram.com/${p.ig}/" target="_blank" rel="noopener">${icon("ig")}@${esc(p.ig)}</a>
    </article>`;

  const teamBand = (headingTag = "h2") => `
    <section class="wrap" aria-labelledby="h-team">
      <div class="team-band on-dark">
        <span class="eyebrow">The team</span>
        <${headingTag} id="h-team" style="font-size:var(--step-3);margin-top:8px">The people <em>behind every message.</em></${headingTag}>
        <p class="lede">A small team of strategists and creatives who plan, shoot, design and publish for the brands we serve.</p>
        <div class="team-grid">${team.map((m) => `
          <a class="member" href="#team/${m.slug}"><img src="${MEDIA + m.img}" alt="Portrait of ${esc(m.name)}"><h3>${esc(m.name)}</h3><p>${esc(m.role)}</p><span class="member-more">View profile →</span></a>`).join("")}
        </div>
      </div>
    </section>`;

  const brandRow = () => `
    <div class="brand-row">${brands.map((b) => b.img
      ? `<figure class="brand" style="margin:0"><img src="${MEDIA + b.img}" alt="${esc(b.name)} logo"><figcaption>${esc(b.name)} · ${esc(b.what)}</figcaption></figure>`
      : `<figure class="brand ${b.cls}" style="margin:0"><span class="brand-text">${esc(b.name.toUpperCase())}</span><figcaption>${esc(b.what)}</figcaption></figure>`).join("")}
    </div>`;

  const articleCard = (a) => `
    <button class="card-article" data-article="${a.id}">
      <div class="cover"><img src="${MEDIA + a.img}" alt=""></div>
      ${a.nexus ? `<span class="sample-tag nexus-tag">Nexus Article</span>` : ""}
      <h3>${esc(a.title)}</h3>
      <p>${esc(a.excerpt)}</p>
      <span class="byline"><span class="avatar">${initials(a.author)}</span>Written by <b>${esc(a.author)}</b> · ${a.read} min read</span>
    </button>`;

  const ctaBand = () => `
    <section class="wrap">
      <div class="cta-band on-dark">
        <div><span class="eyebrow">Let's build your presence</span><h2 style="margin-top:8px">Have a brand, a launch <em>or a story to tell?</em></h2><p>Tell us what you need. We'll come back with a plan, a timeline and a clear price.</p></div>
        <a class="btn btn-gold" href="#contact">Start a project</a>
      </div>
    </section>`;

  // ---------- Views ----------
  function viewHome() {
    const ticker = services.map((s) => `<span>${esc(s.title)}</span>`).join("");
    return `
      <div>
      <section class="hero on-dark" aria-label="Torah Nexus">
        <img class="hero-poster" src="${MEDIA}hero-poster.jpg" alt="">
        ${saveData() ? "" : `<video class="js-hero-video" src="${MEDIA}${matchMedia("(max-width: 760px)").matches ? "hero-loop-mobile.mp4" : "hero-loop.mp4"}" poster="${MEDIA}hero-poster.jpg" muted loop playsinline preload="auto" aria-hidden="true"></video>`}
        <div class="wrap hero-inner">
          <span class="hero-kicker">Film. Design. Communication.</span>
          <h1>Power in <span>every message.</span></h1>
          <p class="hero-sub"><em>A media and communication house in Abuja.</em> We cook up content people can't ignore, designed with strategy and served with impact.</p>
          <div class="hero-actions">
            <button class="btn btn-gold" data-play="0"><span class="play-dot"></span>Watch our latest commercial</button>
            <a class="btn btn-line" href="#services">See what we do</a>
          </div>
        </div>
      </section>
      <div class="ticker" aria-label="Our services"><div class="ticker-track">${ticker}${ticker.replace(/<span>/g, '<span aria-hidden="true">')}</div></div>
      <div class="wrap"><div class="stats">
        <div><b data-count="10">10</b><span>services under one roof</span></div>
        <div><b data-count="6">6</b><span>brands told in one commercial</span></div>
        <div><b data-count="3">3</b><span>signed talent and growing</span></div>
        <div><b>Abuja</b><span>Asokoro, our home base</span></div>
      </div></div>
      </div>

      <section class="wrap intro" aria-labelledby="h-intro">
        <span class="eyebrow">The house of Torah Nexus</span>
        <h2 id="h-intro">One house. <em>Every way to be heard.</em></h2>
        <p class="lede">Film, design, campaigns and talent, made under one roof in Abuja. Whatever your message is, we find the best way to tell it and the right place for people to see it.</p>
        <div class="intro-links"><a class="link-more" href="#work">See our work →</a><a class="link-more" href="#services">Find your way in →</a></div>
      </section>

      ${featuredWork()}

      <section class="wrap" aria-labelledby="h-services">
        <div class="section-head">
          <div><span class="eyebrow">What we do</span><h2 id="h-services" style="margin-top:8px">Every direction <em>for your brand.</em></h2></div>
          <a class="link-more" href="#services">All services →</a>
        </div>
        <div class="service-grid">${services.slice(0, 8).map(serviceCard).join("")}</div>
      </section>

      <section class="wrap" aria-labelledby="h-how">
        <div class="section-head"><div><span class="eyebrow">How we work</span><h2 id="h-how" style="margin-top:8px">From first call <em>to final cut.</em></h2></div></div>
        <ol class="process">
          <li><b>Listen</b><p>We learn your goal, your audience and your budget.</p></li>
          <li><b>Plan</b><p>A clear concept, schedule and price, agreed before we start.</p></li>
          <li><b>Create</b><p>Scripting, filming, design and editing, with your review at each stage.</p></li>
          <li><b>Launch</b><p>Delivered in every format you need, then promoted where your audience is.</p></li>
        </ol>
      </section>

      <section class="wrap" aria-labelledby="h-talent">
        <div class="section-head">
          <div><span class="eyebrow">Our talent</span><h2 id="h-talent" style="margin-top:8px">Faces signed <em>to Torah Nexus.</em></h2></div>
          <a class="link-more" href="#talent">Meet our talent →</a>
        </div>
        <div class="talent-grid">${talent.map(talentCard).join("")}</div>
      </section>

      ${teamBand()}

      <section class="wrap" aria-labelledby="h-brands">
        <div class="section-head"><div><span class="eyebrow">Brands we create for</span><h2 id="h-brands" style="margin-top:8px">The Torah Holdings <em>family.</em></h2></div></div>
        ${brandRow()}
      </section>

      <section class="wrap" aria-labelledby="h-articles">
        <div class="section-head">
          <div><span class="eyebrow">Articles</span><h2 id="h-articles" style="margin-top:8px">Ideas <em>from the team.</em></h2></div>
          <a class="link-more" href="#articles">All articles →</a>
        </div>
        <div class="article-grid">${articles.map(articleCard).join("")}</div>
      </section>

      <section class="wrap" aria-labelledby="h-askstrip">
        <div class="ask-strip">
          <div><span class="eyebrow">Have a question?</span><h2 id="h-askstrip">Ask <em>Nexus.</em></h2><p class="lede">Ready answers about our work, our services and how a project starts.</p></div>
          <div class="ask-strip-pills">${["commercial", "social", "cost"].map((id) => { const f = faq.find((x) => x.id === id); return `<a class="ask-pill" href="#ask" data-ask-go="${f.id}">${esc(f.q)}${icon("upright")}</a>`; }).join("")}<a class="link-more" href="#ask">Open Ask Nexus →</a></div>
        </div>
      </section>

      ${ctaBand()}`;
  }

  function viewWork() {
    const stills = [["still-family.jpg", "The family table"], ["still-build.jpg", "Drone: site at sunrise"], ["still-homz.jpg", "Torah Homz"], ["still-switch.jpg", "Torah Switch"], ["still-signature.jpg", "Torah Signature"], ["still-nexus.jpg", "Torah Nexus on set"]];
    return `
      <section class="wrap page-title">
        <span class="eyebrow">Our work</span>
        <h1>Our <em>videos.</em></h1>
        <p class="lede">Commercials, brand films and campaign content. Start with our latest commercial, then follow us on Instagram for new reels every week.</p>
      </section>
      ${featuredWork()}
      <section class="wrap" aria-labelledby="h-client">
        <div class="client-case">
          <figure class="client-photo"><img src="${MEDIA}client-adakole.jpg" alt="Adakole Ijogi in a still from his campaign video, captioned PDP candidate FCT senate 2027"></figure>
          <div class="client-copy">
            <span class="eyebrow">Client spotlight · Political campaign</span>
            <h2 id="h-client">Adakole Ijogi. <em>A campaign, told on film.</em></h2>
            <p class="lede">Adakole Ijogi is the PDP candidate for the FCT Senate seat in the 2027 election. Torah Nexus branded his campaign movement and made the documentary in which he speaks directly to the people of the FCT about his plans.</p>
            <ul class="client-list">
              <li><b>Campaign branding</b><span>A consistent look for the movement across video and social media.</span></li>
              <li><b>Campaign video</b><span>Filmed and produced by Torah Nexus.</span></li>
              <li><b>Documentary</b><span>His story and his plans for the FCT, in his own words.</span></li>
            </ul>
            <a class="link-more" href="${IG.adakole}" target="_blank" rel="noopener">See the campaign on Instagram →</a>
          </div>
        </div>
      </section>
      <section class="wrap" aria-labelledby="h-stills">
        <div class="section-head"><div><span class="eyebrow">From the commercial</span><h2 id="h-stills" style="margin-top:8px">Frames <em>we're proud of.</em></h2></div></div>
        <div class="stills">${stills.map(([f, c]) => `<figure><img src="${MEDIA + f}" alt="${esc(c)}"><figcaption>${esc(c)}</figcaption></figure>`).join("")}</div>
      </section>
      <section class="wrap">
        <div class="section-head"><div><span class="eyebrow">More videos</span><h2 style="margin-top:8px">New reels <em>every week.</em></h2><p class="lede">Behind-the-scenes clips, talent features and campaign reels live on our Instagram.</p></div>
        <a class="btn btn-crimson" href="${IG.nexus}" target="_blank" rel="noopener">${icon("ig")} Watch on Instagram</a></div>
      </section>
      ${ctaBand()}`;
  }

  function viewTalent() {
    return `
      <section class="wrap page-title">
        <span class="eyebrow">Our talent</span>
        <h1>Faces of <em>Torah Nexus.</em></h1>
        <p class="lede">Actors, presenters and models signed to Torah Nexus for commercials, campaigns and film. To book any of them, get in touch.</p>
      </section>
      <section class="wrap" aria-label="Talent roster"><div class="talent-grid">${talent.map(talentCard).join("")}</div></section>
      ${ctaBand()}`;
  }

  function viewServices() {
    return `
      <section class="wrap page-title">
        <span class="eyebrow">What we do</span>
        <h1>Every direction <em>for your brand.</em></h1>
        <p class="lede">Torah Nexus is a full-service media and communication company. From one post to a full campaign, we plan it, make it and get it seen.</p>
      </section>
      <section class="wrap" aria-label="Services"><div class="service-grid">${services.map(serviceCard).join("")}</div></section>
      ${featuredWork()}
      ${ctaBand()}`;
  }

  function viewAbout() {
    return `
      <section class="wrap page-title" style="display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:clamp(24px,4vw,56px);align-items:center" id="about-hero">
        <div>
          <span class="eyebrow">About us</span>
          <h1>Power in <em>every message.</em></h1>
          <p class="lede">Torah Nexus is the media and communication company of Torah Holdings, based in Asokoro, Abuja. We help brands tell their story through film, design, digital marketing, PR and events, and we develop the talent who bring those stories to life.</p>
        </div>
        <img src="${MEDIA}logo-lockup.jpg" alt="Torah Nexus logo: Power in Every Message" style="border-radius:20px;width:100%;max-width:440px;justify-self:center">
      </section>
      ${teamBand("h2")}
      <section class="wrap" aria-labelledby="h-brands2">
        <div class="section-head"><div><span class="eyebrow">Part of Torah Holdings</span><h2 id="h-brands2" style="margin-top:8px">Building legacy. <em>Creating value.</em></h2><p class="lede">Torah Holdings brings together companies in real estate, hospitality, construction, finance, energy and media.</p></div>
        <a class="link-more" href="${IG.holdings}" target="_blank" rel="noopener">Torah Holdings on Instagram →</a></div>
        ${brandRow()}
      </section>
      ${ctaBand()}`;
  }

  function viewArticles() {
    return `
      <section class="wrap page-title">
        <span class="eyebrow">Articles</span>
        <h1>Ideas <em>from the team.</em></h1>
        <p class="lede">Notes on storytelling, branding and media from the people who make our work. Each article shows who wrote it.</p>
      </section>
      <section class="wrap" aria-label="All articles"><div class="article-grid">${articles.map(articleCard).join("")}</div></section>
      ${ctaBand()}`;
  }

  function viewContact() {
    return `
      <section class="wrap page-title">
        <span class="eyebrow">Contact</span>
        <h1>Let's build <em>your presence.</em></h1>
        <p class="lede">Tell us about your project, book one of our talent, or ask a question.</p>
      </section>
      <section class="wrap contact-layout">
        <form class="contact-form js-contact" novalidate>
          <div class="field-row">
            <div class="field"><label for="c-name">Your name</label><input id="c-name" autocomplete="name" required><span class="err-text" hidden>Please enter your name.</span></div>
            <div class="field"><label for="c-phone">Phone or email</label><input id="c-phone" autocomplete="email" required><span class="err-text" hidden>Please add a phone number or email so we can reply.</span></div>
          </div>
          <div class="field"><label for="c-type">What do you need?</label>
            <select id="c-type">${services.map((s) => `<option>${esc(s.title)}</option>`).join("")}<option>Book our talent</option><option>Something else</option></select>
          </div>
          <div class="field"><label for="c-msg">Tell us about it</label><textarea id="c-msg" rows="6" required></textarea><span class="err-text" hidden>Please write a short message.</span></div>
          <div><button class="btn btn-crimson" type="submit">Send on WhatsApp</button></div>
          <p class="meta">Your message opens in WhatsApp, ready to send to Torah Nexus.</p>
          <p class="form-msg" aria-live="polite"></p>
        </form>
        <aside class="contact-aside">
          <div class="info-card"><h3>Chat with us</h3><a class="btn btn-wa" href="${WA("Hello Torah Nexus, I'd like to talk about a project.")}" target="_blank" rel="noopener">${icon("chat")} Chat on WhatsApp</a></div>
          <div class="info-card"><h3>Call us</h3>
            <div class="copy-line"><a href="tel:+2349067102801">+234 906 710 2801</a><button class="small-btn js-copy" data-copy="+2349067102801">Copy</button></div>
            <div class="copy-line"><a href="tel:+2349133799396">+234 913 379 9396</a><button class="small-btn js-copy" data-copy="+2349133799396">Copy</button></div>
          </div>
          <div class="info-card"><h3>Visit us</h3><p>Cluster B, Block A, House 5,<br>Navy Admiralty Estate, Asokoro, Abuja</p></div>
          <div class="info-card"><h3>Follow us</h3><a class="ig-link" href="${IG.nexus}" target="_blank" rel="noopener">${icon("ig")}@torah_nexus</a></div>
        </aside>
      </section>`;
  }


  function viewAsk() {
    const pill = (f) => `<button class="ask-pill" type="button" data-ask="${f.id}">${esc(f.q)}${icon("upright")}</button>`;
    return `
      <section class="wrap ask" aria-labelledby="h-ask">
        <aside class="ask-side">
          <a class="ask-back" href="#work">← Explore the work</a>
          <div class="ask-side-intro">
            <span class="eyebrow">Ask Nexus</span>
            <p class="ask-side-title">A clear question. <em>A way forward.</em></p>
            <p class="meta">Ready answers about Torah Nexus: film, design, campaigns, talent and how we work.</p>
          </div>
          <div class="ask-side-actions">
            <button class="ask-new" type="button" data-ask-reset>New conversation ${icon("plus")}</button>
            <a class="link-more" href="#contact">Speak with the team ↗</a>
          </div>
        </aside>
        <div class="ask-main">
          <span class="eyebrow">You don’t need a finished brief.</span>
          <h1 id="h-ask">What would you <em>like to make?</em></h1>
          <p class="lede">Ask about our work, our services or how a project starts. Pick a question or type your own.</p>
          <div class="ask-log" aria-live="polite"></div>
          <div class="ask-pills">${ASK_STARTERS.map((id) => pill(faq.find((f) => f.id === id))).join("")}</div>
          <form class="ask-form js-ask" autocomplete="off">
            <label class="sr-only" for="ask-input">Your question</label>
            <input id="ask-input" placeholder="A project, a question, a what-if…" maxlength="200">
            <button class="ask-send" type="submit" aria-label="Ask">${icon("up")}</button>
          </form>
          <p class="meta ask-note">Ask Nexus gives prepared answers from Torah Nexus. It isn’t a live chat. Project details are confirmed by our team. Please don’t share private information here.</p>
        </div>
      </section>`;
  }

  // Score each prepared answer against the typed question
  function matchFaq(text) {
    const t = " " + text.toLowerCase().replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ") + " ";
    let best = null, top = 0;
    faq.forEach((f) => {
      let score = 0;
      f.k.forEach((k) => { if (t.includes(" " + k + " ") || (k.length > 4 && t.includes(k))) score += k.length >= 5 ? 2 : 1; });
      if (score > top) { top = score; best = f; }
    });
    return top >= 2 ? best : null;
  }

  function askAnswer(f, typed) {
    const log = $(".ask-log"); if (!log) return;
    const q = typed || f.q;
    const body = f
      ? `${f.a.map((p) => `<p>${esc(p)}</p>`).join("")}<a class="link-more" href="${f.link[0]}">${esc(f.link[1])} →</a>`
      : `<p>I don’t have a ready answer for that one yet. Our team can help directly.</p><a class="link-more" href="#contact">Speak with the team →</a>`;
    const rel = (f ? f.rel : ASK_STARTERS.slice(0, 3)).map((id) => faq.find((x) => x.id === id)).filter(Boolean);
    log.insertAdjacentHTML("beforeend", `
      <div class="ask-turn">
        <p class="ask-q">${esc(q)}</p>
        <div class="ask-a"><span class="ask-who"><img src="${MEDIA}logo-mark-128.png" alt="">Torah Nexus</span>${body}
          ${rel.length ? `<div class="ask-rel"><span class="meta">You might also ask</span>${rel.map((r) => `<button class="ask-pill small" type="button" data-ask="${r.id}">${esc(r.q)}${icon("upright")}</button>`).join("")}</div>` : ""}
        </div>
      </div>`);
    $(".ask-pills").hidden = true;
    const last = log.lastElementChild;
    last.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }

  function viewMember(m) {
    const others = team.filter((o) => o !== m);
    const row = (ic, html) => `<li class="pf-row">${icon(ic)}<span>${html}</span></li>`;
    return `
    <section class="profile on-dark" aria-labelledby="h-profile">
      <div class="wrap profile-grid">
        <figure class="profile-photo${m.photo ? "" : " id-crop"}"><img src="${MEDIA + (m.photo || m.img)}" alt="Portrait of ${esc(m.name)}"></figure>
        <div class="profile-body">
          <a class="profile-back" href="#about">← The team</a>
          <span class="profile-tag">◆ ${esc(m.role)} · Torah Nexus</span>
          <h1 id="h-profile">${esc(m.first)} <em>${esc(m.last)}</em></h1>
          <p class="profile-bio">${esc(m.bio)}</p>
          <div class="profile-focus">${m.focus.map((f) => `<span>${esc(f)}</span>`).join("")}</div>
          <ul class="profile-contact">
            ${row("phone", `<a href="tel:+2349067102801">+234 (0)906 710 2801</a>`)}
            ${row("phone", `<a href="tel:+2349133799396">+234 (0)913 379 9396</a>`)}
            ${m.email ? row("mail", `<a href="mailto:${esc(m.email)}">${esc(m.email)}</a>`) : ""}
            ${row("ig", `<a href="https://www.instagram.com/${m.ig}/" target="_blank" rel="noopener">@${esc(m.ig)}</a>`)}
            ${row("pin", "Cluster B, Admiralty Estate, Asokoro, Abuja")}
          </ul>
          <div class="profile-actions">
            <a class="btn btn-gold" href="#contact">Start a project</a>
            <a class="btn btn-line" href="#work">See our work</a>
          </div>
        </div>
      </div>
    </section>
    <section class="wrap profile-others" aria-labelledby="h-others">
      <span class="eyebrow">Also on the team</span>
      <h2 id="h-others" style="margin-top:8px">Meet the <em>rest of the team.</em></h2>
      <div class="others-grid">${others.map((o) => `
        <a class="other" href="#team/${o.slug}"><img src="${MEDIA + o.img}" alt="Portrait of ${esc(o.name)}"><span><strong>${esc(o.name)}</strong><small>${esc(o.role)}</small></span><span class="other-arrow" aria-hidden="true">→</span></a>`).join("")}
      </div>
    </section>`;
  }

  const ROUTES = { home: viewHome, work: viewWork, talent: viewTalent, services: viewServices, about: viewAbout, articles: viewArticles, contact: viewContact, ask: viewAsk };
  const TITLES = { home: "Torah Nexus", work: "Our Work · Torah Nexus", talent: "Our Talent · Torah Nexus", services: "Services · Torah Nexus", about: "About · Torah Nexus", articles: "Articles · Torah Nexus", contact: "Contact · Torah Nexus", ask: "Ask Nexus · Torah Nexus" };
  const member = () => { const m = location.hash.match(/^#team\/([a-z-]+)$/); return m && team.find((t) => t.slug === m[1]); };
  const route = () => { const h = location.hash.slice(1); return ROUTES[h] ? h : member() ? "member" : "home"; };

  // Gentle fade-up as sections scroll into view
  const REVEAL = ".page-title, .intro, .section-head, .stats, .feature, .client-case, .service, .process li, .talent, .team-band, .brand, .card-article, .stills figure, .cta-band, .info-card, .contact-form, .ask-strip, .profile-others";
  let io, pendingAsk = null;
  // Count a number up from zero when it scrolls into view
  function countUp(el) {
    const end = Number(el.dataset.count), dur = 1400, t0 = performance.now();
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(end * e);
      if (k < 1) requestAnimationFrame(step);
    };
    el.textContent = "0"; requestAnimationFrame(step);
  }

  // Brand previews: hovering a brand plays its short silent clip on the big screen
  const canHover = matchMedia("(hover: hover) and (pointer: fine)").matches;
  function previewBrand(ch) {
    const feat = ch && ch.closest(".feature"), scr = feat && $(".screen", feat);
    if (!scr) return;
    const v = $(".screen-preview", scr), label = $(".screen-brand", scr);
    if (v.dataset.clip !== ch.dataset.clip) { v.dataset.clip = ch.dataset.clip; v.src = MEDIA + ch.dataset.clip; }
    label.textContent = ch.dataset.brand;
    scr.classList.add("previewing");
    $$(".chapter", feat).forEach((c) => c.classList.toggle("active", c === ch));
    v.play().catch(() => {});
  }
  function stopPreview(feat) {
    const scr = $(".screen", feat); if (!scr) return;
    scr.classList.remove("previewing");
    $$(".chapter", feat).forEach((c) => c.classList.remove("active"));
    const v = $(".screen-preview", scr); if (v) v.pause();
  }
  if (canHover) {
    document.addEventListener("mouseover", (e) => { const ch = e.target.closest(".chapter[data-clip]"); if (ch) previewBrand(ch); });
    document.addEventListener("mouseout", (e) => {
      const feat = e.target.closest(".feature"); if (!feat) return;
      if (!e.relatedTarget || !feat.contains(e.relatedTarget)) stopPreview(feat);
    });
  }
  document.addEventListener("focusin", (e) => { const ch = e.target.closest(".chapter[data-clip]"); if (ch && canHover) previewBrand(ch); });

  function reveal() {
    if (io) io.disconnect();
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); $$("[data-count]", en.target).forEach(countUp); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    $$(REVEAL, $("#main")).forEach((el) => {
      const i = [...el.parentElement.children].indexOf(el) % 4;
      el.style.transitionDelay = `${i * 80}ms`;
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  function render() {
    const r = route();
    const html = (r === "member" ? viewMember(member()) : ROUTES[r]()).replace(/<img (?![^>]*hero-poster)/g, '<img loading="lazy" decoding="async" ');
    $("#main").innerHTML = `<div class="view">${html}</div>`;
    $("#main").classList.remove("page-out");
    reveal();
    if (r === "ask" && pendingAsk) { const id = pendingAsk; pendingAsk = null; setTimeout(() => askAnswer(faq.find((f) => f.id === id)), 60); }
    $$(".nav a").forEach((a) => (a.getAttribute("href") === "#" + r ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current")));
    document.title = r === "member" ? `${member().name} · Torah Nexus` : TITLES[r];
    $("#menu-panel").hidden = true;
    $(".menu-btn").setAttribute("aria-expanded", "false");
    $$(".menu-links a").forEach((a) => (a.getAttribute("href") === "#" + r ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current")));
    window.scrollTo(0, 0);
    const hv = $(".js-hero-video");
    if (hv && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      hv.play().then(() => { const p = $(".hero-poster"); if (p) p.hidden = true; }).catch(() => {});
    }
  }

  // ---------- Modal ----------
  function openModal(html) {
    const m = $("#modal");
    m.innerHTML = `<div class="modal-card" role="dialog" aria-modal="true"><button class="icon-btn modal-close" aria-label="Close">${icon("close")}</button>${html}</div>`;
    m.hidden = false;
    document.body.style.overflow = "hidden";
    const hv = $(".js-hero-video"); if (hv) hv.pause();
    $(".modal-close", m).focus();
  }
  function closeModal() {
    const m = $("#modal");
    const v = $("video", m); if (v) v.pause();
    m.hidden = true; m.innerHTML = "";
    document.body.style.overflow = "";
    const hv = $(".js-hero-video"); if (hv && !matchMedia("(prefers-reduced-motion: reduce)").matches) hv.play().catch(() => {});
  }

  function openVideo(start) {
    const existing = $("#modal video");
    if (existing) { existing.currentTime = start; existing.play().catch(() => {}); return; }
    openModal(`
      <video src="${VIDEO}" poster="${MEDIA}still-aerial.jpg" controls playsinline preload="auto"></video>
      <div class="modal-body">
        <span class="eyebrow">Commercial · Torah Holdings</span>
        <h2>Torah Holdings. Look in. <em>Find yourself.</em></h2>
        <p class="meta">1:25 · Produced by Torah Nexus · Filmed in Abuja</p>
        <div class="chapters">${chapters.map(chapterBtn).join("")}</div>
      </div>`);
    const v = $("#modal video");
    const go = () => { v.currentTime = start; v.play().catch(() => {}); };
    if (v.readyState >= 1) go(); else v.addEventListener("loadedmetadata", go, { once: true });
  }

  function openArticle(id) {
    const a = articles.find((x) => x.id === id);
    if (!a) return;
    const paras = a.body.map((p) => (p.startsWith("> ") ? `<blockquote>${esc(p.slice(2))}</blockquote>` : `<p>${esc(p)}</p>`)).join("");
    openModal(`
      <img src="${MEDIA + a.img}" alt="" style="width:100%;aspect-ratio:21/8;object-fit:cover">
      <div class="modal-body"><article class="reader">
        ${a.nexus ? `<span class="sample-tag nexus-tag" style="width:fit-content">Nexus Article</span>` : ""}
        <h2>${esc(a.title)}</h2>
        <span class="byline"><span class="avatar">${initials(a.author)}</span>Written by <b>${esc(a.author)}</b> · ${a.read} min read</span>
        ${paras}
      </article></div>`);
  }

  // ---------- Theme ----------
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("tn-theme", t); } catch (e) {}
  }
  const isDark = () => { const t = document.documentElement.getAttribute("data-theme"); return t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches; };

  // ---------- Events ----------
  document.addEventListener("click", (e) => {
    const ask = e.target.closest("[data-ask]");
    if (ask) { askAnswer(faq.find((f) => f.id === ask.dataset.ask)); return; }
    if (e.target.closest("[data-ask-reset]")) { render(); return; }
    const go = e.target.closest("[data-ask-go]");
    if (go) { pendingAsk = go.dataset.askGo; }
    const play = e.target.closest("[data-play]");
    if (play) { e.preventDefault(); openVideo(Number(play.dataset.play)); return; }
    const art = e.target.closest("[data-article]");
    if (art) { e.preventDefault(); openArticle(art.dataset.article); return; }
    const cp = e.target.closest(".js-copy");
    if (cp) {
      const done = () => { const o = cp.textContent; cp.textContent = "Copied"; setTimeout(() => (cp.textContent = o), 1500); };
      try { navigator.clipboard.writeText(cp.dataset.copy).then(done, () => {}); } catch (err) {}
      return;
    }
    if (e.target.closest(".modal-close") || e.target.id === "modal") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!$("#modal").hidden) closeModal();
    else if (!$("#menu-panel").hidden) { $("#menu-panel").hidden = true; $(".menu-btn").setAttribute("aria-expanded", "false"); $(".menu-btn").focus(); }
  });
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("js-ask")) {
      const inp = $("#ask-input"), text = inp.value.trim();
      if (!text) { inp.focus(); return; }
      askAnswer(matchFaq(text), text); inp.value = "";
      return;
    }
    const form = e.target, msg = $(".form-msg", form);
    let ok = true;
    $$("[required]", form).forEach((f) => {
      const bad = !f.value.trim();
      const err = f.parentElement.querySelector(".err-text"); if (err) err.hidden = !bad;
      f.setAttribute("aria-invalid", String(bad));
      if (bad && ok) { f.focus(); ok = false; }
    });
    if (!ok) { msg.className = "form-msg err"; msg.textContent = "Please fill in the highlighted fields."; return; }
    const text = `Hello Torah Nexus, my name is ${$("#c-name").value.trim()}.\nI need: ${$("#c-type").value}\n\n${$("#c-msg").value.trim()}\n\nReach me on: ${$("#c-phone").value.trim()}`;
    window.open(WA(text), "_blank", "noopener");
    msg.className = "form-msg ok";
    msg.textContent = "Thanks! WhatsApp has opened with your message. Tap send there and we'll get back to you.";
  });

  function init() {
    try { const t = localStorage.getItem("tn-theme"); if (t) document.documentElement.setAttribute("data-theme", t); } catch (e) {}
    $(".js-theme").addEventListener("click", () => setTheme(isDark() ? "light" : "dark"));
    $(".menu-btn").addEventListener("click", (e) => { const panel = $("#menu-panel"); panel.hidden = !panel.hidden; e.currentTarget.setAttribute("aria-expanded", String(!panel.hidden)); });
    $("#year").textContent = new Date().getFullYear();
    window.addEventListener("hashchange", () => {
      const main = $("#main");
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) { render(); return; }
      main.classList.add("page-out");
      setTimeout(render, 200);
    });
    render();
  }
  init();
})();
