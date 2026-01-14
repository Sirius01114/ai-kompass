import Link from 'next/link';

export default function Impressum() {
    return (
        <div className="bg-white min-h-screen">
            <div className="container py-20 max-w-4xl">
                <Link href="/" className="text-[var(--accent)] hover:underline mb-8 inline-block font-bold uppercase tracking-widest text-sm">
                    ← Zurück zur Startseite
                </Link>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--primary)] mb-12 border-b-4 border-[var(--gold)] pb-4 inline-block">
                    Impressum
                </h1>

                <div className="grid md:grid-cols-2 gap-12 text-[var(--primary)] leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-wide mb-4 text-[var(--accent)]">Angaben gemäß § 5 TMG</h2>
                        <p className="font-bold">NextStep Education GmbH</p>
                        <p>Wendenstraße 1b</p>
                        <p>20097 Hamburg</p>
                        <p>Deutschland</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-wide mb-4 text-[var(--accent)]">Kontakt</h2>
                        <p>Telefon: +49 40 74066453</p>
                        <p>E-Mail: <a href="mailto:info@nextstep-education.de" className="text-[var(--accent)] hover:underline">info@nextstep-education.de</a></p>
                        <p>Website: <a href="https://nextstep-education.de" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">nextstep-education.de</a></p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-wide mb-4 text-[var(--accent)]">Vertreten durch</h2>
                        <p className="font-bold">Geschäftsführer:</p>
                        <p>Mostafa Masuodi</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-wide mb-4 text-[var(--accent)]">Registereintrag</h2>
                        <p>Registergericht: Amtsgericht Hamburg</p>
                        <p>Registernummer: HRB 189725</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-wide mb-4 text-[var(--accent)]">Umsatzsteuer-ID</h2>
                        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                        <p className="font-bold">DE451225706</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-wide mb-4 text-[var(--accent)]">Redaktionell Verantwortlicher</h2>
                        <p>Mostafa Masuodi</p>
                        <p>NextStep Education GmbH</p>
                        <p>Wendenstraße 1b</p>
                        <p>20097 Hamburg</p>
                    </section>
                </div>

                <div className="mt-16 prose prose-slate max-w-none text-gray-600">
                    <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-4">Streitschlichtung</h2>
                    <p className="mb-4">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline ml-1">
                            https://ec.europa.eu/consumers/odr
                        </a>.
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                    <p>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </div>
            </div>
        </div>
    );
}
