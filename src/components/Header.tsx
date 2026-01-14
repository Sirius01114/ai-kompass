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
            <div className="bg-[var(--section-bg)] text-[var(--subtext)] text-[10px] md:text-xs py-3 border-b border-[var(--border)] relative overflow-hidden">
                <div className="flex justify-between items-center w-full px-8">
                    <div className="flex-shrink-0 font-bold text-[var(--primary)] border-r border-[var(--border)] pr-8 hidden md:block">
                        {currentDate}
                    </div>

                    <div className="ticker-container flex-grow group border-l border-[var(--border)] pl-8">
                        <div className="ticker-content flex items-center">
                            {/* Stock Data (Duplicated for seamless loop) */}
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="flex">
                                    <div className="ticker-item font-mono flex gap-16 text-[13px] md:text-[16px]">
                                        <span className="flex gap-2 whitespace-nowrap">NVIDIA <span className="text-green-600 font-bold">$142.12 (+2.4%)</span></span>
                                        <span className="flex gap-2 whitespace-nowrap">MICROSOFT <span className="text-green-600 font-bold">$415.75 (+0.8%)</span></span>
                                        <span className="flex gap-2 text-gray-400 whitespace-nowrap">ALEPH ALPHA <span className="font-bold underline italic">UNQUOTED</span></span>
                                        <span className="flex gap-2 whitespace-nowrap">ALPHABET <span className="text-red-600 font-bold">$182.10 (-0.3%)</span></span>
                                        <span className="flex gap-2 whitespace-nowrap">AMD <span className="text-green-600 font-bold">$156.40 (+1.2%)</span></span>
                                        <span className="flex gap-2 whitespace-nowrap">PALANTIR <span className="text-green-600 font-bold">$62.15 (+4.5%)</span></span>
                                        <span className="flex gap-2 text-gray-400 whitespace-nowrap">MISTRAL AI <span className="font-bold underline italic">UNQUOTED</span></span>
                                        <span className="flex gap-2 whitespace-nowrap">AI-DE INDEX <span className="text-green-600 font-bold">1,420.50 (+1.2%)</span></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:flex gap-6 flex-shrink-0 pl-8 border-l border-[var(--border)] font-semibold">
                        <Link href="#" className="hover:text-[var(--primary)]">Newsletter</Link>
                        <Link href="#" className="hover:text-[var(--primary)]">Events</Link>
                    </div>
                </div>
            </div>

            {/* Main Masthead */}
            <div className="pt-32 pb-64 mb-40 text-center relative container">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden">
                    <button className="p-2"><Menu /></button>
                </div>

                <Link href="/" className="inline-block group">
                    <h1 className="text-5xl md:text-8xl tracking-tight text-[var(--primary)] mb-10 group-hover:opacity-90 transition-opacity uppercase font-black font-serif">
                        <span className="text-red-600">KI</span>-MONITOR
                    </h1>
                    <p className="text-[var(--subtext)] text-[9px] md:text-base tracking-[0.1em] md:tracking-[0.4em] uppercase font-bold whitespace-normal max-w-[240px] md:max-w-none mx-auto leading-relaxed">
                        Global Intelligence · Autonomous Transformation
                    </p>
                </Link>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 md:gap-6">
                    <button className="p-2 hover:bg-[var(--section-bg)] rounded-full transition-colors text-[var(--primary)] text-xl">
                        <Search size={24} />
                    </button>
                    <Link href="/login" className="hidden md:flex items-center gap-3 text-sm font-black border-2 border-[var(--primary)] px-8 py-3 hover:bg-[var(--primary)] hover:text-white transition-all uppercase tracking-widest">
                        <User size={18} />
                        Member Login
                    </Link>
                </div>
            </div>

            {/* Navigation */}
            <nav className="border-t border-b border-[var(--border)] py-10 mt-40 sticky top-0 bg-white z-50 shadow-sm">
                <div className="container overflow-x-auto no-scrollbar pb-1">
                    <ul className="flex justify-center min-w-max gap-8 md:gap-12 text-sm font-bold uppercase tracking-wide text-[var(--primary)]">
                        <li><Link href="/" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">Home</Link></li>
                        <li><Link href="/tech" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">KI & Technologie</Link></li>
                        <li><Link href="/markets" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">Wirtschaft & Märkte</Link></li>
                        <li><Link href="/automation" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4 text-[var(--accent)]">Business Automation</Link></li>
                        <li><Link href="/education" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">Arbeitswelt & Bildung</Link></li>
                        <li><Link href="/regulation" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4">Recht & Compliance</Link></li>
                        <li><Link href="/data" className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4 text-[var(--gold)] font-black">Marktdaten</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
