import { articles } from '@/data/news';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';

export async function generateStaticParams() {
    return articles.map((article) => ({
        id: article.id,
    }));
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const article = articles.find(a => a.id === id);

    if (!article) {
        notFound();
    }

    const relatedArticles = articles.filter(a => a.id !== id).slice(0, 3);

    return (
        <article className="bg-[#fff]">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px] w-full bg-[#111]">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-20">
                    <div className="container max-w-5xl mx-auto">
                        <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors text-sm uppercase tracking-[0.2em] font-bold border-b border-white/20 pb-2">
                            <ArrowLeft size={16} /> Zurück zur Übersicht
                        </Link>
                        <div className="mb-6">
                            <span className="bg-[var(--gold)] text-white text-[10px] md:text-xs font-black px-4 py-1.5 uppercase tracking-[0.25em]">
                                {article.tag}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.1] tracking-tight">
                            {article.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-8 text-white/70 text-sm uppercase tracking-widest font-bold">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[var(--gold)] flex items-center justify-center text-[var(--primary)] text-xs">
                                    {article.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-[var(--gold)]" />
                                <span>{article.readTime}</span>
                            </div>
                            <span className="text-white/30">|</span>
                            <span>{article.date}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container max-w-6xl mx-auto py-24 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="mb-24">
                            <p className="text-2xl md:text-4xl font-serif italic text-[var(--primary)] leading-[1.6] border-l-[8px] border-[var(--gold)] pl-12 py-4">
                                {article.excerpt}
                            </p>
                        </div>

                        <div className="prose prose-2xl max-w-none text-[var(--primary)] font-serif space-y-32">
                            <div className="space-y-16">
                                <p className="text-xl md:text-2xl leading-[1.8] mb-12">
                                    In der sich rasant entwickelnden Welt der künstlichen Intelligenz steht der deutsche Markt an einem entscheidenden Wendepunkt. Während technologische Giganten aus Übersee die Schlagzeilen dominieren, formiert sich in Städten wie Berlin, München und Heidelberg eine neue Elite von Unternehmen und Strategen, die den "DACH-Weg" definieren.
                                </p>
                            </div>

                            <div className="pt-20 border-t border-gray-100">
                                <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-16 tracking-tight leading-tight">
                                    Die technologische Souveränität
                                </h2>
                                <p className="text-xl md:text-2xl leading-[1.8] mb-12">
                                    Es geht nicht mehr nur um die Anwendung von Tools, sondern um die Kontrolle über die Daten und die Infrastruktur. Deutsche Unternehmen fordern zunehmend Lösungen, die nicht nur leistungsstark sind, sondern auch den strengen europäischen Datenschutzrichtlinien entsprechen.
                                </p>
                            </div>

                            <div className="bg-[#f8fafc] p-12 md:p-24 my-32 border-l-[16px] border-[var(--accent)] shadow-sm">
                                <h3 className="text-2xl md:text-4xl font-bold mb-16 uppercase tracking-widest text-[var(--accent)] leading-tight">
                                    Strategische Schlüsselerkenntnisse
                                </h3>
                                <ul className="space-y-12 list-none pl-0">
                                    {[
                                        "Effizienz ist der neue Performance-Maßstab im Mittelstand.",
                                        "Infrastruktur-Investitionen steigen um 45% im Vergleich zum Vorjahr.",
                                        "Die Qualifikation von Mitarbeitern wird zum Flaschenhals der Implementierung."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-8 items-start text-xl md:text-2xl leading-relaxed">
                                            <span className="text-[var(--gold)] font-black text-4xl md:text-5xl leading-none">0{idx + 1}</span>
                                            <span className="pt-2">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-20 border-t border-gray-100">
                                <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-16 tracking-tight leading-tight">
                                    Ausblick: Autonome Transformation
                                </h2>
                                <p className="text-xl md:text-2xl leading-[1.8] mb-12">
                                    Die kommenden Monate werden zeigen, welche Akteure die notwendige Agilität besitzen, um Theorie in messbare wirtschaftliche Praxis umzusetzen. Der KI-MONITOR wird diese Entwicklung weiterhin begleiten und analysieren, um sicherzustellen, dass Entscheider über die notwendige Marktzugänge und Qualifikationen verfügen.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t border-[var(--border)] flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                                    <Share2 size={20} />
                                </button>
                                <span className="text-sm font-bold uppercase tracking-widest text-[var(--subtext)]">Artikel teilen</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 lg:border-l lg:border-gray-100 lg:pl-12">
                        <div className="sticky top-24 space-y-16">
                            <div>
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--primary)] mb-8 border-b-4 border-[var(--gold)] pb-2 inline-block">
                                    Top-Empfehlungen
                                </h3>
                                <div className="space-y-10">
                                    {relatedArticles.map(rel => (
                                        <Link key={rel.id} href={`/news/${rel.id}`} className="group block border-b border-gray-50 pb-6 last:border-0">
                                            <span className="text-[10px] font-black text-[var(--accent)] uppercase tracking-widest block mb-2">{rel.tag}</span>
                                            <h4 className="font-serif font-bold text-xl group-hover:text-[var(--gold)] transition-colors leading-snug">
                                                {rel.title}
                                            </h4>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar Ad - Premium Style */}
                            <div className="bg-[var(--primary)] text-white p-8 relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)] opacity-10 rounded-full -mr-16 -mt-16 transform group-hover:scale-150 transition-transform duration-1000"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif mb-4 italic text-[var(--gold)]">Exklusiver Report 2026</h3>
                                    <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                                        Analysieren Sie die Auswirkungen der KI-Agenten auf den deutschen Mittelstand. 48 Seiten geballtes Expertenwissen.
                                    </p>
                                    <button className="w-full bg-white text-[var(--primary)] py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-[var(--gold)] hover:text-white transition-all duration-300">
                                        Jetzt kostenlos anfordern
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
