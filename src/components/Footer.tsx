import Link from 'next/link';
import { Mail, Loader2 } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[var(--primary)] text-white mt-32 border-t-8 border-[var(--gold)]">
            <div className="pt-80 pb-32">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">

                        {/* Brand Column */}
                        <div className="col-span-1 md:col-span-1">
                            <h2 className="text-3xl font-serif font-black mb-8 uppercase tracking-tighter"><span className="text-red-600">KI</span>-MONITOR</h2>
                            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                Die globale Informationsplattform der <strong>NextStep Education GmbH</strong> für künstliche Intelligenz, Automatisierung und internationale Wirtschaftsmärkte. Redaktionelle Inhalte und kommerzielle Angebote sind stets eindeutig voneinander getrennt.
                            </p>
                            <div className="flex gap-6">
                                {/* Social Placeholders */}
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--gold)] transition-colors cursor-pointer">L</div>
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--gold)] transition-colors cursor-pointer">X</div>
                            </div>
                        </div>

                        {/* Navigation Columns */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)] mb-10">Sektoren</h3>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><Link href="#" className="hover:text-white transition-colors">Wirtschaft & Märkte</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Business Automation</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Arbeitswelt & Bildung</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Recht & Compliance</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Digitale Infrastruktur</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)] mb-10">Ressourcen</h3>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><Link href="#" className="hover:text-white transition-colors">EU AI Act Tracker</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">AZAV-geförderte Kurse</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Existenzgründer-Coaching</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Betriebliche KI-Kompetenz</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Software Automations-Suite</Link></li>
                            </ul>
                        </div>

                        {/* Newsletter / Contact */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)] mb-10">Briefing abonnieren</h3>
                            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                                Erhalten Sie täglich die wichtigsten Entwicklungen im DACH-AI-Sektor.
                            </p>
                            <form className="flex flex-col gap-4">
                                <input
                                    type="email"
                                    placeholder="Ihre E-Mail Adresse"
                                    className="bg-gray-800 border-none text-white text-sm placeholder-gray-500 py-3 px-4 focus:ring-2 focus:ring-[var(--gold)] outline-none"
                                />
                                <button className="bg-[var(--gold)] text-[var(--primary)] font-black py-3 px-4 text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-lg">
                                    Jetzt Anmelden
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                        <p>&copy; {new Date().getFullYear()} KI-MONITOR | NextStep Education GmbH. Alle Rechte vorbehalten.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <Link href="/impressum" className="hover:text-white underline decoration-[var(--gold)] underline-offset-4">Impressum</Link>
                            <Link href="/datenschutz" className="hover:text-white underline decoration-[var(--gold)] underline-offset-4">Datenschutz</Link>
                            <Link href="/datenschutz" className="hover:text-white">AGB</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
