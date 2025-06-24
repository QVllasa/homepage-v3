import {ProjectModel} from "../../../components/models/project.model";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import {Projects} from "../../../data/projects";
import {useTranslatedContent} from "../../../lib/useTranslatedContent";
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetStaticPaths, GetStaticProps} from 'next';

export default function ProjectDetails() {
    const projectData: ProjectModel[] = Projects;
    const router = useRouter();
    const {t} = useTranslation();
    const {id} = router.query;

    const data = projectData.find(obj => obj.id === id);

    if (!data) return null;

    // Helper function for status translation
    const getTranslatedStatus = (status: string) => {
        switch (status) {
            case 'In Progress':
                return t('projects.status.inProgress');
            case 'Completed':
                return t('projects.status.completed');
            case 'On Hold':
                return t('projects.status.onHold');
            case 'Canceled':
                return t('projects.status.canceled');
            default:
                return status;
        }
    };

    // Safe function to get Alt text for images
    const getAltText = (text: any) => {
        if (typeof text === 'string') return text;
        if (text && typeof text === 'object' && 'en' in text) return text.en;
        return '';
    };    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
            {/* Modern Hero Section */}
            <div className="relative">
                {/* Back Button */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
                    <Link href="/" className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Zurück
                    </Link>
                </div>

                {/* Hero Image with subtle overlay */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
                    <Image
                        className="w-full h-full object-cover"
                        src={data.img}
                        alt={getAltText(data.title)}
                        width={1200}
                        height={500}
                        priority
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"/>
                    
                    {/* Hero Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12">
                        <div className="max-w-4xl">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg leading-tight">
                                {useTranslatedContent(data.title)}
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl drop-shadow-md leading-relaxed">
                                {useTranslatedContent(data.shortDescription)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>            {/* Modern Content Section with proper spacing */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
                <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
                    
                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-6 md:space-y-8">{/* Project Info Card */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-600 p-8 mb-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {t('projects.projectInformation')}
                                </h2>                                  {/* Live Preview Button - Always visible */}
                                {data.previewLink ? (
                                    <a 
                                        href={data.previewLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                        Live Demo
                                    </a>                                ) : (
                                    <div className="relative group">
                                        <button 
                                            disabled
                                            className="inline-flex items-center px-4 py-2 bg-gray-400 text-gray-200 font-medium rounded-lg cursor-not-allowed"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                            Live Demo
                                        </button>
                                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                            Nur vor Ort verfügbar
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                {data.client && (
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Kunde</p>
                                            <p className="font-semibold text-gray-900 dark:text-white">{useTranslatedContent(data.client)}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {data.status && (
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                                                {getTranslatedStatus(data.status)}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Stats */}
                            {data.stats && (
                                <div className="mt-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Leistungskennzahlen</h3>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {data.stats.map((stat, idx) => (
                                            <div key={idx} className="bg-gray-50 dark:bg-slate-700 rounded-xl border border-gray-200 dark:border-slate-600 p-4">
                                                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{useTranslatedContent(stat.key)}</p>
                                                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{useTranslatedContent(stat.value)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>                        {/* Description */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-600 p-8 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Projektbeschreibung</h2>
                            <div className="prose prose-gray dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {useTranslatedContent(data.description)}
                                </p>
                            </div>
                        </div>                        {/* Tech Stack */}
                        {data.techStack && (
                            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-600 p-8 mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    Technologie-Stack
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">                                    {data.techStack.map((stack, idx) => (
                                        <div key={idx} className="bg-gray-50 dark:bg-slate-700 rounded-xl border border-gray-200 dark:border-slate-600 p-6">
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{useTranslatedContent(stack.category)}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {stack.technologies.map((tech, techIdx) => (
                                                    <span key={techIdx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium border border-blue-200 dark:border-blue-800">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}                        {/* Skills & Competencies */}
                        {data.skills && (
                            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-600 p-8 mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                    Fähigkeiten & Kompetenzen
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">                                    {data.skills.map((skill, idx) => (
                                        <div key={idx} className="bg-gray-50 dark:bg-slate-700 rounded-xl border border-gray-200 dark:border-slate-600 p-6">
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{useTranslatedContent(skill.category)}</h3>
                                            <ul className="space-y-2">
                                                {skill.items.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="flex items-center text-gray-600 dark:text-gray-300">
                                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>                        )}

                        {/* Features/Benefits - Main Functionality */}
                        {data.keys && (
                            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-600 p-8 mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                    Hauptfunktionen
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {data.keys.map((key, idx) => (
                                        <div key={idx} className="bg-gray-50 dark:bg-slate-700 rounded-xl border-l-4 border-l-blue-500 border-t border-r border-b border-gray-200 dark:border-gray-600 pl-6 p-6">
                                            <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">{useTranslatedContent(key.value)}</h3>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{useTranslatedContent(key.description)}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}                        {/* Challenges & Learnings Grid */}
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">{/* Challenges */}
                            {data.challenges && (
                                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-600 p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                        <svg className="w-6 h-6 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Herausforderungen
                                    </h2>
                                    <div className="space-y-6">
                                        {data.challenges.map((challenge, idx) => (
                                            <div key={idx} className="border-l-4 border-orange-500 pl-6">
                                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{useTranslatedContent(challenge.title)}</h3>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{useTranslatedContent(challenge.description)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}                            {/* Learnings */}
                            {data.learnings && (
                                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-600 p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                        <svg className="w-6 h-6 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        Learnings
                                    </h2>
                                    <div className="space-y-6">
                                        {data.learnings.map((learning, idx) => (
                                            <div key={idx} className="border-l-4 border-purple-500 pl-6">
                                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{useTranslatedContent(learning.title)}</h3>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{useTranslatedContent(learning.description)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>                    {/* Sidebar */}
                    <div className="lg:col-span-1 lg:order-first xl:order-last">
                        {/* Action Card */}                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 sm:p-6 text-white mb-6 lg:sticky lg:top-8">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="ml-2 sm:ml-3">
                                    <h3 className="font-bold text-sm sm:text-base">Innovation</h3>
                                    <p className="text-white/80 text-xs">Modernste Technologie</p>
                                </div>
                            </div>
                            <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                                Dieses Projekt zeigt den Einsatz modernster Technologien zur Lösung komplexer Herausforderungen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async ({locales}) => {
    const paths = Projects.flatMap(project =>
        locales ?
            locales.map(locale => ({
                params: {id: project.id},
                locale
            })) :
            [{params: {id: project.id}}]
    );

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || 'en', ['common'])),
        },
    };
}
