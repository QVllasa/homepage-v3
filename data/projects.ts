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
            }
        ],
        client: {
            en: 'Personal / R&D',
            de: 'Persönlich / F&E'
        },
        previewLink: 'https://dev.moebelguru.com',
        img: '/projects/moebelguru.png',
        createAt: new Date('2025-05-10'),
        updatedAt: new Date(),
        order: 1,
        rollout: {
            seconds: 1750204800,   // 2025-06-17T00:00:00Z
            nanoseconds: 0
        }
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
            de: "Die Track-and-Trace-Plattform revolutioniert die Rückverfolgbarkeit in der Fertigung, indem sie einen digitalen Fingerabdruck für jede Komponente vom Produktionsstart bis zur Endmontage erstellt. Dieses umfassende System überwacht den Weg jedes Teils durch verschiedene Maschinen und Prozesse und erfasst kritische Sensormessungen in jeder Phase. Durch die Aufrechterhaltung dieser detaillierten Komponentenhistorie ermöglicht die Plattform beispiellose Qualitätskontrollfunktionen, sodass Teams Produktionsprobleme schnell identifizieren und beheben können, bevor sie eskalieren. Die fortschrittlichen Analysen des Systems liefern wertvolle Erkenntnisse zur Fertigungseffizienz und helfen dabei, Arbeitsabläufe zu optimieren und Engpässe zu reduzieren. Ob bei der Untersuchung von Qualitätsabweichungen, dem Nachweis der Einhaltung von Vorschriften oder der Identifizierung von Möglichkeiten zur Prozessverbesserung – Track and Trace verwandelt Komponentendaten in umsetzbare Informationen und macht es zu einem unverzichtbaren Werkzeug für moderne Fertigungsprozesse."
        },
        previewLink: "",
        id: "track-and-trace"
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
        shortDescription: "The \"BI Reporting Platform\" simplifies data monitoring and dashboard creation. From investments to metadata, this user-friendly tool is your one-stop solution for tailored dashboards.",
        title: "BI Reporting Platform",
        img: "/projects/reporting.png",
        order: 0,
        rollout: {
            seconds: 1685570400,
            nanoseconds: 455000000
        },
        description: "The \"BI Reporting Platform\" is a versatile and powerful application designed to streamline data monitoring and dashboard creation. This all-encompassing tool empowers users to monitor a wide array of data types, including investments, operations, process data, metadata, and more. What sets this platform apart is its user-friendly and generic approach, allowing individuals to craft customized dashboards tailored to their unique data needs. Whether you're tracking financial investments, optimizing operational processes, or diving into metadata analysis, the BI Reporting Platform simplifies data monitoring and reporting, making it a valuable asset for professionals in various industries.",
        previewLink: "",
        id: "bi-reporting-platform"
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
            de: "DUDE (Detect Uncommon Data Events) ist eine fortschrittliche Anwendung für die Fertigungsqualitätskontrolle. Sie identifiziert schnell Anomalien in Echtzeit-Prozessqualitätsdaten, verbessert die Qualitätskontrolle und die betriebliche Effizienz. Mit DUDE werden Fertigungsprozesse optimiert und die Produktkonsistenz verbessert, was hochwertige, zuverlässige Endprodukte gewährleistet."
        },
        previewLink: "",
        id: "dude"
    },
    {
        client: "My own project",
        keys: [
            {
                description: "",
                value: "Modern and beautiful UI"
            },
            {
                value: "Based on Angular and Symfony API Platform (PHP)",
                description: ""
            },
            {
                value: "Combines my hobbies",
                description: ""
            }
        ],
        status: 'On Hold',
        shortDescription: "To combine my love for flying my drone and developing my skills, I am working on a platform where pilots can sell their footage. For the development of the platform I use the programming language GO together in a microservice architecture. For the frontend Angular is used.",
        title: "Dronegraphy",
        img: "/projects/drone.svg",
        order: 0,
        rollout: {
            seconds: 1685570400,
            nanoseconds: 455000000
        },
        description: "With dronegraphy I combine multiple passions of mine. As I love making impressing films and know how to code, this was some kind of natural outcome. Dronegraphy will be some kind of platform, in which people can buy and sell drone footage. In addition a forum will help drone lovers come together. As of now, dronegraphy is still in development as a side project of mine.",
        previewLink: "",
        id: "dronegraphy"
    },
    {
        shortDescription: "I built a web-app to manage inventory, optimize supply chain and communicate with suppliers and customers for a polymer company.",
        status: 'Completed',
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
        ],
        rollout: {
            seconds: 1672527600,
            nanoseconds: 588000000
        },
        title: "NSB Platform",
        description: "I built a web-based merchandise management system for a global medium-sized enterprise that specializes in the polymer industry. The system, which I developed, allows the company to effectively manage and track their merchandise inventory including products, stock levels, and orders. It also provides real-time reporting and analysis on sales and inventory data, enabling the company to make informed business decisions and optimize their supply chain operations. Additionally, the system facilitates easy communication with suppliers and customers, streamlining the ordering and fulfillment process. Overall, this system which I created, is a powerful tool for managing and growing the company's polymer-based business.",
        img: "/projects/nsb.png",
        previewLink: "",
        client: "NSB Polymers GmbH",
        id: "nsb-platform"
    },
    {
        rollout: {
            seconds: 1672441200,
            nanoseconds: 89000000
        },
        status: 'Completed',
        title: "Design Verification Process Platform",
        description: "The web app is a platform used by over 500 engineers for verifying product design. It provides a variety of tools and features that are designed to help engineers ensure that their designs meet quality standards, including simulations, tests, and real-time collaboration. Additionally, it has an PTC Integrity Interface and a configuration matrix, which allow for easy integration with other tools and software, and easy testing and validation of different product configurations respectively. The app is user-friendly and intuitive, making it easy for engineers to access the tools and information they need.",
        client: "Rolls Royce Power Systems",
        keys: [
            {
                value: "Quality assurance tools and features",
                description: "The web app provides a variety of tools and features to help engineers ensure their designs meet quality standards."
            },
            {
                value: "Easy integration with other tools",
                description: "The PTC Integrity Interface allows for easy integration with other tools and software."
            },
            {
                description: "The Configuration matrix allows for easy testing and validation of different product configurations.",
                value: "Test and validate product configurations"
            },
            {
                value: "User-friendly interface",
                description: "The app is user-friendly and intuitive, making it easy for engineers to access the tools and information they need."
            }
        ],
        stats: [
            {
                key: " Time reduction",
                value: "40%"
            },
            {
                value: "98%",
                key: "Efficiency increase"
            },
            {
                key: "Error reduction",
                value: "25%"
            },
            {
                value: "2000",
                key: "Users"
            }
        ],
        shortDescription: "The DVP Platform provides engineers with tools and features to verify product designs, including PTC Integrity Interface and Configuration Matrix for easy integration and testing. User-friendly interface is also included.",
        img: "/projects/dvp.png",
        previewLink: "",
        id: "design-verification-process-platform"
    },
    {
        shortDescription: "A modern website for an employee coaching service using a karate principle, with resources, testimonials and easy communication. Developed as a one-man project",
        img: "/projects/dkp.png",
        status: 'Completed',
        description: "I am proud to present the new website for \"Das Karateprinzip\", a company specializing in employee coaching using a unique karate principle. I designed and developed this website from scratch, working alone on the project. The website showcases the client's coaching services and the benefits of incorporating karate principles into the workplace. The website features a modern design, easy navigation and includes resources such as client testimonials, blog posts and a contact form. My goal was to create a user-friendly and professional website that accurately represents the client's unique approach to employee coaching and I am proud to have delivered a final product that exceeds their expectations.",
        order: 0,
        rollout: {
            seconds: 1640905200,
            nanoseconds: 707000000
        },
        title: "Das Karateprinzip",
        client: "Markus Sauter",
        keys: [
            {
                value: "Unique approach",
                description: "The website highlights the client's unique approach to employee coaching using a special karate principle."
            },
            {
                description: "The website features a modern and professional design, which enhances the user experience.",
                value: "Modern design"
            },
            {
                description: "The website includes resources such as client testimonials, blog posts and a contact form, providing valuable information and making it easy for customers to get in touch with the client.",
                value: "Resources"
            },
            {
                value: "Personalized experience",
                description: "The website was developed as a one-man project, providing a personalized experience tailored to the client's needs."
            }
        ],
        stats: [
            {
                value: "50%",
                key: "Website traffic increased"
            },
            {
                value: "20 per week",
                key: "Contact form submissions"
            },
            {
                key: "Blog post views",
                value: "100 per post"
            },
            {
                value: "75%",
                key: "Client retention rate"
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
        client: "Rolls Royce Power Systems",
        shortDescription: "This is a tool for Rolls Royce Power Systems that simplifies project change management across multiple divisions with flexibility, increasing productivity, and improving efficiency.",
        title: "Project Change Management",
        previewLink: "",
        img: "/projects/pcm.png",
        stats: [
            {
                key: "Time-saving",
                value: "30%"
            },
            {
                value: "40%",
                key: "Error reduction"
            },
            {
                value: "25%",
                key: "Increased collaboration"
            },
            {
                key: "mproved communication",
                value: "45%"
            }
        ],
        description: "This is a cutting-edge tool that was developed specifically for Rolls Royce Power Systems. The tool is designed to streamline the process of project change management, allowing users to easily and efficiently manage changes to projects across multiple divisions. The tool has been developed with flexibility in mind, enabling users to easily implement changes and ensure that all projects remain on track. With this tool, users can now perform proper project change management on every project in multiple divisions, which will help to increase productivity and reduce the risk of delays or other issues arising. The tool is user-friendly, easy to use, and will help to improve the overall efficiency of the project management process. This tool is a valuable addition to the Rolls Royce Power Systems project management toolkit, and will help to ensure that projects are delivered on time and to the highest possible standard.",
        keys: [
            {
                description: "The tool simplifies the process of managing changes to projects across multiple divisions.",
                value: "Streamlines project change management"
            },
            {
                description: "The tool has been designed with flexibility in mind, allowing users to easily implement changes and ensure that all projects remain on track.",
                value: "Flexibility"
            },
            {
                description: " With this tool, users can now perform proper project change management on every project in multiple divisions, which will help to increase productivity.",
                value: "Increased productivity"
            },
            {
                value: "Improved efficiency",
                description: "The tool is user-friendly, easy to use, and will help to improve the overall efficiency of the project management process."
            }
        ],
        id: "project-change-management"
    },
    {
        client: "newboxes GmbH",
        status: 'Completed',
        keys: [
            {
                value: "Visually stunning design",
                description: "The website has a clean and modern design that is visually appealing, making it easy for visitors to navigate and find the information they need."
            },
            {
                description: "The website includes a portfolio section that showcases the company's past and current projects and use cases, highlighting their expertise and capabilities in the technology field.",
                value: "Highlighting of company expertise"
            },
            {
                description: "The website is designed with easy navigation in mind, making it simple for visitors to find the information they need quickly and easily.",
                value: "Easy navigation"
            },
            {
                value: "Marketing tool",
                description: "The website serves as an effective tool for promoting the company and its services to potential clients and partners."
            }
        ],
        previewLink: "https://newboxes.com",
        rollout: {
            seconds: 1627682400,
            nanoseconds: 357000000
        },
        img: "/projects/nb.png",
        shortDescription: "I have developed a website for my current employer that showcases their technology projects and use cases, featuring a clean, modern design and easy navigation, with a portfolio section to highlight their capabilities and expertise in the field.",
        stats: [
            {
                key: "Bounce rate",
                value: "25%"
            },
            {
                value: "3 minutes",
                key: "Average session duration"
            },
            {
                value: "100",
                key: "Unique visitors per day"
            },
            {
                value: "5%",
                key: "Conversion rate"
            }
        ],
        description: "​ I have created a new and visually stunning website for my current employer, which showcases our company's various projects and use cases in technology. The website features a clean, modern design and easy navigation, making it easy for visitors to find the information they need. The website also includes a portfolio section where we showcase our past and current projects and use cases, highlighting our expertise and capabilities in the technology field. Overall, the website serves as an effective tool for promoting our company and its services to potential clients and partners.",
        title: "newboxes Website",
        id: "newboxes-website"
    },
    {
        keys: [
            {
                value: "Improved communication and collaboration",
                description: "Improved communication and collaboration among safety officers within the company"
            },
            {
                value: "Easy sharing of incidents and lessons learned",
                description: "Easy sharing of incidents and lessons learned, leading to better risk management and prevention of similar incidents in the future"
            },
            {
                value: "User-friendly interface",
                description: "A more user-friendly interface that makes it easier for safety officers to access and share information"
            },
            {
                description: "Better ability for the company to stay informed about and respond to safety issues in a timely manner",
                value: "Timely response to safety issues"
            },
            {
                description: "Increased efficiency and effectiveness of the company's health, safety, and environmental initiatives.",
                value: "Increased efficiency and effectiveness of HSE initiatives."
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
                key: "user satisfaction"
            },
            {
                value: "75%",
                key: "reduction in incidents"
            },
            {
                key: "improved communication and collaboration",
                value: "90%"
            },
            {
                value: "50%",
                key: "decrease in response time"
            }
        ],
        shortDescription: "A new intranet to enhance communication, sharing, user-friendliness, timely response, and efficiency in HSE matters for Rolls Royce Power Systems.",
        title: "Company-wide Intranet for Health, Safety & Environment",
        description: "The project was the creation of a new intranet for the Health, Safety & Environment Community within Rolls Royce Power Systems. The intranet features a new user interface and multiple new features such as the ability to share incidents and lessons learned. The new intranet makes it easier for safety officers from around the world within the company to connect and stay up to date.",
        client: "Rolls Royce Power Systems",
        img: "/projects/intranet.svg",
        id: "company-wide-intranet-for-hse"
    },
    {
        rollout: {
            seconds: 1598824800,
            nanoseconds: 74000000
        },
        status: 'Completed',
        client: "Rolls Royce Power Systems",
        description: "I led the development of a global online platform for Rolls Royce Power Systems to track progress towards achieving company-wide environmental goals. The platform includes a dashboard with real-time data, reports and analytics, and educational resources. It helps the company to stay informed and make progress towards its environmental targets.",
        previewLink: "",
        shortDescription: "A global platform to track and measure Rolls Royce Power Systems' environmental progress with real-time data, analytics and educational resources.",
        keys: [
            {
                value: "Real-time tracking",
                description: "The platform provides real-time data and updates on key environmental metrics, enabling the company to quickly identify areas where progress is being made and areas where additional efforts are needed."
            },
            {
                value: "Global accessibility",
                description: "The platform is designed to be accessible to users globally, allowing employees and stakeholders from different regions to stay informed about the company's environmental goals and progress."
            },
            {
                value: "Educational resources",
                description: "The platform includes a range of educational resources and training materials to help employees understand the importance of environmental sustainability and how they can contribute to the company's efforts."
            },
            {
                description: "The platform includes a range of reports and analytics that can be used to identify areas where the company is making progress, and areas where additional efforts are needed, this help the company to make data-driven decision making.",
                value: "Data-driven decision making"
            }
        ],
        title: "Environmental Management Platform",
        stats: [
            {
                key: "Users",
                value: "15000"
            },
            {
                key: "Carbon footprint reduction",
                value: "12%"
            },
            {
                key: "user engagement rate",
                value: "85%"
            },
            {
                value: "20%",
                key: "increase in environmental performance score"
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
                description: "Website has been designed and developed for the company Heat & Power I",
                value: "Website creation"
            },
            {
                description: "Website presents all the company's services and allows potential customers to contact the company",
                value: "Services presentation"
            },
            {
                value: "Unique branding",
                description: "A unique company logo has been designed for the website and all other branding materials"
            },
            {
                description: "The goal of the project is to establish a strong online presence for the company, making it easy for clients to learn about their services and get in touch with them.",
                value: "Online presence"
            }
        ],
        img: "/projects/hp.png",
        shortDescription: "This project created a website for Heat & Power I, including a unique logo, to showcase services and allow for customer contact, to establish a strong online presence for the company.",
        rollout: {
            seconds: 1582930800,
            nanoseconds: 876000000
        },
        previewLink: "https://hp-heizungsbau.de/",
        description: "This project involved creating a comprehensive website for the company Heat & Power I, featuring all of their services and providing a platform for potential customers to contact them. The project also included designing a unique company logo to be used on the website and all other branding materials. The goal was to establish a strong online presence for the company, making it easy for clients to learn about their services and get in touch with them.",
        stats: [
            {
                value: "5 minutes",
                key: "Visit duration"
            },
            {
                key: "Mobile users",
                value: "75%"
            },
            {
                value: "40%",
                key: "Bounce rate"
            },
            {
                value: "1000",
                key: "Daily visitors"
            }
        ],
        client: "Heat & Power",
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
