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
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container max-w-4xl mx-auto">
                        <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors text-sm uppercase tracking-widest font-bold">
                            <ArrowLeft size={16} /> Zurück zur Übersicht
                        </Link>
                        <span className="bg-[var(--gold)] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-6 inline-block">
                            {article.tag}
                        </span>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-[1.1]">
                            {article.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                            <div className="flex items-center gap-2">
                                <User size={16} className="text-[var(--gold)]" />
                                <span className="font-bold">{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-[var(--gold)]" />
                                <span>{article.readTime}</span>
                            </div>
                            <span>•</span>
                            <span>{article.date}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container max-w-4xl mx-auto py-16 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <p className="text-2xl font-serif italic text-[var(--primary)] mb-12 leading-relaxed border-l-4 border-[var(--gold)] pl-8">
                            {article.excerpt}
                        </p>

                        <div className="prose prose-lg max-w-none text-[var(--primary)] font-serif leading-relaxed space-y-8">
                            <p>
                                In der sich rasant entwickelnden Welt der künstlichen Intelligenz steht der deutsche Markt an einem entscheidenden Wendepunkt. Während technologische Giganten aus Übersee die Schlagzeilen dominieren, formiert sich in Städten wie Berlin, München und Heidelberg eine neue Elite von Unternehmen und Strategen, die den "DACH-Weg" definieren.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">Die technologische Souveränität</h2>
                            <p>
                                Es geht nicht mehr nur um die Anwendung von Tools, sondern um die Kontrolle über die Daten und die Infrastruktur. Deutsche Unternehmen fordern zunehmend Lösungen, die nicht nur leistungsstark sind, sondern auch den strengen europäischen Datenschutzrichtlinien entsprechen.
                            </p>

                            <div className="bg-[var(--section-bg)] p-8 my-12 border border-[var(--border)]">
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Schlüsselerkenntnisse</h3>
                                <ul className="space-y-3 list-disc pl-5">
                                    <li>Effizienz ist der neue Performance-Maßstab im Mittelstand.</li>
                                    <li>Infrastruktur-Investitionen steigen um 45% im Vergleich zum Vorjahr.</li>
                                    <li>Die Qualifikation von Mitarbeitern wird zum Flaschenhals der Implementierung.</li>
                                </ul>
                            </div>

                            <p>
                                Die kommenden Monate werden zeigen, welche Akteure die notwendige Agilität besitzen, um Theorie in messbare wirtschaftliche Praxis umzusetzen. Der AI-Kompass wird diese Entwicklung weiterhin begleiten und analysieren.
                            </p>
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

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-12">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--subtext)] mb-6 border-b border-[var(--border)] pb-2">
                                    Empfehlungen
                                </h3>
                                <div className="space-y-8">
                                    {relatedArticles.map(rel => (
                                        <Link key={rel.id} href={`/news/${rel.id}`} className="group block">
                                            <span className="text-[10px] font-bold text-[var(--gold)] uppercase block mb-1">{rel.tag}</span>
                                            <h4 className="font-serif font-bold text-lg group-hover:text-[var(--accent)] transition-colors leading-tight">
                                                {rel.title}
                                            </h4>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar Ad */}
                            <div className="bg-[var(--primary)] text-white p-6">
                                <h3 className="text-lg font-serif mb-4 italic">Exklusiver Report</h3>
                                <p className="text-xs text-gray-400 mb-6">
                                    Erhalten Sie unseren Deep-Dive Report über KI im deutschen Maschinenbau.
                                </p>
                                <button className="w-full bg-[var(--gold)] py-2 text-xs font-bold uppercase tracking-widest">
                                    Jetzt Downloaden
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
