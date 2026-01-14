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
        category: 'policy',
        tag: 'Recht & Compliance',
        title: 'Der "AI Act" ist da: Was der deutsche Mittelstand jetzt tun muss',
        excerpt: 'Die finale Abstimmung in Brüssel zementiert eine neue Ära der KI-Regulierung. Während Großkonzerne aufrüsten, droht dem Mittelstand eine Compliance-Falle. Unsere Analyse zeigt auf, wie Entscheider jetzt reagieren müssen, um Bußgelder zu vermeiden.',
        author: 'Dr. Julia Werner',
        date: '14. Januar 2026',
        readTime: '7 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80',
        isLead: true
    },
    {
        id: 'deepseek-r1-revolution',
        category: 'trends',
        tag: 'KI & Technologie',
        title: 'DeepSeek R1: Wie Open-Source das Monopol von OpenAI erschüttert',
        excerpt: 'Mit der Veröffentlichung von R1 hat das chinesische Startup DeepSeek bewiesen, dass Spitzenleistung bei KI-Modellen nicht mehr Milliarden kosten muss. Die Branche steht vor einem Preissturz bei LLM-Tokens, der die gesamte Software-Entwicklung grundlegend verändern wird.',
        author: 'Marc Schneider',
        date: '14. Januar 2026',
        readTime: '6 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
        location: 'Shanghai / Berlin',
        time: '14:30 Uhr'
    },
    {
        id: 'us-executive-order-ai',
        category: 'policy',
        tag: 'Recht & Compliance',
        title: 'Trump unterschreibt EO 14179: Radikale Deregulierung der US-KI-Branche',
        excerpt: 'In einem historischen Schritt hat das Weiße Haus fast alle regulatorischen Hürden für US-KI-Unternehmen gekippt. Ziel ist die absolute Dominanz gegenüber China. Für europäische Unternehmen bedeutet dies einen massiven Wettbewerbsdruck.',
        author: 'Lisa Berg',
        date: '14. Januar 2026',
        readTime: '5 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80',
        location: 'Washington D.C.',
        time: '12:00 Uhr'
    },
    {
        id: 'automation-software-mittelstand',
        category: 'automation',
        tag: 'Business Automation',
        title: 'Büro-Automatisierung: Wie Software-Bots den Fachkräftemangel lindern',
        excerpt: 'Repetitive Aufgaben fressen bis zu 40% der Arbeitszeit in deutschen Büros. Neue Automations-Lösungen zeigen, wie KMUs mit smarten Workflows ihre Produktivität massiv steigern können.',
        author: 'Marc Schneider',
        date: '14. Januar 2026',
        readTime: '5 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        location: 'Hamburg',
        time: '09:00 Uhr'
    },
    {
        id: 'softbank-project-stargate',
        category: 'venture',
        tag: 'Wirtschaft & Märkte',
        title: 'Project Stargate: SoftBank investiert 100 Mrd. USD in KI-Infrastruktur',
        excerpt: 'Masayoshi Son setzt alles auf eine Karte. In Kooperation mit US-Partnern plant SoftBank den Bau gigantischer Rechenzentrums-Cluster. Es ist die größte Einzelinvestition in der Geschichte der digitalen Infrastruktur.',
        author: 'Stefan Mauer',
        date: '13. Januar 2026',
        readTime: '8 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&w=800&q=80',
        location: 'Tokyo / New York',
        time: '18:15 Uhr'
    },
    {
        id: 'ki-kompetenz-azav',
        category: 'education',
        tag: 'Arbeitswelt & Bildung',
        title: 'Qualifizierungschancengesetz: 100% Förderung für KI-Weiterbildungen',
        excerpt: 'Der Staat reagiert auf den technologischen Wandel. Mit AZAV-zertifizierten Maßnahmen wie "Betriebliche KI-Kompetenz" können Unternehmen ihre Belegschaft jetzt ohne Eigenkosten fit für die Zukunft machen.',
        author: 'Dr. Andreas Bauer',
        date: '13. Januar 2026',
        readTime: '6 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
        location: 'Berlin',
        time: '11:15 Uhr'
    },
    {
        id: 'sap-business-ai-agents',
        category: 'automation',
        tag: 'Business Automation',
        title: 'SAP Agentic AI: Autonome Buchhaltung für den Mittelstand',
        excerpt: 'SAP hat seine neuen Business AI Agents final ausgerollt. Die Module für Finanzwesen und HR übernehmen nun komplexe Abstimmungsprozesse völlig autonom – ein Meilenstein für die industrielle Transformation.',
        author: 'Christian Weber',
        date: '12. Januar 2026',
        readTime: '6 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        location: 'Walldorf',
        time: '10:30 Uhr'
    },
    {
        id: 'existenzgruendung-ki-markt',
        category: 'venture',
        tag: 'Wirtschaft & Märkte',
        title: 'Vom Angestellten zum KI-Gründer: Warum jetzt der beste Zeitpunkt ist',
        excerpt: 'Der Markt für spezialisierte KI-Lösungen boomt. Wir analysieren, wie Gründercoachings in FB01 den Weg aus der Arbeitslosigkeit in die erfolgreiche Selbstständigkeit ebnen.',
        author: 'Stefan Mauer',
        date: '12. Januar 2026',
        readTime: '8 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=800&q=80',
        location: 'München',
        time: 'Vor 2 Tagen'
    },
    {
        id: 'anthropic-valuation-surge',
        category: 'venture',
        tag: 'Wirtschaft & Märkte',
        title: 'Anthropic Bewertung steigt auf 183 Mrd. USD nach Claude 4 Preview',
        excerpt: 'Nach ersten Benchmarks zum neuen Modell Claude 4 haben Investoren die Bewertung des Startups fast verdreifacht. Damit zieht Anthropic fast gleichauf mit dem Marktwert etablierter Tech-Giganten.',
        author: 'Olaf K.',
        date: '11. Januar 2026',
        readTime: '4 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
        location: 'San Francisco',
        time: 'Vor 3 Tagen'
    },
    {
        id: 'global-tech-landscape-2026',
        category: 'trends',
        tag: 'KI & Technologie',
        title: 'Silicon Valley vs. Europa: Das Rennen um die souveräne KI-Infrastruktur',
        excerpt: 'Während US-Tech-Giganten ihre Rechenkapazitäten exponentiell ausbauen, setzt Europa auf Datenschutz und ethische Standards. Ein Blick hinter die Kulissen der neuen geopolitischen Tech-Achse.',
        author: 'Lisa Berg',
        date: '11. Januar 2026',
        readTime: '4 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
        location: 'San Francisco / Berlin',
        time: 'Gestern'
    },
    {
        id: 'agentic-ai-productivity-report',
        category: 'intelligence',
        tag: 'Marktdaten',
        title: 'McKinsey Report 2026: Agentic AI steigert Büroproduktivität um 60%',
        excerpt: 'Eine neue Studie belegt: Unternehmen, die konsequent auf autonome KI-Agenten setzen, konnten ihre administrativen Kosten im letzten Jahr nahezu halbieren. Ein Weckruf für stagnierende Branchen.',
        author: 'Dr. Julia Werner',
        date: '10. Januar 2026',
        readTime: '10 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        location: 'Global / New York',
        time: 'Vor 4 Tagen'
    },
    {
        id: 'digitale-transformation-2026',
        category: 'intelligence',
        tag: 'Marktdaten',
        title: 'Wirtschaftsausblick 2026: Digitalisierung als einziger Wachstumstreiber',
        excerpt: 'Die deutsche Wirtschaftsleistung stagniert, doch der IT-Sektor wächst zweistellig. Experten fordern eine radikale Umkehr in der Investitionsstrategie für digitale Infrastruktur.',
        author: 'Olaf K.',
        date: '10. Januar 2026',
        readTime: '5 Min. Lesezeit',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
        location: 'Frankfurt / London',
        time: 'Vor 5 Tagen'
    }
];





