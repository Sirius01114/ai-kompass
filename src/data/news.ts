export interface Article {
    id: string;
    category: string;
    tag: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    location?: string;
    time?: string;
    isLead?: boolean;
}

export const articles: Article[] = [
    {
        id: 'ai-act-compliance',
        category: 'regulation',
        tag: 'Policy & Regulation',
        title: 'Der "AI Act" ist da: Was der deutsche Mittelstand jetzt tun muss',
        excerpt: 'Die finale Abstimmung in Brüssel setzt neue Standards. Doch während DAX-Konzerne vorbereitet sind, droht dem "Hidden Champion" eine Compliance-Falle. Eine Analyse der neuen Risikoklassen.',
        author: 'Dr. Julia Werner',
        date: '26. Dezember 2025',
        readTime: '7 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80',
        isLead: true
    },
    {
        id: 'aleph-alpha-funding',
        category: 'venture',
        tag: 'Venture Capital',
        title: 'Aleph Alpha sichert sich weitere 150M€ für "Sovereign Cloud" Expansion',
        excerpt: 'Das Heidelberger KI-Unternehmen will die Abhängigkeit von US-Hyperscalern verringern. Ein Konsortium aus Bosch, SAP und Schwarz Gruppe führt die Runde an.',
        author: 'Marc Schneider',
        date: '06. Januar 2026',
        readTime: '4 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        location: 'Frankfurt',
        time: '14:30 Uhr'
    },
    {
        id: 'bmw-neural-factory',
        category: 'industry',
        tag: 'Industry Cases',
        title: "BMW's neue \"Neural Factory\": Wie KI die Produktionslinie steuert",
        excerpt: 'Im Werk München testet der Autobauer den ersten vollautonomen KI-Leitstand. Wir haben mit Produktionsvorstand Milan Nedeljković gesprochen.',
        author: 'Dr. Andreas Bauer',
        date: '05. Januar 2026',
        readTime: '5 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80',
        location: 'München',
        time: '11:15 Uhr'
    },
    {
        id: 'llm-efficiency-benchmarks',
        category: 'infrastructure',
        tag: 'Deep Tech & Elite',
        title: 'LLM-Effizienz: Neue Benchmarks für deutsche Sprachmodelle',
        excerpt: 'Ein Exklusiv-Report über Token-Optimierung und On-Premise-Lösungen für den Datenschutz-sensiblen DAX-Sektor. Warum Effizienz der neue Performance-Maßstab ist.',
        author: 'Stefan Mauer',
        date: '06. Januar 2026',
        readTime: '6 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
        location: 'Berlin / KI-Park',
        time: 'Vor 2 Stunden'
    },
    {
        id: 'siemens-predictive-maintenance',
        category: 'industry',
        tag: 'Industry Cases',
        title: 'Siemens integriert generative KI in die Instandhaltung',
        excerpt: 'Durch die Kopplung von LLMs mit Sensordaten können Techniker nun per Sprachbefehl komplexe Fehlerdiagnosen an Gasturbinen durchführen. Eine Revolution für den Service.',
        author: 'Lisa Berg',
        date: '04. Januar 2026',
        readTime: '4 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
        location: 'Erlangen',
        time: 'Gestern'
    },
    {
        id: 'mistral-deutschland',
        category: 'regulation',
        tag: 'Policy',
        title: 'Mistral AI eröffnet deutsches Headquarters in Berlin',
        excerpt: 'Das französische KI-Unicorn setzt auf den deutschen Markt. Mit exklusiven Kooperationen im öffentlichen Dienst will man europäische Standards setzen.',
        author: 'Olaf K.',
        date: '03. Januar 2026',
        readTime: '3 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
        location: 'Berlin',
        time: 'Vor 3 Tagen'
    }
];
