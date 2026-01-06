import { articles } from '@/data/news';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
    const categories = ['regulation', 'venture', 'industry', 'infrastructure', 'c-suite', 'data'];
    return categories.map((category) => ({
        category: category,
    }));
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = await params;

    // Clean category string and filter
    const categoryArticles = articles.filter(a => a.category.toLowerCase() === category.toLowerCase());

    const categoryTitles: Record<string, string> = {
        'regulation': 'Regulation & Ethics',
        'venture': 'Venture Capital',
        'industry': 'Industry Cases',
        'infrastructure': 'Infrastructure',
        'c-suite': 'C-Suite Interviews',
        'data': 'Market Data'
    };

    const title = categoryTitles[category.toLowerCase()] || 'Kategorie';

    return (
        <div className="container py-16">
            <div className="mb-12 border-b border-[var(--border)] pb-8">
                <span className="text-[var(--gold)] font-bold uppercase text-xs tracking-[0.3em] mb-4 block">Archiv & Dossier</span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--primary)] uppercase tracking-tight">
                    {title}
                </h1>
                <p className="text-xl text-[var(--subtext)] font-serif italic mt-6 max-w-3xl">
                    Analysen, Berichte und exklusive Einblicke in den Sektor {title} im deutschsprachigen Raum.
                </p>
            </div>

            {categoryArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {categoryArticles.map((article) => (
                        <article key={article.id} className="news-card group flex flex-col h-full">
                            <Link href={`/news/${article.id}`}>
                                <div className="news-image mb-6 relative overflow-hidden h-64">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm text-[var(--primary)] text-[10px] font-bold px-2 py-1 uppercase tracking-widest shadow-sm">
                                            {article.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="news-content p-0 flex flex-col flex-grow">
                                    <h3 className="news-title font-serif font-bold text-2xl mb-4 group-hover:text-[var(--accent)] transition-colors leading-tight">
                                        {article.title}
                                    </h3>
                                    <p className="news-excerpt text-[var(--subtext)] text-sm mb-6 line-clamp-4 leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-[var(--border)] flex justify-between items-center text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                                        <span>{article.date}</span>
                                        <span className="flex items-center gap-1 group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all">
                                            Lesen <ArrowRight size={12} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="py-24 text-center border-2 border-dashed border-[var(--border)]">
                    <h2 className="text-2xl font-serif italic text-[var(--subtext)]">Aktuell keine weiteren Berichte in dieser Kategorie vorhanden.</h2>
                    <Link href="/" className="mt-8 inline-block btn-primary">
                        Zurück zur Startseite
                    </Link>
                </div>
            )}

            {/* Newsletter Teaser on Category Page */}
            <section className="mt-24 bg-[var(--section-bg)] p-12 border border-[var(--border)] text-center">
                <h2 className="text-3xl font-serif font-bold mb-4 italic">Nichts mehr verpassen</h2>
                <p className="text-[var(--subtext)] mb-8 max-w-xl mx-auto">
                    Melden Sie sich für unseren Branchen-Newsletter an und erhalten Sie exklusive Dossiers direkt nach Erscheinen.
                </p>
                <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="E-Mail-Adresse"
                        className="flex-grow bg-white border border-[var(--border)] p-3 text-sm focus:outline-none focus:border-[var(--primary)]"
                    />
                    <button className="bg-[var(--primary)] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[var(--accent)] transition-colors">
                        Abonnieren
                    </button>
                </div>
            </section>
        </div>
    );
}
