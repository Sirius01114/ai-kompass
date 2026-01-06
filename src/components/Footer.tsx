import Link from 'next/link';
import { Mail, Loader2 } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[var(--primary)] text-white pt-16 pb-8 mt-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-serif mb-4 uppercase">AI-KOMPASS.DE</h2>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Die führende Informationsplattform für künstliche Intelligenz und globale Märkte – kuratiert für Entscheidungsträger in Deutschland.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">L</div>
                            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">X</div>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--gold)] mb-6">Sektoren</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="#" className="hover:text-white transition-colors">Venture Capital</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Private Equity AI</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Automotive & robotics</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Pharma & Biotech</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Public Sector</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--gold)] mb-6">Ressourcen</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="#" className="hover:text-white transition-colors">EU AI Act Tracker</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Events & Summits</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Market Reports</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Jobbörse</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Werben Sie bei uns</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / Contact */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--gold)] mb-6">Briefing abonnieren</h3>
                        <p className="text-xs text-gray-400 mb-4">
                            Erhalten Sie täglich die wichtigsten Entwicklungen im DACH-AI-Sektor.
                        </p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Ihre E-Mail Adresse"
                                className="bg-gray-800 border-none text-white text-sm placeholder-gray-500"
                            />
                            <button className="bg-[var(--gold)] text-[var(--primary)] font-bold py-2 px-4 text-sm hover:bg-white transition-colors">
                                Anmelden
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} AI-Kompass Group. Alle Rechte vorbehalten.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Impressum</Link>
                        <Link href="#" className="hover:text-white">Datenschutz</Link>
                        <Link href="#" className="hover:text-white">AGB</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
