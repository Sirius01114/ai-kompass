import Link from 'next/link';

export default function Datenschutz() {
    return (
        <div className="bg-white min-h-screen">
            <div className="container py-20 max-w-4xl">
                <Link href="/" className="text-[var(--accent)] hover:underline mb-8 inline-block font-bold uppercase tracking-widest text-sm">
                    ← Zurück zur Startseite
                </Link>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--primary)] mb-12 border-b-4 border-[var(--gold)] pb-4 inline-block">
                    Datenschutzerklärung
                </h1>

                <div className="space-y-12 text-[var(--primary)] leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4">1. Datenschutz auf einen Blick</h2>
                        <h3 className="font-bold mb-2">Allgemeine Hinweise</h3>
                        <p className="text-gray-600">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4">2. Hosting und Content Delivery Networks (CDN)</h2>
                        <p className="text-gray-600">
                            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                        </p>
                        <p className="font-bold mt-2">Vercel Inc.</p>
                        <p className="text-gray-600">
                            Die Nutzung erfolgt auf Grundlage unserer berechtigten Interessen an einer technisch fehlerfreien Darstellung und Optimierung unseres Online-Angebotes gemäß Art. 6 Abs. 1 lit. f DSGVO.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                        <p className="text-gray-600">
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 border-l-4 border-[var(--gold)]">
                        <h2 className="text-xl font-bold uppercase tracking-wide mb-4 text-[var(--accent)]">Hinweis zur verantwortlichen Stelle</h2>
                        <p className="font-bold">NextStep Education GmbH</p>
                        <p>Wendenstraße 1b</p>
                        <p>20097 Hamburg</p>
                        <p>Deutschland</p>
                        <p className="mt-4">Telefon: +49 40 74066453</p>
                        <p>E-Mail: info@nextstep-education.de</p>
                    </section>

                    <p className="text-sm text-gray-500 italic">
                        Dies ist ein verkürzter Platzhalter für die Datenschutzerklärung. Bitte ergänzen Sie hier die vollständigen Texte Ihres Datenschutz-Generators (z.B. e-recht24).
                    </p>
                </div>
            </div>
        </div>
    );
}
