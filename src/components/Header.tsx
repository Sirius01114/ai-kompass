import Link from 'next/link';
import { Search, User, Menu, TrendingUp } from 'lucide-react';

export default function Header() {
    const currentDate = new Date().toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <header className="flex flex-col w-full border-b border-[var(--primary)] bg-white transition-colors duration-300">
            {/* Top Bar - Scrolling AI Stock Ticker */}
            <div className="bg-[var(--section-bg)] text-[var(--subtext)] text-[10px] md:text-xs py-2 border-b border-[var(--border)] relative overflow-hidden">
                <div className="flex justify-between items-center max-w-[1440px] mx-auto px-4">
                    <div className="flex-shrink-0 font-bold text-[var(--primary)] border-r border-[var(--border)] pr-4 hidden md:block">
                        {currentDate}
                    </div>

                    <div className="ticker-container flex-grow group">
                        <div className="ticker-content flex items-center">
                            {/* Stock Data (Duplicated for seamless loop) */}
                            {[1, 2].map((i) => (
                                <div key={i} className="flex">
                                    <div className="ticker-item font-mono flex gap-8">
                                        <span className="flex gap-2">NVIDIA <span className="text-green-600 font-bold">$142.12 (+2.4%)</span></span>
                                        <span className="flex gap-2">MICROSOFT <span className="text-green-600 font-bold">$415.75 (+0.8%)</span></span>
                                        <span className="flex gap-2 text-gray-400">ALEPH ALPHA <span className="font-bold underline italic">UNQUOTED</span></span>
                                        <span className="flex gap-2">ALPHABET <span className="text-red-600 font-bold">$182.10 (-0.3%)</span></span>
                                        <span className="flex gap-2">AMD <span className="text-green-600 font-bold">$156.40 (+1.2%)</span></span>
                                        <span className="flex gap-2">PALANTIR <span className="text-green-600 font-bold">$62.15 (+4.5%)</span></span>
                                        <span className="flex gap-2 text-gray-400">MISTRAL AI <span className="font-bold underline italic">UNQUOTED</span></span>
                                        <span className="flex gap-2">AI-DE INDEX <span className="text-green-600 font-bold">1,420.50 (+1.2%)</span></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:flex gap-4 flex-shrink-0 pl-4 border-l border-[var(--border)] font-semibold">
                        <Link href="#" className="hover:text-[var(--primary)]">Newsletter</Link>
                        <Link href="#" className="hover:text-[var(--primary)]">Events</Link>
                    </div>
                </div>
            </div>

            {/* Main Masthead */}
            <div className="py-8 text-center relative container">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 md:hidden">
                    <button className="p-2"><Menu /></button>
                </div>

                <Link href="/" className="inline-block group">
                    <h1 className="text-4xl md:text-6xl tracking-tight text-[var(--primary)] mb-1 group-hover:opacity-90 transition-opacity uppercase">
                        AI-KOMPASS.DE
                    </h1>
                    <p className="text-[var(--subtext)] text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
                        Intelligence for the German Economy
                    </p>
                </Link>

                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4">
                    <button className="p-2 hover:bg-[var(--section-bg)] rounded-full transition-colors">
                        <Search size={20} color="var(--primary)" />
                    </button>
                    <Link href="/login" className="hidden md:flex items-center gap-2 text-sm font-semibold border border-[var(--primary)] px-4 py-2 hover:bg-[var(--primary)] hover:text-white transition-colors">
                        <User size={16} />
                        Login
                    </Link>
                </div>
            </div>

            {/* Navigation */}
            <nav className="border-t border-b border-[var(--border)] py-3 sticky top-0 bg-white z-50 shadow-sm transition-colors duration-300">
                <div className="container overflow-x-auto">
                    <ul className="flex justify-center min-w-max gap-8 md:gap-12 text-sm font-bold uppercase tracking-wide text-[var(--primary)]">
                        <li><Link href="/" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">Home</Link></li>
                        <li><Link href="/regulation" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">Regulation & Ethics</Link></li>
                        <li><Link href="/venture" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">Venture Capital</Link></li>
                        <li><Link href="/industry" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">Industry Cases</Link></li>
                        <li><Link href="/infrastructure" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">Infrastructure</Link></li>
                        <li><Link href="/c-suite" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">C-Suite Interviews</Link></li>
                        <li><Link href="/data" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4 text-[var(--gold)]">Market Data</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
