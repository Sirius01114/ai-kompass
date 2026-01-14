import Link from 'next/link';
import { ArrowRight, BarChart3, ShieldCheck, Zap, Mail } from 'lucide-react';
import { articles } from '@/data/news';

export default function Home() {
  const leadStory = articles.find(a => a.isLead) || articles[0];
  const gridStories = articles.filter(a => !a.isLead).slice(0, 3);
  const remainingStories = articles.filter(a => !a.isLead).slice(3);

  return (
    <div className="container py-12">

      {/* LEAD STORY */}
      <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-b border-[var(--border)] pb-24">
        <div className="lg:col-span-8">
          <Link href={`/news/${leadStory.id}`} className="group">
            <span className="tag">{leadStory.tag}</span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-12 leading-tight text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
              {leadStory.title}
            </h1>
          </Link>
          <p className="text-2xl text-[var(--subtext)] font-serif italic mb-12 leading-relaxed max-w-3xl">
            {leadStory.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-[var(--subtext)]">
            <span className="font-semibold text-[var(--primary)]">Von {leadStory.author}</span>
            <span>•</span>
            <span>{leadStory.date}</span>
            <span>•</span>
            <span>{leadStory.readTime}</span>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-8">

          {/* ADVERTISEMENT 1: B2B Solutions */}
          <div className="bg-[#0f172a] text-white p-0 border border-gray-800 shadow-2xl relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 right-0 bg-[var(--accent)] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest z-20 shadow-lg">Anzeige</div>

            {/* Image at Top - Slimmer aspect ratio (21/9) */}
            <div className="relative aspect-[21/9] overflow-hidden bg-gray-100">
              <img
                src="/business_ad.png"
                alt="Business Automation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]/20"></div>
            </div>

            {/* Content Area */}
            <div className="p-8">
              <h3 className="font-serif text-3xl text-white leading-tight mb-6 group-hover:text-[var(--accent)] transition-colors">
                Automatisierungs-Software <br />für dein Unternehmen
              </h3>
              <p className="text-gray-400 text-base mb-10 leading-relaxed">
                Vollautomatisierte Büro-Lösungen für dein modernes Unternehmen. Eliminieren Sie repetitive Aufgaben und steigern Sie Ihre operative Exzellenz nachhaltig.
              </p>

              <button className="w-full bg-[var(--accent)] hover:bg-blue-700 text-white font-black py-4 px-6 rounded-sm transition-all duration-300 text-xs uppercase tracking-[0.2em] shadow-xl border border-white/10">
                Software-Demo anfordern
              </button>
            </div>
          </div>

          {/* Existing Market Indicator */}
          <div className="bg-[var(--section-bg)] p-6 border-l-4 border-[var(--gold)]">
            <h3 className="font-bold text-[var(--primary)] mb-2 uppercase text-xs tracking-wider">Markt-Indikator</h3>
            <div className="flex justify-between items-end mb-2">
              <span className="text-3xl font-serif font-bold">€4.2 Mrd.</span>
              <span className="text-green-600 font-mono text-sm">+18.5%</span>
            </div>
            <p className="text-sm text-[var(--subtext)]">Investitionsvolumen in deutsche AI-Startups (Q4 2025)</p>
          </div>

          {/* ADVERTISEMENT 2: NextStep Education */}
          <div className="border border-gray-200 bg-white p-0 shadow-sm group relative">
            <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest z-10">Anzeige</div>
            <div className="relative h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
                alt="Education"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-bold text-[var(--primary)]">
                AZAV Zertifiziert
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-[var(--primary)] uppercase text-xs tracking-widest mb-1">NextStep Education GmbH</h4>
              <h3 className="font-serif text-xl font-bold mb-3 leading-tight">KI-Kompetenz & Digitale Prozesse</h3>
              <p className="text-[var(--subtext)] text-sm mb-4">
                Meistern Sie das KI-Zeitalter. 100% Förderung durch Bildungsgutschein (FB04) für Arbeitssuchende und Unternehmen.
              </p>
              <a href="#" className="inline-block border-b-2 border-[var(--gold)] pb-0.5 text-sm font-bold text-[var(--primary)] hover:text-[var(--gold)] transition-colors">
                Kursdetails (160 UE) →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* THREE COLUMN NEWS GRID */}
      <section className="mb-32">
        <div className="flex justify-between items-end mb-16 border-b border-[var(--border)] pb-8">
          <h2 className="text-4xl font-serif font-bold text-[var(--primary)] text-center w-full md:text-left md:w-auto">Aktuelle Analysen</h2>
          <Link href="/news" className="text-sm font-bold uppercase tracking-wide flex items-center gap-2 hover:text-[var(--accent)]">
            Alle Nachrichten <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gridStories.map((article) => (
            <article key={article.id} className="news-card group">
              <Link href={`/news/${article.id}`}>
                <div className="news-image mb-4 relative overflow-hidden h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="news-content p-0 px-2 pb-2">
                  <span className="tag">{article.tag}</span>
                  <h3 className="news-title font-serif font-bold text-xl mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {article.title}
                  </h3>
                  <p className="news-excerpt text-[var(--subtext)] text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto text-xs text-gray-500 font-mono">
                    {article.time} • {article.location}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* MIDDLE SECTION: TRENDING & NEWSLETTER */}
      <section className="mb-32 grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-16 border-b border-[var(--border)] pb-8">
            <h2 className="text-3xl font-serif font-bold text-[var(--primary)] uppercase tracking-tight">Focus: Intelligence</h2>
          </div>
          <div className="space-y-8">
            {remainingStories.map(article => (
              <Link key={article.id} href={`/news/${article.id}`} className="flex gap-6 group border-b border-[var(--border)] pb-8 last:border-0">
                <div className="w-32 h-24 flex-shrink-0 overflow-hidden bg-gray-100">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--gold)] mb-1 block">{article.tag}</span>
                  <h3 className="text-lg font-serif font-bold leading-tight group-hover:text-[var(--accent)]">{article.title}</h3>
                  <p className="text-xs text-[var(--subtext)] mt-2 italic">{article.date} | Von {article.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[var(--primary)] text-white p-8 self-start sticky top-24">
          <Mail className="mb-4 text-[var(--gold)]" size={32} />
          <h2 className="text-2xl font-serif font-bold mb-4 italic">Der Morgen-Monitor</h2>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            Jeden Morgen um 8:00 Uhr: Die 5 wichtigsten AI-News für deutsche Entscheider direkt in Ihr Postfach.
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="E-Mail-Adresse"
              className="w-full bg-white/10 border border-white/20 p-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
            />
            <button className="w-full bg-[var(--gold)] hover:bg-yellow-600 text-white font-bold py-3 px-4 uppercase tracking-widest text-xs transition-colors shadow-lg">
              Kostenlos Abonnieren
            </button>
          </div>
          <p className="text-[10px] text-gray-500 mt-4 text-center">
            Abmeldung jederzeit möglich. Datenschutzkonform.
          </p>
        </div>
      </section>

      {/* RISK & OPPORTUNITY */}
      <section className="mb-32 py-32 border-y border-[var(--border)] bg-[var(--section-bg)] -mx-6 px-6 md:mx-0 md:px-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[var(--gold)] font-bold uppercase text-xs tracking-[0.3em] mb-8 block italic">Risiko & Strategie</span>
            <h2 className="text-5xl font-serif font-bold text-[var(--primary)] mb-12 leading-tight">
              Das Paradoxon der Sicherheit: <br />Zwischen Innovation und Regulierung
            </h2>
            <p className="text-xl text-[var(--subtext)] mb-12 leading-relaxed">
              Für den Mittelstand ist die Frage nicht mehr "Ob", sondern "Wie sicher". Wir analysieren die versteckten Risiken in der Lieferkette und zeigen, wie die Tech-Elite diese Hürden als Wettbewerbsvorteil nutzt.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-[var(--primary)] pl-4">
                <span className="block font-bold text-[var(--primary)]">Compliance</span>
                <span className="text-sm text-[var(--subtext)]">EU AI Act Readiness Kit</span>
              </div>
              <div className="border-l-2 border-[var(--primary)] pl-4">
                <span className="block font-bold text-[var(--primary)]">Ethik-Board</span>
                <span className="text-sm text-[var(--subtext)]">Leitfaden für mittelständische CEOs</span>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
              className="w-full grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Cybersecurity and Ethics"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION: DATA & INSIGHTS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-24 bg-[#F8F8F6] p-12 md:p-32 border border-[var(--border)] mb-32">

        {/* Left: Intelligence Briefing */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--subtext)] mb-8 flex items-center gap-2">
            <ShieldCheck size={16} /> Intelligence Briefing
          </h3>
          <h2 className="text-4xl font-serif font-bold mb-10 leading-tight">Exklusive Marktdaten für Abonnenten</h2>
          <ul className="space-y-8 mb-12">
            <li className="flex items-start gap-3">
              <BarChart3 className="text-[var(--accent)] mt-1" size={20} />
              <div>
                <strong className="block text-[var(--primary)]">Venture Capital Tracker Q4</strong>
                <span className="text-sm text-[var(--subtext)]">Alle Deals, alle Bewertungen, alle Exits im DACH-Raum.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="text-[var(--gold)] mt-1" size={20} />
              <div>
                <strong className="block text-[var(--primary)]">GPU-Verfügbarkeit Index</strong>
                <span className="text-sm text-[var(--subtext)]">Echtzeit-Daten zu H100 Clustern in deutschen Rechenzentren.</span>
              </div>
            </li>
          </ul>
          <button className="btn-primary">
            Zugang anfordern
          </button>
        </div>

        {/* Right: Quote / Interview */}
        <div className="relative">
          <div className="absolute top-0 left-0 text-9xl font-serif text-[var(--border)] opacity-50 -z-10">“</div>
          <blockquote className="space-y-6">
            <p className="text-2xl font-serif italic text-[var(--primary)] leading-relaxed">
              Wir müssen aufhören, KI nur als Effizienz-Tool zu sehen. Es ist der neue Motor für den Maschinenbau. Wer jetzt nicht investiert, wird in 5 Jahren kein Teil der Lieferkette mehr sein.
            </p>
            <footer>
              <div className="font-bold text-[var(--primary)]">Dr. Feiyu Xu</div>
              <div className="text-sm text-[var(--subtext)] uppercase tracking-wide">Ehem. Chief AI Officer, SAP SE</div>
            </footer>
          </blockquote>
        </div>

      </section>

    </div>
  );
}
