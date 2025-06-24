import {ProjectModel} from "../components/models/project.model";

export const Projects: ProjectModel[] = [
    {
        id: 'guru-ai',
        title: {
            en: 'Guru AI – Universal Price-Comparison Framework',
            de: 'Guru AI – Universelles Preisvergleichs-Framework'
        },
        status: 'In Progress',
        description: {
            en: 'Guru AI is a modular framework that turns any product vertical into a full-blown price-comparison portal in days. ' +
                'It couples rock-solid data pipelines with AI-native content generation and SEO-first Next.js front-ends. ' +
                'The first showcase, "moebelguru", indexes 600+ furniture categories and serves millisecond-fast price & trend insights.',
            de: 'Guru AI ist ein modulares Framework, das jede Produktkategorie innerhalb weniger Tage in ein vollständiges Preisvergleichsportal verwandelt. ' +
                'Es kombiniert robuste Datenpipelines mit KI-gestützter Inhaltserstellung und SEO-optimierten Next.js-Frontends. ' +
                'Das erste Vorzeigeprojekt, "moebelguru", indexiert über 600 Möbelkategorien und liefert blitzschnelle Preis- und Trend-Informationen.'
        },
        shortDescription: {
            en: 'A modular framework to rapidly deploy vertical price-comparison platforms with AI-powered content generation, showcasing furniture comparison through moebelguru with 600+ categories',
            de: 'Ein modulares Framework zur schnellen Bereitstellung vertikaler Preisvergleichsplattformen mit KI-gestützter Inhaltserstellung, dargestellt durch den Möbelvergleich moebelguru mit über 600 Kategorien'
        },
        keys: [
            {
                icon: 'Database',
                value: 'Supabase + PostgreSQL',
                description: {
                    en: 'Raw feeds, price history & AI-enriched features are stored loss-lessly.',
                    de: 'Rohdaten, Preisverlauf und KI-angereicherte Funktionen werden verlustfrei gespeichert.'
                }
            },
            {
                icon: 'Search',
                value: 'Meilisearch',
                description: {
                    en: 'Realtime faceted search; <200 ms global TTFB on Vercel Edge.',
                    de: 'Echtzeit-Facettensuche; <200 ms globale TTFB auf Vercel Edge.'
                }
            },
            {
                icon: 'Cpu',
                value: 'LLM Pipelines',
                description: {
                    en: 'Ollama & GPT-4.5 enrich attributes, detect trends and draft long-form content.',
                    de: 'Ollama & GPT-4.5 reichern Attribute an, erkennen Trends und erstellen Langtexte.'
                }
            },
            {
                icon: 'Layers',
                value: 'Next.js 15 App Router',
                description: {
                    en: 'Incremental Static Regeneration + Server Components for SEO-perfect pages.',
                    de: 'Inkrementelle statische Regenerierung + Server-Komponenten für SEO-optimierte Seiten.'
                }
            },
            {
                icon: 'Repeat',
                value: 'Vertical-agnostic',
                description: {
                    en: 'Swap feed mappings & UI theme to launch Electronics, Fashion, Pets…',
                    de: 'Tausche Feed-Mappings und UI-Designs aus, um Elektronik, Mode, Haustiere usw. zu starten...'
                }
            }
        ],
        stats: [
            {
                key: {
                    en: 'Product categories',
                    de: 'Produktkategorien'
                },
                value: '606+'
            },
            {
                key: {
                    en: 'Article sub-categories',
                    de: 'Artikel-Unterkategorien'
                },
                value: '118'
            },
            {
                key: {
                    en: 'AI articles / week',
                    de: 'KI-Artikel / Woche'
                },
                value: '~60'
            },
            {
                key: {
                    en: 'Search TTFB',
                    de: 'Such-TTFB'
                },
                value: '< 200 ms'
            }        ],        client: {
            en: 'Research, Development & Training',
            de: 'Forschung, Entwicklung und Weiterbildung'
        },
        previewLink: 'https://dev.moebelguru.com',
        demoAvailable: true,
        img: '/projects/moebelguru.png',
        createAt: new Date('2025-05-10'),
        updatedAt: new Date(),
        order: 1,
        rollout: {
            seconds: 1750204800,   // 2025-06-17T00:00:00Z
            nanoseconds: 0
        },
        techStack: [
            {
                category: { en: 'Frontend', de: 'Frontend' },
                technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'React Query']
            },
            {
                category: { en: 'Backend & Database', de: 'Backend & Datenbank' },
                technologies: ['Supabase', 'PostgreSQL', 'Python FastAPI', 'Redis']
            },
            {
                category: { en: 'AI & Search', de: 'KI & Suche' },
                technologies: ['GPT-4.5', 'Ollama', 'Meilisearch', 'OpenAI Embeddings']
            },
            {
                category: { en: 'Infrastructure', de: 'Infrastruktur' },
                technologies: ['Vercel', 'Docker', 'GitHub Actions', 'Cloudflare']
            }
        ],
        skills: [
            {
                category: { en: 'Full-Stack Development', de: 'Full-Stack-Entwicklung' },
                items: ['Next.js App Router', 'Server Components', 'TypeScript', 'API Design', 'Database Schema Design']
            },
            {
                category: { en: 'AI Integration', de: 'KI-Integration' },
                items: ['LLM Prompt Engineering', 'RAG Implementation', 'AI Content Generation', 'Embedding-based Search']
            },
            {
                category: { en: 'Performance Optimization', de: 'Performance-Optimierung' },
                items: ['Edge Functions', 'Caching Strategies', 'Database Indexing', 'Search Performance Tuning']
            },
            {
                category: { en: 'Product Strategy', de: 'Produktstrategie' },
                items: ['Market Research', 'Competitive Analysis', 'SEO Strategy', 'User Experience Design']
            }
        ],
        challenges: [
            {
                title: { en: 'Real-time Price Synchronization', de: 'Echtzeit-Preissynchronisation' },
                description: { 
                    en: 'Handling 600+ product categories with millions of price changes daily while maintaining data consistency and sub-200ms search response times.',
                    de: 'Verarbeitung von über 600 Produktkategorien mit Millionen von täglichen Preisänderungen bei gleichzeitiger Wahrung der Datenkonsistenz und Sub-200ms Suchantwortzeiten.'
                }
            },
            {
                title: { en: 'AI Content Quality & Scale', de: 'KI-Inhaltsqualität & Skalierung' },
                description: {
                    en: 'Generating high-quality, SEO-optimized content for thousands of products while avoiding AI detection and maintaining brand consistency.',
                    de: 'Generierung hochwertiger, SEO-optimierter Inhalte für Tausende von Produkten bei gleichzeitiger Vermeidung von KI-Erkennung und Wahrung der Markenkonsistenz.'
                }
            }
        ],
        learnings: [
            {
                title: { en: 'Edge-First Architecture', de: 'Edge-First-Architektur' },
                description: {
                    en: 'Learned to design applications from the ground up for edge deployment, achieving global sub-200ms response times through strategic caching and data distribution.',
                    de: 'Gelernt, Anwendungen von Grund auf für Edge-Deployment zu entwickeln und globale Sub-200ms Antwortzeiten durch strategisches Caching und Datenverteilung zu erreichen.'
                }
            },
            {
                title: { en: 'LLM Pipeline Optimization', de: 'LLM-Pipeline-Optimierung' },
                description: {
                    en: 'Developed expertise in combining multiple AI models (GPT-4.5, Ollama) to create cost-effective, high-quality content generation pipelines that scale to millions of products.',
                    de: 'Expertise in der Kombination mehrerer KI-Modelle (GPT-4.5, Ollama) entwickelt, um kosteneffektive, hochwertige Content-Generierungspipelines zu erstellen, die auf Millionen von Produkten skalieren.'
                }
            }
        ]
    },
    {
        client: {
            en: "ThyssenKrupp Presta AG",
            de: "ThyssenKrupp Presta AG"
        },
        keys: [
            {
                description: {
                    en: "The platform provides complete visibility of components from initial manufacturing through final assembly, creating a digital history for each part.",
                    de: "Die Plattform bietet vollständige Transparenz von Komponenten, von der ersten Fertigung bis zur Endmontage, und erstellt eine digitale Historie für jedes Teil."
                },
                value: {
                    en: "End-to-End Component Traceability",
                    de: "Ende-zu-Ende-Rückverfolgbarkeit von Komponenten"
                }
            },
            {
                value: {
                    en: "Real-time Sensor Data Analysis",
                    de: "Echtzeit-Sensordatenanalyse"
                },
                description: {
                    en: "The system continuously monitors and analyzes sensor measurements for each component, enabling immediate quality control interventions when deviations occur.",
                    de: "Das System überwacht und analysiert kontinuierlich Sensormessungen für jede Komponente und ermöglicht sofortige Qualitätskontrolleingriffe, wenn Abweichungen auftreten."
                }
            },
            {
                value: {
                    en: "Manufacturing Process Insights",
                    de: "Erkenntnisse zum Fertigungsprozess"
                },
                description: {
                    en: "By tracking components through various machines and processes, the platform generates valuable insights for optimizing production workflows and identifying bottlenecks.",
                    de: "Durch die Verfolgung von Komponenten durch verschiedene Maschinen und Prozesse liefert die Plattform wertvolle Erkenntnisse zur Optimierung von Produktionsabläufen und zur Identifizierung von Engpässen."
                }
            },
            {
                description: {
                    en: "The comprehensive traceability enables faster issue resolution, improved compliance reporting, and enhanced quality assurance throughout the manufacturing lifecycle.",
                    de: "Die umfassende Rückverfolgbarkeit ermöglicht eine schnellere Problemlösung, verbesserte Compliance-Berichterstattung und verbesserte Qualitätssicherung während des gesamten Fertigungslebenszyklus."
                },
                value: {
                    en: "Enhanced Quality Assurance",
                    de: "Verbesserte Qualitätssicherung"
                }
            }
        ],
        stats: [
            {
                key: {
                    en: "Traceability Coverage",
                    de: "Rückverfolgbarkeitsabdeckung"
                },
                value: "98%"
            },
            {
                key: {
                    en: "Quality Control Improvement",
                    de: "Verbesserung der Qualitätskontrolle"
                },
                value: "35%"
            },
            {
                key: {
                    en: "Issue Resolution Time",
                    de: "Zeit zur Problemlösung"
                },
                value: "60% Reduction"
            },
            {
                key: {
                    en: "Components Tracked Daily",
                    de: "Täglich verfolgte Komponenten"
                },
                value: "250,000+"
            }
        ],
        status: 'Completed',
        shortDescription: {
            en: "The Track and Trace platform enables complete component traceability throughout the manufacturing process, monitoring machine interactions and sensor data to ensure quality and provide valuable production insights.",
            de: "Die Track-and-Trace-Plattform ermöglicht eine vollständige Rückverfolgbarkeit von Komponenten im gesamten Fertigungsprozess, überwacht Maschineninteraktionen und Sensordaten, um die Qualität zu sichern und wertvolle Produktionseinblicke zu liefern."
        },
        title: {
            en: "Track and Trace",
            de: "Track and Trace"
        },
        img: "/projects/track-trace.png",
        order: 0,
        rollout: {
            seconds: 1685570400,
            nanoseconds: 455000000
        },
        description: {
            en: "The Track and Trace platform revolutionizes manufacturing traceability by creating a digital fingerprint for each component from production start to final assembly. This comprehensive system monitors each part's journey through various machines and processes, capturing critical sensor measurements at every stage. By maintaining this detailed component history, the platform enables unprecedented quality control capabilities, allowing teams to quickly identify and address production issues before they escalate. The system's advanced analytics provide valuable insights into manufacturing efficiency, helping optimize workflows and reduce bottlenecks. Whether investigating quality deviations, demonstrating regulatory compliance, or identifying opportunities for process improvement, Track and Trace transforms component data into actionable intelligence, making it an essential tool for modern manufacturing operations.",
            de: "Die Track-and-Trace-Plattform revolutioniert die Rückverfolgbarkeit in der Fertigung, indem sie einen digitalen Fingerabdruck für jede Komponente vom Produktionsstart bis zur Endmontage erstellt. Dieses umfassende System überwacht den Weg jedes Teils durch verschiedene Maschinen und Prozesse und erfasst kritische Sensormessungen in jeder Phase. Durch die Aufrechterhaltung dieser detaillierten Komponentenhistorie ermöglicht die Plattform beispiellose Qualitätskontrollfunktionen, sodass Teams Produktionsprobleme schnell identifizieren und beheben können, bevor sie eskalieren. Die fortschrittlichen Analysen des Systems liefern wertvolle Erkenntnisse zur Fertigungseffizienz und helfen dabei, Arbeitsabläufe zu optimieren und Engpässe zu reduzieren. Ob bei der Untersuchung von Qualitätsabweichungen, dem Nachweis der Einhaltung von Vorschriften oder der Identifizierung von Möglichkeiten zur Prozessverbesserung – Track and Trace verwandelt Komponentendaten in umsetzbare Informationen und macht es zu einem unverzichtbaren Werkzeug für moderne Fertigungsprozesse."        },
        previewLink: "",
        demoAvailable: false,
        demoNote: {
            en: "Live demo only available on-site at ThyssenKrupp facilities for security reasons",
            de: "Live-Demo nur vor Ort bei ThyssenKrupp verfügbar aus Sicherheitsgründen"
        },
        id: "track-and-trace",
        techStack: [
            {
                category: { en: 'Frontend', de: 'Frontend' },
                technologies: ['React', 'TypeScript', 'Material-UI', 'Chart.js', 'Redux Toolkit']
            },
            {
                category: { en: 'Backend & APIs', de: 'Backend & APIs' },
                technologies: ['Node.js', 'Express', 'REST APIs', 'WebSocket', 'JWT Authentication']
            },
            {
                category: { en: 'Database & Analytics', de: 'Datenbank & Analytics' },
                technologies: ['PostgreSQL', 'InfluxDB', 'Redis', 'Grafana', 'Custom Analytics Engine']
            },
            {
                category: { en: 'Industrial IoT', de: 'Industrie-IoT' },
                technologies: ['MQTT', 'OPC-UA', 'ModBus', 'Sensor Integration', 'PLC Communication']
            }
        ],
        skills: [
            {
                category: { en: 'Industrial Software Development', de: 'Industrielle Softwareentwicklung' },
                items: ['Manufacturing Process Analysis', 'Sensor Data Processing', 'Real-time Systems', 'Quality Control Systems']
            },
            {
                category: { en: 'Data Engineering', de: 'Data Engineering' },
                items: ['Time-series Database Design', 'Data Pipeline Architecture', 'Real-time Analytics', 'Data Visualization']
            },
            {
                category: { en: 'IoT & Integration', de: 'IoT & Integration' },
                items: ['Industrial Protocol Implementation', 'Machine-to-Machine Communication', 'Edge Computing', 'Distributed Systems']
            },
            {
                category: { en: 'Enterprise Solutions', de: 'Unternehmenslösungen' },
                items: ['Scalable Architecture Design', 'Multi-tenant Systems', 'Enterprise Integration', 'Compliance & Auditing']
            }
        ],
        challenges: [
            {
                title: { en: 'Real-time Data Processing at Scale', de: 'Echtzeit-Datenverarbeitung im großen Maßstab' },
                description: {
                    en: 'Processing 250,000+ component movements daily with millisecond precision while maintaining data integrity across multiple production lines and sensor systems.',
                    de: 'Verarbeitung von über 250.000 Komponentenbewegungen täglich mit millisekundengenauer Präzision bei gleichzeitiger Wahrung der Datenintegrität über mehrere Produktionslinien und Sensorsysteme hinweg.'
                }
            },
            {
                title: { en: 'Industrial System Integration', de: 'Integration industrieller Systeme' },
                description: {
                    en: 'Seamlessly connecting legacy manufacturing equipment with modern software systems, bridging protocols like OPC-UA, MQTT, and ModBus while ensuring zero production downtime.',
                    de: 'Nahtlose Verbindung von Legacy-Fertigungsanlagen mit modernen Softwaresystemen, Überbrückung von Protokollen wie OPC-UA, MQTT und ModBus bei gleichzeitiger Gewährleistung von null Produktionsausfallzeiten.'
                }
            }
        ],
        learnings: [
            {
                title: { en: 'Time-series Database Optimization', de: 'Zeitreihen-Datenbank-Optimierung' },
                description: {
                    en: 'Mastered InfluxDB and time-series data modeling to achieve sub-second query performance on billions of sensor readings, enabling real-time quality control dashboards.',
                    de: 'InfluxDB und Zeitreihen-Datenmodellierung gemeistert, um Sub-Sekunden-Abfrageleistung bei Milliarden von Sensormesswerten zu erreichen und Echtzeit-Qualitätskontroll-Dashboards zu ermöglichen.'
                }
            },
            {
                title: { en: 'Manufacturing Domain Expertise', de: 'Fertigungs-Domain-Expertise' },
                description: {
                    en: 'Developed deep understanding of automotive manufacturing processes, quality standards (ISO 9001, TS 16949), and regulatory compliance requirements in industrial environments.',
                    de: 'Tiefes Verständnis für Automobilfertigungsprozesse, Qualitätsstandards (ISO 9001, TS 16949) und regulatorische Compliance-Anforderungen in industriellen Umgebungen entwickelt.'
                }
            }
        ]
    },
    {
        client: "ThyssenKrupp Presta AG",
        keys: [
            {
                description: "Users can effortlessly create customized dashboards to meet their specific data monitoring needs, even without advanced technical expertise.",
                value: "User-Friendly Dashboard Creation"
            },
            {
                value: "Versatile Data Monitoring",
                description: "The BI Reporting Platform accommodates a wide range of data types, making it adaptable for monitoring investments, operations, metadata, and more."
            },
            {
                value: "Streamlined Data Control",
                description: "This application simplifies data management, ensuring that individuals can maintain control over their information, regardless of the data type."
            }
        ],
        stats: [
            {
                key: "Supported Data Types",
                value: "20+"
            },
            {
                key: "User-Created Dashboards",
                value: "Within Minutes"
            },
            {
                key: "Data Control Efficiency",
                value: "Up to 30% Improvement"
            }
        ],
        status: 'Completed',
        shortDescription: {
            en: "The \"BI Reporting Platform\" simplifies data monitoring and dashboard creation. From investments to metadata, this user-friendly tool is your one-stop solution for tailored dashboards.",
            de: "Die \"BI Reporting Platform\" vereinfacht die Datenüberwachung und Dashboard-Erstellung. Von Investitionen bis zu Metadaten ist dieses benutzerfreundliche Tool Ihre Komplettlösung für maßgeschneiderte Dashboards."
        },
        title: {
            en: "BI Reporting Platform",
            de: "BI Reporting-Plattform"
        },
        img: "/projects/reporting.png",
        order: 0,
        rollout: {
            seconds: 1685570400,
            nanoseconds: 455000000
        },
        description: {
            en: "The \"BI Reporting Platform\" is a versatile and powerful application designed to streamline data monitoring and dashboard creation. This all-encompassing tool empowers users to monitor a wide array of data types, including investments, operations, process data, metadata, and more. What sets this platform apart is its user-friendly and generic approach, allowing individuals to craft customized dashboards tailored to their unique data needs. Whether you're tracking financial investments, optimizing operational processes, or diving into metadata analysis, the BI Reporting Platform simplifies data monitoring and reporting, making it a valuable asset for professionals in various industries.",
            de: "Die \"BI Reporting-Plattform\" ist eine vielseitige und leistungsstarke Anwendung zur Optimierung der Datenüberwachung und Dashboard-Erstellung. Dieses umfassende Tool ermöglicht Benutzern die Überwachung einer Vielzahl von Datentypen, einschließlich Investitionen, Betriebsabläufen, Prozessdaten, Metadaten und mehr. Was diese Plattform auszeichnet, ist ihr benutzerfreundlicher und generischer Ansatz, der es Einzelpersonen ermöglicht, maßgeschneiderte Dashboards entsprechend ihrer individuellen Datenanforderungen zu erstellen. Ob Sie finanzielle Investitionen verfolgen, Betriebsprozesse optimieren oder Metadatenanalysen durchführen, die BI Reporting-Plattform vereinfacht die Datenüberwachung und Berichterstellung und macht sie zu einem wertvollen Instrument für Fachleute in verschiedenen Branchen."        },
        previewLink: "",
        demoAvailable: false,
        demoNote: {
            en: "Live demo only available on-site at ThyssenKrupp facilities due to sensitive business data",
            de: "Live-Demo nur vor Ort bei ThyssenKrupp verfügbar aufgrund sensibler Geschäftsdaten"
        },
        id: "bi-reporting-platform",
        techStack: [
            {
                category: { en: 'Frontend', de: 'Frontend' },
                technologies: ['React', 'TypeScript', 'Material-UI', 'D3.js', 'React Query']
            },
            {
                category: { en: 'Backend & Database', de: 'Backend & Datenbank' },
                technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Prisma ORM']
            },
            {
                category: { en: 'Data Processing', de: 'Datenverarbeitung' },
                technologies: ['Python', 'Pandas', 'Apache Kafka', 'ETL Pipelines']
            },
            {
                category: { en: 'Infrastructure', de: 'Infrastruktur' },
                technologies: ['Docker', 'Azure', 'GitHub Actions', 'Nginx']
            }
        ],
        skills: [
            {
                category: { en: 'Data Visualization', de: 'Datenvisualisierung' },
                items: ['Dashboard Design', 'Interactive Charts', 'Real-time Dashboards', 'Custom Chart Components']
            },
            {
                category: { en: 'Business Intelligence', de: 'Business Intelligence' },
                items: ['KPI Development', 'Data Modeling', 'Performance Metrics', 'Report Automation']
            },
            {
                category: { en: 'Full-Stack Development', de: 'Full-Stack-Entwicklung' },
                items: ['API Design', 'Database Optimization', 'User Experience Design', 'Performance Optimization']
            }
        ],
        challenges: [
            {
                title: { en: 'Generic Dashboard Framework', de: 'Generisches Dashboard-Framework' },
                description: { 
                    en: 'Creating a flexible framework that allows users to build custom dashboards for any data type while maintaining performance and usability across different use cases.',
                    de: 'Erstellen eines flexiblen Frameworks, das es Benutzern ermöglicht, benutzerdefinierte Dashboards für jeden Datentyp zu erstellen, während Performance und Benutzerfreundlichkeit in verschiedenen Anwendungsfällen gewährleistet bleiben.'
                }
            },
            {
                title: { en: 'Real-time Data Synchronization', de: 'Echtzeit-Datensynchronisation' },
                description: {
                    en: 'Implementing efficient real-time updates across multiple dashboard components while handling large datasets and maintaining responsive user experience.',
                    de: 'Implementierung effizienter Echtzeit-Updates über mehrere Dashboard-Komponenten hinweg bei gleichzeitiger Verarbeitung großer Datensätze und Beibehaltung einer responsiven Benutzererfahrung.'
                }
            }
        ],
        learnings: [
            {
                title: { en: 'Data-Driven UX Design', de: 'Datengetriebenes UX-Design' },
                description: {
                    en: 'Learned to design user interfaces that adapt to different data structures and visualization requirements, creating intuitive experiences for non-technical users.',
                    de: 'Gelernt, Benutzeroberflächen zu entwerfen, die sich an verschiedene Datenstrukturen und Visualisierungsanforderungen anpassen und intuitive Erfahrungen für nicht-technische Benutzer schaffen.'
                }
            },
            {
                title: { en: 'Scalable Architecture Patterns', de: 'Skalierbare Architekturmuster' },
                description: {
                    en: 'Mastered the design of modular, plugin-based architectures that allow for easy extension of functionality while maintaining code quality and performance.',
                    de: 'Die Gestaltung modularer, plugin-basierter Architekturen gemeistert, die eine einfache Erweiterung der Funktionalität ermöglichen und gleichzeitig Codequalität und Performance beibehalten.'
                }
            }
        ]
    },
    {
        client: "ThyssenKrupp Presta AG",
        keys: [
            {
                description: {
                    en: "DUDE enables precise identification of anomalies in manufacturing data, ensuring a higher level of quality control by catching irregularities in real-time.",
                    de: "DUDE ermöglicht die präzise Identifizierung von Anomalien in Fertigungsdaten und gewährleistet ein höheres Maß an Qualitätskontrolle, indem Unregelmäßigkeiten in Echtzeit erkannt werden."
                },
                value: {
                    en: "Enhanced Quality Control",
                    de: "Verbesserte Qualitätskontrolle"
                }
            },
            {
                value: {
                    en: "Process Optimization",
                    de: "Prozessoptimierung"
                },
                description: {
                    en: "The application contributes to process optimization by providing insights into data variations, helping streamline manufacturing operations and enhance efficiency.",
                    de: "Die Anwendung trägt zur Prozessoptimierung bei, indem sie Einblicke in Datenvariationen liefert, was hilft, Fertigungsabläufe zu optimieren und die Effizienz zu steigern."
                }
            },
            {
                value: {
                    en: "Improved Product Consistency",
                    de: "Verbesserte Produktkonsistenz"
                },
                description: {
                    en: "With DUDE, product consistency is bolstered as it helps maintain uniform quality standards across manufacturing processes, resulting in more reliable and higher-quality end products.",
                    de: "Mit DUDE wird die Produktkonsistenz gestärkt, da es hilft, einheitliche Qualitätsstandards in den Fertigungsprozessen aufrechtzuerhalten, was zu zuverlässigeren und qualitativ hochwertigeren Endprodukten führt."
                }
            }
        ],
        stats: [
            {
                key: {
                    en: "Anomaly Detection Accuracy",
                    de: "Genauigkeit der Anomalieerkennung"
                },
                value: "95%"
            },
            {
                key: {
                    en: "Real-Time Monitoring Response Time",
                    de: "Reaktionszeit der Echtzeit-Überwachung"
                },
                value: "<100ms"
            },
            {
                key: {
                    en: "Operational Efficiency Gains",
                    de: "Steigerung der betrieblichen Effizienz"
                },
                value: "20%"
            },
            {
                key: {
                    en: "Product Quality Improvement",
                    de: "Verbesserung der Produktqualität"
                },
                value: "15%"
            }
        ],
        status: 'Completed',
        shortDescription: {
            en: "I completed the DUDE project, which stands for \"Detect Uncommon Data Events.\" This app identifies anomalies in manufacturing process quality data, aiding in quality control and process optimization.",
            de: "Ich habe das DUDE-Projekt abgeschlossen, das für \"Detect Uncommon Data Events\" steht. Diese App identifiziert Anomalien in Qualitätsdaten von Fertigungsprozessen und unterstützt bei der Qualitätskontrolle und Prozessoptimierung."
        },
        title: {
            en: "DUDE",
            de: "DUDE"
        },
        img: "/projects/dude.png",
        order: 0,
        rollout: {
            seconds: 1685570400,
            nanoseconds: 455000000
        },
        description: {
            en: "DUDE (Detect Uncommon Data Events) is an advanced application for manufacturing quality control. It swiftly identifies anomalies in real-time process quality data, enhancing quality control and operational efficiency. With DUDE, manufacturing processes are optimized, and product consistency is improved, ensuring high-quality, reliable end products.",
            de: "DUDE (Detect Uncommon Data Events) ist eine fortschrittliche Anwendung für die Fertigungsqualitätskontrolle. Sie identifiziert schnell Anomalien in Echtzeit-Prozessqualitätsdaten, verbessert die Qualitätskontrolle und die betriebliche Effizienz. Mit DUDE werden Fertigungsprozesse optimiert und die Produktkonsistenz verbessert, was hochwertige, zuverlässige Endprodukte gewährleistet."        },
        previewLink: "",
        id: "dude",
        techStack: [
            {
                category: { en: 'Data Science & AI', de: 'Data Science & KI' },
                technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow']
            },
            {
                category: { en: 'Backend & Database', de: 'Backend & Datenbank' },
                technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'SQLAlchemy']
            },
            {
                category: { en: 'Frontend', de: 'Frontend' },
                technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS']
            },
            {
                category: { en: 'Infrastructure', de: 'Infrastruktur' },
                technologies: ['Docker', 'Azure', 'CI/CD Pipelines']
            }
        ],
        skills: [
            {
                category: { en: 'Machine Learning', de: 'Maschinelles Lernen' },
                items: ['Anomaly Detection', 'Time Series Analysis', 'Statistical Modeling', 'Feature Engineering']
            },
            {
                category: { en: 'Manufacturing Excellence', de: 'Fertigungsexzellenz' },
                items: ['Quality Control Systems', 'Process Optimization', 'Real-time Monitoring', 'Industrial IoT']
            },
            {
                category: { en: 'Data Engineering', de: 'Data Engineering' },
                items: ['ETL Pipelines', 'Data Validation', 'Performance Tuning', 'Database Design']
            }
        ],
        challenges: [
            {
                title: { en: 'Real-time Anomaly Detection', de: 'Echtzeit-Anomalieerkennung' },
                description: { 
                    en: 'Developing algorithms that can detect subtle anomalies in manufacturing data streams within 100ms while maintaining high accuracy and low false-positive rates.',
                    de: 'Entwicklung von Algorithmen, die subtile Anomalien in Fertigungsdatenströmen innerhalb von 100ms erkennen können, während gleichzeitig hohe Genauigkeit und niedrige Falsch-Positiv-Raten beibehalten werden.'
                }
            },
            {
                title: { en: 'Industrial System Integration', de: 'Integration in Industriesysteme' },
                description: {
                    en: 'Seamlessly integrating the system with existing manufacturing infrastructure while ensuring zero downtime and maintaining strict security requirements.',
                    de: 'Nahtlose Integration des Systems in die bestehende Fertigungsinfrastruktur bei gleichzeitiger Gewährleistung von null Ausfallzeiten und Einhaltung strenger Sicherheitsanforderungen.'
                }
            }
        ],
        learnings: [
            {
                title: { en: 'Domain-Specific ML Models', de: 'Domänenspezifische ML-Modelle' },
                description: {
                    en: 'Learned to develop machine learning models specifically tailored for manufacturing environments, understanding the unique challenges of industrial data patterns and quality requirements.',
                    de: 'Gelernt, Machine-Learning-Modelle speziell für Fertigungsumgebungen zu entwickeln, und die einzigartigen Herausforderungen industrieller Datenmuster und Qualitätsanforderungen verstanden.'
                }
            },
            {
                title: { en: 'High-Performance Data Processing', de: 'Hochperformante Datenverarbeitung' },
                description: {
                    en: 'Mastered techniques for processing large volumes of sensor data in real-time, achieving sub-100ms response times through optimized algorithms and efficient data structures.',
                    de: 'Techniken zur Verarbeitung großer Mengen von Sensordaten in Echtzeit gemeistert und Sub-100ms Antwortzeiten durch optimierte Algorithmen und effiziente Datenstrukturen erreicht.'
                }
            }
        ]
    },
    {
        client: {
            en: "My own project",
            de: "Mein eigenes Projekt"
        },
        keys: [
            {
                description: {
                    en: "",
                    de: ""
                },
                value: {
                    en: "Modern and beautiful UI",
                    de: "Moderne und ansprechende Benutzeroberfläche"
                }
            },
            {
                value: {
                    en: "Based on Angular and Symfony API Platform (PHP)",
                    de: "Basierend auf Angular und Symfony API Platform (PHP)"
                },
                description: {
                    en: "",
                    de: ""
                }
            },
            {
                value: {
                    en: "Combines my hobbies",
                    de: "Verbindet meine Hobbys"
                },
                description: {
                    en: "",
                    de: ""
                }
            }
        ],
        status: 'On Hold',
        shortDescription: {
            en: "To combine my love for flying my drone and developing my skills, I am working on a platform where pilots can sell their footage. For the development of the platform I use the programming language GO together in a microservice architecture. For the frontend Angular is used.",
            de: "Um meine Leidenschaft für das Fliegen meiner Drohne und die Entwicklung meiner Fähigkeiten zu verbinden, arbeite ich an einer Plattform, auf der Piloten ihre Aufnahmen verkaufen können. Für die Entwicklung der Plattform verwende ich die Programmiersprache GO in einer Microservice-Architektur. Für das Frontend wird Angular verwendet."
        },
        title: {
            en: "Dronegraphy",
            de: "Dronegraphy"
        },
        img: "/projects/drone.svg",
        order: 0,
        rollout: {
            seconds: 1685570400,
            nanoseconds: 455000000
        },
        description: {
            en: "With dronegraphy I combine multiple passions of mine. As I love making impressing films and know how to code, this was some kind of natural outcome. Dronegraphy will be some kind of platform, in which people can buy and sell drone footage. In addition a forum will help drone lovers come together. As of now, dronegraphy is still in development as a side project of mine.",
            de: "Mit Dronegraphy verbinde ich mehrere meiner Leidenschaften. Da ich es liebe, beeindruckende Filme zu machen und weiß, wie man programmiert, war dies eine Art natürliches Ergebnis. Dronegraphy wird eine Art Plattform sein, auf der Menschen Drohnenaufnahmen kaufen und verkaufen können. Zusätzlich wird ein Forum dabei helfen, Drohnenliebhaber zusammenzubringen. Derzeit befindet sich Dronegraphy noch in der Entwicklung als eines meiner Nebenprojekte."        },        previewLink: "",
        id: "dronegraphy",
        techStack: [
            {
                category: { en: 'Frontend', de: 'Frontend' },
                technologies: ['Angular', 'TypeScript', 'Angular Material', 'RxJS', 'SCSS']
            },
            {
                category: { en: 'Backend', de: 'Backend' },
                technologies: ['Go', 'Gin Framework', 'PostgreSQL', 'JWT Authentication']
            },
            {
                category: { en: 'Microservices', de: 'Microservices' },
                technologies: ['Docker', 'Kubernetes', 'gRPC', 'Message Queues']
            },
            {
                category: { en: 'Media & Storage', de: 'Medien & Speicher' },
                technologies: ['FFmpeg', 'AWS S3', 'Content Delivery Network', 'Image Processing']
            }
        ],
        skills: [
            {
                category: { en: 'Go Development', de: 'Go-Entwicklung' },
                items: ['Concurrent Programming', 'Microservice Architecture', 'Performance Optimization', 'API Design']
            },
            {
                category: { en: 'Media Technology', de: 'Medientechnik' },
                items: ['Video Processing', 'Image Optimization', 'Streaming Protocols', 'Metadata Extraction']
            },
            {
                category: { en: 'Marketplace Development', de: 'Marktplatz-Entwicklung' },
                items: ['Payment Integration', 'User Management', 'Content Moderation', 'Search & Filtering']
            }
        ],
        challenges: [
            {
                title: { en: 'Video Processing Pipeline', de: 'Video-Verarbeitungs-Pipeline' },
                description: { 
                    en: 'Building a scalable video processing system that can handle high-resolution drone footage uploads, transcoding, and optimization while maintaining quality and performance.',
                    de: 'Aufbau eines skalierbaren Video-Verarbeitungssystems, das hochauflösende Drohnenaufnahmen-Uploads, Transcoding und Optimierung bewältigen kann, während Qualität und Performance erhalten bleiben.'
                }
            },
            {
                title: { en: 'Community & Commerce Balance', de: 'Balance zwischen Community und Commerce' },
                description: {
                    en: 'Creating a platform that serves both as a community forum for drone enthusiasts and a commercial marketplace, requiring careful UX design and feature balance.',
                    de: 'Erstellen einer Plattform, die sowohl als Community-Forum für Drohnen-Enthusiasten als auch als kommerzieller Marktplatz fungiert, was sorgfältiges UX-Design und Feature-Balance erfordert.'
                }
            }
        ],
        learnings: [
            {
                title: { en: 'Go Microservices Architecture', de: 'Go-Microservices-Architektur' },
                description: {
                    en: 'Deepened expertise in Go programming and microservices architecture, learning to build high-performance, concurrent systems that can handle media-heavy workloads.',
                    de: 'Vertiefte Expertise in Go-Programmierung und Microservices-Architektur entwickelt, gelernt, hochperformante, nebenläufige Systeme zu bauen, die medienintensive Arbeitslasten bewältigen können.'
                }
            },
            {
                title: { en: 'Product-Market Fit Research', de: 'Product-Market-Fit-Forschung' },
                description: {
                    en: 'Gained insights into market research and product validation for niche communities, understanding the importance of user feedback in product development.',
                    de: 'Einblicke in Marktforschung und Produktvalidierung für Nischen-Communities gewonnen, die Bedeutung von Benutzer-Feedback in der Produktentwicklung verstanden.'
                }
            }
        ]
    },    {
        status: 'Completed',
        client: {
            en: "NSB Polymers GmbH",
            de: "NSB Polymers GmbH"
        },
        shortDescription: {
            en: "I built a web-app to manage inventory, optimize supply chain and communicate with suppliers and customers for a polymer company.",
            de: "Ich entwickelte eine Web-App für ein Polymerunternehmen zur Bestandsverwaltung, Optimierung der Lieferkette und Kommunikation mit Lieferanten und Kunden."
        },
        keys: [
            {
                value: "Inventory Management",
                description: "The system allows for real-time tracking and management of merchandise inventory, including products, stock levels, and orders."
            },
            {
                description: "The system provides real-time reporting and analysis on sales and inventory data, enabling the company to make informed business decisions.",
                value: "Data Analysis and Reporting"
            },
            {
                description: "It allows the company to optimize their supply chain operations and make better decisions.",
                value: "Supply Chain Optimization"
            },
            {
                value: "Communication",
                description: "The system facilitates easy communication with suppliers and customers, streamlining the ordering and fulfillment process."
            }
        ],
        stats: [
            {
                key: "Increased Sales",
                value: "15%"
            },
            {
                value: "25%",
                key: "Increased Efficiency"
            },
            {
                value: "10%",
                key: "Reduced Costs"
            },
            {
                value: "20%",
                key: "Increased Customer Satisfaction"
            }
        ],        rollout: {
            seconds: 1672527600,
            nanoseconds: 588000000
        },
        title: "NSB Platform",
        description: "I built a web-based merchandise management system for a global medium-sized enterprise that specializes in the polymer industry. The system, which I developed, allows the company to effectively manage and track their merchandise inventory including products, stock levels, and orders. It also provides real-time reporting and analysis on sales and inventory data, enabling the company to make informed business decisions and optimize their supply chain operations. Additionally, the system facilitates easy communication with suppliers and customers, streamlining the ordering and fulfillment process. Overall, this system which I created, is a powerful tool for managing and growing the company's polymer-based business.",
        img: "/projects/nsb.png",
        previewLink: "",
        id: "nsb-platform-old"
    },
    {
        client: {
            en: "NSB Polymers GmbH",
            de: "NSB Polymers GmbH"
        },
        shortDescription: {
            en: "I built a web-app to manage inventory, optimize supply chain and communicate with suppliers and customers for a polymer company.",
            de: "Ich entwickelte eine Web-App für ein Polymerunternehmen zur Bestandsverwaltung, Optimierung der Lieferkette und Kommunikation mit Lieferanten und Kunden."
        },
        status: 'Completed',
        keys: [
            {
                value: {
                    en: "Inventory Management",
                    de: "Bestandsverwaltung"
                },
                description: {
                    en: "The system allows for real-time tracking and management of merchandise inventory, including products, stock levels, and orders.",
                    de: "Das System ermöglicht die Echtzeit-Verfolgung und -Verwaltung des Warenbestands, einschließlich Produkten, Lagerbeständen und Bestellungen."
                }
            },
            {
                description: {
                    en: "The system provides real-time reporting and analysis on sales and inventory data, enabling the company to make informed business decisions.",
                    de: "Das System bietet Echtzeit-Berichte und -Analysen zu Verkaufs- und Bestandsdaten, was dem Unternehmen ermöglicht, fundierte Geschäftsentscheidungen zu treffen."
                },
                value: {
                    en: "Data Analysis and Reporting",
                    de: "Datenanalyse und Berichterstattung"
                }
            },
            {
                description: {
                    en: "It allows the company to optimize their supply chain operations and make better decisions.",
                    de: "Es ermöglicht dem Unternehmen, seine Lieferkettenabläufe zu optimieren und bessere Entscheidungen zu treffen."
                },
                value: {
                    en: "Supply Chain Optimization",
                    de: "Optimierung der Lieferkette"
                }
            },
            {
                value: {
                    en: "Communication",
                    de: "Kommunikation"
                },
                description: {
                    en: "The system facilitates easy communication with suppliers and customers, streamlining the ordering and fulfillment process.",
                    de: "Das System erleichtert die Kommunikation mit Lieferanten und Kunden und rationalisiert den Bestell- und Erfüllungsprozess."
                }
            }
        ],
        stats: [
            {
                key: {
                    en: "Increased Sales",
                    de: "Umsatzsteigerung"
                },
                value: "15%"
            },
            {
                value: "25%",
                key: {
                    en: "Increased Efficiency",
                    de: "Erhöhte Effizienz"
                }
            },
            {
                value: "10%",
                key: {
                    en: "Reduced Costs",
                    de: "Reduzierte Kosten"
                }
            },
            {
                value: "20%",
                key: {
                    en: "Increased Customer Satisfaction",
                    de: "Erhöhte Kundenzufriedenheit"
                }
            }
        ],
        rollout: {
            seconds: 1672527600,
            nanoseconds: 588000000
        },
        title: {
            en: "NSB Platform",
            de: "NSB Platform"
        },
        description: {
            en: "I built a web-based merchandise management system for a global medium-sized enterprise that specializes in the polymer industry. The system, which I developed, allows the company to effectively manage and track their merchandise inventory including products, stock levels, and orders. It also provides real-time reporting and analysis on sales and inventory data, enabling the company to make informed business decisions and optimize their supply chain operations. Additionally, the system facilitates easy communication with suppliers and customers, streamlining the ordering and fulfillment process. Overall, this system which I created, is a powerful tool for managing and growing the company's polymer-based business.",
            de: "Ich habe ein webbasiertes Warenwirtschaftssystem für ein global tätiges mittelständisches Unternehmen entwickelt, das sich auf die Polymerindustrie spezialisiert hat. Das von mir entwickelte System ermöglicht dem Unternehmen die effektive Verwaltung und Verfolgung seines Warenbestands, einschließlich Produkte, Lagerbestände und Bestellungen. Es bietet auch Echtzeit-Berichte und -Analysen zu Verkaufs- und Bestandsdaten, wodurch das Unternehmen fundierte Geschäftsentscheidungen treffen und seine Lieferkettenabläufe optimieren kann. Darüber hinaus erleichtert das System die Kommunikation mit Lieferanten und Kunden und rationalisiert den Bestell- und Erfüllungsprozess. Insgesamt ist dieses von mir erstellte System ein leistungsstarkes Werkzeug für die Verwaltung und das Wachstum des Polymergeschäfts des Unternehmens."        },
        img: "/projects/nsb.png",
        previewLink: "",
        id: "nsb-platform",
        techStack: [
            {
                category: { en: 'Frontend', de: 'Frontend' },
                technologies: ['React', 'TypeScript', 'Material-UI', 'Redux', 'Chart.js']
            },
            {
                category: { en: 'Backend & Database', de: 'Backend & Datenbank' },
                technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT']
            },
            {
                category: { en: 'Integration & APIs', de: 'Integration & APIs' },
                technologies: ['PTC Integrity API', 'REST APIs', 'WebSocket', 'XML Processing']
            },
            {
                category: { en: 'Infrastructure', de: 'Infrastruktur' },
                technologies: ['Docker', 'Nginx', 'PM2', 'SSL/TLS']
            }
        ],
        skills: [
            {
                category: { en: 'Enterprise Integration', de: 'Unternehmens-Integration' },
                items: ['ERP System Integration', 'Legacy System Connectivity', 'Data Migration', 'API Development']
            },
            {
                category: { en: 'Supply Chain Management', de: 'Lieferkettenmanagement' },
                items: ['Inventory Management', 'Order Processing', 'Supplier Integration', 'Reporting & Analytics']
            },
            {
                category: { en: 'Business Process Optimization', de: 'Geschäftsprozess-Optimierung' },
                items: ['Workflow Automation', 'Process Mapping', 'Performance Monitoring', 'User Training']
            }
        ],
        challenges: [
            {
                title: { en: 'Legacy System Integration', de: 'Legacy-System-Integration' },
                description: { 
                    en: 'Integrating with existing polymer industry-specific systems while maintaining data integrity and ensuring seamless workflow transitions for daily operations.',
                    de: 'Integration mit bestehenden polymerindustriespezifischen Systemen bei gleichzeitiger Wahrung der Datenintegrität und Gewährleistung nahtloser Workflow-Übergänge für den täglichen Betrieb.'
                }
            },
            {
                title: { en: 'Global Multi-Location Synchronization', de: 'Globale Multi-Standort-Synchronisation' },
                description: {
                    en: 'Ensuring real-time inventory synchronization across multiple global locations while handling different time zones, languages, and business processes.',
                    de: 'Gewährleistung der Echtzeit-Bestandssynchronisation über mehrere globale Standorte hinweg bei gleichzeitiger Berücksichtigung verschiedener Zeitzonen, Sprachen und Geschäftsprozesse.'
                }
            }
        ],
        learnings: [
            {
                title: { en: 'Domain-Specific Business Logic', de: 'Domänenspezifische Geschäftslogik' },
                description: {
                    en: 'Gained deep understanding of polymer industry supply chains, specialized inventory requirements, and the importance of industry-specific compliance and documentation.',
                    de: 'Tiefes Verständnis für Polymer-Industrie-Lieferketten, spezialisierte Lageranforderungen und die Bedeutung branchenspezifischer Compliance und Dokumentation entwickelt.'
                }
            },
            {
                title: { en: 'Enterprise-Scale Architecture', de: 'Unternehmensweite Architektur' },
                description: {
                    en: 'Mastered designing scalable systems that can handle enterprise-level data volumes while maintaining performance and reliability across global operations.',
                    de: 'Die Gestaltung skalierbarer Systeme gemeistert, die Datenvolumen auf Unternehmensebene bewältigen können, während Performance und Zuverlässigkeit in globalen Operationen erhalten bleiben.'
                }
            }
        ]
    },
    {
        rollout: {
            seconds: 1672441200,
            nanoseconds: 89000000
        },
        status: 'Completed',
        title: {
            en: "Design Verification Process Platform",
            de: "Design-Verifizierungsprozess-Plattform"
        },
        description: {
            en: "The web app is a platform used by over 500 engineers for verifying product design. It provides a variety of tools and features that are designed to help engineers ensure that their designs meet quality standards, including simulations, tests, and real-time collaboration. Additionally, it has an PTC Integrity Interface and a configuration matrix, which allow for easy integration with other tools and software, and easy testing and validation of different product configurations respectively. The app is user-friendly and intuitive, making it easy for engineers to access the tools and information they need.",
            de: "Die Web-App ist eine Plattform, die von über 500 Ingenieuren zur Überprüfung von Produktdesigns verwendet wird. Sie bietet eine Vielzahl von Werkzeugen und Funktionen, die Ingenieuren dabei helfen, sicherzustellen, dass ihre Designs Qualitätsstandards erfüllen, einschließlich Simulationen, Tests und Echtzeit-Zusammenarbeit. Darüber hinaus verfügt sie über eine PTC Integrity-Schnittstelle und eine Konfigurationsmatrix, die eine einfache Integration mit anderen Tools und Software sowie eine einfache Prüfung und Validierung verschiedener Produktkonfigurationen ermöglichen. Die Anwendung ist benutzerfreundlich und intuitiv, sodass Ingenieure leicht auf die benötigten Werkzeuge und Informationen zugreifen können."
        },
        client: {
            en: "Rolls Royce Power Systems",
            de: "Rolls Royce Power Systems"
        },
        keys: [
            {
                value: {
                    en: "Quality assurance tools and features",
                    de: "Qualitätssicherungswerkzeuge und -funktionen"
                },
                description: {
                    en: "The web app provides a variety of tools and features to help engineers ensure their designs meet quality standards.",
                    de: "Die Web-App bietet eine Vielzahl von Werkzeugen und Funktionen, um Ingenieuren zu helfen, sicherzustellen, dass ihre Designs Qualitätsstandards erfüllen."
                }
            },
            {
                value: {
                    en: "Easy integration with other tools",
                    de: "Einfache Integration mit anderen Tools"
                },
                description: {
                    en: "The PTC Integrity Interface allows for easy integration with other tools and software.",
                    de: "Die PTC Integrity-Schnittstelle ermöglicht eine einfache Integration mit anderen Tools und Software."
                }
            },
            {
                description: {
                    en: "The Configuration matrix allows for easy testing and validation of different product configurations.",
                    de: "Die Konfigurationsmatrix ermöglicht eine einfache Prüfung und Validierung verschiedener Produktkonfigurationen."
                },
                value: {
                    en: "Test and validate product configurations",
                    de: "Testen und Validieren von Produktkonfigurationen"
                }
            },
            {
                value: {
                    en: "User-friendly interface",
                    de: "Benutzerfreundliche Oberfläche"
                },
                description: {
                    en: "The app is user-friendly and intuitive, making it easy for engineers to access the tools and information they need.",
                    de: "Die App ist benutzerfreundlich und intuitiv, was es Ingenieuren leicht macht, auf die benötigten Werkzeuge und Informationen zuzugreifen."
                }
            }
        ],
        stats: [
            {
                key: {
                    en: "Time reduction",
                    de: "Zeitersparnis"
                },
                value: "40%"
            },
            {
                value: "98%",
                key: {
                    en: "Efficiency increase",
                    de: "Effizienzsteigerung"
                }
            },
            {
                key: {
                    en: "Error reduction",
                    de: "Fehlerreduzierung"
                },
                value: "25%"
            },
            {
                value: "2000",
                key: {
                    en: "Users",
                    de: "Benutzer"
                }
            }
        ],
        shortDescription: {
            en: "The DVP Platform provides engineers with tools and features to verify product designs, including PTC Integrity Interface and Configuration Matrix for easy integration and testing. User-friendly interface is also included.",
            de: "Die DVP-Plattform bietet Ingenieuren Werkzeuge und Funktionen zur Überprüfung von Produktdesigns, einschließlich PTC Integrity-Schnittstelle und Konfigurationsmatrix für einfache Integration und Tests. Eine benutzerfreundliche Oberfläche ist ebenfalls enthalten."        },
        img: "/projects/dvp.png",
        previewLink: "",
        id: "design-verification-process-platform",
        techStack: [
            {
                category: { en: 'Frontend', de: 'Frontend' },
                technologies: ['React', 'TypeScript', 'Material-UI', 'Redux Toolkit', 'React Hook Form']
            },
            {
                category: { en: 'Backend & Database', de: 'Backend & Datenbank' },
                technologies: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'Redis']
            },
            {
                category: { en: 'Engineering Tools Integration', de: 'Engineering-Tools-Integration' },
                technologies: ['PTC Integrity API', 'CAD File Processing', 'WebDAV', 'LDAP Authentication']
            },
            {
                category: { en: 'Infrastructure', de: 'Infrastruktur' },
                technologies: ['Docker', 'Kubernetes', 'Jenkins', 'SonarQube']
            }
        ],
        skills: [
            {
                category: { en: 'Engineering Workflow Optimization', de: 'Engineering-Workflow-Optimierung' },
                items: ['Design Review Processes', 'Quality Assurance Integration', 'Collaboration Tools', 'Document Management']
            },
            {
                category: { en: 'Enterprise Software Integration', de: 'Unternehmens-Software-Integration' },
                items: ['PLM System Integration', 'CAD Tool Connectivity', 'Authentication Systems', 'Legacy System Migration']
            },
            {
                category: { en: 'Large-Scale User Management', de: 'Großangelegtes Benutzermanagement' },
                items: ['Role-Based Access Control', 'Multi-Tenant Architecture', 'Performance Optimization', 'User Training & Support']
            }
        ],
        challenges: [
            {
                title: { en: 'Engineering Tool Ecosystem Integration', de: 'Engineering-Tool-Ökosystem-Integration' },
                description: { 
                    en: 'Seamlessly integrating with complex engineering software ecosystem including PTC Integrity while maintaining real-time data synchronization across 500+ concurrent users.',
                    de: 'Nahtlose Integration in komplexe Engineering-Software-Ökosysteme einschließlich PTC Integrity bei gleichzeitiger Aufrechterhaltung der Echtzeit-Datensynchronisation für über 500 gleichzeitige Benutzer.'
                }
            },
            {
                title: { en: 'Configuration Matrix Complexity', de: 'Konfigurationsmatrix-Komplexität' },
                description: {
                    en: 'Developing a flexible configuration matrix system that can handle thousands of product variants while maintaining performance and user-friendly interfaces.',
                    de: 'Entwicklung eines flexiblen Konfigurationsmatrix-Systems, das Tausende von Produktvarianten verarbeiten kann, während Performance und benutzerfreundliche Oberflächen beibehalten werden.'
                }
            }
        ],
        learnings: [
            {
                title: { en: 'Engineering Process Understanding', de: 'Verständnis für Engineering-Prozesse' },
                description: {
                    en: 'Gained deep insights into product design verification workflows, quality standards, and the critical importance of collaboration in engineering environments.',
                    de: 'Tiefe Einblicke in Produktdesign-Verifizierungsworkflows, Qualitätsstandards und die kritische Bedeutung der Zusammenarbeit in Engineering-Umgebungen gewonnen.'
                }
            },
            {
                title: { en: 'High-Performance Enterprise Architecture', de: 'Hochperformante Enterprise-Architektur' },
                description: {
                    en: 'Mastered building applications that can scale to hundreds of concurrent engineering users while maintaining sub-second response times for complex operations.',
                    de: 'Das Erstellen von Anwendungen gemeistert, die auf Hunderte gleichzeitiger Engineering-Benutzer skalieren können, während Sub-Sekunden-Antwortzeiten für komplexe Operationen beibehalten werden.'
                }
            }
        ]
    },
    {
        shortDescription: "A modern website for an employee coaching service using a karate principle, with resources, testimonials and easy communication. Developed as a one-man project",
        img: "/projects/dkp.png",
        status: 'Completed',
        description: {
            en: "I am proud to present the new website for \"Das Karateprinzip\", a company specializing in employee coaching using a unique karate principle. I designed and developed this website from scratch, working alone on the project. The website showcases the client's coaching services and the benefits of incorporating karate principles into the workplace. The website features a modern design, easy navigation and includes resources such as client testimonials, blog posts and a contact form. My goal was to create a user-friendly and professional website that accurately represents the client's unique approach to employee coaching and I am proud to have delivered a final product that exceeds their expectations.",
            de: "Ich bin stolz darauf, die neue Website für \"Das Karateprinzip\" zu präsentieren, ein Unternehmen, das sich auf Mitarbeiter-Coaching mit einem einzigartigen Karate-Prinzip spezialisiert hat. Ich habe diese Website von Grund auf neu gestaltet und entwickelt und dabei alleine an dem Projekt gearbeitet. Die Website präsentiert die Coaching-Dienstleistungen des Kunden und die Vorteile der Integration von Karate-Prinzipien in den Arbeitsplatz. Die Website verfügt über ein modernes Design, einfache Navigation und enthält Ressourcen wie Kundenstimmen, Blogbeiträge und ein Kontaktformular. Mein Ziel war es, eine benutzerfreundliche und professionelle Website zu erstellen, die den einzigartigen Ansatz des Kunden im Bereich Mitarbeiter-Coaching genau widerspiegelt, und ich bin stolz darauf, ein Endprodukt geliefert zu haben, das die Erwartungen übertrifft."
        },
        order: 0,
        rollout: {
            seconds: 1640905200,
            nanoseconds: 707000000
        },
        title: {
            en: "Das Karateprinzip",
            de: "Das Karateprinzip"
        },
        client: {
            en: "Markus Sauter",
            de: "Markus Sauter"
        },
        keys: [
            {
                value: {
                    en: "Unique approach",
                    de: "Einzigartiger Ansatz"
                },
                description: {
                    en: "The website highlights the client's unique approach to employee coaching using a special karate principle.",
                    de: "Die Website hebt den einzigartigen Ansatz des Kunden für Mitarbeiter-Coaching hervor, der auf einem speziellen Karate-Prinzip basiert."
                }
            },
            {
                description: {
                    en: "The website features a modern and professional design, which enhances the user experience.",
                    de: "Die Website verfügt über ein modernes und professionelles Design, das die Benutzererfahrung verbessert."
                },
                value: {
                    en: "Modern design",
                    de: "Modernes Design"
                }
            },
            {
                description: {
                    en: "The website includes resources such as client testimonials, blog posts and a contact form, providing valuable information and making it easy for customers to get in touch with the client.",
                    de: "Die Website enthält Ressourcen wie Kundenstimmen, Blogbeiträge und ein Kontaktformular, bietet wertvolle Informationen und ermöglicht es Kunden, leicht mit dem Kunden in Kontakt zu treten."
                },
                value: {
                    en: "Resources",
                    de: "Ressourcen"
                }
            },
            {
                value: {
                    en: "Personalized experience",
                    de: "Personalisierte Erfahrung"
                },
                description: {
                    en: "The website was developed as a one-man project, providing a personalized experience tailored to the client's needs.",
                    de: "Die Website wurde als Ein-Mann-Projekt entwickelt und bietet ein personalisiertes Erlebnis, das auf die Bedürfnisse des Kunden zugeschnitten ist."
                }
            }
        ],
        stats: [
            {
                value: "50%",
                key: {
                    en: "Website traffic increased",
                    de: "Steigerung des Website-Verkehrs"
                }
            },
            {
                value: "20 per week",
                key: {
                    en: "Contact form submissions",
                    de: "Kontaktformular-Einsendungen"
                }
            },
            {
                key: {
                    en: "Blog post views",
                    de: "Blog-Beitragsaufrufe"
                },
                value: "100 per post"
            },
            {
                value: "75%",
                key: {
                    en: "Client retention rate",
                    de: "Kundenbindungsrate"
                }
            }
        ],
        previewLink: "",
        id: "das-karateprinzip"
    },
    {
        rollout: {
            seconds: 1638226800,
            nanoseconds: 839000000
        },
        status: 'Completed',
        client: {
            en: "Rolls Royce Power Systems",
            de: "Rolls Royce Power Systems"
        },
        shortDescription: {
            en: "This is a tool for Rolls Royce Power Systems that simplifies project change management across multiple divisions with flexibility, increasing productivity, and improving efficiency.",
            de: "Dies ist ein Tool für Rolls Royce Power Systems, das das Projektänderungsmanagement über mehrere Abteilungen hinweg flexibel vereinfacht, die Produktivität steigert und die Effizienz verbessert."
        },
        title: {
            en: "Project Change Management",
            de: "Projektänderungsmanagement"
        },
        previewLink: "",
        img: "/projects/pcm.png",
        stats: [
            {
                key: {
                    en: "Time-saving",
                    de: "Zeitersparnis"
                },
                value: "30%"
            },
            {
                value: "40%",
                key: {
                    en: "Error reduction",
                    de: "Fehlerreduzierung"
                }
            },
            {
                value: "25%",
                key: {
                    en: "Increased collaboration",
                    de: "Verbesserte Zusammenarbeit"
                }
            },
            {
                key: {
                    en: "Improved communication",
                    de: "Verbesserte Kommunikation"
                },
                value: "45%"
            }
        ],
        description: {
            en: "This is a cutting-edge tool that was developed specifically for Rolls Royce Power Systems. The tool is designed to streamline the process of project change management, allowing users to easily and efficiently manage changes to projects across multiple divisions. The tool has been developed with flexibility in mind, enabling users to easily implement changes and ensure that all projects remain on track. With this tool, users can now perform proper project change management on every project in multiple divisions, which will help to increase productivity and reduce the risk of delays or other issues arising. The tool is user-friendly, easy to use, and will help to improve the overall efficiency of the project management process. This tool is a valuable addition to the Rolls Royce Power Systems project management toolkit, and will help to ensure that projects are delivered on time and to the highest possible standard.",
            de: "Dies ist ein hochmodernes Tool, das speziell für Rolls Royce Power Systems entwickelt wurde. Das Tool soll den Prozess des Projektänderungsmanagements optimieren und es Benutzern ermöglichen, Änderungen an Projekten über mehrere Abteilungen hinweg einfach und effizient zu verwalten. Das Tool wurde mit Blick auf Flexibilität entwickelt, sodass Benutzer Änderungen einfach umsetzen und sicherstellen können, dass alle Projekte auf Kurs bleiben. Mit diesem Tool können Benutzer nun ein ordnungsgemäßes Projektänderungsmanagement für jedes Projekt in mehreren Abteilungen durchführen, was dazu beiträgt, die Produktivität zu steigern und das Risiko von Verzögerungen oder anderen Problemen zu reduzieren. Das Tool ist benutzerfreundlich, einfach zu bedienen, und trägt dazu bei, die Gesamteffizienz des Projektmanagementprozesses zu verbessern. Dieses Tool ist eine wertvolle Ergänzung zum Projektmanagement-Toolkit von Rolls Royce Power Systems und trägt dazu bei, sicherzustellen, dass Projekte pünktlich und nach höchstmöglichem Standard geliefert werden."
        },
        keys: [
            {
                description: {
                    en: "The tool simplifies the process of managing changes to projects across multiple divisions.",
                    de: "Das Tool vereinfacht den Prozess der Verwaltung von Änderungen an Projekten über mehrere Abteilungen hinweg."
                },
                value: {
                    en: "Streamlines project change management",
                    de: "Optimiert das Projektänderungsmanagement"
                }
            },
            {
                description: {
                    en: "The tool has been designed with flexibility in mind, allowing users to easily implement changes and ensure that all projects remain on track.",
                    de: "Das Tool wurde mit Blick auf Flexibilität entwickelt und ermöglicht es Benutzern, Änderungen einfach umzusetzen und sicherzustellen, dass alle Projekte auf Kurs bleiben."
                },
                value: {
                    en: "Flexibility",
                    de: "Flexibilität"
                }
            },
            {
                description: {
                    en: "With this tool, users can now perform proper project change management on every project in multiple divisions, which will help to increase productivity.",
                    de: "Mit diesem Tool können Benutzer nun ein ordnungsgemäßes Projektänderungsmanagement für jedes Projekt in mehreren Abteilungen durchführen, was zur Steigerung der Produktivität beiträgt."
                },
                value: {
                    en: "Increased productivity",
                    de: "Gesteigerte Produktivität"
                }
            },
            {
                value: {
                    en: "Improved efficiency",
                    de: "Verbesserte Effizienz"
                },
                description: {
                    en: "The tool is user-friendly, easy to use, and will help to improve the overall efficiency of the project management process.",
                    de: "Das Tool ist benutzerfreundlich, einfach zu bedienen und trägt dazu bei, die Gesamteffizienz des Projektmanagementprozesses zu verbessern."
                }
            }
        ],
        id: "project-change-management"
    },
    {
        client: "newboxes GmbH",
        status: 'Completed',
        keys: [
            {
                value: {
                    en: "Visually stunning design",
                    de: "Visuell beeindruckendes Design"
                },
                description: {
                    en: "The website has a clean and modern design that is visually appealing, making it easy for visitors to navigate and find the information they need.",
                    de: "Die Website verfügt über ein klares und modernes Design, das visuell ansprechend ist und es Besuchern leicht macht, zu navigieren und die benötigten Informationen zu finden."
                }
            },
            {
                description: {
                    en: "The website includes a portfolio section that showcases the company's past and current projects and use cases, highlighting their expertise and capabilities in the technology field.",
                    de: "Die Website enthält einen Portfolio-Bereich, der die vergangenen und aktuellen Projekte sowie Anwendungsfälle des Unternehmens präsentiert und deren Fachwissen und Fähigkeiten im Technologiebereich hervorhebt."
                },
                value: {
                    en: "Highlighting of company expertise",
                    de: "Hervorhebung der Unternehmenskompetenz"
                }
            },
            {
                description: {
                    en: "The website is designed with easy navigation in mind, making it simple for visitors to find the information they need quickly and easily.",
                    de: "Die Website wurde mit Blick auf einfache Navigation gestaltet, sodass Besucher die benötigten Informationen schnell und einfach finden können."
                },
                value: {
                    en: "Easy navigation",
                    de: "Einfache Navigation"
                }
            },
            {
                value: {
                    en: "Marketing tool",
                    de: "Marketinginstrument"
                },
                description: {
                    en: "The website serves as an effective tool for promoting the company and its services to potential clients and partners.",
                    de: "Die Website dient als effektives Werkzeug zur Förderung des Unternehmens und seiner Dienstleistungen für potenzielle Kunden und Partner."
                }
            }
        ],
        previewLink: "https://newboxes.com",
        rollout: {
            seconds: 1627682400,
            nanoseconds: 357000000
        },
        img: "/projects/nb.png",
        shortDescription: {
            en: "I have developed a website for my current employer that showcases their technology projects and use cases, featuring a clean, modern design and easy navigation, with a portfolio section to highlight their capabilities and expertise in the field.",
            de: "Ich habe eine Website für meinen aktuellen Arbeitgeber entwickelt, die deren Technologieprojekte und Anwendungsfälle präsentiert, mit einem klaren, modernen Design und einfacher Navigation sowie einem Portfolio-Bereich, der ihre Fähigkeiten und Fachwissen in diesem Bereich hervorhebt."
        },
        stats: [
            {
                key: {
                    en: "Bounce rate",
                    de: "Absprungrate"
                },
                value: "25%"
            },
            {
                value: "3 minutes",
                key: {
                    en: "Average session duration",
                    de: "Durchschnittliche Sitzungsdauer"
                }
            },
            {
                value: "100",
                key: {
                    en: "Unique visitors per day",
                    de: "Eindeutige Besucher pro Tag"
                }
            },
            {
                value: "5%",
                key: {
                    en: "Conversion rate",
                    de: "Konversionsrate"
                }
            }
        ],
        description: {
            en: "I have created a new and visually stunning website for my current employer, which showcases our company's various projects and use cases in technology. The website features a clean, modern design and easy navigation, making it easy for visitors to find the information they need. The website also includes a portfolio section where we showcase our past and current projects and use cases, highlighting our expertise and capabilities in the technology field. Overall, the website serves as an effective tool for promoting our company and its services to potential clients and partners.",
            de: "Ich habe eine neue und visuell beeindruckende Website für meinen aktuellen Arbeitgeber erstellt, die die verschiedenen Projekte und Anwendungsfälle unseres Unternehmens im Technologiebereich präsentiert. Die Website verfügt über ein klares, modernes Design und einfache Navigation, was es Besuchern leicht macht, die benötigten Informationen zu finden. Die Website enthält auch einen Portfolio-Bereich, in dem wir unsere vergangenen und aktuellen Projekte sowie Anwendungsfälle präsentieren und unser Fachwissen und unsere Fähigkeiten im Technologiebereich hervorheben. Insgesamt dient die Website als effektives Instrument zur Förderung unseres Unternehmens und seiner Dienstleistungen für potenzielle Kunden und Partner."
        },
        title: {
            en: "newboxes Website",
            de: "newboxes Website"
        },
        id: "newboxes-website"
    },
    {
        keys: [
            {
                value: {
                    en: "Improved communication and collaboration",
                    de: "Verbesserte Kommunikation und Zusammenarbeit"
                },
                description: {
                    en: "Improved communication and collaboration among safety officers within the company",
                    de: "Verbesserte Kommunikation und Zusammenarbeit zwischen Sicherheitsbeauftragten innerhalb des Unternehmens"
                }
            },
            {
                value: {
                    en: "Easy sharing of incidents and lessons learned",
                    de: "Einfacher Austausch von Vorfällen und gewonnenen Erkenntnissen"
                },
                description: {
                    en: "Easy sharing of incidents and lessons learned, leading to better risk management and prevention of similar incidents in the future",
                    de: "Einfacher Austausch von Vorfällen und gewonnenen Erkenntnissen, was zu einem besseren Risikomanagement und zur Vermeidung ähnlicher Vorfälle in der Zukunft führt"
                }
            },
            {
                value: {
                    en: "User-friendly interface",
                    de: "Benutzerfreundliche Oberfläche"
                },
                description: {
                    en: "A more user-friendly interface that makes it easier for safety officers to access and share information",
                    de: "Eine benutzerfreundlichere Oberfläche, die es Sicherheitsbeauftragten erleichtert, auf Informationen zuzugreifen und diese zu teilen"
                }
            },
            {
                description: {
                    en: "Better ability for the company to stay informed about and respond to safety issues in a timely manner",
                    de: "Bessere Möglichkeit für das Unternehmen, sich über Sicherheitsprobleme zu informieren und zeitnah darauf zu reagieren"
                },
                value: {
                    en: "Timely response to safety issues",
                    de: "Zeitnahe Reaktion auf Sicherheitsprobleme"
                }
            },
            {
                description: {
                    en: "Increased efficiency and effectiveness of the company's health, safety, and environmental initiatives.",
                    de: "Erhöhte Effizienz und Effektivität der Gesundheits-, Sicherheits- und Umweltinitiativen des Unternehmens."
                },
                value: {
                    en: "Increased efficiency and effectiveness of HSE initiatives",
                    de: "Erhöhte Effizienz und Effektivität von HSE-Initiativen"
                }
            }
        ],
        status: 'Completed',
        rollout: {
            seconds: 1601416800,
            nanoseconds: 640000000
        },
        previewLink: "",
        stats: [
            {
                value: "95%",
                key: {
                    en: "User satisfaction",
                    de: "Benutzerzufriedenheit"
                }
            },
            {
                value: "75%",
                key: {
                    en: "Reduction in incidents",
                    de: "Reduzierung der Vorfälle"
                }
            },
            {
                key: {
                    en: "Improved communication and collaboration",
                    de: "Verbesserte Kommunikation und Zusammenarbeit"
                },
                value: "90%"
            },
            {
                value: "50%",
                key: {
                    en: "Decrease in response time",
                    de: "Verringerung der Reaktionszeit"
                }
            }
        ],
        shortDescription: {
            en: "A new intranet to enhance communication, sharing, user-friendliness, timely response, and efficiency in HSE matters for Rolls Royce Power Systems.",
            de: "Ein neues Intranet zur Verbesserung der Kommunikation, des Austauschs, der Benutzerfreundlichkeit, der zeitnahen Reaktion und der Effizienz in HSE-Angelegenheiten für Rolls Royce Power Systems."
        },
        title: {
            en: "Company-wide Intranet for Health, Safety & Environment",
            de: "Unternehmensweites Intranet für Gesundheit, Sicherheit & Umwelt"
        },
        description: {
            en: "The project was the creation of a new intranet for the Health, Safety & Environment Community within Rolls Royce Power Systems. The intranet features a new user interface and multiple new features such as the ability to share incidents and lessons learned. The new intranet makes it easier for safety officers from around the world within the company to connect and stay up to date.",
            de: "Das Projekt beinhaltete die Erstellung eines neuen Intranets für die Gesundheits-, Sicherheits- und Umweltgemeinschaft innerhalb von Rolls Royce Power Systems. Das Intranet verfügt über eine neue Benutzeroberfläche und mehrere neue Funktionen, wie die Möglichkeit, Vorfälle und gewonnene Erkenntnisse zu teilen. Das neue Intranet erleichtert es Sicherheitsbeauftragten aus der ganzen Welt innerhalb des Unternehmens, sich zu vernetzen und auf dem neuesten Stand zu bleiben."
        },
        client: {
            en: "Rolls Royce Power Systems",
            de: "Rolls Royce Power Systems"
        },
        img: "/projects/intranet.svg",
        id: "company-wide-intranet-for-hse"
    },
    {
        rollout: {
            seconds: 1598824800,
            nanoseconds: 74000000
        },
        status: 'Completed',
        client: {
            en: "Rolls Royce Power Systems",
            de: "Rolls Royce Power Systems"
        },
        description: {
            en: "I led the development of a global online platform for Rolls Royce Power Systems to track progress towards achieving company-wide environmental goals. The platform includes a dashboard with real-time data, reports and analytics, and educational resources. It helps the company to stay informed and make progress towards its environmental targets.",
            de: "Ich leitete die Entwicklung einer globalen Online-Plattform für Rolls Royce Power Systems zur Verfolgung des Fortschritts bei der Erreichung unternehmensweiter Umweltziele. Die Plattform umfasst ein Dashboard mit Echtzeit-Daten, Berichten und Analysen sowie Bildungsressourcen. Sie hilft dem Unternehmen, informiert zu bleiben und Fortschritte bei der Erreichung seiner Umweltziele zu erzielen."
        },
        previewLink: "",
        shortDescription: {
            en: "A global platform to track and measure Rolls Royce Power Systems' environmental progress with real-time data, analytics and educational resources.",
            de: "Eine globale Plattform zur Verfolgung und Messung des Umweltfortschritts von Rolls Royce Power Systems mit Echtzeit-Daten, Analysen und Bildungsressourcen."
        },
        keys: [
            {
                value: {
                    en: "Real-time tracking",
                    de: "Echtzeit-Verfolgung"
                },
                description: {
                    en: "The platform provides real-time data and updates on key environmental metrics, enabling the company to quickly identify areas where progress is being made and areas where additional efforts are needed.",
                    de: "Die Plattform liefert Echtzeit-Daten und Aktualisierungen zu wichtigen Umweltkennzahlen und ermöglicht es dem Unternehmen, Bereiche, in denen Fortschritte erzielt werden, und Bereiche, in denen zusätzliche Anstrengungen erforderlich sind, schnell zu identifizieren."
                }
            },
            {
                value: {
                    en: "Global accessibility",
                    de: "Globale Zugänglichkeit"
                },
                description: {
                    en: "The platform is designed to be accessible to users globally, allowing employees and stakeholders from different regions to stay informed about the company's environmental goals and progress.",
                    de: "Die Plattform ist so konzipiert, dass sie Benutzern weltweit zugänglich ist, sodass Mitarbeiter und Interessengruppen aus verschiedenen Regionen über die Umweltziele und den Fortschritt des Unternehmens informiert bleiben können."
                }
            },
            {
                value: {
                    en: "Educational resources",
                    de: "Bildungsressourcen"
                },
                description: {
                    en: "The platform includes a range of educational resources and training materials to help employees understand the importance of environmental sustainability and how they can contribute to the company's efforts.",
                    de: "Die Plattform enthält eine Reihe von Bildungsressourcen und Schulungsmaterialien, um den Mitarbeitern die Bedeutung der ökologischen Nachhaltigkeit zu vermitteln und wie sie zu den Bemühungen des Unternehmens beitragen können."
                }
            },
            {
                description: {
                    en: "The platform includes a range of reports and analytics that can be used to identify areas where the company is making progress, and areas where additional efforts are needed, this help the company to make data-driven decision making.",
                    de: "Die Plattform enthält eine Reihe von Berichten und Analysen, die verwendet werden können, um Bereiche zu identifizieren, in denen das Unternehmen Fortschritte macht, und Bereiche, in denen zusätzliche Anstrengungen erforderlich sind, dies hilft dem Unternehmen bei der datengesteuerten Entscheidungsfindung."
                },
                value: {
                    en: "Data-driven decision making",
                    de: "Datengesteuerte Entscheidungsfindung"
                }
            }
        ],
        title: {
            en: "Environmental Management Platform",
            de: "Umweltmanagement-Plattform"
        },
        stats: [
            {
                key: {
                    en: "Users",
                    de: "Benutzer"
                },
                value: "15000"
            },
            {
                key: {
                    en: "Carbon footprint reduction",
                    de: "Reduzierung des CO2-Fußabdrucks"
                },
                value: "12%"
            },
            {
                key: {
                    en: "User engagement rate",
                    de: "Nutzer-Engagement-Rate"
                },
                value: "85%"
            },
            {
                value: "20%",
                key: {
                    en: "Increase in environmental performance score",
                    de: "Steigerung der Umweltleistungspunkte"
                }
            }
        ],
        img: "/projects/env.svg",
        id: "environmental-management-platform"
    },
    {
        title: "Heat & Power Web Presence",
        status: 'Completed',
        keys: [
            {
                description: {
                    en: "Website has been designed and developed for the company Heat & Power I",
                    de: "Website wurde für das Unternehmen Heat & Power I gestaltet und entwickelt"
                },
                value: {
                    en: "Website creation",
                    de: "Website-Erstellung"
                }
            },
            {
                description: {
                    en: "Website presents all the company's services and allows potential customers to contact the company",
                    de: "Website präsentiert alle Dienstleistungen des Unternehmens und ermöglicht es potenziellen Kunden, das Unternehmen zu kontaktieren"
                },
                value: {
                    en: "Services presentation",
                    de: "Darstellung der Dienstleistungen"
                }
            },
            {
                value: {
                    en: "Unique branding",
                    de: "Einzigartiges Branding"
                },
                description: {
                    en: "A unique company logo has been designed for the website and all other branding materials",
                    de: "Ein einzigartiges Unternehmenslogo wurde für die Website und alle anderen Branding-Materialien entworfen"
                }
            },
            {
                description: {
                    en: "The goal of the project is to establish a strong online presence for the company, making it easy for clients to learn about their services and get in touch with them.",
                    de: "Das Ziel des Projekts ist es, eine starke Online-Präsenz für das Unternehmen aufzubauen, damit Kunden leicht etwas über ihre Dienstleistungen erfahren und mit ihnen in Kontakt treten können."
                },
                value: {
                    en: "Online presence",
                    de: "Online-Präsenz"
                }
            }
        ],
        img: "/projects/hp.png",
        shortDescription: {
            en: "This project created a website for Heat & Power I, including a unique logo, to showcase services and allow for customer contact, to establish a strong online presence for the company.",
            de: "Dieses Projekt umfasste die Erstellung einer Website für Heat & Power I, einschließlich eines einzigartigen Logos, um Dienstleistungen zu präsentieren und Kundenkontakte zu ermöglichen, um eine starke Online-Präsenz für das Unternehmen aufzubauen."
        },
        rollout: {
            seconds: 1582930800,
            nanoseconds: 876000000
        },
        previewLink: "https://hp-heizungsbau.de/",
        description: {
            en: "This project involved creating a comprehensive website for the company Heat & Power I, featuring all of their services and providing a platform for potential customers to contact them. The project also included designing a unique company logo to be used on the website and all other branding materials. The goal was to establish a strong online presence for the company, making it easy for clients to learn about their services and get in touch with them.",
            de: "Dieses Projekt umfasste die Erstellung einer umfassenden Website für das Unternehmen Heat & Power I, auf der alle ihre Dienstleistungen dargestellt werden und eine Plattform für potenzielle Kunden bereitgestellt wird, um mit ihnen in Kontakt zu treten. Das Projekt umfasste auch die Gestaltung eines einzigartigen Unternehmenslogos, das auf der Website und allen anderen Markenmaterialien verwendet werden sollte. Das Ziel war, eine starke Online-Präsenz für das Unternehmen aufzubauen, damit Kunden leicht etwas über ihre Dienstleistungen erfahren und mit ihnen in Kontakt treten können."
        },
        stats: [
            {
                value: "5 minutes",
                key: {
                    en: "Visit duration",
                    de: "Besuchsdauer"
                }
            },
            {
                key: {
                    en: "Mobile users",
                    de: "Mobile Nutzer"
                },
                value: "75%"
            },
            {
                value: "40%",
                key: {
                    en: "Bounce rate",
                    de: "Absprungrate"
                }
            },
            {
                value: "1000",
                key: {
                    en: "Daily visitors",
                    de: "Tägliche Besucher"
                }
            }
        ],
        client: {
            en: "Heat & Power",
            de: "Heat & Power"
        },
        id: "heat-and-power-web-presence"
    },
    {
        keys: [
            {
                description: "The tool accelerates the speed of preparation and follow-up for MindSphere trainings, reducing the time it takes to organize and deliver trainings.",
                value: "Speed"
            },
            {
                value: "Automation",
                description: "The tool automates various tasks such as handling participant data, generating certificates, watermarking training documents, and sending them to customers, which eliminates the need for manual intervention and reduces the chances of errors."
            },
            {
                value: "Convenience",
                description: "The tool makes it more convenient for customers to receive their certificates and training materials, which improves their overall experience of the training."
            },
            {
                description: "The tool helps the MindSphere Academy team to deliver high-quality trainings in a more timely and organized manner, which improves the overall efficiency of the training process.",
                value: "Efficiency"
            }
        ],
        status: 'Completed',
        rollout: {
            seconds: 1553986800,
            nanoseconds: 991000000
        },
        previewLink: "",
        img: "/projects/training.svg",
        stats: [
            {
                key: "Attendees/session",
                value: "100"
            },
            {
                key: "Certificates generation and sending time",
                value: "5 minutes"
            },
            {
                value: "10 minutes",
                key: "Training documents watermarking and sending time"
            },
            {
                key: "Time reduction",
                value: "60%"
            }
        ],
        client: "Siemens Digital Industries GmbH",
        title: "Training Management Tool",
        description: "As part of the MindSphere Academy team at Siemens Industry Software GmbH, I created a tool that accelerates the speed of preparation and follow-up for MindSphere trainings. The tool automates the process of handling participant data, generating certificates, watermarking training documents, and sending them to customers with a single click. This tool was developed by me to improve the overall efficiency and convenience of the training process for both the academy team and the customers. With my tool in place, the MindSphere Academy is able to deliver high-quality trainings in a more timely and organized manner.",
        shortDescription: "The MindSphere Academy tool automates training preparation and follow-up tasks, improving efficiency and convenience.",
        id: "training-management-tool"
    },
    {
        client: "Institute of Informationmanagement in Engineering at KIT",
        status: 'Completed',
        img: "/projects/virtual.png",
        shortDescription: "Core developer in Virtual Engineering Internship, responsible for VR-game communication, navigation, camera perspectives, video editing, 3D modeling, and key team member.",
        rollout: {
            seconds: 1533074400,
            nanoseconds: 856000000
        },
        previewLink: "https://www.youtube.com/watch?v=okImWn8YrLo&themeRefresh=1",
        description: "As a core developer on the team, I was a vital member of the Virtual Engineering Internship. My responsibilities were diverse and multi-faceted, and I made significant contributions to the success of the project.  One of my main tasks was developing the communication between the VR environment and the game Factorio. This required a deep understanding of both the VR technology and the game's mechanics, as well as the ability to bridge the two and create a seamless user experience.  In addition to this, I also developed the navigation and camera perspectives within the VR environment. This required a strong sense of spatial awareness, as well as the ability to create intuitive controls that would allow users to easily move around and explore the virtual space.  Lastly, I was also responsible for video editing and modeling tasks for the VR environment. This required an eye for detail and a strong understanding of 3D modeling software. I used these skills to create engaging and realistic virtual spaces that users could explore and interact with.  Overall, my contributions to the Virtual Engineering Internship were significant and I played a key role in the success of the project.",
        title: "Virtual Engineering Practical Course",
        stats: [
            {
                value: "",
                key: ""
            }
        ],
        keys: [
            {
                description: "As a part of the Virtual Engineering Internship team, I gained experience in creating a seamless integration between a virtual reality environment and a game, Factorio.",
                value: "Proficient in developing communication between VR environments and games"
            },
            {
                description: "During my time in the internship, I developed intuitive navigation and camera perspectives within the VR environment, which is a vital aspect for a user to easily move around and explore the virtual space.",
                value: "Skilled in navigation and camera perspectives development"
            },
            {
                value: "Experience in video editing and 3D modeling",
                description: "I gained experience in video editing and 3D modeling through my work in the Virtual Engineering Internship, which included creating engaging and realistic virtual spaces that users can explore and interact with."
            },
            {
                description: "As a core developer on the team, I was a vital member of the Virtual Engineering Internship, making significant contributions to the success of the project and played a key role in the team.",
                value: "Key member of the core developer team"
            }
        ],
        id: "virtual-engineering-practical-course"
    }
]
