import Link from 'next/link';
import { ArrowRight, BarChart3, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="container py-12">

      {/* LEAD STORY */}
      <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-[var(--border)] pb-12">
        <div className="lg:col-span-8">
          <span className="tag">Policy & Regulation</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-[var(--primary)]">
            Der "AI Act" ist da: Was der deutsche Mittelstand jetzt tun muss
          </h1>
          <p className="text-xl text-[var(--subtext)] font-serif italic mb-6 leading-relaxed">
            Die finale Abstimmung in Brüssel setzt neue Standards. Doch während DAX-Konzerne vorbereitet sind, droht dem "Hidden Champion" eine Compliance-Falle. Eine Analyse der neuen Risikoklassen.
          </p>
          <div className="flex items-center gap-4 text-sm text-[var(--subtext)]">
            <span className="font-semibold text-[var(--primary)]">Von Dr. Julia Werner</span>
            <span>•</span>
            <span>26. Dezember 2025</span>
            <span>•</span>
            <span>7 Min. Lesezeit</span>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-8">

          {/* ADVERTISEMENT 1: B2B Solutions */}
          <div className="bg-[#0f172a] text-white p-6 border-t-4 border-[var(--accent)] shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-[var(--accent)] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">Anzeige</div>
            <h3 className="font-serif text-2xl mb-2 text-white">Enterprise AI Suite</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Vollautomatisierte Software-Lösungen für den deutschen Mittelstand. Steigern Sie Ihre Effizienz um bis zu 400%.
            </p>
            <button className="w-full bg-[var(--accent)] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm transition-colors text-sm uppercase tracking-wider">
              Kostenlose Analyse
            </button>
          </div>

          {/* Existing Market Indicator - Kept but smaller priority視覺ally */}
          <div className="bg-[var(--section-bg)] p-6 border-l-4 border-[var(--gold)]">
            <h3 className="font-bold text-[var(--primary)] mb-2 uppercase text-xs tracking-wider">Markt-Indikator</h3>
            <div className="flex justify-between items-end mb-2">
              <span className="text-3xl font-serif font-bold">€4.2 Mrd.</span>
              <span className="text-green-600 font-mono text-sm">+18.5%</span>
            </div>
            <p className="text-sm text-[var(--subtext)]">Investitionsvolumen in deutsche AI-Startups (Q4 2025)</p>
          </div>

          {/* ADVERTISEMENT 2: NextStep Education */}
          <div className="border border-gray-200 bg-white p-0 shadow-sm group">
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
              <h3 className="font-serif text-xl font-bold mb-3 leading-tight">Zertifizierter AI-Manager</h3>
              <p className="text-[var(--subtext)] text-sm mb-4">
                Machen Sie Karriere in der KI-Ökonomie. 100% Förderung möglich für Arbeitssuchende und Angestellte.
              </p>
              <a href="#" className="inline-block border-b-2 border-[var(--gold)] pb-0.5 text-sm font-bold text-[var(--primary)] hover:text-[var(--gold)] transition-colors">
                Kurskatalog anfordern →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* THREE COLUMN NEWS GRID */}
      <section className="mb-16">
        <div className="flex justify-between items-end mb-8 border-b border-[var(--border)] pb-4">
          <h2 className="text-3xl font-serif font-bold text-[var(--primary)]">Aktuelle Berichte</h2>
          <Link href="/news" className="text-sm font-bold uppercase tracking-wide flex items-center gap-2 hover:text-[var(--accent)]">
            Alle Nachrichten <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <article className="news-card group">
            <div className="news-image mb-4 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="High Tech Chipset"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="news-content p-0 px-2 pb-2">
              <span className="tag">Venture Capital</span>
              <h3 className="news-title font-serif font-bold text-xl mb-3 group-hover:text-[var(--accent)] transition-colors">
                Aleph Alpha sichert sich weitere 150M€ für "Sovereign Cloud" Expansion
              </h3>
              <p className="news-excerpt text-[var(--subtext)] text-sm mb-4 line-clamp-3">
                Das Heidelberger KI-Unternehmen will die Abhängigkeit von US-Hyperscalern verringern. Ein Konsortium aus Bosch, SAP und Schwarz Gruppe führt die Runde an.
              </p>
              <div className="mt-auto text-xs text-gray-500 font-mono">14:30 Uhr • Frankfurt</div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="news-card group">
            <div className="news-image mb-4 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80"
                alt="Automotive Factory"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="news-content p-0 px-2 pb-2">
              <span className="tag">Industry Cases</span>
              <h3 className="news-title font-serif font-bold text-xl mb-3 group-hover:text-[var(--accent)] transition-colors">
                BMW's neue "Neural Factory": Wie KI die Produktionslinie steuert
              </h3>
              <p className="news-excerpt text-[var(--subtext)] text-sm mb-4 line-clamp-3">
                Im Werk München testet der Autobauer den ersten vollautonomen KI-Leitstand. Wir haben mit Produktionsvorstand Milan Nedeljković gesprochen.
              </p>
              <div className="mt-auto text-xs text-gray-500 font-mono">11:15 Uhr • München</div>
            </div>
          </article>

          {/* Card 3: Elite/Research Case */}
          <article className="news-card group">
            <div className="news-image mb-4 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
                alt="AI Neural Network"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="news-content p-0 px-2 pb-2">
              <span className="tag">Deep Tech & Elite</span>
              <h3 className="news-title font-serif font-bold text-xl mb-3 group-hover:text-[var(--accent)] transition-colors">
                LLM-Effizienz: Neue Benchmarks für deutsche Sprachmodelle
              </h3>
              <p className="news-excerpt text-[var(--subtext)] text-sm mb-4 line-clamp-3">
                Ein Exklusiv-Report über Token-Optimierung und On-Premise-Lösungen für den Datenschutz-sensiblen DAX-Sektor. Warum Effizienz der neue Performance-Maßstab ist.
              </p>
              <div className="mt-auto text-xs text-gray-500 font-mono">Vor 2 Stunden • Berlin / KI-Park</div>
            </div>
          </article>
        </div>
      </section>

      {/* NEW SECTION: RISK & OPPORTUNITY */}
      <section className="mb-16 py-12 border-y border-[var(--border)] bg-[var(--section-bg)] -mx-6 px-6 md:mx-0 md:px-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[var(--gold)] font-bold uppercase text-xs tracking-[0.2em] mb-4 block italic">Risiko & Strategie</span>
            <h2 className="text-4xl font-serif font-bold text-[var(--primary)] mb-6 leading-tight">
              Das Paradoxon der Sicherheit: <br />Zwischen Innovation und Regulierung
            </h2>
            <p className="text-lg text-[var(--subtext)] mb-8 leading-relaxed">
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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#F8F8F6] p-8 md:p-12 border border-[var(--border)]">

        {/* Left: Intelligence Briefing */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--subtext)] mb-4 flex items-center gap-2">
            <ShieldCheck size={16} /> Intelligence Briefing
          </h3>
          <h2 className="text-3xl font-serif font-bold mb-6">Exklusive Marktdaten für Abonnenten</h2>
          <ul className="space-y-4 mb-8">
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
